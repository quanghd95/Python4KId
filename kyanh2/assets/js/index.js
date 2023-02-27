
window.addEventListener('load', function() {
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

  const button2 = document.createElement("button");
  button2.innerHTML = "Hello";

  button2.style.position = "fixed";
  button2.style.bottom = "35px";
  button2.style.right = "0px";

  button2.addEventListener("click", function() {
  alert("Bonjour");
  });

  document.body.appendChild(button2);


  const button3 = document.createElement("button");
  button3.innerHTML = "My contacts and stuff";

  button3.style.position = "fixed";
  button3.style.bottom = "100px";
  button3.style.right = "0px";

  button3.addEventListener("click", function() {
  alert("nguyenvukyanh2904@gmail.com\nDandellion Puffball#1594");
  

  });
  document.body.appendChild(button3);
  const btn4 = document.getElementById('btn4');
  
  btn4.style.position = "fixed";
  btn4.style.bottom = "70px";
  btn4.style.right = "0px";
  const divtest = document.getElementById('test');
  btn4.addEventListener("click", function() { 
    if (divtest.innerHTML === "Hello world") {
      divtest.innerHTML = ""
    }
    else {
      divtest.innerHTML = "Hello world"
    }
  })
  const btn5 = document.createElement('button')
  btn5.style.position = "fixed";
  btn5.style.bottom = "130px";
  btn5.style.right = "0px";
  btn5.innerHTML = "Close tab"
  document.body.appendChild(btn5);
  btn5.addEventListener("click", function(){
    window.close();
    });
});