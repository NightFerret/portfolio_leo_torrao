document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.getElementById("menuToggle");
    const menuClose = document.getElementById("menuClose");

    // Update hamburger visibility
    function updateHamburger() {
        menuToggle.classList.toggle(
            "visible",
            sidebar.classList.contains("hidden")
        );
    }

    // Hamburger: open sidebar
    menuToggle.addEventListener("click", () => {
        sidebar.classList.remove("hidden");
        updateHamburger();
    });

    // X: close sidebar
    menuClose.addEventListener("click", () => {
        sidebar.classList.add("hidden");
        updateHamburger();
    });

    // Initial state: sidebar visible, hamburger hidden
    updateHamburger();
});