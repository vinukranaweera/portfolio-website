window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

const words = ["Web Developer", "Data Analyst", "Full Stack Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;  // Typing speed
const delay = 1000;  // Pause between words

function typeEffect() {
    const textElement = document.getElementById("text");
    const currentWord = words[index];

    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex--);
    } else {
        textElement.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length + 1) {
        setTimeout(() => {
            isDeleting = true;
            typeEffect(); // Restart after delay
        }, delay);
        return; // Stop further execution
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? speed : speed);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('resumeToggle');
    const menu = document.getElementById('resumeMenu');

    toggle.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent clicks from bubbling up
      menu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
      }
    });
  });