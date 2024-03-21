// const sliderContainerEl = document.querySelector('.journey__slider--container');
// const slideEl = document.querySelector('.journey__slide');
// const slidesEl = Array.from(document.querySelectorAll('.journey__slide'));

// let isDragging = false;
// let startPos = 0;
// let currentTranslate = 0;
// let prevTranslate = 0;
// let currentIdx = 0;
// let animationId = 0;

// slidesEl.forEach((slide, idx) => {
//   const slideImage = slide.querySelector('.journey__slide--img');

//   slideImage.addEventListener('dragstart', e => e.preventDefault());

//   slide.addEventListener('pointerdown', pointerDown(idx));
//   slide.addEventListener('pointerup', pointerUp);
//   slide.addEventListener('pointerleave', pointerUp);
//   slide.addEventListener('pointermove', pointerMove);
// });

// window.oncontextmenu = function (e) {
//   e.preventDefault();
//   e.stopPropagation();
//   return false;
// };

// function setSliderPosition() {
//   sliderContainerEl.style.transform = `translateX(${currentTranslate}px)`;
// }

// function setPositionByIndex() {
//   currentTranslate = currentIdx * -slideEl.offsetWidth;
//   prevTranslate = currentTranslate;

//   setSliderPosition();
// }

// function pointerDown(idx) {
//   return function (e) {
//     currentIdx = idx;
//     startPos = e.clientX;
//     isDragging = true;
//     animationId = requestAnimationFrame(animation);
//     sliderContainerEl.classList.add('grabbing');
//   };
// }

// function pointerMove(e) {
//   if (isDragging) {
//     const currentPosition = e.clientX;
//     currentTranslate = prevTranslate + currentPosition - startPos;
//   }
// }

// function pointerUp() {
//   cancelAnimationFrame(animationId);
//   isDragging = false;
//   const movedBy = currentTranslate - prevTranslate;

//   if (movedBy < -100 && currentIdx < slidesEl.length - 1) currentIdx += 1;
//   if (movedBy > 100 && currentIdx > 0) currentIdx -= 1;

//   setPositionByIndex();

//   sliderContainerEl.classList.remove('grabbing');
// }

// function animation() {
//   setSliderPosition();
//   if (isDragging) requestAnimationFrame(animation);
// }
