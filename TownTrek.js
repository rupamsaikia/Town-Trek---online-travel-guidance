//  Toggle Mobile Navbar
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      console.log("Hamburger clicked"); // ✅ Test log
      navLinks.classList.toggle("active");
    });
  } else {
    console.error("Navbar elements not found!");
  }
});
