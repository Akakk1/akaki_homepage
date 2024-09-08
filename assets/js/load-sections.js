// assets/js/load-sections.js

// JavaScript to dynamically load sections
document.querySelectorAll('.left-btn').forEach(button => {
    button.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        // 使用 GitHub Pages 路径
        fetch(`/akaki_homepage/_includes/sections/${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('info-display').innerHTML = data;
        });
    });
});
