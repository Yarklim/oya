export const collectionMosaiс = () => {
  const itemsEl = document.querySelectorAll('.collection__item');

  itemsEl.forEach(item => item.classList.add('active-item'));

  let currentActiveIdx = null;

  let intervalId = setInterval(() => {
    itemsEl.forEach((el, idx) => {
      if (el.classList.contains('orange-bg')) {
        currentActiveIdx = idx;
        el.classList.remove('orange-bg');
      }
    });
    itemsEl[getRandomItem()].classList.add('orange-bg');
  }, 2000);
};

function getRandomItem() {
  return Math.floor(Math.random() * 24);
}

// collectionMosaiс();
