// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 3000);
//     });
// }

// getData(1).then((res) => {
//     console.log(res);
// });

//async await
// Function that returns a promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 2000);
  });
}

// Using async/await
async function loadData() {
  console.log("Loading...");
  const data = await fetchData(); // Waits for fetchData() to finish
  console.log(data); // "Data loaded"
}

loadData();

