
//javascript for the contact form
const form = document.querySelector('.custom-contact-form');
const submitButton = document.querySelector('.custom-button');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Disable the submit button to prevent multiple submissions
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // You could use fetch or Formspree's own method for submitting here.
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message! We will get back to you soon.');
            form.reset();
        } else {
            alert('Oops! Something went wrong.');
        }
    })
    .catch(error => alert('Oops! Something went wrong.'));
});