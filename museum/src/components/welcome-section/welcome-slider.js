import './welcome.scss'

let currentIndex = 1;
const slideNumber = document.querySelector('.number__current');
const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.slider-dots__dot'));

showSlides(currentIndex);



function nextSlide() {
    showSlides(currentIndex += 1);
		slideNumber.innerText = `0${currentIndex}`
}

function previousSlide() {
    showSlides(currentIndex -= 1);
		slideNumber.innerText = `0${currentIndex}`
}

function currentSlide(n) {
    showSlides(currentIndex = n);
}

function showSlides(n) {
    let i = 0;
    if (n > slides.length) {
      currentIndex = 1;
    }
    if (n < 1) {
        currentIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[currentIndex - 1].style.display = "block";
    dots[currentIndex - 1].className += " active";
}

document.querySelector('.control__left').addEventListener('click', previousSlide );
document.querySelector('.control__right').addEventListener('click', nextSlide );
dots.forEach(dot => dot.addEventListener('click', () => {
	const index = dots.indexOf(dot) + 1;
	currentSlide(index);
}))