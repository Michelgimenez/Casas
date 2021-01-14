// STICKY NAV
const nav = document.querySelector(".sidebar");
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const container = document.querySelector(".container");

const observerCallbackStickyNav = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting === false) {
    nav.classList.add("sticky");
    container.classList.add("container-updated");
  } else {
    nav.classList.remove("sticky");
    container.classList.remove("container-updated");
  }
};

const observerOptionsNav = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headerObserverNav = new IntersectionObserver(
  observerCallbackStickyNav,
  observerOptionsNav
);

headerObserverNav.observe(header);

// MOBILE-NAV
const burguer = document.querySelector(".burguer");
const mobileNav = document.querySelector(".mobile-nav");

burguer.addEventListener("click", (e) => {
  e.preventDefault();
  burguer.classList.toggle("open");
  mobileNav.classList.toggle("open");
});
