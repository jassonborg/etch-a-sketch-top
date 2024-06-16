function buildGrid(x, y, cellSize, gridElement) {
    // Calculate the dimensions based on cellSize
    let gridWidth = x * cellSize;
    let gridHeight = y * cellSize;

    // Set CSS variables on gridElement
    gridElement.style.setProperty('--grid-width', `${gridWidth}px`);
    gridElement.style.setProperty('--grid-height', `${gridHeight}px`);

    let squares = new DocumentFragment();

    for (let i = 0; i < x * y; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        
        // Calculate and set square size dynamically
        let squareSize = `${cellSize}px`;
        square.style.setProperty('--square-size', squareSize);
        square.style.setProperty('--square-height', squareSize);

        squares.appendChild(square);
    }

    gridElement.appendChild(squares);
}

buildGrid(16, 16, 30, document.querySelector('.grid'));