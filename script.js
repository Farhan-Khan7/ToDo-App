const today = new Date()

const format = {
    weekday : "long",
    month : "long",
    day : "numeric"
}

const formatDate = today.toLocaleDateString("en-US" , format)


let currentDate = document.querySelector("#current-date");

currentDate.textContent = formatDate.toUpperCase()