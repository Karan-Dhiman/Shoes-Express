const menuHamburger = document.querySelector("#nav-menu")
const navLinks = document.querySelector(".navigation")

// Toggle menu
menuHamburger.addEventListener('click', () => {
    // console.log('click')
    navLinks.classList.toggle('mobile-menu')
})

let slideIndex = 0;
showSlides();

// Next-previous control
function nextSlide() {
    slideIndex++;
    showSlides();
    resetTimer();
}
// Next-previous control
function prevSlide() {
    slideIndex--;
    showSlides();
    resetTimer();
}
// Thumbnail image controlls
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
    resetTimer();
}
// Thumbnail image controlls
function showSlides() {
  // console.log('showSlides')
    const slides = document.querySelectorAll(".slides");
    // console.log(slides)
    const dots = document.querySelectorAll(".dots");

    // reset slideIndex if it is out of range
    if (slideIndex >= slides.length) slideIndex = 0;
    // reset slideIndex if it is out of range
    if (slideIndex < 0) slideIndex = slides.length - 1;

    // hide all slides
    for (let i = 0; i < slides.length; i++) {
      // console.log(slides[i])
        slides[i].style.display = "none";
    }

    // show current slide
    slides[slideIndex].style.display = "block";

    // update active dot
    for (let i = 0; i < dots.length; i++) {
      // console.log(dots[i])
        dots[i].classList.remove("active");
    }
    // update active dot
    dots[slideIndex].classList.add("active");
}

// autoplay slides
let timer = 5; // seconds
let intervalId = setInterval(nextSlide, timer * 1000); // milliseconds

// reset timer
function resetTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, timer * 1000); // milliseconds
}