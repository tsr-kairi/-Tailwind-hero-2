import "./tailwind.css";

const nav_toggles = document.querySelector(".nav-toggle");
const navigation = document.getElementById("navigation");

nav_toggles.addEventListener("click", () => {
  navigation.classList.toggle("hidden");
});
