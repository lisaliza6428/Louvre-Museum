
//SLIDER
const prev = document.getElementById('arrowleft'),
      next = document.getElementById('arrowright'),
      slides = document.querySelectorAll('.slide');
      bullets = document.querySelectorAll('.slider_dot');
      console.log(prev);
      console.log(next);
      console.log(slides);
      console.log(bullets);
let index = 0;
let indexB = 0;

const activeSlide = (n, m) => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
    
    for (bullet of bullets) {
        bullet.classList.remove('active');
    }
    bullets[m].classList.add('active');  
}

const nextSlide = () => {
    if (index == slides.length -1) {
        index = 0;
        indexB = 0;
        activeSlide(index, indexB);
        ;
       
    } else {
        index++;
        indexB++;
        activeSlide(index, indexB); 
    } 
}

const prevSlide = () => {   
    if (index == 0) {
        index = slides.length -1;
        indexB = bullets.length -1;
        activeSlide(index, indexB);

    } else {
        index--;
        indexB--;
        activeSlide(index, indexB);      
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


/////////////////////////////////////////
