const container = document.querySelector(".container");
let squares = undefined;
let gridSize = 0;

const newGridButton = document.querySelector(".new-grid");
const clearButton = document.querySelector(".clear-grid");

function createGrid(size){
    deleteGrid();
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
            if((i + j) % 2 == 0 ){
                square.style.backgroundColor = "pink";
            }
            square.style.flexShrink = "0"; 
            container.appendChild(square);
        }
    }

    squares = document.querySelectorAll(".square");
}

function deleteGrid(){
    squares = document.querySelectorAll(".square");
    for(let i = 0; i < squares.length; i++){
        let square = squares[i];
        container.removeChild(square);
    }
}

clearButton.addEventListener("click", () => deleteGrid());
newGridButton.addEventListener("click", () => createGrid(parseInt(prompt("Num 1-100"))));