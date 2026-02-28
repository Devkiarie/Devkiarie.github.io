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
sr.reveal('.profile-section', { 
      delay: 300,
      interval: 100 
    });
    
    sr.reveal('.content-section', { 
      interval: 150,
      scale: 0.95 
    });
    
    sr.reveal('.skill-item, .hobby-item', {
      interval: 100,
      origin: 'bottom',
      distance: '20px'
    });


function copyToClipboard(e) {
    e.preventDefault();
    const url = window.location.href;
    const linkElement = e.currentTarget;
    
    navigator.clipboard.writeText(url)
        .then(() => {
            // Change tooltip text temporarily
            const tooltip = linkElement.querySelector('.tooltip');
            const originalText = tooltip.textContent;
            
            linkElement.classList.add('copied');
            tooltip.textContent = 'Copied!';
            
            setTimeout(() => {
                linkElement.classList.remove('copied');
                tooltip.textContent = originalText;
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            const tooltip = linkElement.querySelector('.tooltip');
            tooltip.textContent = 'Failed!';
        });
}


// RELATED POST }

// All blog posts data - matches your blog.html content
const allPosts = [
  {
    id: 'massmovers',
    title: 'Building a Fullstack Logistics Platform',
    description: 'Complete architecture of Mass Movers Limited\'s system with Node.js backend, React frontend, and Firebase.',
    category: 'web',
    date: 'May 2024',
    readtime: '15 min read',
    image: '/assets/img/project-8.jpg',
    url: 'blog-massmovers.html',
    demo: 'https://massmoverslimited.vercel.app',
    tags: ['Vite', 'Node.js', 'Firebase', 'React']
  },
  {
    id: 'fighter-game',
    title: 'Building a web-based 2 player game',
    description: 'Web-based 2 player game based on html, css, and javascript, complete with timer and collision detection',
    category: 'game',
    date: 'April 2024',
    readtime: '10 min read',
    image: '/assets/img/project-1.jpg',
    url: 'blog-club_Kiboko.html',
    demo: 'https://devkiarie.github.io/Club-Kiboko/',
    tags: ['HTML', 'CSS', 'Javascript']
  },
  {
    id: 'qaphys',
    title: 'Qaphys E-commerce Store',
    description: 'Built a sleek storefront in 2022 where I mastered email services and JavaScript-driven product rendering.',
    category: 'web',
    date: 'August 2022',
    readtime: '8 min read',
    image: '/assets/img/project-2.jpg',
    url: 'blog-qaphys.html',
    demo: 'https://devkiarie.github.io/qaphys.co/',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 'everything-fabulous',
    title: 'Everything Fabulous',
    description: 'Stylish 2022 e-commerce site where I learned how to make responsive sliders using just CSS and JavaScript.',
    category: 'web',
    date: 'November 2022',
    readtime: '9 min read',
    image: '/assets/img/project-5.jpg',
    url: 'blog-everything_fabulous.html',
    demo: 'https://devkiarie.github.io/everything-fabulous/',
    tags: ['CSS', 'JavaScript', 'HTML']
  },
  {
    id: 'timeless',
    title: 'Watch Display - CSS Animations',
    description: 'Animated luxury! Learned pure CSS animations to showcase watch products in a stylish, modern interface.',
    category: 'web',
    date: 'October 2022',
    readtime: '6 min read',
    image: '/assets/img/project-3.jpg',
    url: 'blog-timeless.html',
    demo: 'https://devkiarie.github.io/Timeless-/',
    tags: ['CSS', 'HTML']
  },
  {
    id: 'sage-watches',
    title: 'Watch Display - Theme Toggler',
    description: 'Developed a classy watch showcase with smooth dark/light mode toggling using JavaScript and CSS variables.',
    category: 'web',
    date: 'March 2023',
    readtime: '7 min read',
    image: '/assets/img/project-4.jpg',
    url: 'blog-sagewatches.html',
    demo: 'https://devkiarie.github.io/sage-watches/',
    tags: ['JavaScript', 'CSS']
  },
  {
    id: 'munchy',
    title: 'Munchy – Meat Ordering App',
    description: 'Built in React, Munchy let me explore ClerkJS authentication and Paystack integration for food commerce.',
    category: 'web',
    date: 'May 2024',
    readtime: '11 min read',
    image: '/assets/img/project-6.jpg',
    url: 'blog-munchy.html',
    demo: 'https://munchy.vercel.app/',
    tags: ['React', 'ClerkJS', 'Paystack']
  },
  {
    id: 'wilsmar',
    title: 'Wilsmar Wines & Spirits',
    description: 'My 2025 dive into the MERN stack—built a complete drink ordering app with login, cart, and payment systems.',
    category: 'web',
    date: 'January 2025',
    readtime: '12 min read',
    image: '/assets/img/project-7.jpg',
    url: 'blog-wilsmar.html',
    demo: 'https://wilsmar.vercel.app/',
    tags: ['MongoDB', 'Express', 'React', 'Node.js']
  }
];

/**
 * Load related posts based on current post and category
 * @param {string} currentPostId - ID of the current post
 * @param {string} currentCategory - Category of the current post
 */
function loadRelatedPosts(currentPostId, currentCategory) {
  const container = document.getElementById('related-posts-container');
  if (!container) return;
  
  // Filter out current post and get same-category posts first
  let relatedPosts = allPosts.filter(post => 
    post.id !== currentPostId && post.category === currentCategory
  );
  
  // If not enough same-category posts, mix with recent posts
  if (relatedPosts.length < 3) {
    const additionalPosts = allPosts
      .filter(post => 
        post.id !== currentPostId && 
        !relatedPosts.some(rp => rp.id === post.id)
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by newest first
      .slice(0, 3 - relatedPosts.length);
    
    relatedPosts = [...relatedPosts, ...additionalPosts];
  }
  
  // Shuffle to avoid same order every time (optional)
  relatedPosts = shuffleArray(relatedPosts).slice(0, 3);
  
  // Generate HTML
  container.innerHTML = relatedPosts.map(post => `
    <article class="related-post" data-category="${post.category}">
      <a href="${post.url}" class="related-post__link">
        <div class="related-post__image">
          <img src="${post.image}" alt="${post.title}" class="related-post__img" loading="lazy">
          <div class="related-post__date">${post.date}</div>
        </div>
        <div class="related-post__content">
          <h3 class="related-post__title">${post.title}</h3>
          <p class="related-post__description">${post.description}</p>
          <div class="related-post__meta">
            ${post.tags.map(tag => `<span class="related-post__tech">${tag}</span>`).join('')}
          </div>
          <span class="related-post__link">
            Read case study <i class="ri-arrow-right-line"></i>
          </span>
        </div>
      </a>
    </article>
  `).join('');
}

/**
 * Shuffle array elements (Fisher-Yates algorithm)
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Auto-detect current post from URL or data attribute
 */
function detectCurrentPost() {
  // Method 1: Check for data attributes on article tag
  const currentPostElement = document.querySelector('.blog-post-single[data-post-id]');
  if (currentPostElement) {
    return {
      id: currentPostElement.dataset.postId,
      category: currentPostElement.dataset.postCategory
    };
  }
  
  // Method 2: Parse from URL (fallback)
  const path = window.location.pathname;
  const postSlug = path.split('/').pop().replace('blog-', '').replace('.html', '');
  const currentPost = allPosts.find(post => post.id === postSlug);
  
  return currentPost ? {
    id: currentPost.id,
    category: currentPost.category
  } : null;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const currentPost = detectCurrentPost();
  if (currentPost) {
    loadRelatedPosts(currentPost.id, currentPost.category);
  } else {
    console.warn('Could not detect current post for related posts');
  }
});