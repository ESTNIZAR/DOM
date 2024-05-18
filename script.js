// Function to generate a random hexadecimal color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Add event listener to the button
    changeColorBtn.addEventListener('click', function() {
        // Change the background color of the color box
        colorBox.style.backgroundColor = getRandomColor();
    });
});
