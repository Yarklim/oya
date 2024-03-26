const navMenuEl = document.querySelector('.header__nav-menu');
const openMenuEl = document.querySelector('.js-menu__open');
const closeMenuEl = document.querySelector('.js-menu__close');

const navLinksEl = document.querySelector('.nav-menu__nav--list');
let selectedTag = null;

openMenuEl.addEventListener('click', openMenu);
closeMenuEl.addEventListener('click', closeMenu);

navLinksEl.addEventListener('click', onActiveLinkAndClose);

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
