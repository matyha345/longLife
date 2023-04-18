
var rellax = new Rellax('.services__inner-row', {
  breakpoints: [375]
});

///Скрипт плавного перехода к нужному блоку --------------------------------------------------------

const anchors = document.querySelectorAll('a[href*="#"]');


for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href');
    const offset = parseInt(anchor.getAttribute('data-offset')) || 0; // парсим значение атрибута или задаем 0, если атрибут не задан
    const targetElement = document.querySelector('' + blockID);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset; // вычисляем положение целевого элемента относительно верхней границы видимой области
    const offsetPosition = targetPosition - offset; // вычисляем позицию, на которую нужно скролить
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
}



// --------------------
