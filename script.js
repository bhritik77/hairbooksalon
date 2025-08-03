const menuBtn = document.querySelector(".part-2");
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
  // Show navItems on hover
  const navBar = document.querySelector('.nav-bar');

  if (window.innerWidth >= 768) {
    menuBtn.addEventListener('mouseenter', () => {
      navItems.classList.remove("hidden");
    });

    // Hide menu when mouse leaves both nav button and menu
    navBar.addEventListener('mouseleave', () => {
      navItems.classList.add("hidden");
    });
  }