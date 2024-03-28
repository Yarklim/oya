const navMenuEl = document.querySelector('.header__nav-menu');
const openMenuEl = document.querySelector('.js-menu__open');
const closeMenuEl = document.querySelector('.js-menu__close');
const navLinksEl = document.querySelector('.nav-menu__nav--list');

const scrollMenuEl = document.querySelector('.scroll__menu');
const scrollMenuBtnEl = document.querySelector('.scroll__menu--btn');
const scrollMenuContainerEl = document.querySelector(
  '.scroll__menu-list--wrapper'
);
export const scrollLinksEl = document.querySelectorAll('.scroll__menu-link');

let selectedTag = null;

openMenuEl.addEventListener('click', openMenu);
closeMenuEl.addEventListener('click', closeMenu);

navLinksEl.addEventListener('click', onActiveLinkAndClose);

// ========= Scroll Menu ============
window.addEventListener('scroll', () => {
  let bodyHeight = document.body.scrollHeight;
  let pointOfHideMenu = bodyHeight - bodyHeight * 0.06;

  if (
    Math.round(window.scrollY) > 300 &&
    Math.round(window.scrollY) < pointOfHideMenu
  ) {
    scrollMenuEl.classList.add('active');
  } else {
    scrollMenuEl.classList.remove('active');
  }
});

scrollMenuBtnEl.addEventListener('click', toggleScrollBtnMenu);
scrollLinksEl.forEach(el => el.addEventListener('click', toggleScrollBtnMenu));

// ========= Functions =========
function openMenu() {
  navMenuEl.classList.add('open-menu');
}

function closeMenu() {
  navMenuEl.classList.remove('open-menu');
}

function onActiveLinkAndClose(e) {
  const currentActiveBtn = document.querySelector('.active__nav-link');

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('active__nav-link');
  }

  const nextActiveBtn = e.target;
  nextActiveBtn.classList.add('active__nav-link');
  selectedTag = nextActiveBtn.dataset.value;

  closeMenu();
}

function toggleScrollBtnMenu() {
  scrollMenuContainerEl.classList.toggle('active');
  scrollMenuBtnEl.classList.toggle('active');
}
