document.addEventListener("DOMContentLoaded", () => {
    // Fade-in effect for sections
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach((section) => {
        section.classList.add("fade-in");
        observer.observe(section);
    });

    // Toggle navigation menu
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuLinks = menu.querySelectorAll('a');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Hide menu and highlight clicked link
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Hide the menu
            menu.classList.remove('show');

            // Remove active class from all links
            menuLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            e.target.classList.add('active');
        });
    });

});
