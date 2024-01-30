// populate the canvas with the default value
document.addEventListener("DOMContentLoaded", () => {
    populateCanvas(25);
})

// populate the canvas with the user's input
let btn = document.querySelector("#submit");
btn.addEventListener("click", () => {
    populateCanvas(getUserInput());
})

// populate the canvas
function populateCanvas(gridNum) {
    
    const canvas = document.querySelector("#canvas");
    const squares = document.querySelectorAll(".grid-box");

    // remove all existing squares before repopulating
    squares.forEach((square) => square.remove());

    // define the size of the canvas
    canvasSize = 800
    canvas.style.width = `${canvasSize}px`;
    canvas.style.height = `${canvasSize}px`;

    // divide the canvas into so many grids
    for(let i = 0; i < gridNum**2; i++) {
        let gridBox = document.createElement("div");
        gridBox.className = "grid-box";

        // set the height and width properties of each box
        // and place it in the canvas
        gridBox.style.width = `${canvasSize / gridNum}px`;
        gridBox.style.height = `${canvasSize / gridNum}px`;
        
        // set the grid to change color on mouseover
        gridBox.onmouseover = (e) => color(gridBox);
        canvas.appendChild(gridBox);
    }
}

// get the user's input
function getUserInput() {
    const userInput = document.querySelector("#size").value;
        if (userInput <= 100 && userInput >= 2) {
            return userInput;
        } else {
            alert("Number must be between 2 and 100, canvas size defaulted to 25");
            return 25;
        }
}

// change color
function color(x) {
    x.style.backgroundColor = "white"
}
