// ==================== NAVBAR ====================

// Select elements
const menuBtn = document.querySelector("#menuBtn");
const navItems = document.querySelector(".nav-items");
const hairServicesItem = document.querySelector(".group > div"); // Hair Services clickable div
const hairSubmenu = document.querySelector(".group ul");
const navBar = document.querySelector('.nav-bar');

// === Mobile Menu Toggle ===
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  navItems.classList.toggle("hidden");
});

// === Mobile Hair Services Submenu Toggle ===
hairServicesItem.addEventListener('click', (e) => {
  if (window.innerWidth < 768) {
    e.preventDefault();
    e.stopPropagation();
    hairSubmenu.classList.toggle("hidden");
  }
});

// === Hide submenu if clicked outside (Mobile only) ===
document.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    hairSubmenu.classList.add("hidden");
    navItems.classList.add("hidden");
  }
});

// === Desktop Hover for Main Menu ===
if (window.innerWidth >= 768) {
  menuBtn.addEventListener('mouseenter', () => {
    navItems.classList.remove("hidden");
  });

  navBar.addEventListener('mouseleave', () => {
    navItems.classList.add("hidden");
  });
}


// ==================== HERO SLIDER ====================

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let interval = setInterval(nextSlide, 2000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? "1" : "0";
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Next / Prev Buttons
document.getElementById("next").addEventListener("click", () => {
  nextSlide();
  resetInterval();
});
document.getElementById("prev").addEventListener("click", () => {
  prevSlide();
  resetInterval();
});

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 2000);
}

// Initial Slide
showSlide(currentIndex);
