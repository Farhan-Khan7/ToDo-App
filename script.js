const themebtn = document.querySelector(".dark-light-toggle");
const lightModeLogo = document.querySelector("#light-mode-logo");
const darkModeLogo = document.querySelector("#dark-mode-logo");
const lightModeToggle = document.querySelector("#light-mode-toggle");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const heroSection = document.querySelector("#hero");
const getStartbtn = document.querySelector("#get-start");
const navbar = document.querySelector("#navbar");



const projectStatus = document.querySelector(".project-status");
const taskProgress = document.querySelector(".task-progress");


themebtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        projectStatus.src = "assets/dark-mode-project-status.png";
        taskProgress.src = "assets/dark-mode-progress-task.png";
        lightModeToggle.style.display = "block";
        darkModeToggle.style.display = "none";
        lightModeLogo.style.display = "none";
        darkModeLogo.style.display = "block";

    } else {
        lightModeToggle.style.display = "none";
        darkModeToggle.style.display = "block";
        projectStatus.src = "assets/light-mode-project-status.png";
        taskProgress.src = "assets/light-mode-progress-task.png";
        lightModeLogo.style.display = "block";
        darkModeLogo.style.display = "none";
    }



})




const changetext = [
    "dynamic teams",
    "increased productivity",
    "improved collaboration",
    "smart workflows",
    "better organization",
    "You"
];

const text = document.querySelector("#changing-text");

let index = 0;

setInterval(() => {
    index++;

    if (index >= changetext.length) {
        index = 0;
    }

    text.style.animation = "none"
    text.offsetHeight;
    text.textContent = changetext[index];
    text.style.animation = "dropIn 0.6s ease"

}, 2000)


const overlay = document.querySelector(".overlay");
const form = document.querySelector("form");





const fullName = document.querySelector("#fullname")
const nameRequiredError = document.querySelector(".name-required-error");
const nameConditionError = document.querySelector(".name-condition-error");
const nameVerifyError = document.querySelector(".name-verify");


fullName.addEventListener("input", function () {
    const nameRegex = /^[A-Za-z ]+$/;
    const name = fullName.value.trim();

    if (name === "") {
        nameRequiredError.style.display = "flex"
        nameConditionError.style.display = "none"
        nameVerifyError.style.display = "none"
        name.style.borderColor = "red"
    } else if (name.length < 2) {
        nameConditionError.style.display = "flex"
        name.style.borderColor = "red"
    } else if (!nameRegex.test(name)) {
        nameVerifyError.style.display = "flex"
        name.style.borderColor = "red"
    } else {
        nameRequiredError.style.display = "none";
        nameConditionError.style.display = "none";
        nameVerifyError.style.display = "none";
        fullName.style.borderColor = "green"
    }
})

// Full Name Input Verification done 

const email = document.querySelector("#Email")
const emailRequiredError = document.querySelector(".email-required-error");
const emailConditionError = document.querySelector(".email-condition-error");
const emailVerifyError = document.querySelector(".email-verify");

email.addEventListener("input", function () {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const emailValue = email.value.trim()
    if (emailValue === "") {
        emailRequiredError.style.display = "flex"
        emailConditionError.style.display = "none"
        emailVerifyError.style.display = "none"
        email.style.borderColor = "red"
    } else if (emailValue.includes(" ")) {
        emailConditionError.style.display = "flex"
        email.style.borderColor = "red"
    } else if (!emailRegex.test(emailValue)) {
        emailVerifyError.style.display = "flex"
        email.style.borderColor = "red"
    } else {
        emailRequiredError.style.display = "none";
        emailConditionError.style.display = "none";
        emailVerifyError.style.display = "none";
        email.style.borderColor = "green"
    }

})
// Email Input Verification done



const password = document.querySelector("#password")
const passwordRequiredError = document.querySelector(".password-required-error");
const passwordConditionError = document.querySelector(".password-condition-error");
const passwordVerifyError = document.querySelector(".password-verify");

password.addEventListener("input", function () {

    const passwordValue = password.value.trim();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (passwordValue === "") {
        passwordRequiredError.style.display = "flex";
        passwordConditionError.style.display = "none";
        passwordVerifyError.style.display = "none";
        password.style.borderColor = "red";
    } else if (passwordValue.length < 8) {
        passwordRequiredError.style.display = "none";
        passwordConditionError.style.display = "flex";
        password.style.borderColor = "red";
    } else if (!passwordRegex.test(passwordValue)) {
        passwordVerifyError.style.display = "flex";
        password.style.borderColor = "red";
    } else {
        passwordRequiredError.style.display = "none";
        passwordConditionError.style.display = "none";
        passwordVerifyError.style.display = "none";
        password.style.borderColor = "green";
    }

});


// Password Input Verification done


const confirmPassword = document.querySelector("#confirm-password")
const confirmPasswordRequiredError = document.querySelector(".confirm-pass-required-error");
const confirmPasswordConditionError = document.querySelector(".confirm-password-condition-error");

confirmPassword.addEventListener("input", function () {
    const confirmPasswordValue = confirmPassword.value.trim();
    const passwordValue = password.value.trim();

    if (confirmPasswordValue === "") {
        confirmPasswordRequiredError.style.display = "flex";
        confirmPasswordConditionError.style.display = "none";
        confirmPassword.style.borderColor = "red";
    } else if (confirmPasswordValue !== passwordValue) {
        confirmPasswordConditionError.style.display = "flex";
        confirmPassword.style.borderColor = "red";
    } else {
        confirmPasswordRequiredError.style.display = "none";
        confirmPasswordConditionError.style.display = "none";
        confirmPassword.style.borderColor = "green";
    }
})


const signupbtn = document.querySelector("#signup-btn")
const signupPage = document.querySelector("#signup-page");


signupbtn.addEventListener("click", function (eventdets) {
    eventdets.preventDefault();


    let isvalid = true;
    const nameRegex = /^[A-Za-z ]+$/;
    const name = fullName.value.trim();

    nameRequiredError.style.display = "none";
    nameConditionError.style.display = "none";
    nameVerifyError.style.display = "none";

    if (name === "") {
        nameRequiredError.style.display = "flex"
        fullName.style.borderColor = "red"
        isvalid = false;
    } else if (name.length < 2) {
        nameConditionError.style.display = "flex"
        fullName.style.borderColor = "red"
        isvalid = false;
    } else if (!nameRegex.test(name)) {
        nameVerifyError.style.display = "flex"
        fullName.style.borderColor = "red"
        isvalid = false;
    } else {
        fullName.style.borderColor = "green"
    }


    // full name validation done


    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const emailValue = email.value.trim()

    emailRequiredError.style.display = "none";
    emailConditionError.style.display = "none";
    emailVerifyError.style.display = "none";

    if (emailValue === "") {
        emailRequiredError.style.display = "flex"
        email.style.borderColor = "red"
        isvalid = false;
    } else if (emailValue.includes(" ")) {
        emailConditionError.style.display = "none";
        email.style.borderColor = "red"
        isvalid = false;
    } else if (!emailRegex.test(emailValue)) {
        emailVerifyError.style.display = "flex"
        email.style.borderColor = "red"
        isvalid = false;
    } else {
        email.style.borderColor = "green"
    }

    // email validation done

    const passwordValue = password.value.trim();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    passwordRequiredError.style.display = "none";
    passwordConditionError.style.display = "none";
    passwordVerifyError.style.display = "none";

    if (passwordValue === "") {
        passwordRequiredError.style.display = "flex";
        password.style.borderColor = "red";
        isvalid = false;
    } else if (passwordValue.length < 8) {
        passwordConditionError.style.display = "flex";
        password.style.borderColor = "red";
        isvalid = false;
    } else if (!passwordRegex.test(passwordValue)) {
        passwordVerifyError.style.display = "flex";
        password.style.borderColor = "red";
        isvalid = false;
    } else {
        password.style.borderColor = "green";
    }

    // password validation done

    const confirmPasswordValue = confirmPassword.value.trim();
    // const passwordValue = password.value.trim();

    confirmPasswordRequiredError.style.display = "none";
    confirmPasswordConditionError.style.display = "none";

    if (confirmPasswordValue === "") {
        confirmPasswordRequiredError.style.display = "flex";
        confirmPassword.style.borderColor = "red";
        isvalid = false;
    } else if (confirmPasswordValue !== passwordValue) {
        confirmPasswordConditionError.style.display = "flex";
        confirmPassword.style.borderColor = "red";
        isvalid = false;
    } else {
        confirmPassword.style.borderColor = "green";
    }

    // confirm password validation done

    if (!isvalid) {
        return;
    } else {
        const userInfo = {
            fullName: name,
            email: emailValue,
            password: passwordValue
        }

        localStorage.setItem("user", JSON.stringify(userInfo));

    }

    signupPage.style.top = "100%";
    loginPage.style.top = "5%";
    setTimeout(() => {
        signupPage.style.display = "none";
    }, 2000)

})


const loginEmail = document.querySelector("#loginEmail");

const loginEmailRequiredErrors = document.querySelector("#login-email-required-error");
const loginEmailConditionErrors = document.querySelector("#login-email-condition-error");
const loginEmailErrors = document.querySelector("#login-email-error");

loginEmail.addEventListener("input", function () {
    const userData = JSON.parse(localStorage.getItem("user"))

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const emailValue = loginEmail.value.trim();

    loginEmailRequiredErrors.style.display = "none"
    loginEmailConditionErrors.style.display = "none"
    loginEmailErrors.style.display = "none"


    if (emailValue === "") {
        loginEmailRequiredErrors.style.display = "flex"
        loginEmail.style.borderColor = "red"
    } else if (!emailRegex.test(emailValue)) {
        loginEmailConditionErrors.style.display = "flex"
        loginEmail.style.borderColor = "red"
    } else if (userData.email !== emailValue) {
        loginEmailErrors.style.display = "flex"
        loginEmail.style.borderColor = "red"
    } else {
        loginEmail.style.borderColor = "green"
    }


})

// login email input verification done
const loginPassword = document.querySelector("#loginPassword");

const loginpasswordRequiredErrors = document.querySelector("#login-password-required-error");
const loginPasswordConditionErrors = document.querySelector("#login-password-condition-error");
const loginPasswordErrors = document.querySelector("#login-password-error");


loginPassword.addEventListener("input", function () {
    const userData = JSON.parse(localStorage.getItem("user"))

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordValue = loginPassword.value.trim();

    loginpasswordRequiredErrors.style.display = "none"
    loginPasswordConditionErrors.style.display = "none"
    loginPasswordErrors.style.display = "none"

    if (passwordValue === "") {
        loginpasswordRequiredErrors.style.display = "flex"
        loginPassword.style.borderColor = "red"
    } else if (userData.password !== passwordValue) {
        loginPasswordErrors.style.display = "flex"
        loginPassword.style.borderColor = "red"
    } else {
        loginPassword.style.borderColor = "green"
    }

})
// login password input verification done


const loginPage = document.querySelector("#login-page");
const loginbtn = document.querySelector("#login-btn")


loginbtn.addEventListener("click", function (eventdets) {
    eventdets.preventDefault();
    let isvalid = true;

    const userData = JSON.parse(localStorage.getItem("user"))

    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const emailValue = loginEmail.value.trim();

    loginEmailRequiredErrors.style.display = "none"
    loginEmailConditionErrors.style.display = "none"
    loginEmailErrors.style.display = "none"


    if (emailValue === "") {
        loginEmailRequiredErrors.style.display = "flex"
        loginEmail.style.borderColor = "red"
        isvalid = false;
    } else if (!emailRegex.test(emailValue)) {
        loginEmailConditionErrors.style.display = "flex"
        loginEmail.style.borderColor = "red"
        isvalid = false;
    } else if (userData.email !== emailValue) {
        loginEmailErrors.style.display = "flex"
        loginEmail.style.borderColor = "red"
        isvalid = false;
    } else {
        loginEmail.style.borderColor = "green"
    }

    // login email input verification done


    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordValue = loginPassword.value.trim();

    loginpasswordRequiredErrors.style.display = "none"
    loginPasswordConditionErrors.style.display = "none"
    loginPasswordErrors.style.display = "none"

    if (passwordValue === "") {
        loginpasswordRequiredErrors.style.display = "flex"
        loginPassword.style.borderColor = "red"
        isvalid = false;
    } else if (userData.password !== passwordValue) {
        loginPasswordErrors.style.display = "flex"
        loginPassword.style.borderColor = "red"
        isvalid = false;
    } else {
        loginPassword.style.borderColor = "green"
    }

    if (isvalid) {
        loginPage.style.top = "105%";
        setTimeout(() => {
            loginPage.style.display = "none";
            overlay.style.display = "none";
        }, 2000)
    }

})

