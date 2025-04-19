// Mobile Navigation
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show Menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('active');
    });
}

// Hide Menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
}

// Close Menu When Clicking on Nav Links
const navLinks = document.querySelectorAll('.nav-link');

function linkAction() {
    navMenu.classList.remove('active');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

// Sticky Header
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 80) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
window.addEventListener('scroll', scrollHeader);

// Scroll Top Button
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (window.scrollY >= 400) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
}
window.addEventListener('scroll', scrollTop);

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.elements['name'].value;
        const email = this.elements['email'].value;
        const subject = this.elements['subject'].value;
        const message = this.elements['message'].value;
        
        // Here you would typically send the form data to a server
        // For demonstration, we'll just log it and show an alert
        console.log({ name, email, subject, message });
        
        alert('Thank you for your message! We will contact you soon.');
        this.reset();
    });
}

// Image Lazy Loading
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src || image.src;
                    imageObserver.unobserve(image);
                }
            });
        });
        
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    }
});

// Active Link Highlighting
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(.nav-menu a[href*=${sectionId}]).classList.add('active-link');
        } else {
            document.querySelector(.nav-menu a[href*=${sectionId}]).classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);