document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbar = document.querySelector(".Navbar");

    if (navbarToggle && navbar) {
        navbarToggle.addEventListener("click", function() {
            navbar.classList.toggle("active");
            console.log("Toggle button clicked");
        });
    } else {
        console.error("Navbar toggle button or Navbar not found");
    }
});
