// 添加按钮点击事件，点击后显示滑动的文本框
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        let panel = document.getElementById('sliding-panel');
        
        // 设置圆角矩形滑动效果
        panel.style.opacity = 1;
        panel.style.top = '100px';  // 滑动到可见区域

        // 点击其他地方时隐藏
        document.body.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-btn') && !event.target.closest('.sliding-panel')) {
                panel.style.opacity = 0;
                panel.style.top = '-300px';  // 滑动回顶部隐藏
            }
        }, { once: true });
    });
});
