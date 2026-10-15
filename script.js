// 1. Search filter for academic performance table
document.getElementById("searchInput").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let rows = document.querySelectorAll("#performanceTable tbody tr");

  rows.forEach(function (row) {
    let subjectName = row.children[1].textContent.toLowerCase();
    if (subjectName.indexOf(filter) > -1) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

// 2. Simple Update function for "Update Details" button
function updatePrompt() {
  let newName = prompt("Enter new student name:", "Rahul Sharma");
  if (newName) {
    let nameElement = document.querySelector(".card h4");
    if (nameElement) {
      nameElement.textContent = "Welcome, " + newName;
    }
    alert("Student details updated!");
  }
}
