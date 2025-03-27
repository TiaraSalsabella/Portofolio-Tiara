document.addEventListener("DOMContentLoaded", function () {
    console.log("Portofolio Loaded!");
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("changing-text");
    const texts = ["UI/UX Designer", "Researcher", "Data Scientist", "Business Intelligence"];
    let index = 0;

    setInterval(() => {
        textElement.style.opacity = 0;
        setTimeout(() => {
            index = (index + 1) % texts.length;
            textElement.textContent = texts[index];
            textElement.style.opacity = 1;
        }, 500);
    }, 3000);

    const starsContainer = document.querySelector(".stars");
            for (let i = 0; i < 10; i++) {
                let star = document.createElement("div");
                star.classList.add("star");
                star.style.left = Math.random() * window.innerWidth + "px";
                star.style.top = Math.random() * -50 + "px";
                star.style.animationDuration = (Math.random() * 2 + 2) + "s";
                star.style.animationDelay = Math.random() * 3 + "s";
                starsContainer.appendChild(star);
            }
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
