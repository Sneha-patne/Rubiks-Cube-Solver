const colors = [
    "yellow", "blue", "red",
    "orange", "green", "white"
];

let selectedColor = "yellow";
let currentStep = 0;

let solutionSteps = [
    "R",
    "U",
    "R'",
    "U'",
    "F",
    "R",
    "U",
    "F'"
];

let cubeColors = Array(9).fill("yellow");

const cube = document.getElementById("cube");

function renderCube() {
    cube.innerHTML = "";

    cubeColors.forEach((color, index) => {
        const sticker = document.createElement("div");

        sticker.className = "sticker";
        sticker.style.background = color;

        sticker.onclick = () => {
            cubeColors[index] = selectedColor;
            renderCube();
        };

        cube.appendChild(sticker);
    });
}

function renderColorPicker() {
    const picker = document.getElementById("color-picker");

    colors.forEach(color => {
        const circle = document.createElement("div");

        circle.className = "color";
        circle.style.background = color;

        circle.onclick = () => {
            selectedColor = color;
        };

        picker.appendChild(circle);
    });
}

function shuffleCube() {
    cubeColors = cubeColors.map(() =>
        colors[Math.floor(Math.random() * colors.length)]
    );

    renderCube();
    document.getElementById("solution-text").textContent =
        "Cube shuffled. Select Solve Cube for demo steps.";

    currentStep = 0;
    updateStep();
}

function resetCube() {
    cubeColors = Array(9).fill("yellow");
    currentStep = 0;
    renderCube();
    updateStep();

    document.getElementById("solution-text").textContent =
        "Cube reset.";
}

function solveCube() {
    currentStep = 0;

    document.getElementById("solution-text").textContent =
        "Demo solution: " + solutionSteps.join(" ");

    updateStep();
}

function updateStep() {
    document.getElementById("step").textContent =
        "Step: " + currentStep + " / " + solutionSteps.length;
}

function nextStep() {
    if (currentStep < solutionSteps.length) {
        currentStep++;
    }

    updateStep();
}

function previousStep() {
    if (currentStep > 0) {
        currentStep--;
    }

    updateStep();
}

renderCube();
renderColorPicker();
updateStep();