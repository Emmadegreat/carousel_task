const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');
const slideIcon = document.querySelectorAll('.slide-icon');
const numberOfSlides = slides.length;
const control = document.getElementById('control');
const carousel = document.getElementById('carousel');
var slideNumber = 0;



nextBtn.addEventListener("click", () => {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideIcon.forEach((slideicon) => {
        slideicon.classList.remove('active');
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    };
    slides[slideNumber].classList.add("active");
    slideIcon[slideNumber].classList.add('active');
});

//previous btn action
prevBtn.addEventListener("click", () => {

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideIcon.forEach((slideicon) => {
        slideicon.classList.remove('active');
    });

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber =  (numberOfSlides - 1);
    };
    slides[slideNumber].classList.add("active");
    slideIcon[slideNumber].classList.add('active');
});