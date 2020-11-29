const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const signupbutton = document.getElementById("signUp-form-submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "pass") {
    
        window.location.href = "Login-SignUp-Page/HomePage.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

signupbutton.addEventListener("click", (e) => {
    e.preventDefault();
  
    window.location.href = "SignUpPage.html";

})



