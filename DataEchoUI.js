// JavaScript用于添加点击事件监听器，改变点击的链接样式
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('#nav a'); // 获取所有导航链接
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('highlight-1')); // 移除所有链接的高亮样式
            this.classList.add('highlight-1'); // 为点击的链接添加高亮样式
        });
    });
});