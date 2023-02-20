
const button = document.createElement("button");
button.innerHTML = "Toggle Theme";

button.style.position = "fixed";
button.style.bottom = "5px";
button.style.right = "0px";

document.body.appendChild(button);

button.addEventListener("click", function() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "darkblue" ? "" : "darkblue";
});



window.addEventListener('load', function() {
  const button2 = document.createElement("button");
  button2.innerHTML = "Hello";

  button2.style.position = "fixed";
  button2.style.bottom = "35px";
  button2.style.right = "0px";

  button2.addEventListener("click", function() {
  alert("Bonjour");
  });

  document.body.appendChild(button2);
});

window.addEventListener('load', function() {
  const button3 = document.createElement("button");
  button3.innerHTML = "My contacts and stuff";

  button3.style.position = "fixed";
  button3.style.bottom = "100px";
  button3.style.right = "0px";

  button3.addEventListener("click", function() {
  alert("nguyenvukyanh2904@gmail.com/nNezorf#1594");
  

  });

  document.body.appendChild(button3);
});