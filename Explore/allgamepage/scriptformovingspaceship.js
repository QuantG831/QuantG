
let spaceship = document.querySelector('.spaceship');
let flare = document.querySelector('.flare');

let radius = 1000; // Change this value to increase/decrease the size of the circular path
let angle = 0; // Initial angle (in radians)
let centerX = -100; // Change this to move the center X position of the circle
let centerY = -100; // Change this to move the center Y position of the circle
let pathSpeed = 0.02; // Controls how fast the spaceship moves along the path

function animateSpaceship() {
    angle -= pathSpeed; // Moves the spaceship counterclockwise

    let x = centerX + radius * Math.cos(angle); // Calculates X position
    let y = centerY + radius * Math.sin(angle); // Calculates Y position

    spaceship.style.left = `${x - spaceship.offsetWidth / 2}px`; // Update spaceship X position
    spaceship.style.top = `${y - spaceship.offsetHeight / 2}px`; // Update spaceship Y position
    
    let rotationAngle = angle * (180 / Math.PI);
    spaceship.style.transform = `rotate(${rotationAngle}deg)`;
    
    // Position the flare at the bottom of the spaceship
    let flareOffsetX = Math.cos(angle + Math.PI / 2) * 30;
    let flareOffsetY = Math.sin(angle + Math.PI / 2) * 30;
    
    flare.style.left = `${x + flareOffsetX}px`;
    flare.style.top = `${y + flareOffsetY}px`;
    flare.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
    
    requestAnimationFrame(animateSpaceship); // Keep animating
}

animateSpaceship(); // Start the animation