document.addEventListener('DOMContentLoaded', () => {
    // --- Side Navigation Logic --- //
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sideNav = document.getElementById('side-nav');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    const openNav = () => {
        sideNav.classList.add('open');
        overlay.classList.add('show');
    };

    const closeNav = () => {
        sideNav.classList.remove('open');
        overlay.classList.remove('show');
    };

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', openNav);
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', closeNav);
    }
    if (overlay) {
        overlay.addEventListener('click', closeNav);
    }

    // --- Home Page Hero Slider Logic --- //
    const heroImage = document.getElementById('hero-image');
    const heroText = document.getElementById('hero-location-text');


    if (heroImage && heroText) {
        const images = [
            '../img/home/mhome1.png',
            '../img/home/mhome2.png',
            '../img/home/mhome3.png',
            '../img/home/mhome4.png'
        ];
        const texts = ['', '', '', ''];
        let currentIndex = 0;

        const changeHeroContent = () => {
            heroImage.style.opacity = 0;
            heroText.style.opacity = 0;

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                heroImage.src = images[currentIndex];
                heroText.textContent = texts[currentIndex];

                heroImage.style.opacity = 1;
                heroText.style.opacity = 1;
            }, 500); 
        };

        setInterval(changeHeroContent, 4000);
    }
});


