
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('sidebar');
    const backToTop = document.getElementById('backToTop');
    
    /* Sidebar Navigation Logic */
    if (toggle && sidebar) {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            sidebar.classList.toggle('active');
            const icon = toggle.querySelector('span');
            if (icon) {
                icon.textContent = sidebar.classList.contains('active') ? '✕' : '☰';
            }
        });
    }

    /* Scroll Visibility Logic */
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (backToTop) {
            if (scrolled > 300) {
                backToTop.style.display = "flex";
                backToTop.style.alignItems = "center";
                backToTop.style.justifyContent = "center";
            } else {
                backToTop.style.display = "none";
            }
        }
    }, { passive: true });
    
    /* Back to Top Logic */
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0, 
                behavior: 'smooth'
            });
        });
    }

    /* Mobile Sidebar Auto-close Logic */
    const links = document.querySelectorAll('.nav-menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992 && sidebar && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                const icon = toggle ? toggle.querySelector('span') : null;
                if (icon) icon.textContent = '☰';
            }
        });
    });

    /* Mobile Viewport Height Logic */
    const setVh = () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setVh);
    setVh();
});
