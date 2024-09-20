let darkMode = false;

const toggle = document.querySelector(".button .toggle");
const circle = document.querySelector(".button .toggle .circle");
const root = document.querySelector(":root");

toggle.addEventListener("click", () => {
    if (darkMode) {
        circle.style.animation = "light 0.5s forwards";
        toggle.style.background = "hsl(230, 22%, 74%)";
        root.style.setProperty("--background", "hsl(0, 0%, 100%)");
        root.style.setProperty("--topBackground", "hsl(225, 100%, 98%)");
        root.style.setProperty("--cardBackground", "hsl(227, 47%, 96%)");
        root.style.setProperty("--paragraphs", "hsl(228, 12%, 44%)");
        root.style.setProperty("--headers", "hsl(230, 17%, 14%)");
        root.style.setProperty("--hover", "hsl(227, 47%, 90%)");
    } else {
        circle.style.animation = "dark 0.5s forwards"
        toggle.style.background = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
        root.style.setProperty("--background", "hsl(230, 17%, 14%)");
        root.style.setProperty("--topBackground", "hsl(232, 19%, 15%)");
        root.style.setProperty("--cardBackground", "hsl(228, 28%, 20%)");
        root.style.setProperty("--paragraphs", "hsl(0, 0%, 100%)");
        root.style.setProperty("--headers", "hsl(228, 34%, 66%)");
        root.style.setProperty("--hover", "hsl(228, 28%, 30%)");
    }

    darkMode = !darkMode;
});