function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("nav").classList.toggle("dark-mode");
    document.querySelectorAll(".project").forEach(proj => proj.classList.toggle("dark-mode"));
    document.querySelector("aside").classList.toggle("dark-mode");
}
