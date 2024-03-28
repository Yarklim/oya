const backdropEl = document.querySelector('.backdrop');
const modalEl = document.querySelector('.modal');
const modalOpenEl = document.querySelectorAll('[data-modal-open]');
const modalCloseEl = document.querySelector('.modal__close');
const modalBgEl = document.querySelector('.modal__bg--circles');

modalOpenEl.forEach(el => {
  el.addEventListener('click', openModal);
});

backdropEl.addEventListener('click', e => {
  if (e.currentTarget === e.target) {
    closeModal();
  }
});

modalCloseEl.addEventListener('click', closeModal);

function openModal() {
  backdropEl.classList.remove('is-hidden');
  modalBgEl.classList.add('circles-animation');
  //   document.body.classList.add('no-scroll');

  window.addEventListener('keydown', onEscKeyPress);
}

function closeModal() {
  backdropEl.classList.add('is-hidden');
  modalBgEl.classList.remove('circles-animation');
  //   document.body.classList.remove('no-scroll');
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
