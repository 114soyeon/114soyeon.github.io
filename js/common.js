const menuToggle = document.querySelector('.ham_btn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.menu');

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});

navLinks.forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = document.querySelectorAll('main section[id]');
const setActiveNav = () => {
  let current = 'home';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 160) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
};
window.addEventListener('scroll', setActiveNav, { passive: true });
setActiveNav();

/* projects 슬라이드 */
document.querySelectorAll('.works-slider-block').forEach(block => {
  if (typeof Swiper === 'undefined') return;

  new Swiper(block.querySelector('.works-slider'), {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 40,
    breakpoints: {
      900: { spaceBetween: 70 },
      1200: { spaceBetween: 100 },
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: block.querySelector('.swiper-pagination'),
      clickable: true,
    },
  });
});