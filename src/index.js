import './style.css'
import FavIcon from './img/lc_dark_red.svg'
import Logo from './img/logo2.png'

let posX = 0
let posY = 0
const head = document.querySelector('head')
const body = document.querySelector('body')
const iconLink = document.createElement('link')
const gradient = document.createElement('style')
const header = document.createElement('header')
const headerContainer = document.createElement('div')
const restaurantLogo = document.createElement('img')

iconLink.setAttribute('rel', 'shortcut icon')
iconLink.setAttribute('href', FavIcon)
iconLink.setAttribute('type', 'image/svg+xml')
head.appendChild(iconLink)
head.appendChild(gradient)
document.addEventListener('pointermove', (ev) => {
  posX = ev.x
  posY = ev.y
  gradient.innerHTML =`
  body {
    background-image: radial-gradient(circle farthest-corner at ${posX}px ${posY}px, #3c100c 0%, #1d0808 64%, #0f0004 98%);
  }`
})
