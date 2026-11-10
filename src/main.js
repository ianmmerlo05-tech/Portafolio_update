import './styles.less'

const menuButton = document.querySelector('#menu-toggle')
const menu = document.querySelector('#nav-links')

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!isOpen))
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú')
  menu?.classList.toggle('is-open', !isOpen)
})

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open')
    menuButton?.setAttribute('aria-expanded', 'false')
    menuButton?.setAttribute('aria-label', 'Abrir menú')
  })
})
