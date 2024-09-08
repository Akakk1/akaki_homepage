// assets/js/load-sections.js

// JavaScript to dynamically load sections
document.querySelectorAll('.left-btn').forEach(button => {
    button.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        fetch(`https://github.com/Akakk1/akaki_homepage/blob/main/_includes/sections/${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('info-display').innerHTML = data;
        });
    });
});
