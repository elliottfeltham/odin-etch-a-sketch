const container = document.querySelector(".container");

// Function to create the grid
function createGrid(size) {
    let gridSize = size * size
    for (let i = 0; i < gridSize; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        container.append(gridBox);
    }
}

// Function to paint only when mouse is clicked down
function paint () {

    const allGridBoxes = document.querySelectorAll(".gridBox");

    let isMouseDown = false; 


    document.addEventListener("mousedown", function() {
        isMouseDown = true;  
    });


    document.addEventListener("mouseup", function() {
        isMouseDown = false; 
    });
        
        
    allGridBoxes.forEach((gridBox) => {
        gridBox.addEventListener("mouseover", function () {
            if (isMouseDown == true) {
            gridBox.style.backgroundColor = "black";
        }});
    });
}

createGrid(16);

paint();