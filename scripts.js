const closeButton = document.querySelector('.close-nav')
const openButton = document.querySelector('.open-nav')
const nav = document.querySelector('.navbar')

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open')
})

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open')
})
