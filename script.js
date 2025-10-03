const output = document.getElementById("output");

function createPromise(num) {
  const delay = Math.random() * 2 + 1; // random delay between 1-3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ promiseNumber: num, time: delay });
    }, delay * 1000);
  });
}

// Start all promises when the script runs
function runPromises() {
  // Show loading row initially
  output.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

  const p1 = createPromise(1);
  const p2 = createPromise(2);
  const p3 = createPromise(3);

  const promises = [p1, p2, p3];

  Promise.all(promises).then(results => {
    // Clear loading row
    output.innerHTML = "";

    // Add each promise result row
    results.forEach(result => {
      const row = document.createElement("tr");

      const promiseCell = document.createElement("td");
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

// Automatically run promises when page loads
runPromises();
