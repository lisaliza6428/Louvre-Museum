import './sass/style.scss'

function addImage(){
const pictureInnerContainer = document.querySelector('.picture-inner-container');
const array = [
    `/img/galery/galery1.jpg`,
    `/img/galery/galery2.jpg`,
    `/img/galery/galery3.jpg`,
    `/img/galery/galery4.jpg`,
    `/img/galery/galery5.jpg`,
    `/img/galery/galery6.jpg`,
    `/img/galery/galery7.jpg`,
    `/img/galery/galery8.jpg`,
    `/img/galery/galery9.jpg`,
    `/img/galery/galery10.jpg`,
    `/img/galery/galery11.jpg`,
    `/img/galery/galery12.jpg`,
    `/img/galery/galery13.jpg`,
    `/img/galery/galery14.jpg`,
    `/img/galery/galery15.jpg`,
]
    function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
    }

    shuffle(array)


    for (let x = 0; x < array.length; x++){
    const img = document.createElement('img');
    img.classList.add('img_gallery')
    img.src = array[x];
    img.alt = `gallery`;
    pictureInnerContainer.append(img);}

}
addImage()