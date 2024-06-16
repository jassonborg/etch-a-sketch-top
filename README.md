# Etch a Sketch TOP Project

## Project Overview

This project involves creating a webpage with a 16x16 grid of square `div` elements. The `div` elements are created dynamically using JavaScript and styled using Flexbox. This project focuses on practicing Flexbox layout techniques, so CSS Grid is not used.

## Features

- **Dynamic Grid Creation:** The grid squares are created using JavaScript, not manually in the HTML file.
- **Flexbox Layout:** The squares are arranged in a grid layout using Flexbox.
- **Interactive Squares:** Squares change color when hovered over, simulating a drawing effect.
- **Dynamic Grid Size Adjustment:** A button allows the user to input the number of squares per side for a new grid, which replaces the existing grid.

## Instructions

1. **Create the Grid:**
   - Use JavaScript to create a 16x16 grid of square `div` elements.
   - Place these `div` elements inside a container `div` in your HTML file.
   - Use Flexbox to style the `div` elements as a grid.

2. **Set Up the HTML:**
   - Ensure your CSS stylesheet is linked.
   - Create the necessary `div` containers in your HTML file.

3. **Handle Potential Issues:**
   - If the grid is not being created, check the following:
     - Is your CSS stylesheet linked correctly?
     - Are there any errors in the JavaScript console?
     - Check the elements panel in the developer tools to see if the `div` elements are present but hidden.
     - Use `console.log` statements in your JavaScript to debug.

4. **Add Hover Effect:**
   - Use event listeners to change the color of the `div` elements when the mouse hovers over them.

5. **Add a Button for Grid Size Adjustment:**
   - Create a button that prompts the user to enter the number of squares per side for a new grid.
   - Ensure the new grid maintains the same total size as the original (e.g., 960px wide).
   - Limit the user input to a maximum of 100 to avoid performance issues.

6. **Push to GitHub:**
   - Push your project to a GitHub repository.

## Extra Credit

- **Randomize Colors:** Make each square change to a random RGB color on hover.
- **Darken Squares:** Implement a progressive darkening effect where each interaction darkens the square by 10%, turning completely black after ten interactions.
