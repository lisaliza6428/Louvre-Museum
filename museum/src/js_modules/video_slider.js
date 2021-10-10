/* let videoSlides = document.querySelectorAll('.video_slide');
console.log(videoSlides)
let videoBullets = document.querySelectorAll('.video_navigation__item_circle');
console.log(videoBullets)
let currentVideoSlide = 0;
let currentVideoBullet = 0;
let isEnabled = true;

function changecurrentVideoSlide (sld, blt) {
	currentVideoSlide = (sld + videoSlides.length) % videoSlides.length;
    currentVideoBullet = (blt + videoBullets.length) % videoBullets.length;
}



function hideItem(direction) {
	isEnabled = false;
	videoSlides[currentVideoSlide].classList.add(direction);
	videoSlides[currentVideoSlide].addEventListener('animationend', function() {
		this.classList.remove('_left', direction);

	});
	videoBullets[currentVideoBullet].classList.remove('active');

	
}

function showItem (direction) {
	videoSlides[currentVideoSlide].classList.add('next', direction);
	videoSlides[currentVideoSlide].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('_left');
		isEnabled = true;
	});
	bullets[currentBullet].classList.add('active');
		

}

//animation
function nextItem (currentVideoSlide, currentBullet) {
	hideItem ('to-left');
	changecurrentVideoSlide (currentVideoSlide + 1, currentBullet + 1);
	showItem ('from-right');
}

function previousItem (currentVideoSlide, currentBullet) {
	hideItem ('to-right');
	changecurrentVideoSlide (currentVideoSlide - 1 , currentBullet - 1);
	showItem ('from-left');  
}



document.querySelector('.video_prevslide').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentVideoSlide, currentBullet);   
	}
});

document.querySelector('.video_nextslide').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentVideoSlide, currentBullet);
	}
});

 */


const prev = document.getElementById('video_prevslide'),
      next = document.getElementById('video_nextslide'),
      slides = document.querySelectorAll('.video_slide');
      bullets = document.querySelectorAll('.video_navigation__item_circle');
     
let index_left;
let index_center;
let index_right;
let indexB = 0;

const activeSlide = (n, o, p) => {
    for (slide of slides) {
        slide.classList.remove('_active');
      
    }
    slides[n].classList.add('_active');
    slides[o].classList.add('_active');
    slides[p].classList.add('_active');
   
    
    
    
   
}

const nextSlide = () => {
    
    if (index_left == 0) {
        index_left = 1;
        index_center = 2;
        index_right = 3;
        activeSlide(index_left, index_center, index_right);
        ;
       
    } 
    if (index_left === 1) {
        index_left = 2;
        index_center = 3;
        index_right = 4;
        indexB = 1;
        activeSlide(index_left, index_center, index_right);
        ;
       
    } 
    if (index_left == 2) {
        index_left = 3;
        index_center = 4;
        index_right = 0;
        indexB = 2;
        activeSlide(index_left, index_center, index_right);
        ;
       
    } 
    if (index_left == 3) {
        index_left = 4;
        index_center = 0;
        index_right = 1;
        indexB = 3;
        activeSlide(index_left, index_center, index_right, indexB);
        ;
       
    } 
    if (index_left == 4) {
        index_left = 0;
        index_center = 1;
        index_right = 2;
        indexB = 4;
        activeSlide(index_left, index_center, index_right, indexB);
        ;
       
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