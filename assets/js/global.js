/**
 *
 * @param {*} toggleId
 * @param {*} navId
 * @description navbar toggle menu
 */
function showMenu(toggleId, navId) {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
}

showMenu("nav-toggle", "nav-list");

/**
 * @description  When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
 */
function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 200) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/**
 * @description Remove Mobile menu
 */
const navLink = document.querySelectorAll(".nav__link");

function removeMobileMenu() {
  const navList = document.getElementById("nav-list");
  navList.classList.remove("show-menu");
}

navLink.forEach((link) => link.addEventListener("click", removeMobileMenu));

/**
 * @description When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
 */
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 460) scrollTop.classList.add("scroll__show");
  else scrollTop.classList.remove("scroll__show");
}
window.addEventListener("scroll", scrollTop);

/**
 * @descritpion Swiper for slider
 */
const swiper = new Swiper(".swiper__customer", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/**
 * @description SCROLL REVEAL ANIMATION
 */
const scroll = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1000,
  reset: true,
});

scroll.reveal(
  `.home__data, .home__img, 
   .services__content, .leading__data,
   .leading__img, .mobile__data,
   .mobile__img, .article__content, 
   .article__button, .contact__container, 
   .footer__content, .customer`,
  {
    interval: 200,
  }
);
