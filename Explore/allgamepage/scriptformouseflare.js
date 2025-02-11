
document.addEventListener("mousemove", (e) => {
    let sparkCount = Math.floor(Math.random() * 5) + 3; // 3 to 7 sparks per movement

    for (let i = 0; i < sparkCount; i++) {
        let spark = document.createElement("div");
        spark.classList.add("spark");

        let size = Math.random() * 6 + 4; // Random size between 4px and 10px
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;

        let xOffset = (Math.random() - 0.5) * 50; // Random horizontal movement
        let yOffset = (Math.random() - 0.5) * 50; // Random vertical movement

        spark.style.setProperty("--x-move", `${xOffset}px`);
        spark.style.setProperty("--y-move", `${yOffset}px`);

        spark.style.left = `${e.pageX}px`;
        spark.style.top = `${e.pageY}px`;

        document.body.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 500);
    }
});