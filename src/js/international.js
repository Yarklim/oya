const filterBtnArr = document.querySelectorAll('.collection__filter--btn');
const cardsArr = document.querySelectorAll('.collection__filter--img');

filterBtnArr.forEach(btn => btn.addEventListener('click', toggleActiveBtn));

function toggleActiveBtn(e) {
  const targetElement = e.target;
  let currentActiveIdx = null;
  let newActiveIdx = null;

  if (targetElement.closest('.collection__filter--btn')) {
    filterBtnArr.forEach((el, idx) => {
      if (el.classList.contains('active')) {
        currentActiveIdx = idx;
        el.classList.remove('active');
        cardsArr[currentActiveIdx].classList.remove('visible');
      }
      if (el === targetElement) {
        newActiveIdx = idx;
      }
    });
    targetElement.classList.add('active');
    cardsArr[newActiveIdx].classList.add('visible');
  }
}
