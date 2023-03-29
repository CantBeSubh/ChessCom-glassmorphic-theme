// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function (event) {
    // Find the elements with the .container class

    const containers = document.querySelectorAll('.nav-panel-component');
    // Loop through each element and add the .glassmorphic class
    containers.forEach((container) => {
        container.classList.add('glassmorphic');
    });
});
