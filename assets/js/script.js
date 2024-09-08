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

// 左侧菜单栏点击事件
document.querySelectorAll('.left-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const section = this.dataset.section;
        document.getElementById('info-display').innerText = 'Displaying content for ' + section;
    });
});

// 返回按钮点击事件
document.getElementById('back-button').addEventListener('click', function() {
    // 显示欢迎界面并隐藏大窗口
    document.querySelector('.large-window').style.display = 'none';
    document.querySelector('.welcome-section').style.display = 'block';

    // 元素回归原位
    document.querySelector('.welcome-text').style.transform = 'translateX(0)';
    document.querySelector('.github-button').style.transform = 'translateX(0)';
    document.querySelector('.bottom-right-image').style.transform = 'translateX(0)';

    // 导航栏恢复原始大小
    document.querySelector('nav').classList.remove('shrink');
});

