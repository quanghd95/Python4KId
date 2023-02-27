window.addEventListener('load', function() {
    // Get the button element
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
  
    // Track the state of the theme
    let isDark = false;
  
    // Add a click event listener to the button
    themeToggleBtn.addEventListener('click', function() {
        // Get the body element
        const body = document.body;
        // Change the background color and text color of button
        this.style.backgroundColor = isDark ? 'white' : 'gray';
        this.style.color = isDark ? 'gray' : 'white';
        // Change the background color and text color based on the current theme
        body.style.backgroundColor = isDark ? 'white' : 'gray';
        body.style.color = isDark ? 'gray' : 'white';
  
        // Toggle the theme state
        isDark = !isDark;
    });
  
    //  const arlarmBtn = document.querySelector("#arlarm-btn");
    const arlarmBtn = document.getElementById('arlarm-btn');
    arlarmBtn.addEventListener("click", function() {
        window.alert("Bonjour");
    });
  
    const closeBtn = document.getElementById('close-btn');
    closeBtn.addEventListener("click", function() {
        window.close()
    });
      
    const addInnerHTMLBtn = document.querySelector("#add-innerHTML-btn");
    addInnerHTMLBtn.addEventListener("click", function() {
      const divTest = document.getElementById('test');
      if (divTest.innerHTML  === "Hello world!!!!") {
          divTest.innerHTML = ""
      } else {
          divTest.innerHTML = "Hello world!!!!"
      }
    });
  
    const tableToggleBtn = document.querySelector(".table-toggle-btn");
    let isHidden = true;
    tableToggleBtn.addEventListener("click", function() {
      const myTable = document.querySelector(".my-table");
        myTable.style.display = isHidden ? "none" : "block"
        isHidden = !isHidden
    });
  });
  