const output = document.getElementById("output");
function createPromise(num) {
  return new Promise((resolve) => {
    const delay = Math.random() * 2 + 1; 
    setTimeout(() => {
      resolve({ promiseNumber: num, time: delay });
    }, delay * 1000);
  });
}

const promise1 = createPromise(1);
const promise2 = createPromise(2);
const promise3 = createPromise(3);
const promises = [promise1, promise2, promise3];
Promise.all(promises).then(results=>{
	output.innerHTML = "";
	results.foreach(result=>{
	 const row = document.createElement("tr");
	 const Cell = document.createElement("td");
	 Cell.textContent=`Promise ${result.promiseNumber}`
	 const timeCell = document.createElement("td");
    timeCell.textContent = result.time.toFixed(3);
	row.appendChild(promiseCell);
    row.appendChild(timeCell);
    output.appendChild(row);
	})const output = document.getElementById("output");

function createPromise(num) {
  return new Promise((resolve) => {
    const delay = Math.random() * 2 + 1; // random 1-3 seconds
    setTimeout(() => {
      resolve({ promiseNumber: num, time: delay });
    }, delay * 1000);
  });
}

const promise1 = createPromise(1);
const promise2 = createPromise(2);
const promise3 = createPromise(3);

const promises = [promise1, promise2, promise3];

Promise.all(promises).then(results => {
  output.innerHTML = "";

  results.forEach(result => {               // fix: 'foreach' → 'forEach'
    const row = document.createElement("tr");

    const promiseCell = document.createElement("td"); // fix variable name
    promiseCell.textContent = `Promise ${result.promiseNumber}`;

    const timeCell = document.createElement("td");
    timeCell.textContent = result.time.toFixed(3);

    row.appendChild(promiseCell);
    row.appendChild(timeCell);

    output.appendChild(row);
  });

  // Add total row (longest time)
  const totalTime = Math.max(...results.map(r => r.time)).toFixed(3);
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  output.appendChild(totalRow);
});

}
)

