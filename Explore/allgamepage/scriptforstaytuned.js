
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