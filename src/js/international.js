const filterBtnArr = document.querySelectorAll('.collection__filter--btn');
const cardsArr = document.querySelectorAll('.collection__filter--img');

filterBtnArr.forEach(btn => btn.addEventListener('click', toggleActiveBtn));

function toggleActiveBtn(e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;

  if (targetElement.closest('.collection__filter--btn')) {
    filterBtnArr.forEach((el, index) => {
      if (el.classList.contains('active')) {
        currentActiveIndex = index;
        el.classList.remove('active');
        cardsArr[currentActiveIndex].classList.remove('visible');
      }
      if (el === targetElement) {
        newActiveIndex = index;
      }
    });
    targetElement.classList.add('active');
    cardsArr[newActiveIndex].classList.add('visible');
  }
}
