const container = document.querySelector(".container");

function createGrid(size){
    height = Math.floor(parseInt(container.getAttribute("width"))) / size;
    width = height;

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++)
        {
            const square = document.createElement("div");
            square.style.display = "flex";
            square.setAttribute("style",`height: ${height}px; width: ${width}px`);
            square.style.backgroundColor = "white";
            square.style.flexShrink = "0"; 
            container.appendChild(square);
        }
        
    }
}

createGrid(5);