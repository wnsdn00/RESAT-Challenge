const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
let intervalId;

function updateCarousel() {
    const offset = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + offset + ')';
}

function showSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
}

function startAutoSlide() {
    intervalId = setInterval(nextSlide, 2000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

nextButton.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
});

prevButton.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
});

startAutoSlide();