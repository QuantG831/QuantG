let gameArea = document.getElementById("gameArea");
let ship = document.querySelector(".ship");
let scoreDisplay = document.getElementById("score");
let score = 0;

document.addEventListener("mousemove", (e) => {
    let x = e.clientX - ship.offsetWidth / 2;
    ship.style.left = `${x}px`;
});

document.addEventListener("click", () => {
    let bullet = document.createElement("div");
    bullet.classList.add("bullet");
    
    // Bullet spawns exactly in the center of the spaceship
    bullet.style.left = `${ship.offsetLeft + (ship.offsetWidth / 2) - (5 / 2)}px`;
    bullet.style.bottom = `70px`;
    
    gameArea.appendChild(bullet);

    let bulletInterval = setInterval(() => {
        bullet.style.bottom = `${parseInt(bullet.style.bottom) + 10}px`;
        if (parseInt(bullet.style.bottom) > window.innerHeight) {
            bullet.remove();
            clearInterval(bulletInterval);
        }
    }, 30);
});

function createAsteroid() {
    let asteroid = document.createElement("div");
    asteroid.classList.add("asteroid");
    asteroid.style.left = `${Math.random() * window.innerWidth}px`;
    asteroid.style.top = `-40px`;
    gameArea.appendChild(asteroid);

    let asteroidInterval = setInterval(() => {
        asteroid.style.top = `${parseInt(asteroid.style.top) + 5}px`;

        if (parseInt(asteroid.style.top) > window.innerHeight) {
            asteroid.remove();
            clearInterval(asteroidInterval);
        }

        let shipRect = ship.getBoundingClientRect();
        let asteroidRect = asteroid.getBoundingClientRect();

        // Collision detection: Asteroid hits ship
        if (
            asteroidRect.left < shipRect.right &&
            asteroidRect.right > shipRect.left &&
            asteroidRect.top < shipRect.bottom &&
            asteroidRect.bottom > shipRect.top
        ) {
            score = 0; // Reset score to zero
            scoreDisplay.innerText = `Score: ${score}`;
            asteroid.remove();
            clearInterval(asteroidInterval);
        }

        document.querySelectorAll(".bullet").forEach((bullet) => {
            let bulletRect = bullet.getBoundingClientRect();

            if (
                bulletRect.left < asteroidRect.right &&
                bulletRect.right > asteroidRect.left &&
                bulletRect.top < asteroidRect.bottom &&
                bulletRect.bottom > asteroidRect.top
            ) {
                asteroid.remove();
                bullet.remove();
                clearInterval(asteroidInterval);
                score++;
                scoreDisplay.innerText = `Score: ${score}`;
            }
        });

    }, 50);
}

setInterval(createAsteroid, 1500);

