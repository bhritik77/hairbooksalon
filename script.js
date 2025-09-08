const menuBtn = document.querySelector("#menuBtn"); 
const navItems = document.querySelector(".nav-items");
const hairServicesItem = document.querySelector(".group > div");
const hairSubmenu = document.querySelector(".group ul");

// Toggle nav items on mobile click
menuBtn.addEventListener('click', () => {
  navItems.classList.toggle("hidden");
});

// Toggle submenu on click for mobile
hairServicesItem.addEventListener('click', (e) => {
  e.stopPropagation();
  if (window.innerWidth < 768) {
    hairSubmenu.classList.toggle("hidden");
  }
});

// Hide submenu if clicked elsewhere on mobile
document.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    hairSubmenu.classList.add("hidden");
  }
});

// === Desktop Hover Support for Main Menu ===
const navBar = document.querySelector('.nav-bar');

if (window.innerWidth >= 768) {
  menuBtn.addEventListener('mouseenter', () => {
    navItems.classList.remove("hidden");
  });

  navBar.addEventListener('mouseleave', () => {
    navItems.classList.add("hidden");
  });
}

// hero-slider

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

  showSlide(currentIndex);

// --------------------------------------------------

