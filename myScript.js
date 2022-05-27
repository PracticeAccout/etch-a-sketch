// Get grid node reference
const theGrid = document.getElementById('main-container');


// Make a 16x16 grid of square divs
// Create two loops:  
for (let outer = 0; outer < 16; outer++){  // For each iteration of the outer loop, the inner loop will iterate 16 times
    for (let inner = 0; inner < 16; inner++){ 
        let newDiv = document.createElement('div'); // For each iteration of the inner lop, create a div element
        newDiv.classList.add('eachDiv'); // Add to it the eachDiv class
        theGrid.appendChild(newDiv);
    }
    // For each iteration of the outer loop, a break div has to be inserted:
    // Create breakDiv element
    let breakDiv = document.createElement('div');
    breakDiv.classList.add('break');
    theGrid.appendChild(breakDiv);    
}
