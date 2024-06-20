// Инициализация аккордеона с использованием jQuery UI
$(function() {
  $("#accordion").accordion();
});

// Получаем элемент кнопки прокрутки вверх
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
// Получаем корневой элемент документа
var rootElement = document.documentElement;

// Функция для прокрутки вверх
function scrollToTop() {
  // Логика прокрутки к верху страницы
  rootElement.scrollTo({
    top: 0, // Прокрутка к верхнему краю страницы
    behavior: "smooth" // Плавная прокрутка
  });
}

// Добавляем обработчик события "click" для кнопки прокрутки вверх
scrollToTopBtn.addEventListener("click", scrollToTop);

// Инициализация всплывающих подсказок с использованием Bootstrap
$(document).ready(function() { 
  $('[data-toggle="tooltip"]').tooltip(); 
});