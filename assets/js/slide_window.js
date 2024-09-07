// 添加按钮点击事件，点击后显示滑动的文本框
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        let panel = document.getElementById('sliding-panel');
        panel.style.display = 'block';
        setTimeout(() => {
            panel.style.opacity = 1;
            panel.style.top = '150px'; // 向下滑动的效果
        }, 50);
    });
});
