document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', function () {
        document.body.classList.toggle('light-theme', themeToggle.checked);
    });XMLDocument
});