const query = "button[data-collapse-toggle=navbar-sticky]";
const navButton = document.querySelector(query);
const navList = document.getElementById("navbar-sticky");

navButton.addEventListener('click',() => {
    navList.classList.toggle("hidden");
});