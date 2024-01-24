const swiper = document.querySelector('.slide_wrapper');
const prevButtons = document.querySelectorAll('.slide_prev');
const nextButtons = document.querySelectorAll('.slide_next');
const bullets = document.querySelectorAll('.slide_number');

let currentSlide = 0;

function showSlide(slideIndex) {
    swiper.style.transform = `translateX(-${slideIndex * 400}px)`; 
    currentSlide = slideIndex;

    bullets.forEach((bullet, index) => {
        if (index === currentSlide) {
            bullet.classList.add('active'); 
        } else {
            bullet.classList.remove('active'); 
        }
    });
}

prevButtons.forEach((prevButton) => {
    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    });
});

nextButtons.forEach((nextButton) => {
    nextButton.addEventListener('click', () => {
        if (currentSlide < 3) {
            showSlide(currentSlide + 1);
        } else {
            showSlide(0);
        }
    });
});

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        showSlide(index);
    });
});

showSlide(0);

setInterval(() => {
    if (currentSlide < 3) {
        showSlide(currentSlide + 1);
    } else {
        showSlide(0);
    }
}, 2000);