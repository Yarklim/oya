import { scrollLinksEl } from './nav-menu.js';
import { collectionMosaiс } from './collection';

window.onload = () => {
  const circlesBG = document.querySelectorAll('.bg-circles');

  const options = {
    root: null,
    riitMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const entryData = entry.target.getAttribute('data-section');

      if (entry.isIntersecting) {
        //   --------- Change Scroll Menu Links colors ----------
        scrollLinksEl.forEach(link => {
          const linkId = link.getAttribute('href').replace('#', '');

          if (linkId === entry.target.id) {
            onChangeLinkColor(link);
          }
        });

        //   --------- Animated Background Circles ---------
        circlesBG.forEach(el => {
          const elData = el.getAttribute('data-element');

          if (entryData === elData) {
            el.classList.add('circles-animation');
          }
        });

        //   ------------ Collection Animated ------------
        if (entryData === 'collection') {
          //   collectionMosaiс();
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
