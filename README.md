# etch-a-sketch
[Live Demo]()
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
         
