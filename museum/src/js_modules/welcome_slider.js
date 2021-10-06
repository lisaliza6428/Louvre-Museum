
//SLIDER
/* const prev = document.getElementById('arrowleft'),
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
prev.addEventListener('click', prevSlide); */


/////////////////////////////////////////

let items = document.querySelectorAll('.slide');
let bullets = document.querySelectorAll('.slider_dot');
let currentItem = 0;
let currentBullet = 1;
let isEnabled = true;

function changeCurrentItem (sld, blt) {
	currentItem = (sld + items.length) % items.length;
    currentBullet = (blt + bullets.length) % bullets.length;
    
    
}



function hideItem(direction) {
	isEnabled = false;
	items[currentItem ].classList.add(direction);
	items [currentItem ].addEventListener('animationend', function() {
		this.classList.remove('active', direction);

	});
}

function showItem (direction) {
	items [currentItem ].classList.add('next', direction);
	items [currentItem ].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

//animation
function nextItem (sld, blt) {
	hideItem ('to-left');
	changeCurrentItem (sld + 1, blt + 1);
	showItem ('from-right');

    
   
    
}

function previousItem (sld, blt) {
	hideItem ('to-right');
	changeCurrentItem (sld - 1 , blt - 1);
	showItem ('from-left');
    console.log(blt);
	
  
    
}



document.querySelector('.arrowleft').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem, currentBullet);
        
	}
});

document.querySelector('.arrowright').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem, currentBullet);
	}
});



///////////SWIPE//////////////////////

var el = document.querySelector('.slides');
console.log(el)
const swipedetect = (el) => {
  
	let surface = el;
	let startX = 0;
	let startY = 0;
	let distX = 0;
	let distY = 0;
	let startTime = 0;
	let elapsedTime = 0;

	let threshold = 150;
	let restraint = 100;
	let allowedTime = 300;

	surface.addEventListener('mousedown', function(e){
		startX = e.pageX;
        console.log(startX)
		startY = e.pageY;
		startTime = new Date().getTime();
		e.preventDefault();
	}, false);

	surface.addEventListener('mouseup', function(e){
		distX = e.pageX - startX;
		distY = e.pageY - startY;
		elapsedTime = new Date().getTime() - startTime;
		if (elapsedTime <= allowedTime){
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
				if ((distX > 0)) {
					if (isEnabled) {
						previousItem(currentItem);
					}
				} else {
					if (isEnabled) {
						nextItem(currentItem);
					}
				}
			}
		}
		e.preventDefault();
	}, false);

	surface.addEventListener('touchstart', function(e){
		if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {
			if (e.target.classList.contains('left')) {
				if (isEnabled) {
					previousItem(currentItem);
				}
			} else {
				if (isEnabled) {
					nextItem(currentItem);
				}
			}
		}
			var touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX;
			distY = touchobj.pageY - startY;
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime <= allowedTime){
					if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
							if ((distX > 0)) {
								if (isEnabled) {
									previousItem(currentItem);
								}
							} else {
								if (isEnabled) {
									nextItem(currentItem);
								}
							}
					}
			}
			e.preventDefault();
	}, false);
}


swipedetect(el);