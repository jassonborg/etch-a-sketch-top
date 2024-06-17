function buildGrid(size, gridElement) {
    const gridSize = 500;
    
    const cellSize = gridSize / size;
  
    // Set CSS variables on gridElement
    gridElement.style.setProperty('--grid-width', `${gridSize}px`);
    gridElement.style.setProperty('--grid-height', `${gridSize}px`);
  
    let squares = new DocumentFragment();
  
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        
        // Calculate and set square size dynamically
        let squareSize = `${cellSize}px`;
        square.style.setProperty('--square-size', squareSize);
        square.style.setProperty('--square-height', squareSize);
  
        //Mouse hover in and out
        square.addEventListener('mouseover',() => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
          })
        
          square.addEventListener('mouseout',() => {
            square.style.backgroundColor = '';
          })
  
        squares.appendChild(square);
    }
    gridElement.innerHTML = '';
    gridElement.appendChild(squares);
  }
  
  
  function promptGridSize() {
      let newSize = prompt('Enter number of squares per side (max 100):');
      newSize = parseInt(newSize);
  
      if (newSize && newSize > 0 && newSize <= 100) {
          buildGrid(newSize, document.querySelector('.grid'));
      } else {
          alert('Please enter a valid number between 1 and 100.');
          promptGridSize();
      }
  }
  
  document.getElementById('newButton').addEventListener('click', promptGridSize);
  
  // Default grid
  document.addEventListener('DOMContentLoaded', function() {
      buildGrid(16, document.querySelector('.grid')); 
  });