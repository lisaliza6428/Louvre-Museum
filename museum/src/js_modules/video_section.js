



////////////PLAYER////////////////////////////

document.querySelector('.play').onclick = play;
document.querySelector('.video.active').onclick = play;
document.querySelector('.sound_bar').oninput = videoVolume;
document.querySelector('.sound').onclick = videoMute;
document.querySelector('.fullsceen').onclick = videoFull;
const btnplay = document.querySelector('.play');
const largeBtnPlay = document.querySelector('.largebtn');
const btnsound = document.querySelector('.sound');


let isPlay = false;
let progress;
let video;
video = document.querySelector('.video.active');
progress = document.querySelector('.video_bar');
video.ontimeupdate = progressUpdate;
progress.onclick = videoreWind;


function toggleBtn() {
 
  if(!isPlay) {
    btnplay.classList.toggle('btn_pause');
    largeBtnPlay.classList.toggle('largebtn_none');
    video.play();
    isPlay = true;
  } else {
    btnplay.classList.toggle('btn_pause');
    largeBtnPlay.classList.toggle('largebtn_none');
    video.pause();
    isPlay = false;
  }
}

function play(){
  video = document.querySelector('.video.active');
  video.ontimeupdate = progressUpdate;
  
    if(video.paused)
   { video.play()
    toggleBtn();
   }
  else
    {video.pause();
      toggleBtn();
    }
}

function videoVolume(){
    video = document.querySelector('.video.active');
    let v = this.value;
    video.volume = v/100;
    document.querySelector('.sound_bar').style.background = `linear-gradient(to right, #710707 0%, #710707 ${v}%, #C4C4C4 ${v}%, #C4C4C4 100%)`
    


}


function progressUpdate (){
  video = document.querySelector('.video.active');
    progress = document.querySelector('.video_bar');
    let duration = video.duration;
    let ctime = video.currentTime;
    progress.value = 100*ctime/duration;
    progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progress.value}%, #C4C4C4 ${progress.value}%, #C4C4C4 100%)`
 
}



function videoreWind(){
  video = document.querySelector('.video.active');
    let w = this.offsetWidth;
    let o = event.offsetX;
    this.value = 100 * o /w;
    video.pause();
    video.currentTime = video.duration * (o/w);
    video.play();
    
}


function videoFull() {
  video = document.querySelector('.video.active');
    if (!document.fullscreenElement) {
      video.requestFullscreen();
    } else {
      document.exitFullscreen();
    } 
}


function videoMute(){
  video = document.querySelector('.video.active');

  if (video.muted){
    video.muted = false;
    btnsound.classList.toggle('btn_soundoff');
    document.querySelector('.sound_bar').value = 20;
    
    document.querySelector('.sound_bar').style.background = `linear-gradient(to right, #710707 0%, #710707 20%, #C4C4C4 20%, #C4C4C4 100%)`
   
  } else{
    video.muted = true;
    btnsound.classList.toggle('btn_soundoff');
    document.querySelector('.sound_bar').value = 0;
    document.querySelector('.sound_bar').style.background = `linear-gradient(to right, #C4C4C4 0%, #C4C4C4 0%, #C4C4C4 0%, #C4C4C4 100%)`
    
  }
}

/* 
function stopVideo(){
  video.pause();
  video.currentTime = 0;
  
} */

/* function speedUp(){
  video = document.querySelector('.video.active');
  video.play();
  video.currentTime += 3;

}

function speedDown(){
  video = document.querySelector('.video.active');
  video.play();
  video.currentTime -= 3;
}
 */

/////


/* document.addEventListener('keyup', function(e){
  if (e.keyCode === 0 || e.keyCode === 32) {
   
    play()
  }
  if (e.keyCode === 0 || e.keyCode === 77) {
    videoMute()
  }
  if (e.keyCode === 0 || e.keyCode === 70) {
    videoFull()
  }
  if (e.keyCode === 0 || e.keyCode === 39) {
    speedUp()
  }
  if (e.keyCode === 0 || e.keyCode === 37) {
    speedDown()
  }
  
});

 */




