var selectedRow = null;

// Show Alerts
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert  alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

// Clear All Fields
function clearFields() {
  document.querySelector("#name").value = "";
  document.querySelector("#height").value = "";
  document.querySelector("#weight").value = "";
}

// Add Data

document.querySelector("#passien-form").addEventListener("submit", (e) => {
  e.preventDefault();

  // Get Form Value
  const name = document.querySelector("#name").value;
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;

  // Validate
  if (name == "" || height == "") {
    showAlert("Data tidak lengkap!", "danger");
  } else {
    if (selectedRow == null) {
      const list = document.querySelector("#passien-list");
      const row = document.createElement("tr");

      let obesitas;
      let ideal = height - 100 - ((height - 100) * 10) / 100;

      if (weight < ideal) {
        obesitas = `Tidak Obesitas`;
      } else {
        obesitas = Math.floor(weight - ideal);
      }

      row.innerHTML = `
                <td>${name}</td>
                <td>${height} (cm)</td>
                <td>${weight} (kg)</td>
                <td>
                ${obesitas} (kg) 
            `;
      list.appendChild(row);
      selectedRow = null;
      showAlert("Data berhasil ditambahkan", "success");
    }
    // else{
    //   selectedRow.children[0].textContent = name;
    //   selectedRow.children[1].textContent = height;
    //   selectedRow.children[2].textContent = weight;
    //   selectedRow = null;
    //   showAlert("Data berhasil diperbarui", "info");
    // }
    clearFields();
  }
});

// Edit Data

// document.querySelector("#passien-list").addEventListener("click", (e) =>{
//   target = e.target;
//   if (target.classList.contains("edit")) {
//     selectedRow = target.parentElement.parentElement;
//     document.querySelector("#name").value = selectedRow.children[0].textContent;
//     document.querySelector("#height").value = selectedRow.children[1].textContent;
//     document.querySelector("#weight").value = selectedRow.children[2].textContent;
//   }
// });

// Delete Data
// document.querySelector("#passien-list").addEventListener("click", (e) =>{
//   target = e.target;
//   if (target.classList.contains("delete")) {
//     target.parentElement.parentElement.remove();
//     showAlert("Passien Data Deleted", "danger");
//   }
// });
