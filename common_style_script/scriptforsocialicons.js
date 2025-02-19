    
  //javascript for social icons
  document.addEventListener('DOMContentLoaded', () => {
    const uniqueButton = document.getElementById('unique-button');
    const uniqueSocialIcons = document.getElementById('unique-social-icons');

    // Toggle visibility of social icons on button click
    uniqueButton.addEventListener('click', () => {
        uniqueSocialIcons.classList.toggle('show');
    });
});
