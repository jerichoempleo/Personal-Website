function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize ScrollReveal
  const sr = ScrollReveal({
    distance: '100px',
    duration: 800,
    reset: false,
    easing: 'ease-in-out',
  });

  // Apply ScrollReveal to sections with delay
  sr.reveal('#profile', { origin: 'top', delay: 200 });
  sr.reveal('#about', { origin: 'left', delay: 200 });
  sr.reveal('.section-container', { origin: 'right', delay: 400 });
  sr.reveal('.col', { origin: 'bottom', delay: 500 });
  sr.reveal('.educ', { origin: 'bottom', delay: 600 });
  sr.reveal('.work', { origin: 'bottom', delay: 700 });
  sr.reveal('#experience', { origin: 'bottom', delay: 400 });
  sr.reveal('.prog', { origin: 'left', delay: 400 });
  sr.reveal('.db', { origin: 'right', delay: 400 });
  sr.reveal('.projRow1', { origin: 'left', delay: 400 });
  sr.reveal('.projRow2', { origin: 'right', delay: 400 });
  sr.reveal('#contact', { origin: 'bottom', delay: 400 });
  //
});

