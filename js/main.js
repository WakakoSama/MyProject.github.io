let slideIndex = 0; // Индекс текущего слайда
const slides = document.querySelectorAll('.slide'); // Все слайды

function updateSlider() {
    // Скрываем все слайды
    slides.forEach(slide => slide.style.display = 'none');
    // Показываем активный слайд
    slides[slideIndex].style.display = 'block';
}

// Обработчик для кнопки "Назад"
document.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Безопасный переход
    updateSlider();
});

// Обработчик для кнопки "Далее"
document.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length; // Безопасный переход
    updateSlider();
});

// Автоматическое переключение (опционально)
// setInterval(updateSlider, 3000); // Каждые 3 секунды
