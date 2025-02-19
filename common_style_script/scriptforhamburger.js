
window.toggleMenu = function() {
    console.log("Hamburger clicked!");
    const sidebar = document.getElementById("sidebar");
    sidebar.style.right = sidebar.style.right === "0px" ? "-100%" : "0px";
};

