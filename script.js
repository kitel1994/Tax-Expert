const btnRight = document.getElementById('right')
const btnLeft = document.getElementById('left')
const slider = document.getElementById('slider')
const navbar = document.getElementById('navbar')
const maxWidth = document.getElementById('maxWidth')
const dots = document.getElementById('dots')
const topStr = document.getElementById('topek')
const hamb = document.getElementById('hamb')
const lista = document.getElementById('lista')
const chevron = document.getElementById('chevron')

btnRight.addEventListener('click', () => {
    console.log('dziala')
    slider.classList.add('active')
    btnLeft.classList.add('active')
    btnRight.classList.add('active')
})

btnLeft.addEventListener('click', () => {
    slider.classList.remove('active')
    btnLeft.classList.remove('active')
    btnRight.classList.remove('active')
})

window.addEventListener('scroll', () => {
    if (scrollY > 100) {
        navbar.classList.add('active')
        maxWidth.classList.add('active')
    } else {
        navbar.classList.remove('active')
        maxWidth.classList.remove('active')
    }
    if (scrollY > 500) {
        chevron.classList.add('active')
    } else {
        chevron.classList.remove('active')
    }
    console.log(scrollY)
})

dots.addEventListener('click', () => {
    topStr.classList.toggle('active')
})

hamb.addEventListener('click', () => {
    lista.classList.toggle('active')
})

chevron.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})