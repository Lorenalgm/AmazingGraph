const navbar = document.querySelector('.navbar')
const menuHamburg = document.querySelector('.navbar_menu-hamburg')
const menuHamburgList = document.querySelector('.navbar_menu-list')

menuHamburg.addEventListener('click', () => {
    if (menuHamburgList.getAttribute('class').includes('list-hide')) {
        menuHamburgList.classList.remove('list-hide')
        navbar.classList.add('show-menu')
        menuHamburg.classList.remove('list-hide')
    } else {
        menuHamburgList.classList.add('list-hide')
        navbar.classList.remove('show-menu')
        menuHamburg.classList.add('list-hide')

    }

})