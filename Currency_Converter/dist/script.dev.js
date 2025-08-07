"use strict";

var BASE_URL = "https://open.er-api.com/v6/latest";
var dropdowns = document.querySelectorAll(".dropdown select");
var btn = document.querySelector("form button");
var fromCurr = document.querySelector(".from select");
var toCurr = document.querySelector(".to select");
var msg = document.querySelector(".msg"); // Populate dropdowns with currency codes from countryList

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = dropdowns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var select = _step.value;

    for (var currCode in countryList) {
      var newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode; //dropdown

      if (select.name === "from" && currCode === "USD") {
        newOption.selected = true;
      } else if (select.name === "to" && currCode === "BDT") {
        newOption.selected = true;
      } //append all values


      select.appendChild(newOption);
    }

    select.addEventListener("change", function (evt) {
      updateFlag(evt.target);
    }); // Initialize flags on load

    updateFlag(select);
  } // Update flag image based on currency code

} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function updateFlag(element) {
  var currCode = element.value;
  var countryCode = countryList[currCode];
  var flagImg = element.parentElement.querySelector("img");
  flagImg.src = "https://flagsapi.com/".concat(countryCode, "/flat/64.png");
} // Fetch and update exchange rate and converted amount


function updateExchangeRate() {
  var amountInput, amtVal, fromCode, toCode, url, response, data, rate, convertedAmount;
  return regeneratorRuntime.async(function updateExchangeRate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          amountInput = document.querySelector(".amount input");
          amtVal = parseFloat(amountInput.value);

          if (!amtVal || amtVal < 1) {
            amtVal = 1;
            amountInput.value = "1";
          }

          fromCode = fromCurr.value;
          toCode = toCurr.value;
          url = "".concat(BASE_URL, "/").concat(fromCode);
          _context.prev = 6;
          _context.next = 9;
          return regeneratorRuntime.awrap(fetch(url));

        case 9:
          response = _context.sent;

          if (response.ok) {
            _context.next = 12;
            break;
          }

          throw new Error("Failed to fetch exchange rates.");

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(response.json());

        case 14:
          data = _context.sent;

          if (!(data.result !== "success")) {
            _context.next = 18;
            break;
          }

          msg.innerText = "Exchange rate not available.";
          return _context.abrupt("return");

        case 18:
          rate = data.rates[toCode];

          if (rate) {
            _context.next = 22;
            break;
          }

          msg.innerText = "Exchange rate not available.";
          return _context.abrupt("return");

        case 22:
          convertedAmount = (amtVal * rate).toFixed(4);
          msg.innerText = "".concat(amtVal, " ").concat(fromCode, " = ").concat(convertedAmount, " ").concat(toCode);
          _context.next = 30;
          break;

        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](6);
          msg.innerText = "Error fetching exchange rates.";
          console.error(_context.t0);

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[6, 26]]);
} // Event listener for button click to update conversion


btn.addEventListener("click", function (e) {
  e.preventDefault();
  updateExchangeRate();
}); // Also update on page load for initial values

window.addEventListener("load", updateExchangeRate);