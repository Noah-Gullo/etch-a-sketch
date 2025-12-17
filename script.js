const container = document.querySelector(".container");
let squares = undefined;
let gridSize = 0;
let globalColor = "#00ff00";

const newGridButton = document.querySelector(".new-grid");
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
                square.style.backgroundColor = globalColor;
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

function setColor(color){
    globalColor = color;
}

clearButton.addEventListener("click", () => clearGrid());
newGridButton.addEventListener("click", () => createGrid(filterInput()));