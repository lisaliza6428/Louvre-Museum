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

    /////////////Animation/////////////////////
    animOnSrroll
    const animItems = document.querySelectorAll('.img_gallery');
    if (animItems.length > 0){
        animOnSrroll()
        window.addEventListener('scroll', animOnSrroll);
        function animOnSrroll(params){
            for (let index = 0; index < animItems.length; index++ ){
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                let animItemPoint = window.innerHeight + animItemHeight * 1.75;
                if (animItemHeight > window.innerHeight){
                    animItemPoint = window.innerHeight + window.innerHeight;
                }
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                    animItem.classList.add('animate')
                } else {
                    animItem.classList.remove('animate')
                }

            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
               scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
               scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
         }
    }