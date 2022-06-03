# etch-a-sketch
[Live Demo](https://practiceaccout.github.io/etch-a-sketch/)
![etch-a-sketch](https://user-images.githubusercontent.com/99272318/171836694-02cee1db-f427-4f37-a82e-bcba4819a3f9.png)

## Requirements
### Non-Functional Requirements
1.  Create a webpage with a 16x16 grid of square divs

### Functional Requirements
1. Create a function call `makeGrid()`:
>   * Create two loops: outer | inner
>   * For each iteration of the outer loop, the inner loop will iterate 16 times:
    
    outer: 1
    inner: 1, 2, 3, 4...16

>   * For each iteration of the outer loop, a break div has to be inserted:

    outer: 1
    break insertion
    outer: 2
    break insertion

>   * For each iteration of the inner lop, create a div element and update
      its height to the corresponding according to the formula below.
>   * The function should create a 16x16 grid of square divs
>   * Create a function called `gridsHeight()`
>       
    - Get the total number of squares = x * x = x² squares  
    - Get area of each square:
        - Divide the total area of the big square: 552*552 = 304704
          between the total number of squares: 304704 / x².
        - That will give me the area of each square: 
      Get height of each square: sqrt of (304704 / x²)  
>   * Width will be guarantied by the flex-grow property.  

2. Set up a 'hover' effect so that each div-grid change color
when the mouse passes over them, leaving a (pixelated) trail through
your grid like a pen would.
>   * Get a reference of every div-grid
>   * Set up an event listener that change the background color of
    the div-grid you're hovering over.

    Bottleneck: 
        - You have to choose between an HTMLCollection or a NodeList, as
        every time the big square is updated, new grid-divs are added and
        you need to keep track of all of them. 
        Solution: Create an event handler for every time a new square is
        generated (inside the makeGrid() function)

>   * Let's use for now the toggle() method of the classList property
3. Create a load event that call the `makeGrid()` function at leat onces
   every time the page is loaded.  
4. Add a button to the top of the screen. 
>   * The button should pop up a box asking the user for the number of
      square per side for the grid. Once entered, the existing grid 
      should be removed and a new grid should be generated in the same
      total space as before. 
      Tip: Set limit ot a maximum of 100 squares. 
5. Generate random RGB values every time the mouse hover over the 
grid
>   * Info: RGB values: (red, green, blue)-intensity as an integer between 0 and 255
>   * Inside the changeColor() function, add a loop that generates three
      random numbers between 0 and 255 (both included).
>   * Join those with the "rgb" and the parentheses chars "()" and create 
      a string with the format: "rgb(number, number, number)"
>   * Update the color property of the corresponding (clicked) grid
6. Add 10% of black if the clicked div-grid has already a color   
>   * Extract the color values
>   * Get 10% of each value for each click and subtracts that value from
      the original one
>   * Create an array with each one of the new values  
>   * Return them as a rgb value         
  

## Refactor
### Non-Functional Requirements
1. Create a control panel to the left of the page
>   * Create a grid selector panel:


2. Change how the big grid looks like
>   * Remove the border of the big box
>   * Add shadow to it
>   * Remove the border of each div-grid
>   * If more than one div-grid
>      - Add white border (the purpose is not to show the borders)

3. Add a grid size controller in the form of a range input
4. Add a button that toggle one color mode
5. Add a button that toggle the going black mode
6. Add a button that erase all of the grid
7. Add a clear button



### Functional Requirements
1. Update grid size
>   * Get reference of range node: sizeOfGrid
>   * Create an event handler for every time the range input change
      (here I'm going to use a Global Event Handler, the onchange property of the HTMLElement)  
2. Button that toggle the `one color mode`  
>   * Get button reference
>   * On hover, get bigger (CSS)
>   * Add event handler: If activate it
       - Change button's appearance
         - Background black, letter white
         - Remove any other clicked button
       - changeColor() function should check if color mode is
   active.
       - If Color Mode active 
          - Click over grid will return the color in the color selector     
3. Button that toggle `goingBlack` mode:
>   * Get button reference
>   * On hover, get bigger (CSS)
>   * Add event handler: If activate it
       - Change button's appearance
         - Background black, letter white
         - Remove any other clicked button
       - changeColor() function should check if goingBlack mode is
   active.
         - If active:
           - but grid has no color, default (rainbow coloring) will run. Then the goingBlack.
           - and grid has color, each click over the grid will add a 10% of black to each rgb value
4. Eraser button
>    * Get button reference
>    * Change button's appearance on hover
>    * Add event handler. If activate it:
       - Change button's appearance
         - Background black, letter white
         - Remove any other clicked button
       - changeColor() should check if eraser button is active
         - If active:
           - every click will change color to body color: beige
5. Clear button
>    * Get button reference
>    * Change button's appearance on hover
>    * Add event handler. If clicked:
       - call clearGrid: clearGrid get number of grids and call getNumber
