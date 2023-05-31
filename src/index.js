import './style.css'
import FavIcon from './img/lc_dark_red.svg'
import Logo from './img/4d_burger_press_logo.png'
import pagelink from './pagelinker'

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
const footerContainer = document.createElement('div')
const footerPara = document.createElement('p')
const footerAnker = document.createElement('a')

const buttonTextContents = ['home', 'menu', 'contact', 'credits']
let posX = 0
let posY = 0
let bgPY

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

for (let button, i = 0; i < 4; i++) {
  button = document.createElement('button')
  button.textContent = buttonTextContents[i]
  button.setAttribute('type', 'button')
  button.setAttribute('id', buttonTextContents[i])
  button.setAttribute('value', i)
  button.addEventListener('click', recallPage)
  nav.appendChild(button)
}
header.appendChild(nav)

footerPara.textContent = 'He@dcrafted 2023 by '
footerAnker.textContent = 'Last Capricorn'
footerAnker.setAttribute('href', 'https://github.com/LastCapricorn')
footerPara.appendChild(footerAnker)
footerContainer.appendChild(footerPara)
footer.appendChild(footerContainer)

body.appendChild(header)
body.appendChild(main)
body.appendChild(footer)

function recallPage(ev) {
  document.querySelectorAll('nav button').forEach( btn => {
    btn.classList.remove('active')
  })
  ev.target.classList.add('active')
  main.innerHTML = pagelink(ev.target.value)()
}

function movePhoto(ev) {
  if (!ev.target.classList.contains('burger')) return
  document.querySelectorAll('.photo-container img').forEach( (photo) => {
    photo.style.top = 58 - ev.target.dataset.scroll * 262 + 'px'
  })
  console.log(document.querySelector('.photo-container img:first-of-type'))
}

document.addEventListener('pointerover', movePhoto)

document.addEventListener('pointermove', (ev) => {
  posX = ev.x
  posY = ev.y
  bgPY = posY / document.documentElement.clientHeight * 100;
  gradient.innerHTML =`
  body {
    background-image: radial-gradient(circle farthest-corner at ${posX}px ${posY}px, var(--col10) 0%, var(--col11) 33%, var(--col12) 99%);
  }`
  header.style.backgroundPositionY = `${bgPY}%`
})
document.getElementById('home').click()
