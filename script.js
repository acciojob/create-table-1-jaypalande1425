function insert_Row() {
    // Get the table by its id
    let table = document.getElementById("sampleTable");

    // Insert a new row at the top (index 0)
    let newRow = table.insertRow(0);

    // Insert two cells in the new row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Add text to the new cells
    cell1.innerHTML = "New row cell1";
    cell2.innerHTML = "New row cell2";
}
