const bg = document.getElementById('bg-animation');

document.addEventListener('mousemove', (e) => {
    // حساب موقع الماوس بالنسبة المئوية
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    // تحديث متغيرات CSS لتحريك التدرج اللوني (Gradient)
    bg.style.setProperty('--x', x + '%');
    bg.style.setProperty('--y', y + '%');
});