document.querySelector('.menu-toggle').addEventListener('click', () => {
    const menu = document.querySelector('header nav ul');
    menu.classList.toggle('menu-open');
    menu.style.transition = 'transform 0.3s ease';
});