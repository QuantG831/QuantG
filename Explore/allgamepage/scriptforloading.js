
  // Change colors dynamically
  setInterval(() => {
    const loader = document.querySelector('.loader');
    const innerDot = document.querySelector('.inner-dot');

    const colors = ['#ff4f4f', '#4fafff', '#4fff4f', '#ffaf4f'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    loader.style.borderTopColor = randomColor;
    loader.style.borderBottomColor = randomColor;
    innerDot.style.backgroundColor = randomColor;
}, 1000);