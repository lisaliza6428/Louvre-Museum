
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
console.log(bullets.length)
let currentItem = 0;
let currentBullet = 0;
let slideNumber = document.getElementById("slide_number");
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
	bullets[currentBullet].classList.remove('active');

	
}

function showItem (direction) {
	items [currentItem].classList.add('next', direction);
	items [currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
	bullets[currentBullet].classList.add('active');
		

}

//animation
function nextItem (currentItem, currentBullet) {
	hideItem ('to-left');
	changeCurrentItem (currentItem + 1, currentBullet + 1);
	showItem ('from-right');
	if (currentItem === 0){
		slideNumber.innerHTML = `02`;
	}
	if (currentItem === 1){
		slideNumber.innerHTML = `03`;
	}
	if (currentItem === 2){
		slideNumber.innerHTML = `04`;
	}
	if (currentItem === 3){
		slideNumber.innerHTML = `05`;
	}
	if (currentItem === 4){
		slideNumber.innerHTML = `01`;
	}

}

function previousItem (currentItem, currentBullet) {
	hideItem ('to-right');
	changeCurrentItem (currentItem - 1 , currentBullet - 1);
	showItem ('from-left');  

	if (currentItem === 0){
		slideNumber.innerHTML = `05`;
	}
	if (currentItem === 1){
		slideNumber.innerHTML = `01`;
	}
	if (currentItem === 2){
		slideNumber.innerHTML = `02`;
	}
	if (currentItem === 3){
		slideNumber.innerHTML = `03`;
	}
	if (currentItem === 4){
		slideNumber.innerHTML = `04`;
	}
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


//////////////DOT CONTROLS////////////////


function funDotControls(){
	for (let i = 0; i < bullets.length; i++){
		bullets[i].addEventListener('click', function(a){

	if (i === 0) {
		nextItem(4,4)
		}
		
	if (i === 1) {
		nextItem(0,0)
		}
	if (i === 2) {
		nextItem(1,1);
		}
	if (i === 3) {
		nextItem(2,2)
		}
	if (i === 4) {
		nextItem(3,3)
		}

})

}
} 
funDotControls()


///////////SWIPE//////////////////////

const el = document.querySelector('.slides');
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
						previousItem(currentItem, currentBullet);
					}
				} else {
					if (isEnabled) {
						nextItem(currentItem, currentBullet);
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
			let touchobj = e.changedTouches[0];
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime();
			e.preventDefault();
	}, false);

	surface.addEventListener('touchmove', function(e){
			e.preventDefault();
	}, false);

	surface.addEventListener('touchend', function(e){
			let touchobj = e.changedTouches[0];
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