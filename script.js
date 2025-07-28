function toggleDarkMode() {
  const html = document.documentElement;
  const icon = document.getElementById("theme-icon");
  const isDark = html.getAttribute("data-bs-theme") === "dark";

  html.setAttribute("data-bs-theme", isDark ? "light" : "dark");
  icon.className = isDark ? "bi bi-moon-fill" : "bi bi-brightness-high";
}
