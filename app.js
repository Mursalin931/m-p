// alert('hello')

const burger = document.getElementById('burger')
const navbar = document.getElementById('navbar')
const navbarLink = document.querySelectorAll('.navbar li')
burger.addEventListener('click', function() {
    navbar.classList.toggle('navbar-active')
    burger.classList.toggle('toggle')
})

navbarLink.forEach(function(value, index) {
    value.style.animation = `navbarFade 0.5s ease forwards ${value[index]}`
})