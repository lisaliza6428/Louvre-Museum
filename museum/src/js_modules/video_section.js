document.querySelector('.play').onclick = play;
document.querySelector('.video.active').onclick = play;
document.querySelector('.video.active').ontimeupdate = progressUpdate;
document.querySelector('.sound_bar').oninput = videoVolume;
document.querySelector('.video_bar').oninput = progr;
document.querySelector('.video_bar').onclick = videoreWind;
document.querySelector('.sound').onclick = videoMute;
document.querySelector('.fullsceen').onclick = videoFull;
const btnplay = document.querySelector('.play');
const largeBtnPlay = document.querySelector('.largebtn');
const btnsound = document.querySelector('.sound');
const video = document.querySelector('.video.active');
const progress = document.querySelector('.video_bar');
const player = document.querySelector('.player');
let isPlay = false;





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
    if(video.paused){
    video.play()
    toggleBtn();
   }
  else {
    video.pause();
    toggleBtn();
    }
}

function videoVolume(){
    let v = this.value;
    video.volume = v/100;
    document.querySelector('.sound_bar').style.background = `linear-gradient(to right, #710707 0%, #710707 ${v}%, #C4C4C4 ${v}%, #C4C4C4 100%)`;
    if (video.volume === 0){
      btnsound.classList.add('btn_soundoff');
    }
     else{
      btnsound.classList.remove('btn_soundoff');
      if (video.muted){
        video.muted = false;
        
        document.querySelector('.sound_bar').value = v;
        document.querySelector('.sound_bar').style.background = `linear-gradient(to right, #710707 0%, #710707 20%, #C4C4C4 20%, #C4C4C4 100%)`
       
      }
    } 

}


function progressUpdate(){
  let duration = video.duration;
  let ctime = video.currentTime;
  progress.value = 100*ctime/duration;
  document.querySelector('.video_bar').style.background = `linear-gradient(to right, #710707 0%, #710707 ${progress.value}%, #C4C4C4 ${progress.value}%, #C4C4C4 100%)`;
     if (ctime === duration) {
      isPlay = false;
      btnplay.classList.toggle('btn_pause');
      largeBtnPlay.classList.toggle('largebtn_none');
    }; 
}
function progr(){
 
  document.querySelector('.video_bar').style.background = `linear-gradient(to right, #710707 0%, #710707 ${this.value}%, #C4C4C4 ${this.value}%, #C4C4C4 100%)`;
  
}



function videoreWind(){
  let w = this.offsetWidth;
  let o = event.offsetX;
  this.value = 100 * o /w;
  video.currentTime = video.duration * (o/w);
  ////////////////////////////////////////////
  if (video.currentTime === video.duration){
    isPlay = false;
    btnplay.classList.remove('btn_pause');
    largeBtnPlay.classList.remove('largebtn_none');
    btnplay.classList.add('btn_play');
    largeBtnPlay.classList.add('largebtn');
    
    
    

  }
}


function videoMute(){
  if (video.muted){
    video.muted = false;
    btnsound.classList.toggle('btn_soundoff');
    document.querySelector('.sound_bar').value = 20;
    document.querySelector('.sound_bar').style.background = `linear-gradient(to right, #710707 0%, #710707 20%, #C4C4C4 20%, #C4C4C4 100%)`
   
  } else{
    video.muted = true;
    btnsound.classList.toggle('btn_soundoff');
    document.querySelector('.sound_bar').value = 0;
    document.querySelector('.sound_bar').style.background = `linear-gradient(to right, #C4C4C4 0%, #C4C4C4 0%, #C4C4C4 0%, #C4C4C4 100%)`;

     if (document.querySelector('.sound_bar').value = 0){
      btnsound.classList.toggle('btn_soundon');
      document.querySelector('.sound_bar').value = 20
      
     }
    
    
  }
}



function videoFull() {
  if (!document.fullscreenElement) {
    video.classList.add('_fullscreen');
    document.querySelector('.videopanel').classList.add('_fullscreen');
    document.querySelector('.video_container').classList.add('_fullscreen');
    player.classList.add('_fullscreen');
    player.requestFullscreen();
  } else {
    document.exitFullscreen();
    video.classList.remove('_fullscreen');
    document.querySelector('.videopanel').classList.remove('_fullscreen');
    document.querySelector('.video_container').classList.remove('_fullscreen');
    player.classList.remove('_fullscreen');
  } 
}







 document.addEventListener('keyup', function(e){

  if (e.code === 'Space') {
    play()
  }
  if (e.code === 'KeyM') {
    videoMute()
  }
  if (e.code === 'KeyF') {
    videoFull()
  }
});

window.onload = () => {
  let observer = new IntersectionObserver(() => {
    console.log('hhcx!')
    

      document.addEventListener('keyup', function(e){

        e.preventDefault()
      }); 

  
  }, { threshold: 0.4 })

  observer.observe(video)
}