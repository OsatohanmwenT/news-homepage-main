const menuIcon = document.getElementById("menu-icon")
const menuContainer = document.querySelector(".menu")
const exitIcon = document.querySelector(".close-icon")

menuIcon.addEventListener('click', () => {
    menuContainer.classList.add('active');
    document.body.classList.add("stop-scrolling")
})

exitIcon.addEventListener('click', () => {
    menuContainer.classList.remove('active');
    document.body.classList.remove("stop-scrolling")
})