document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面的URL路径
    const currentPath = window.location.pathname;
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // 遍历所有导航链接
    navLinks.forEach(link => {
        // 获取链接的href属性
        const href = link.getAttribute('href');
        // 如果当前页面的路径包含链接的href，则添加active类
        if (currentPath.includes(href)) {
            link.classList.add('active');
        }
    });
});
function showContact() {
  document.getElementById('contactPopup').classList.remove('hidden');
}

function hideContact() {
  document.getElementById('contactPopup').classList.add('hidden');
}