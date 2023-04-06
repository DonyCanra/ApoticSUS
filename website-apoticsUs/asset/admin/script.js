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
function clearFields(){
  document.querySelector("#name").value = "";
  document.querySelector("#age").value = "";
  document.querySelector("#problem").value = "";
}

// Add Data

document.querySelector("#passien-form").addEventListener("submit", (e) =>{
  e.preventDefault();

  // Get Form Value
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const problem = document.querySelector("#problem").value;

  // Validate
  if (name == "" || age == "" || problem == ""){
    showAlert("Data tidak lengkap!", "danger");
  }
  else{
    if(selectedRow == null){
      const list = document.querySelector("#passien-list");
      const row = document.createElement("tr");

      row.innerHTML = `
                <td>${name}</td>
                <td>${age}</td>
                <td>${problem}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>  
            `;
      list.appendChild(row);
      selectedRow = null;
      showAlert("Data berhasil ditambahkan", "success");
    }
    else{
      selectedRow.children[0].textContent = name;
      selectedRow.children[1].textContent = age;
      selectedRow.children[2].textContent = problem;
      selectedRow = null;
      showAlert("Data berhasil diperbarui", "info");
    }
    clearFields();
  }
});

// Edit Data

document.querySelector("#passien-list").addEventListener("click", (e) =>{
  target = e.target;
  if (target.classList.contains("edit")) {
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#name").value = selectedRow.children[0].textContent;
    document.querySelector("#age").value = selectedRow.children[1].textContent;
    document.querySelector("#problem").value = selectedRow.children[2].textContent;
  }
});

// Delete Data

document.querySelector("#passien-list").addEventListener("click", (e) =>{
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("Passien Data Deleted", "danger");
  }
});
