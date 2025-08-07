const BASE_URL = "https://open.er-api.com/v6/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate dropdowns with currency codes from countryList
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
//dropdown
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = true;
    } else if (select.name === "to" && currCode === "BDT") {
      newOption.selected = true;
    }
//append all values
    select.appendChild(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });

  // Initialize flags on load
  updateFlag(select);
}

// Update flag image based on currency code
function updateFlag(element) {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let flagImg = element.parentElement.querySelector("img");
  flagImg.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
}

// Fetch and update exchange rate and converted amount
async function updateExchangeRate() {
  let amountInput = document.querySelector(".amount input");
  let amtVal = parseFloat(amountInput.value);
  if (!amtVal || amtVal < 1) {
    amtVal = 1;
    amountInput.value = "1";
  }

  const fromCode = fromCurr.value;
  const toCode = toCurr.value;

  const url = `${BASE_URL}/${fromCode}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch exchange rates.");

    const data = await response.json();

    if (data.result !== "success") {
      msg.innerText = "Exchange rate not available.";
      return;
    }

    const rate = data.rates[toCode];
    if (!rate) {
      msg.innerText = "Exchange rate not available.";
      return;
    }

    const convertedAmount = (amtVal * rate).toFixed(4);
    msg.innerText = `${amtVal} ${fromCode} = ${convertedAmount} ${toCode}`;
  } catch (error) {
    msg.innerText = "Error fetching exchange rates.";
    console.error(error);
  }
}

// Event listener for button click to update conversion
btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

// Also update on page load for initial values
window.addEventListener("load", updateExchangeRate);
