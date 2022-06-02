// Create function gridsHeight
function gridsHeight(gridNumber){
    const BIG_SQUARE_AREA = Math.pow(450, 2);
    const squareTotal = Math.pow(gridNumber, 2);
    const THIS_HEIGHT = Math.sqrt(BIG_SQUARE_AREA / squareTotal);
    return THIS_HEIGHT;
}

// Make a YxY grid of square divs
// Create two loops:  
function makeGrid(gridNumber = 1){
    const THIS_HEIGHT = gridsHeight(gridNumber); // Get height of each div-grid according to number of grids
    for (let outer = 0; outer < Number(gridNumber); outer++){  // For each iteration of the outer loop, the inner loop will iterate 16 times
        for (let inner = 0; inner < Number(gridNumber); inner++){ 
            let newDiv = document.createElement('div'); // For each iteration of the inner lop, create a div element
            newDiv.classList.add('eachDiv'); // Add to it the eachDiv class
            newDiv.style.height = THIS_HEIGHT.toString() + "px"; // Convert height to string and pass it with its units
            theGrid.appendChild(newDiv);
        }
        if (gridNumber > 1){
            // For each iteration of the outer loop, a break div has to be inserted:
            // Create breakDiv element
            let breakDiv = document.createElement('div');
            breakDiv.classList.add('break');
            theGrid.appendChild(breakDiv);
        }
    }
    allDivGrid = theGrid.querySelectorAll('.eachDiv');
    allDivGrid.forEach(div => div.addEventListener('click', changeColor));
    allDivGrid.forEach(div => div.style.border = "0.1em solid #ffffff"); // add white border to all div-grids   
    // console.log(allDivGrid[0].style);
    return;
}


// Create goingBlack()
// The function add the rgb values a 10% of black
function goingBlack(e){
    // Extract the color values
    let rgbValue = e.target.style.backgroundColor.split(",");
    // Get only numbers from the rgbValue and put them in a string
    let stringRgbValues = "";
    for (eachChar of rgbValue){
        stringRgbValues += eachChar.trim().match(/[0-9]/g).join("") + ",";
    }
    // Convert the stringRgbValues into an arrayRGBValues
    let arrayRGBValues = stringRgbValues.split(",").slice(0, 3);
    // Lets get 10% of each value in the array and create a new array
    // subtracting that value of the original value
    let finalColorsArray = [];
    for (eachNumber of arrayRGBValues){
        if (eachNumber == 0){
            finalColorsArray.push(eachNumber);
            continue;
        }
        finalColorsArray.push(eachNumber - ((eachNumber * 10) / 100).toFixed(0))
    } 
    console.log(finalColorsArray);
    // Create final rgb string value
    let finalColors = "";
    finalColors = finalColorsArray.join(",");
    finalColors = "rgb(" + finalColors + ")";
    return e.target.style.backgroundColor = finalColors;  // change colors to a 10% more black total 
}

// Rainbow mode will be active by default
// Create changeColor() function
function changeColor(e){
    e.stopPropagation();
    // 
    if (oneColorBtn.classList.length > 0){
        return e.target.style.backgroundColor = oneColorSelector.value;
    }
    if (e.target.style.backgroundColor != "" && goingBlackBtn.classList.length > 0){
        return goingBlack(e);
    }
    // Lets generate 3 random numbers each one between 0
    // and 256
    let colorArr = [];
    let color = "";
    for (let num = 0; num < 3; num++){
        let rand = Math.floor(Math.random() * 256);
        colorArr.push(rand);
    }
    // Create final rgb string value
    color = colorArr.join(",");
    color = "rgb(" + color + ")";
    return e.target.style.backgroundColor = color;
}

// getNumber ask the user for a number for the grid
// and remove all elements of the main-container
function getNumber(thisNumber){
    // Remove every grid-div from the old big grid before 
    while (theGrid.hasChildNodes()){ 
        theGrid.removeChild(theGrid.firstChild) 
    }
    // Generating the new one
    makeGrid(thisNumber); 
}


// Call the function makeGrid at least once every time the page is loaded
window.onload = function(){
    makeGrid(sizeOfGrid.value);
};


// ==========REFERENCES========================
// Get grid node reference
const theGrid = document.getElementById('main-container');


// Get reference of each div-grid
// Use a live nodeList instead of a static one
// as grids will be constantly updated  
let allDivGrid = theGrid.querySelectorAll('.eachDiv');
// For every grid-div with the pointer over it, 
// call the function changeColor()
allDivGrid.forEach(div => div.addEventListener('click', changeColor));


// Get reference of range node
const sizeOfGrid = document.getElementById('sizeOfGrid');
// Call makeGrid() function through the getNumber() function
sizeOfGrid.onchange = (e) => getNumber(e.target.value);

// Get reference of value of grid text
const sizeValue = document.getElementById('sizeValue');
// Update the text every time a grid is generated
sizeOfGrid.onmousemove = (e) => sizeValue.textContent = `${e.target.value} x ${e.target.value}`;

// Get one color mode button reference
const oneColorBtn = document.getElementById('oneColorBtn');
// Toggle the button when clicked
oneColorBtn.onclick = e => {
    e.target.classList.toggle('oneColorBtn-active');
    // Remove active state from goingBlackBtn
    if (goingBlackBtn.classList.length > 0){
        goingBlackBtn.removeAttribute('class');
    }
}

// Get reference of color selector
const oneColorSelector = document.getElementById('oneColor');
// Get reference of goingBlack button
const goingBlackBtn = document.getElementById('goingBlack');
goingBlackBtn.onclick = e => {
    e.target.classList.toggle('goingBlack-active');
    // Remove active state from oneColorBtn
    if (oneColorBtn.classList.length > 0){
        oneColorBtn.removeAttribute('class');
    }
} 

