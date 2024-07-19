let slideIndex = 0;
const slides = document.querySelectorAll('.slides');

document.addEventListener("DOMContentLoaded", function() {
  slides.forEach((slide, index) => {
    slide.style.opacity = '0';
  });
  slides[0].style.opacity = '1';
  showSlides();
});

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.transition = "opacity 1.5s";
    slide.style.opacity = '0';
  });

  slideIndex++;
  if (slideIndex >= slides.length) slideIndex = 0;

  slides[slideIndex].style.opacity = '1';

  setTimeout(showSlides, 6000); // 6秒ごとに次の画像に切り替え
}
