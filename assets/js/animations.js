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
    document.getElementById('menu-toggle').addEventListener('click', function () {
        document.getElementById('menu').classList.toggle('show');
    });
});
