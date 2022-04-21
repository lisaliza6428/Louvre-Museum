import './gallery.scss';

function addImage() {
  const pictureInnerContainer = document.querySelector('.picture-inner-container');
  const array = [
    './assets/gallery/galery1.jpg',
    './assets/gallery/galery2.jpg',
    './assets/gallery/galery3.jpg',
    './assets/gallery/galery4.jpg',
    './assets/gallery/galery5.jpg',
    './assets/gallery/galery6.jpg',
    './assets/gallery/galery7.jpg',
    './assets/gallery/galery8.jpg',
    './assets/gallery/galery9.jpg',
    './assets/gallery/galery10.jpg',
    './assets/gallery/galery11.jpg',
    './assets/gallery/galery12.jpg',
    './assets/gallery/galery13.jpg',
    './assets/gallery/galery14.jpg',
    './assets/gallery/galery15.jpg',
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

function animOnSrroll() {
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

window.addEventListener('scroll', animOnSrroll);
