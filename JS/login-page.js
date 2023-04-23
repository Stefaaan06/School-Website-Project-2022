document.addEventListener("DOMContentLoaded", function() {  //checks if page is loaded
    //gets buttons
    const loginForm = document.getElementById("login-form");  
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");

    loginButton.addEventListener("click", (e) => {    //checks for clicks
      e.preventDefault();
      //checks input for username and password
      const username = loginForm.username.value;
      const password = loginForm.password.value;
  
      if (username == "TestUser" && password == "1234") {   
          //succesfull login
          location.replace("../index.html");
      } else {
          //failed login
          loginErrorMsg.style.opacity = 1;
      }
    });
  });