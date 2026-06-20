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

const signUp = document.querySelector("#signup");
const login = document.querySelector("#login");



login.addEventListener("click", function(){
    // loginPage.style.top = "105%";
    loginPage.style.top = "5%";
    signupPage.style.top = "-100%";
})

signUp.addEventListener("click", function(){
    loginPage.style.top = "-100%";
    signupPage.style.top = "2%";
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




// All Front Page UI Done


const navLinks = document.querySelectorAll("#nav-links");

const addTaskbtn = document.querySelector("#addTask");

const addTaskPage = document.querySelector("#add-task-page");
const completedTasksPage = document.querySelector("#completed-tasks-page");
const workflowPage = document.querySelector("#workflow-page");

navLinks.forEach((element, id) => {
    element.addEventListener("click", function (event) {

        addTaskPage.style.display = "none";
        completedTasksPage.style.display = "none";
        workflowPage.style.display = "none";

        if (event.target.id === "home") {
            heroSection.style.display = "flex"
        } else if (event.target.id === "addTask") {
            heroSection.style.display = "none";
            addTaskPage.style.display = "flex";
        } else if (event.target.id === "completedTasks") {
            heroSection.style.display = "none";
            completedTasksPage.style.display = "flex";
        } else if (event.target.id === "workflow") {
            heroSection.style.display = "none";
            workflowPage.style.display = "flex";
        }
    })
})


const taskShowSection = document.querySelector("#task-show-section")
// const tasksList = document.querySelector("#tasks")
const singleTask = document.querySelector(".task")
const addTaskForm = document.querySelector("#new-task-form");
const newTask = document.querySelector("#new-task-input");
const taskPriority = document.querySelector("#task-priority");
const taskTag = document.querySelector("#task-tag");

const taskAddBtn = document.querySelector("#submit");


function renderTasks() {

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    taskShowSection.innerHTML = "";

    tasks.forEach(function (task) {

        taskShowSection.innerHTML += `
            <div id="tasks" data-id="${task.id}">
                <div class="task">
                    <div class="content">
                        <input
                            type="text"
                            class="text"
                            value="${task.taskdesc}"
                            readonly
                        >
                    </div>

                    <div class="tags">
                        <span>${task.priority}</span>
                        <span>${task.tag}</span>
                    </div>
                    <div class="actions">
                        <button class="edit"><i class="ri-pencil-ai-line"></i></button>
                        <button class="complete"><i class="ri-checkbox-circle-line"></i></button>
                        <button class="delete"><i class="ri-delete-bin-3-line"></i></button>
                    </div>
                </div>
            </div>
        `;

    });

}

renderTasks()
// task UI render ho raha hai 


const totalTaskCount = document.querySelector("#total-task-count");
const completedTaskCount = document.querySelector("#completed-task-count")
const pendingTaskCount = document.querySelector("#pending-task-count")

function renderDashboard() {

    const tasks =
        JSON.parse(localStorage.getItem("tasks")) || [];

    const totalTasks =
        tasks.length;

    const completedTasks =
        tasks.filter(task => task.completed).length;

    totalTaskCount.textContent =
        totalTasks;

    completedTaskCount.textContent =
        completedTasks;

    pendingTaskCount.textContent =
        totalTasks - completedTasks;
}
renderDashboard()


// Dashborad and task count UI render 

const taskError = document.querySelector(".task-error");
const priorityError = document.querySelector(".priority-error");
const categoryError = document.querySelector(".category-error");

taskAddBtn.addEventListener("click", function (details) {
    details.preventDefault()

    taskError.textContent = "";
    priorityError.textContent = "";
    categoryError.textContent = "";

    if (newTask.value.trim() === "") {
        taskError.textContent = "Please enter a task.";
        return;
    }else if(taskPriority.value === "") {
        priorityError.textContent = "Please select a priority.";
        return;
    }else if (taskTag.value === "") {
        categoryError.textContent = "Please select a category.";
        return;
    }

    let taskdetails = {
        id: Date.now(),
        taskdesc: newTask.value,
        priority: taskPriority.value,
        tag: taskTag.value,
        completed: false
    }
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(taskdetails);

    localStorage.setItem("tasks", JSON.stringify(tasks));


    renderTasks()
    renderDashboard()

    addTaskForm.reset()
})


// Task ui renderi and creating done 



const completedTaskShow = document.querySelector("#complete-task")

function completedrenderTasks() {

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    completedTaskShow.innerHTML = "";

    tasks.forEach(function (task) {

        if (task.completed) {
            completedTaskShow.innerHTML += `
            <div id="tasks" data-id="${task.id}">
                <div class="task">
                    <div class="content">
                        <input
                            type="text"
                            class="text"
                            value="${task.taskdesc}"
                            readonly
                        >
                    </div>

                    <div class="tags">
                        <span>${task.priority}</span>
                        <span>${task.tag}</span>
                    </div>
                    <div class="actions">
                        <button class="delete"><i class="ri-delete-bin-3-line"></i></button>
                    </div>
                </div>
            </div>
        `;
        }

    });

}

completedrenderTasks()

// task completed button code done 





// yaha per event delegation lag raha hai parent ka listner 
// child per jaa raha hai 
taskShowSection.addEventListener("click", function (details) {


    if (details.target.closest(".edit")) {
        const taskList = details.target.closest("#tasks");
        const taskCard = details.target.closest(".task");
        const editTask = taskCard.querySelector(".text");
        const editBtn = details.target.closest(".edit");
        const completeBtn = details.target.closest(".complete");
        const deleteBtn = details.target.closest(".delete");

        if (editTask.readOnly) {
            editBtn.innerHTML = '<i class="ri-check-double-line"></i>';
            editTask.removeAttribute("readonly");
            editTask.focus();

        } else {
            editBtn.innerHTML = '<i class="ri-pencil-ai-line"></i>';
            editTask.setAttribute("readonly", true);

            const taskId = Number(taskList.dataset.id);

            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            const task = tasks.find(function (task) {
                return task.id === taskId

            })

            task.taskdesc = editTask.value;
            localStorage.setItem("tasks", JSON.stringify(tasks));

        }
    } else if (details.target.closest(".complete")) {
        const taskList = details.target.closest("#tasks");
        const taskId = Number(taskList.dataset.id);

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const task = tasks.find(function (task) {
            return task.id === taskId
        })

        task.completed = true;
        localStorage.setItem("tasks", JSON.stringify(tasks));

        renderTasks();
        completedrenderTasks()
        renderDashboard()

    } else if (details.target.closest(".delete")) {
        const taskList = details.target.closest("#tasks");
        const taskId = Number(taskList.dataset.id);

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        const updateTask = tasks.filter(function (task) {
            return task.id !== taskId
        })

        localStorage.setItem("tasks", JSON.stringify(updateTask))

        renderTasks();
        completedrenderTasks()
        renderDashboard()
    }

})



// after completed task update renederTask UI again
function renderTasks() {

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    taskShowSection.innerHTML = "";

    tasks.forEach(function (task) {

        if (!task.completed) {
            taskShowSection.innerHTML += `
            <div id="tasks" data-id="${task.id}">
                <div class="task">
                    <div class="content">
                        <input
                            type="text"
                            class="text"
                            value="${task.taskdesc}"
                            readonly
                        >
                    </div>

                    <div class="tags">
                        <span>${task.priority}</span>
                        <span>${task.tag}</span>
                    </div>
                    <div class="actions">
                        <button class="edit"><i class="ri-pencil-ai-line"></i></button>
                        <button class="complete"><i class="ri-checkbox-circle-line"></i></button>
                        <button class="delete"><i class="ri-delete-bin-3-line"></i></button>
                    </div>
                </div>
            </div>
        `;
        }

    });

}

renderTasks()


completedTaskShow.addEventListener("click", function (details) {

    if (details.target.closest(".delete")) {

        const taskList =
            details.target.closest("#tasks");

        const taskId =
            Number(taskList.dataset.id);

        const tasks =
            JSON.parse(localStorage.getItem("tasks")) || [];

        const updatedTasks =
            tasks.filter(function (task) {

                return task.id !== taskId;

            });

        localStorage.setItem(
            "tasks",
            JSON.stringify(updatedTasks)
        );

        renderTasks();
        completedrenderTasks();
        renderDashboard()

    }

});


// Finallly done all todo button functionlty


const quotes = [
    {
        quote: "Success is built in silence long before it is seen in public.",
        author: "Naval Ravikant"
    },
    {
        quote: "The person who can stay focused while others are distracted will own the future.",
        author: "James Clear"
    },
    {
        quote: "Discipline is choosing between what you want now and what you want most.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Your comfort zone is the most expensive place to live.",
        author: "Alex Hormozi"
    },
    {
        quote: "Small daily improvements create extraordinary results over time.",
        author: "Robin Sharma"
    },
    {
        quote: "The hardest worker in the room eventually becomes the most valuable.",
        author: "Patrick Bet-David"
    },
    {
        quote: "Talent opens the door, consistency keeps it open.",
        author: "Angela Duckworth"
    },
    {
        quote: "The future rewards those who can delay gratification today.",
        author: "Morgan Housel"
    },
    {
        quote: "Most people quit when they are one breakthrough away from success.",
        author: "Les Brown"
    },
    {
        quote: "Your habits are the architects of your destiny.",
        author: "James Clear"
    },
    {
        quote: "Dreams become reality only when action becomes a daily ritual.",
        author: "Denzel Washington"
    },
    {
        quote: "You do not rise to your goals, you fall to your systems.",
        author: "James Clear"
    },
    {
        quote: "Every expert was once a beginner who refused to quit.",
        author: "Helen Hayes"
    },
    {
        quote: "A year from now you will wish you had started today.",
        author: "Karen Lamb"
    },
    {
        quote: "Focus is a superpower in a world designed to distract you.",
        author: "Cal Newport"
    },
    {
        quote: "Your current situation is not your final destination.",
        author: "Nido Qubein"
    },
    {
        quote: "What feels impossible today becomes your warm-up tomorrow.",
        author: "David Goggins"
    },
    {
        quote: "The quality of your future depends on what you repeatedly do today.",
        author: "Brian Tracy"
    },
    {
        quote: "Internal growth always appears before external success.",
        author: "Farhan Khan"
    },
    {
        quote: "My Internal Wealth Will Definitely Create My External Wealth...",
        author: "Farhan Khan"
    }
];


const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#author");
const refreshBtn = document.querySelector(".ri-loop-right-ai-line");


function showRandomQuote() {


    const quoteIndex = Math.floor(Math.random() * quotes.length + 1)

    refreshBtn.classList.add("rotate")

    quoteText.textContent = quotes[quoteIndex].quote;
    quoteAuthor.textContent = quotes[quoteIndex].author;
}

showRandomQuote()

refreshBtn.addEventListener("click", showRandomQuote)