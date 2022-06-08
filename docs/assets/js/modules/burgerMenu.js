import {toggleActiveClass, addActiveClass,  removeActiveClass} from "./activeClass.js"

const burgerMenu = () => {
    const burgerBtn = document.querySelector('.burger')
    const burgerMenu = document.querySelector('.nav__wrap')

    burgerBtn.addEventListener('click', () => {
        toggleActiveClass(burgerBtn)
        toggleActiveClass(burgerMenu)
    })
}

export default burgerMenu;