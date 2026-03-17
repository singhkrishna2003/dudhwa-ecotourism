/* Mobile menu */
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

/* Dropdown */
const dropdown = document.querySelector(".nav-dropdown");
if (dropdown) {
  const btn = dropdown.querySelector(".nav-drop-btn");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("open");
  });
}

/* Year */
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// ===== ACTIVE NAV LINK BASED ON CURRENT PAGE =====
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    // Remove previous active
    link.classList.remove("active");

    // Match current page
    if (linkPage === currentPage) {
      link.classList.add("active");
    }

    // Special case for Home (index.html)
    if (currentPage === "" && linkPage === "index.html") {
      link.classList.add("active");
    }
  });
});