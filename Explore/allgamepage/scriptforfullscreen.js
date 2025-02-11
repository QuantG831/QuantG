
const iframe = document.getElementById('game-frame');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const icon = document.getElementById('icon');

fullscreenBtn.addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen().then(() => {
                // Focus the iframe after entering fullscreen
                iframe.contentWindow.focus();
            });
        } else if (iframe.mozRequestFullScreen) { // Firefox
            iframe.mozRequestFullScreen().then(() => {
                iframe.contentWindow.focus();
            });
        } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            iframe.webkitRequestFullscreen().then(() => {
                iframe.contentWindow.focus();
            });
        } else if (iframe.msRequestFullscreen) { // IE/Edge
            iframe.msRequestFullscreen().then(() => {
                iframe.contentWindow.focus();
            });
        }
        icon.textContent = '⤵'; // Return icon
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        icon.textContent = '⛶'; // Fullscreen icon
    }
}

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        icon.textContent = '⛶'; // Fullscreen icon
    }
});