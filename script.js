// Hero Section Repeatable Typewriter Effect
const words = [
    "Building Digital Masterpieces with Code & Passion",
    "Turn your vision into reality with Kashif Khan"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const heroHeading = document.querySelector('.hero h1');

function typeWriterEffect() {
    if (!heroHeading) return;
    
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }
    
    heroHeading.innerHTML = `<span>${currentWord.substring(0, charIndex)}</span><span class="blinking-cursor">|</span>`;
    
    let typeSpeed = isDeleting ? 30 : 60;
    
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Poora word likhne ke baad rukuwat
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeWriterEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriterEffect();
});

// Contact Form Alert Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your message has been sent successfully. We will get back to you soon.');
        contactForm.reset();
    });
}