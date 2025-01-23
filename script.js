const container = document.querySelector(".container");
const gridSizeButton = document.querySelector("#grid-size")
const rainbowModeButton = document.querySelector("#rainbow-mode")

let isRainbowMode = false;


// Function to prompt the user for a grid size
function getGridSize() {
    let gridSize
    do {
       gridSize = prompt("Select a grid size between 0 and 100!");

    
       if (gridSize === null) {
        return null;
       }
    } while (gridSize < 1 || gridSize > 100 || isNaN(gridSize));

    return gridSize
}

// Function to get a rainbow color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create the grid
function createGrid(size) {
    let totalSize = size * size
    for (let i = 0; i < totalSize; i++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        gridBox.style.height = `${100 / size}%`;
        gridBox.style.width = `${100 / size}%`;
        container.append(gridBox);
    }

    paint();
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
                if (isRainbowMode == true) {
                    gridBox.style.backgroundColor = getRandomColor();
                } else {
                    gridBox.style.backgroundColor = "black";
                }
        }});
    });
}

// Function to reset canvas to white  
function resetGrid() {
    const allGridBoxes = document.querySelectorAll(".gridBox");
    
    allGridBoxes.forEach((gridBox) => {
            gridBox.style.backgroundColor = "white";
})};

  
gridSizeButton.addEventListener("click", () => {
    container.innerHTML = "";
    let gridSize = getGridSize();
    createGrid(gridSize);
});

rainbowModeButton.addEventListener("click", () => {
    isRainbowMode = !isRainbowMode;
    rainbowModeButton.textContent = isRainbowMode
        ? "Rainbow Mode: ON"
        : "Rainbow Mode: OFF"; 
    
        rainbowModeButton.style.background = isRainbowMode
        ? "linear-gradient(red, orange, yellow, green, blue, indigo, violet)"
        : "var(--background-dark)";
    
});

