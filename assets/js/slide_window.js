document.getElementById('slideButton').addEventListener('click', function() {
    var slideWindow = document.getElementById('slideWindow');
    if (slideWindow.style.display === 'none') {
        slideWindow.style.display = 'block';
        slideWindow.style.transform = 'translateX(0)';
    } else {
        slideWindow.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            slideWindow.style.display = 'none';
        }, 300); // 等待动画完成后隐藏
    }
});
