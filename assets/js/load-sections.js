// assets/js/load-sections.js

// JavaScript to dynamically load sections
document.querySelectorAll('.left-btn').forEach(button => {
    button.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        fetch(`https://akakk1.github.io/akaki_homepage/_includes/sections/${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('info-display').innerHTML = data;
        });
    });
});
