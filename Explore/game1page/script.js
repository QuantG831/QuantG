//javascript for social icons
document.addEventListener('DOMContentLoaded', () => {
    const uniqueButton = document.getElementById('unique-button');
    const uniqueSocialIcons = document.getElementById('unique-social-icons');

    // Toggle visibility of social icons on button click
    uniqueButton.addEventListener('click', () => {
        uniqueSocialIcons.classList.toggle('show');
    });
});


//script for navigaion bar

let lastScrollPosition = 0;
const navbar = document.querySelector('.navigation-bar');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down: hide the navbar
        navbar.style.top = '-100px';
    } else {
        // Scrolling up: show the navbar
        navbar.style.top = '0';
    }

    lastScrollPosition = currentScrollPosition;
});



//script for screen
const gameArea = document.getElementById("game-area");
const fullscreenToggleBtn = document.getElementById("fullscreen-toggle");
const iframe = document.getElementById("game-frame");

// Function to toggle fullscreen mode
fullscreenToggleBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    gameArea.requestFullscreen();
    fullscreenToggleBtn.textContent = "↩"; // Change to exit fullscreen icon
  } else {
    document.exitFullscreen();
    fullscreenToggleBtn.textContent = "⛶"; // Change back to fullscreen icon
  }
});

// Handle Fullscreen Change
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    iframe.focus(); // Focus on the iframe when going fullscreen
  } else {
    iframe.focus(); // Focus on the iframe when exiting fullscreen
    fullscreenToggleBtn.textContent = "⛶"; // Reset to fullscreen icon when exiting fullscreen
  }
});

    //script for staytuned
document.addEventListener("DOMContentLoaded", () => {
    const staytuned = document.querySelector('.staytuned');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                staytuned.classList.add('visible'); // Add the visible class when in view
            } else {
                staytuned.classList.remove('visible'); // Remove the visible class when out of view
            }
        });
    }, {
        threshold: 0.7 // Trigger when 10% of the element is visible
    });

    observer.observe(staytuned); // Start observing the staytuned div
});


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