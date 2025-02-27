// script.js
document.addEventListener("DOMContentLoaded", function () {
    const toggleProjectsButton = document.getElementById("toggle-projects");
    const projectsContainer = document.getElementById("projects-container");

    toggleProjectsButton.addEventListener("click", function () {
        if (projectsContainer.style.display === "none" || projectsContainer.style.display === "") {
            projectsContainer.style.display = "block"; // Proje kartlarını göster
        } else {
            projectsContainer.style.display = "none"; // Proje kartlarını gizle
        }
    });

    const toggleThemeButton = document.getElementById("toggle-theme");
    const body = document.body;

    toggleThemeButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
});
