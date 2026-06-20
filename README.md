# 🚀 TaskFlow - Modern To-Do Dashboard

<div align="center">

![Status](https://img.shields.io/badge/Status-In%20Development-purple)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

### ✨ Organize Tasks. Track Progress. Stay Productive.

A modern and visually appealing To-Do Dashboard built using **HTML, CSS, and JavaScript**.

</div>

---

## 📸 Preview

<p align="center">
  <img src="./preview.png" width="900" alt="TaskFlow Preview">
</p>

---

## ✨ Features

### 📝 Task Management

- ➕ Add Tasks
- ✏️ Edit Tasks
- 🗑️ Delete Tasks
- ✅ Mark Tasks Complete
- 📋 Manage Daily Activities

### 📊 Progress Tracking

- Dynamic Progress Bar
- Completion Percentage
- Remaining Tasks Counter

### 🗂️ Categories

- 💼 Work
- 👤 Personal
- 📁 Projects

### 💾 Persistent Storage

- Save Tasks using Local Storage
- Data remains after page refresh

### 🎨 Modern UI

- Glassmorphism Design
- Smooth Animations
- Beautiful Gradients
- Responsive Layout

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|--------|
| HTML5 | Structure |
| CSS3 | Styling |
| JavaScript | Functionality |
| Local Storage | Data Persistence |

---

## 🏗️ Project Structure

```bash
TaskFlow/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│   ├── icons/
│   ├── images/
│   └── preview.png
│
└── README.md



# 📝 Advanced Todo App

A modern Todo Application built using **HTML, CSS, and JavaScript**.

## 🚀 Features

- ✅ Add Tasks
- ✏️ Edit Tasks
- 🎯 Complete Tasks
- 🗑️ Delete Tasks
- 📊 Dashboard Statistics
- 💾 Local Storage Support
- 🌙 Dark / Light Mode
- 💬 Daily Motivation Quotes

---

# 🧠 Browser Rendering Process

![Browser Rendering Process](./browser-rendering-process.png)

---

## 1. Parsing

Parsing ka matlab hota hai browser HTML file ko read aur understand karna.

Example:

```html
<h1>Hello World</h1>
<p>Welcome</p>
```

Browser identify karta hai:

- Heading
- Paragraph

Yahi process Parsing kehlata hai.

---

## 2. Tokenization

Browser HTML ko chote-chote tokens me break karta hai.

Example:

```html
<h1>Hello</h1>
```

Tokens:

```text
Opening Tag -> <h1>
Text -> Hello
Closing Tag -> </h1>
```

Is process ko Tokenization kehte hain.

---

## 3. DOM Tree

DOM ka full form hai:

**Document Object Model**

HTML ko browser tree structure me convert karta hai.

Example:

```html
<body>
    <h1>Hello</h1>
    <p>World</p>
</body>
```

DOM Tree:

```text
Body
├── H1
└── P
```

JavaScript isi DOM Tree ke through elements ko access karti hai.

Example:

```javascript
document.querySelector("h1");
```

---

## 4. CSSOM Tree

CSSOM ka full form hai:

**CSS Object Model**

Jaise HTML se DOM Tree banti hai waise hi CSS se CSSOM Tree banti hai.

Example:

```css
h1{
    color:red;
}
```

Browser CSS rules ko parse karke CSSOM Tree create karta hai.

---

## 5. Render Tree

Browser:

```text
DOM Tree
+
CSSOM Tree
```

ko combine karta hai.

Result:

```text
Render Tree
```

Render Tree me sirf visible elements hote hain.

Example:

```css
display:none;
```

wale elements Render Tree me include nahi hote.

---

# 🎯 Event Bubbling

Event Bubbling me event:

```text
Child
⬆
Parent
⬆
Document
```

direction me move karta hai.

Example:

```html
<div class="parent">
    <button>Click Me</button>
</div>
```

Button click hone par event parent tak travel karta hai.

---

# 🎯 Event Capturing

Event Capturing Bubbling ka opposite hai.

Direction:

```text
Document
⬇
Parent
⬇
Child
```

Example:

```javascript
parent.addEventListener(
    "click",
    handleClick,
    true
);
```

`true` Capturing phase enable karta hai.

---

# 🎯 Event Delegation

Event Delegation me hum har child par listener nahi lagate.

Hum parent par listener lagate hain aur clicked child ko detect karte hain.

Example:

```javascript
taskShowSection.addEventListener(
    "click",
    function(event){

        if(event.target.closest(".delete")){
            console.log("Delete Clicked");
        }

    }
);
```

### Is Project Me Event Delegation

Todo App me:

- Edit Button
- Complete Button
- Delete Button

sab dynamically create hote hain.

Isliye parent container par ek hi event listener lagaya gaya.

### Benefits

- Better Performance
- Less Code
- Dynamic Elements Support

---

# 💾 Local Storage

Local Storage browser me data save karne ke liye use hoti hai.

Save Data:

```javascript
localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
);
```

Get Data:

```javascript
JSON.parse(
    localStorage.getItem("tasks")
);
```

Page refresh ke baad bhi tasks save rehte hain.

---

# 📚 JavaScript Concepts Used

- Arrays
- Objects
- forEach()
- find()
- filter()
- Local Storage
- Event Delegation
- DOM Manipulation
- Dataset API
- CRUD Operations

---

# 🏆 Learning Outcomes

Is project ko banane ke baad maine seekha:

- DOM Manipulation
- CRUD Operations
- Event Delegation
- Local Storage
- Dynamic UI Rendering
- Browser Rendering Process
- Dashboard Statistics
- Dark & Light Mode

---

## 👨‍💻 Author

### Farhan Khan

> "My Internal Wealth Will Definitely Create My External Wealth."