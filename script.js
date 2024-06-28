function generateTable() {
    const base = document.getElementById('number').value;
    const length = document.getElementById('limit').value;
    const outputDiv = document.getElementById('output');

    // Clear any existing table
    outputDiv.innerHTML = '';

    if (base && length){
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');

        for (let i = 0; i <= length; i++) {
            const row = document.createElement('tr');
            const cell = document.createElement('td');
            cell.textContent = `${base} × ${i} = ${base * i}`;
            row.appendChild(cell);
            tbody.appendChild(row);
        }

        table.appendChild(tbody);
        outputDiv.appendChild(table);
    } else {
        outputDiv.textContent = 'Please enter both a number and a limit.';
    }
}


// // Example usage:
// const baseValue = 7;
// const tableLength = 5;
// const tableElement = generateTable(baseValue, tableLength);
// document.body.appendChild(tableElement);

