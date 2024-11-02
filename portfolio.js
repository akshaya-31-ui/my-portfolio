// Retrieve data from localStorage
const aboutText = localStorage.getItem("aboutText");
const achievementsText = localStorage.getItem("achievementsText");
const emailText = localStorage.getItem("emailText");
const linkedinText = localStorage.getItem("linkedinText");
const githubText = localStorage.getItem("githubText");
const projects = JSON.parse(localStorage.getItem("projects") || "[]");

// Debugging statements to check if data is loaded
console.log("aboutText:", aboutText);
console.log("achievementsText:", achievementsText);
console.log("emailText:", emailText);
console.log("linkedinText:", linkedinText);
console.log("githubText:", githubText);
console.log("projects:", projects);

// Display About Me section
if (aboutText) {
    document.getElementById("aboutText").innerText = aboutText;
} else {
    document.getElementById("aboutText").innerText = "No About Me information provided.";
}

// Display Projects
const projectsList = document.getElementById("projectsList");
if (projects.length > 0) {
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectsList.appendChild(projectDiv);
    });
} else {
    projectsList.innerHTML = "<p>No projects added.</p>";
}

// Display Achievements
if (achievementsText) {
    document.getElementById("achievementsText").innerText = achievementsText;
} else {
    document.getElementById("achievementsText").innerText = "No achievements listed.";
}

// Display Contact Details
if (emailText) {
    document.getElementById("emailText").innerText = `Email: ${emailText}`;
} else {
    document.getElementById("emailText").innerText = "No email provided.";
}

if (linkedinText) {
    document.getElementById("linkedinLink").href = linkedinText;
    document.getElementById("linkedinLink").innerText = linkedinText;
} else {
    document.getElementById("linkedinLink").innerText = "No LinkedIn profile provided.";
}

if (githubText) {
    document.getElementById("githubLink").href = githubText;
    document.getElementById("githubLink").innerText = githubText;
} else {
    document.getElementById("githubLink").innerText = "No GitHub profile provided.";
}
