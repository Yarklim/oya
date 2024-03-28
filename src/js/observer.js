import { scrollLinksEl } from './nav-menu.js';

window.onload = () => {
  const options = {
    root: null,
    riitMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrollLinksEl.forEach(link => {
          const linkId = link.getAttribute('href').replace('#', '');

          if (linkId === entry.target.id) {
            onChangeLinkColor(link);
          }
        });
        if (entry.target.hasAttribute('data-footer')) {
          //   scrollMenuEl.classList.remove('active');
        }
      }
    });
  }, options);

  const targetObserver = document.querySelectorAll('[data-observer-target]');
  targetObserver.forEach(target => {
    observer.observe(target);
  });
};

function onChangeLinkColor(link) {
  const currentActiveLink = document.querySelector('.active__nav-link');

  if (currentActiveLink) {
    currentActiveLink.classList.remove('active__nav-link');
  }
  link.classList.add('active__nav-link');
}
