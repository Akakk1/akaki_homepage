// 点击导航栏按钮时触发
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        // 隐藏欢迎界面并显示大窗口
        document.querySelector('.welcome-text').style.transform = 'translateX(-100%)';
        document.querySelector('.github-button').style.transform = 'translateX(-100%)';
        document.querySelector('.bottom-right-image').style.transform = 'translateX(100%)';
        
        setTimeout(() => {
            document.querySelector('.welcome-section').style.display = 'none';
            document.querySelector('.large-window').style.display = 'block';
        }, 500);
    });
});