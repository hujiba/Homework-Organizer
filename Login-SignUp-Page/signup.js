

const sigupform = document.getElementById("signup-form");
const loginErrorMsg = document.getElementById("login-error-msg");
const signupButton2 = document.getElementById("signup-form-submit2");



signupButton2.addEventListener("click", (e) => {
    e.preventDefault();

    const username = sigupform.username.value;
    const password = sigupform.password.value;
    const email = sigupform.email.value;

    
    if(email!="" && password!="" && username!="")
    {
         window.location.href = "HomePage.html";
    }
    else{
        loginErrorMsg.style.opacity = 1;
    }
})