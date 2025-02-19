
//script for footer
const footer = document.querySelector('.footer');

// Function to check when the page reaches the bottom
function checkFooterVisibility() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY;

  // If the page is at the bottom
  if (windowHeight + scrollPosition >= documentHeight) {
    footer.style.bottom = '0'; // Show the footer
  } else {
    footer.style.bottom = '-100px'; // Hide the footer
  }
}

// Listen for scroll events
window.addEventListener('scroll', checkFooterVisibility);

// Initial check on page load
checkFooterVisibility();