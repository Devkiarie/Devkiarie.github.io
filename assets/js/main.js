/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

// Only initialize if contact form exists
if(contactForm) {
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_8hd27xf','template_rc8bvg8','#contact-form','wHgAzaSvLZIDjt3yt')
        .then(() =>{
            contactMessage.textContent = 'Your Message has been sent successfully ✅'
            setTimeout(()=>{ contactMessage.textContent = '' }, 5000)
            contactForm.reset()
        }, () => {
            contactMessage.textContent = 'Failed to send your message, please try again later ❌'
        })
    }
    contactForm.addEventListener('submit', sendEmail)
}

/*=============== NEWSLETTER FORM ===============*/
const newsletterForm = document.getElementById('newsletter-form')
if(newsletterForm) {
    const newsletterMessage = document.getElementById('newsletter-message')
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const submitBtn = newsletterForm.querySelector('button')
        submitBtn.disabled = true
        submitBtn.textContent = 'Sending...'
        
        emailjs.sendForm('YOUR_NEWSLETTER_SERVICE_ID', 'YOUR_NEWSLETTER_TEMPLATE_ID', newsletterForm)
            .then(() => {
                newsletterMessage.textContent = 'Thanks for subscribing!'
                newsletterMessage.style.color = 'var(--first-color)'
                newsletterForm.reset()
            })
            .catch((error) => {
                newsletterMessage.textContent = 'Error sending, please try again'
                newsletterMessage.style.color = 'var(--error-color)'
            })
            .finally(() => {
                submitBtn.disabled = false
                submitBtn.textContent = 'Subscribe'
                setTimeout(() => { newsletterMessage.textContent = '' }, 5000)
            })
    })
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
const navLinks = document.querySelectorAll('.nav__link')
    
const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector(`.nav__menu a[href*="${sectionId}"]`)

        if(sectionsClass) {
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            } else {
                sectionsClass.classList.remove('active-link')
            }
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
if(themeButton) {
    const darkTheme = 'dark-theme'
    const iconTheme = 'ri-sun-line'

    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    }

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})