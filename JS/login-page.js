/*
Login System
@author Stefan Crasninec
@version 11.05.2023
 */
document.addEventListener("DOMContentLoaded", function() {  //wartet bis die Website geladen ist
    //findet die gesuchten Elemente welche zum Login verwendet werden
    const loginForm = document.getElementById("login-form");  
    const loginButton = document.getElementById("login-form-submit");
    const loginErrorMsg = document.getElementById("login-error-msg");

    loginButton.addEventListener("click", (e) => {    //wartet auf clicks auf den Login Button
      e.preventDefault();
      //nimmt sich die eingegebenen Daten aus den Feldern herraus
      const username = loginForm.username.value;
      const password = loginForm.password.value;

      //vergleicht Daten mit Account
      if (username == "TestUser" && password == "1234") {   
          //succesfull login
          location.replace("../index.html");
      } else {
          //failed login
          loginErrorMsg.style.opacity = 1;
      }
    });
  });