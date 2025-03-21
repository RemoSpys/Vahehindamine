function initHeaderMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.overlay');

    if (!menuToggle || !mobileNav || !overlay) return; // safeguard if elements aren't present

    function closeMenu() {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    overlay.addEventListener('click', closeMenu);
    document.querySelectorAll('.mobile-nav nav a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") closeMenu();
    });
}
