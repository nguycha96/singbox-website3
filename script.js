const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const open = mainNav.classList.toggle('open');

        menuToggle.setAttribute(
            'aria-expanded',
            String(open)
        );

        menuToggle.textContent =
            open ? '×' : '☰';
    });


    mainNav.querySelectorAll('a').forEach((link) => {

        link.addEventListener('click', () => {

            mainNav.classList.remove('open');

            menuToggle.setAttribute(
                'aria-expanded',
                'false'
            );

            menuToggle.textContent = '☰';
        });

    });
}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealTargets = document.querySelectorAll(
    '.experience-card, ' +
    '.feature-copy, ' +
    '.feature-image, ' +
    '.menu-block, ' +
    '.room-card, ' +
    '.events-block, ' +
    '.after-dark-copy, ' +
    '.after-dark-image'
);


revealTargets.forEach((element) => {

    element.style.opacity = '0';

    element.style.transform =
        'translateY(18px)';

    element.style.transition =
        'opacity 500ms ease, transform 500ms ease';

});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                entry.target.style.opacity = '1';

                entry.target.style.transform =
                    'translateY(0)';


                observer.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.12
        }
    );


revealTargets.forEach((element) => {

    revealObserver.observe(element);

});
