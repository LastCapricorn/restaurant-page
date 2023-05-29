import './style.css'
import FavIcon from './img/lc_dark_red.svg'
import Logo from './img/4d_burger_press_logo.png'
import home from './startpage'
let posX = 0
let posY = 0
let bgPY
const head = document.querySelector('head')
const body = document.querySelector('body')
const iconLink = document.createElement('link')
const gradient = document.createElement('style')
const header = document.createElement('header')
const headerContainer = document.createElement('div')
const restaurantLogo = document.createElement('img')
const heading = document.createElement('h1')
const nav = document.createElement('nav')
const main = document.createElement('main')
const footer = document.createElement('footer')
const homeButton = document.createElement('button')
const menuButton = document.createElement('button')
const contactButton = document.createElement('button')
const creditsButton = document.createElement('button')

iconLink.setAttribute('rel', 'shortcut icon')
iconLink.setAttribute('href', FavIcon)
iconLink.setAttribute('type', 'image/svg+xml')
head.appendChild(iconLink)
head.appendChild(gradient)

restaurantLogo.setAttribute('src', Logo)
restaurantLogo.setAttribute('alt', '4d Burger Press Logo')
headerContainer.appendChild(restaurantLogo)

heading.textContent = 'welcome at 4d burger press'
headerContainer.appendChild(heading)
header.appendChild(headerContainer)

homeButton.textContent = 'home'
homeButton.setAttribute('class', 'active')
menuButton.textContent = 'menu'
contactButton.textContent = 'contact'
creditsButton.textContent = 'credits'

nav.appendChild(homeButton)
nav.appendChild(menuButton)
nav.appendChild(contactButton)
nav.appendChild(creditsButton)
header.appendChild(nav)
main.innerHTML =  home()
body.appendChild(header)
body.appendChild(main)
body.appendChild(footer)

document.addEventListener('pointermove', (ev) => {
  posX = ev.x
  posY = ev.y
  bgPY = posY / document.documentElement.clientHeight * 100;
  gradient.innerHTML =`
  body {
    background-image: radial-gradient(circle farthest-corner at ${posX}px ${posY}px, #000f2f 0%, #000018 33%, #000008 99%);
  }`
  header.style.backgroundPositionY = `${bgPY}%`
})
