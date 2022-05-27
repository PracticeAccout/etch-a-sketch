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
>   * Get the total number of squares = 16 * 16 = 256 squares  
>   * Get area of each square:
>        - Divide the total area of the big square: 552*552 = 304704
>          between the total number of squares: 304704 / 256.
           That will give me the are of each square: 1190.25
>   * Get height of each square: sqrt 1190  = 34
>   * Width will be guarantied by the flex-grow property.        
