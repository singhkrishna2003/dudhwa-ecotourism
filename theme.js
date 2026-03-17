document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("themeToggle");
  const root = document.documentElement;

  if (!toggleBtn) return;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme") || "dark";
  root.setAttribute("data-theme", savedTheme);

  // SET TEXT + ICON
  toggleBtn.innerHTML =
    savedTheme === "light"
      ? "🌙 Dark Mode"
      : "☀️ Light Mode";

  toggleBtn.addEventListener("click", function () {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // UPDATE TEXT + ICON
    toggleBtn.innerHTML =
      newTheme === "light"
        ? "🌙 Dark Mode"
        : "☀️ Light Mode";
  });
});