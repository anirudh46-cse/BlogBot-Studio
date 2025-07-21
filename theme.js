const toggle = document.getElementById("toggleDark");

toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  toggle.innerText = isDark ? "🌞 Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
  toggle.innerText = "🌞 Light Mode";
}