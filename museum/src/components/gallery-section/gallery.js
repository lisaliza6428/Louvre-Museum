import './gallery.scss';

function addImage() {
  const pictureInnerContainer = document.querySelector('.picture-inner-container');
  const array = [
    './assets/gallery/gallery1.jpg',
    './assets/gallery/gallery2.jpg',
    './assets/gallery/gallery3.jpg',
    './assets/gallery/gallery4.jpg',
    './assets/gallery/gallery5.jpg',
    './assets/gallery/gallery6.jpg',
    './assets/gallery/gallery7.jpg',
    './assets/gallery/gallery8.jpg',
    './assets/gallery/gallery9.jpg',
    './assets/gallery/gallery10.jpg',
    './assets/gallery/gallery11.jpg',
    './assets/gallery/gallery12.jpg',
    './assets/gallery/gallery13.jpg',
    './assets/gallery/gallery14.jpg',
    './assets/gallery/gallery15.jpg',
  ];

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  shuffle(array);

  for (let x = 0; x < array.length; x += 1) {
    const img = document.createElement('img');
    img.classList.add('img_gallery');
    img.src = array[x];
    img.alt = 'gallery';
    pictureInnerContainer.append(img);
  }
}

addImage();

// Animation

const animItems = document.querySelectorAll('.img_gallery');

function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

function animOnScroll() {
  for (let index = 0; index < animItems.length; index += 1) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    let animItemPoint = window.innerHeight + animItemHeight * 1.75;
    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight + window.innerHeight;
    }
    if ((window.pageYOffset > animItemOffset - animItemPoint)
    && window.pageYOffset < (animItemOffset + animItemHeight)) {
      animItem.classList.add('animate');
    } else {
      animItem.classList.remove('animate');
    }
  }
}

window.addEventListener('scroll', animOnScroll);
