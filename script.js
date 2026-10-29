// ① 找到按钮
const btn = document.querySelector('#theme-toggle');

// ② 打开页面时：先看看上次选的是什么
const saved = localStorage.getItem('theme');

if (saved === 'dark') {
    document.documentElement.classList.add('dark');
}

// ③ 点按钮：切换 + 记住
btn.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});