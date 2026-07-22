// Smooth scroll for navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const href = this.getAttribute("href");

        if (href.startsWith("#")) {
            const section = document.querySelector(href);
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

// Hero button animation
const btn = document.querySelector(".btn");

setInterval(() => {
    btn.style.transform = "scale(1.08)";

    setTimeout(() => {
        btn.style.transform = "scale(1)";
    }, 500);

}, 2000);

// Card hover animation
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transition = "0.3s";
    });

});
