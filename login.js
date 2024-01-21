const container = document.querySelector(".container");
const pwShowHide = document.querySelectorAll(".showHidePw");
const pwFields = document.querySelectorAll(".password");
const signUp = document.querySelector(".signup-link");
const login = document.querySelector(".login-link");


pwShowHide.forEach(eyeIcon=>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwField =>{

            if(pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            }
            else {
                pwField.type = "password";

                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })

    })
})

signUp.addEventListener("click", ()=>{
    container.classList.add("active");
});

login.addEventListener("click", ()=>{
    container.classList.remove("active");
});

const signInForm = document.getElementById("signin-form");

const emailField = signInForm.querySelector(".email-field");
const emailInput = emailField.querySelector(".email");

const passField = signInForm.querySelector(".create-password");
const passInput = passField.querySelector(".password");

const cPassField = signInForm.querySelector(".confirm-password");
const cPassInput = cPassField.querySelector(".cPassword");

const nameField = signInForm.querySelector(".name-field");
const nameInput = nameField.querySelector(".uName");


// Name Validation

function checkName() {
    const namePattern = /^[a-zA-Z .'-]+$/;

    if(!nameInput.value.match(namePattern)) {
        return nameField.classList.add("invalid");
    }
    nameField.classList.remove("invalid");
}

// Email Validation 

function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid"); // adding invalid class if email value do not matched
    }
    emailField.classList.remove("invalid");
}

// Password Validation

function createPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-za-z\d@$!%*?&]{8,}$/;

        if(!passInput.value.match(passPattern)) {
            return passField.classList.add("invalid");
        }
        passField.classList.remove("invalid");
}

// Confirm Password Validation

function confirmPass() {
    if(passInput.value !== cPassInput.value || cPassInput.value === "") {
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
}

// Calling Function on Submit 

signInForm.addEventListener("submit", (e) =>{
    e.preventDefault(); // preventing form submitting
    checkName();
    checkEmail();
    createPass();
    confirmPass();

    if(
        !nameField.classList.contains("invalid") &&
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid")
    
    ) {
        const formData = new FormData(signInForm);
        const data = Object.fromEntries(formData.entries());

        fetch('/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
        if (data.success) {
            location.href = "https://www.google.com/"; // Replace with desired redirect path
        } else {
            alert("Invalid username or password");
        }
        })
        .catch(error => {
        console.error("Error:", error);
        });
    }

    nameInput.value = "";
    emailInput.value = "";
    passInput.value = "";
    cPassInput.value = "";
});

// calling function on key up
nameInput.addEventListener("keyup", checkName);
emailInput.addEventListener("keyup", checkEmail);
passInput.addEventListener("keyup", createPass);
cPassInput.addEventListener("keyup", confirmPass);


const logInForm = document.getElementById("login-form");

const logEmailField = logInForm.querySelector(".enter-email");
const logEmailInput = logEmailField.querySelector(".log-email");

const logPassField = logInForm.querySelector(".enter-password");
const logPassInput = logPassField.querySelector(".log-password");


logInForm.onsubmit = (e) => {
    e.preventDefault();
    if(logEmailInput.value == "") {
        logEmailField.classList.add("invalid");
    }
    else {
        logEmailCheck();
    }
    if(logPassInput.value == "") {
        logPassField.classList.add("invalid");
    }

    logEmailInput.onkeyup = () => {
        logEmailCheck();
    }


    logPassInput.onkeyup = ()=> {

        if(logPassInput.value == "") {
            logPassField.classList.add("invalid");
        }
        else {
            logPassField.classList.remove("invalid");
        }
    }

    if(!logEmailField.classList.contains("invalid") && !logPassField.classList.contains("invalid")) {
        
        const formData = new FormData(logInForm);
        const data = Object.fromEntries(formData.entries());

        fetch('users', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
        if (data.success) {
            // Successful authentication, redirect to appropriate page
            location.href = "#"; 
        } else {
            // Authentication failed, display error message
            alert("Invalid username or password");
        }
        })
        .catch(error => {
        console.error("Error:", error);
        // Handle network errors or other issues here
        });
    }
}

function logEmailCheck() {
    let logEmailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!logEmailInput.value.match(logEmailPattern)) {
        logEmailField.classList.add("invalid");
        let errorTxt = logEmailField.querySelector(".error-text");
        (logEmailInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }
    else {
        logEmailField.classList.remove("invalid");
    }
}