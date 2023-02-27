const name = "John Doe";
const jobTitle = "Software Engineer";
const hobbies = ["coding", "reading", "traveling"];

function displayName() {
  console.log(`My name is ${name}.`);
}

function displayJobTitle() {
  console.log(`I am a ${jobTitle}.`);
}

function displayHobbies() {
  console.log(`Some of my hobbies are:`);
  for (let i = 0; i < hobbies.length; i++) {
    console.log(`- ${hobbies[i]}`);
  }
}

displayName();
displayJobTitle();
displayHobbies();
// Thay đổi màu nền của body
function changeColor() {
  document.body.style.backgroundColor = "#f44336";
}

// Hiển thị alert box
function showAlert() {
  alert("Đây là nội dung của alert box.");
}

// Thêm nội dung vào div
function addContent() {
  var div = document.getElementById("test");
  div.innerHTML += "<p>Đây là nội dung mới.</p>";
}

// Ẩn/Hiện bảng
function toggleTable() {
  var table = document.getElementById("myTable");
  if (table.style.display === "none") {
    table.style.display = "table";
  } else {
    table.style.display = "none";
  }
}

// Đóng tab hiện tại
function closeTab() {
  window.close();
}
