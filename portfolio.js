// JavaScript to retrieve and display data from localStorage

// Get data from localStorage
const aboutText = localStorage.getItem("aboutText");
const achievementsText = localStorage.getItem("achievementsText");
const emailText = localStorage.getItem("emailText");
const linkedinText = localStorage.getItem("linkedinText");
const githubText = localStorage.getItem("githubText");
const projects = JSON.parse(localStorage.getItem("projects") || "[]");

// Display About Me
document.getElementById("aboutText").innerText = aboutText;

// Display Projects
const projectsList = document.getElementById("projectsList");
projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
    projectsList.appendChild(projectDiv);
});

// Display Achievements
document.getElementById("achievementsText").innerText = achievementsText;

// Display Contact Details
document.getElementById("emailText").innerText = `Email: ${emailText}`;
document.getElementById("linkedinLink").href = linkedinText;
document.getElementById("linkedinLink").innerText = linkedinText;
document.getElementById("githubLink").href = githubText;
document.getElementById("githubLink").innerText = githubText;
