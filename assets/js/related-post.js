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