const factBtn = document.getElementById("factBtn");
const factOutput = document.getElementById("factOutput");

if (factBtn && factOutput) {
    factBtn.addEventListener("click", function () {
        factOutput.textContent = "The Milky Way galaxy contains hundreds of billions of stars, including our Sun.";
    });
}

const saturnBtn = document.getElementById("saturnBtn");
const saturnOutput = document.getElementById("saturnOutput");

if (saturnBtn && saturnOutput) {
    saturnBtn.addEventListener("click", function () {
        saturnOutput.textContent = "Saturn is so large that more than 700 Earths could fit inside it.";
    });
}