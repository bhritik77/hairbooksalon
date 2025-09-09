// ==================== NAVBAR ====================

// Select elements
const menuBtn = document.querySelector("#menuBtn");
const navItems = document.querySelector(".nav-items");
const hairServicesItem = document.querySelector("#hairServicesItem > div"); // clickable div
const hairSubmenu = document.querySelector("#hairServicesDropdown");
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

// === Close submenu if clicked outside (Mobile only) ===
document.addEventListener('click', (e) => {
  if (window.innerWidth < 768) {
    if (!hairServicesItem.contains(e.target) && !hairSubmenu.contains(e.target)) {
      hairSubmenu.classList.add("hidden");
    }
  }
});

// === Desktop Hover for Hair Services ===
if (window.innerWidth >= 768) {
  const hairLi = document.querySelector("#hairServicesItem");

  hairLi.addEventListener("mouseenter", () => {
    hairSubmenu.classList.remove("hidden");
  });

  hairLi.addEventListener("mouseleave", () => {
    hairSubmenu.classList.add("hidden");
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

