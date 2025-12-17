const container = document.querySelector(".container");
let squares = undefined;
let gridSize = 0;
let globalColor = "#000000";
let rainbowModeActive = false;
let gradientModeActive = false;

const newGridButton = document.querySelector(".new-grid");
const colorInput = document.querySelector(".change-color");
const eraserButton = document.querySelector(".eraser");
const randomColorButton = document.querySelector(".random");
const rainbowModeButton = document.querySelector(".rainbow");
const gradientModeButton = document.querySelector(".gradient");
const clearButton = document.querySelector(".clear-grid");

function createGrid(size){
    resetGrid();
    gridSize = size;
    height = Math.floor(parseInt(container.getAttribute("width"))) / size;
    width = height;

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++)
        {
            const square = document.createElement("div");
            square.classList.add("square"); 
            square.style.display = "flex";
            square.setAttribute("style",`height: ${height}px; width: ${width}px`);
            square.style.backgroundColor = "#ffffff";
            square.style.flexShrink = "0"; 
            square.addEventListener("mouseenter", () => {
                if(rainbowModeActive){
                    square.style.backgroundColor = getRandomHexColor();
                }else if(gradientModeActive){
                    if (square.style.opacity === 1 ){
                        square.style.opacity = 0;
                    }else{
                        square.style.opacity = ((square.style.opacity * 10) + 1) / 10;
                    }
                }else{  
                    square.style.opacity = 1;
                    square.style.backgroundColor = globalColor;
                }
            });
            container.appendChild(square);
        }
    }

    squares = document.querySelectorAll(".square");
}

function clearGrid(){
    squares = document.querySelectorAll(".square");
    for(let i = 0; i < squares.length; i++){
        let square = squares[i];
        square.style.backgroundColor = "#ffffff";
    }
}

function resetGrid(){
    squares = document.querySelectorAll(".square");

    for(let i = 0; i < squares.length; i++){
        let square = squares[i];
        container.removeChild(square);
    }
}

function filterInput(){
    let input = parseInt(prompt("Please enter an integer 1 to 100 for the grid size."));

    if(isNaN(input)){
        alert("Input is not a number. Please input an number.");
    }else if (input > 100){
        alert("Input is greater than 100. Please try again.");
    }else if (input < 1){
        alert("Input is less than 1. Please try again.");
    }

    if(isNaN(input) || input > 100 || input < 1){
        input = 0;
    }

    return input;
}

function getRandomHexColor(){
    let randomColor = ""
    for(let i = 0; i < 6; i++){
        let randomDigit = Math.floor(Math.random() * 16);
        switch (randomDigit) {
            case 10:
                randomDigit = "A";
                break;
            case 11:
                randomDigit = "B";
                break;
            case 12:
                randomDigit = "C";
                break;
            case 13: 
                randomDigit = "D";
                break;
            case 14: 
                randomDigit = "E";
                break;
            case 15:
                randomDigit = "F";
                break;
            default:
                randomDigit;
        } 

        randomColor += randomDigit;
    }
    return "#" + randomColor;
}

function setColor(color){
    globalColor = color;
    colorInput.value = color;
}

clearButton.addEventListener("click", () => clearGrid());
colorInput.addEventListener("input", () => setColor(colorInput.value));
eraserButton.addEventListener("click", () => setColor("#ffffff"));
randomColorButton.addEventListener("click", () => {setColor(getRandomHexColor())});
rainbowModeButton.addEventListener("click", () => {
    rainbowModeActive = !rainbowModeActive;
    gradientModeActive = false;
});
gradientModeButton.addEventListener("click", () => {
    gradientModeActive = !gradientModeActive;
    rainbowModeActive = false;
});
newGridButton.addEventListener("click", () => createGrid(filterInput()));