const slider = document.querySelector('[data-slider-list]');
const firstImg = slider.querySelectorAll('[data-slider-item]')[0];
const arrowIcons = document.querySelectorAll('[data-slider-nav]');

slider.addEventListener('mousedown', dragStart);
slider.addEventListener('touchstart', dragStart);

document.addEventListener('mousemove', dragging);
slider.addEventListener('touchmove', dragging);

document.addEventListener('mouseup', dragStop);
slider.addEventListener('touchend', dragStop);

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

function showHideIcons() {
  let scrollWidth = slider.scrollWidth - slider.clientWidth;
  arrowIcons[0].style.display = slider.scrollLeft == 0 ? 'none' : 'block';
  arrowIcons[1].style.display =
    slider.scrollLeft == scrollWidth ? 'none' : 'block';
}

arrowIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    let firstImgWidth = firstImg.clientWidth;
    slider.scrollLeft += icon.id == 'prev' ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

function autoSlide() {
  if (
    slider.scrollLeft - (slider.scrollWidth - slider.clientWidth) > -1 ||
    slider.scrollLeft <= 0
  )
    return;

  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.clientWidth + 14;

  let valDifference = firstImgWidth - positionDiff;

  if (slider.scrollLeft > prevScrollLeft) {
    return (slider.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }

  slider.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

function dragStart(e) {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = slider.scrollLeft;
}

function dragging(e) {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  slider.classList.add('dragging');
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  slider.scrollLeft = prevScrollLeft - positionDiff;

  showHideIcons();
}

function dragStop() {
  isDragStart = false;
  slider.classList.remove('dragging');

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
}
