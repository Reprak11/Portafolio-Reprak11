window.onload = () => {
    const navMenu = document.getElementById("nav-menu");
    const menuButton = document.getElementById("menu-button")
    menuButton.addEventListener('click', () =>{
        navMenu.classList.toggle('show')
    })
}
