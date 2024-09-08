// 点击导航栏按钮时触发
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function() {
        // 导航栏变扁
        document.querySelector('nav').classList.add('shrink');

        // 隐藏其他内容，显示对应窗口
        document.querySelectorAll('.large-window > div').forEach(section => {
            section.classList.add('hidden');
        });

        const sectionId = this.id + '-content';
        document.getElementById(sectionId).classList.remove('hidden');
    });
});