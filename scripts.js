// JavaScript to capture and store form data in localStorage

let projects = [];

// Function to add project
function addProject() {
    const projectName = document.getElementById("projectNameInput").value;
    const projectDescription = document.getElementById("projectDescriptionInput").value;

    if (projectName && projectDescription) {
        projects.push({ name: projectName, description: projectDescription });
        document.getElementById("projectNameInput").value = "";
        document.getElementById("projectDescriptionInput").value = "";
    } else {
        alert("Please fill in both project name and description.");
    }
}

// Function to generate portfolio and store data in localStorage
function generatePortfolio() {
    // Collect data from the form
    const aboutText = document.getElementById("aboutInput").value;
    const achievementsText = document.getElementById("achievementsInput").value;
    const emailText = document.getElementById("emailInput").value;
    const linkedinText = document.getElementById("linkedinInput").value;
    const githubText = document.getElementById("githubInput").value;

    // Store data in localStorage
    localStorage.setItem("aboutText", aboutText);
    localStorage.setItem("achievementsText", achievementsText);
    localStorage.setItem("emailText", emailText);
    localStorage.setItem("linkedinText", linkedinText);
    localStorage.setItem("githubText", githubText);
    localStorage.setItem("projects", JSON.stringify(projects));

    // Redirect to portfolio page
    window.location.href = "portfolio.html";
}
