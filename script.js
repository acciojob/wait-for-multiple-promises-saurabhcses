const output = document.getElementById("output");

function createPromise(num) {
  const delay = Math.random() * 2 + 1;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ promiseNumber: num, time: delay });
    }, delay * 1000);
  });
}

function runPromises() {
  // Show loading row with id
  output.innerHTML = `<tr id="loading"><td colspan="2">Loading...</td></tr>`;

  const p1 = createPromise(1);
  const p2 = createPromise(2);
  const p3 = createPromise(3);

  Promise.all([p1, p2, p3]).then(results => {
    // Remove loading row
    const loadingRow = document.getElementById("loading");
    if (loadingRow) loadingRow.remove();

    results.forEach(result => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>Promise ${result.promiseNumber}</td><td>${result.time.toFixed(3)}</td>`;
      output.appendChild(row);
    });

    const totalTime = Math.max(...results.map(r => r.time)).toFixed(3);
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    output.appendChild(totalRow);
  });
}

runPromises();
