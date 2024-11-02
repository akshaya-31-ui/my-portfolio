let projects = [];

// Function to add a project to the projects array
function addProject() {
    const projectName = document.getElementById("projectNameInput").value;
    const projectDescription = document.getElementById("projectDescriptionInput").value;

    if (projectName && projectDescription) {
        projects.push({ name: projectName, description: projectDescription });
        document.getElementById("projectNameInput").value = "";
        document.getElementById("projectDescriptionInput").value = "";
        console.log("Project added:", projectName, projectDescription);
    } else {
        alert("Please fill in both project name and description.");
    }
}

// Function to generate the portfolio and store data in localStorage
function generatePortfolio() {
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

    console.log("Data saved to localStorage");
    console.log("Redirecting to portfolio page...");
    
    // Redirect to portfolio page
    window.location.href = "portfolio.html";
}
