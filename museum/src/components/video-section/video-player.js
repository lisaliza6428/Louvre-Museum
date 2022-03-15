import './video-player.scss';

const playerButton = document.querySelector('.player__btn');
const controlsButton = document.querySelector('.controls__btn-play');
const video = document.querySelector('.player__video');
const soundButton = document.querySelector('.controls__sound-btn');
const soundBar = document.querySelector('.controls__sound-bar');
const progressBar = document.querySelector('.controls__video-bar');
const player = document.querySelector('.player');
const controls = document.querySelector('.controls');
const fullscreenButton = document.querySelector('.controls__fullscreen-btn');
let isPlay = false;

video.volume = 0.2;

function toggleBtn() {
  if (!isPlay) {
    controlsButton.classList.toggle('controls__btn-pause');
    playerButton.classList.toggle('player__btn_none');
    video.play();
    isPlay = true;
  } else {
    controlsButton.classList.toggle('controls__btn-pause');
    playerButton.classList.toggle('player__btn_none');
    video.pause();
    isPlay = false;
  }
}

function play() {
  if (video.paused) {
    video.play()
    toggleBtn();
  }
  else {
    video.pause();
    toggleBtn();
  }
}

function changeVolume() {
  let v = this.value;
  video.volume = v / 100;
  soundBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${v}%, #C4C4C4 ${v}%, #C4C4C4 100%)`;
  if (video.volume === 0) {
    soundButton.classList.add('controls__sound-btn_off');
  }
  else {
    soundButton.classList.remove('controls__sound-btn_off');
    if (video.muted) {
      video.muted = false;
      soundBar.value = v;
      soundBar.style.background = `linear-gradient(to right, #710707 0%, #710707 20%, #C4C4C4 20%, #C4C4C4 100%)`;
    }
  }

}


function progressUpdate() {
  let duration = video.duration;
  let ctime = video.currentTime;
  progressBar.value = 100 * ctime / duration;
  progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progressBar.value}%, #C4C4C4 ${progressBar.value}%, #C4C4C4 100%)`;
  if (ctime === duration) {
    isPlay = false;
    controlsButton.classList.toggle('controls__btn-pause');
    playerButton.classList.toggle('player__btn_none');
  };
}

function fillProgressColor() {
  progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${this.value}%, #C4C4C4 ${this.value}%, #C4C4C4 100%)`;
}

function videoreWind() {
  let w = this.offsetWidth;
  let o = event.offsetX;
  this.value = 100 * o / w;
  video.currentTime = video.duration * (o / w);
  if (video.currentTime === video.duration) {
    isPlay = false;
    controlsButton.classList.remove('controls__btn-pause');
    playerButton.classList.remove('player__btn_none');
    controlsButton.classList.add('btn_play');
    playerButton.classList.add('player__btn');
  }
}

function videoMute() {
  if (video.muted) {
    video.muted = false;
    soundButton.classList.toggle('controls__sound-btn_off');
    soundBar.value = 20;
    soundBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${soundBar.value}%, #C4C4C4 ${soundBar.value}%, #C4C4C4 100%)`;
  } else {
    video.muted = true;
    soundButton.classList.toggle('controls__sound-btn_off');
    soundBar.value = 0;
    soundBar.style.background = `linear-gradient(to right, #C4C4C4 0%, #C4C4C4 0%, #C4C4C4 0%, #C4C4C4 100%)`;
    if (soundBar.value = 0) {
      soundBar.value = 20;
    }
  }
}

function videoFull() {
  if (!document.fullscreenElement) {
    video.classList.add('fullscreen');
    controls.classList.add('fullscreen');
    player.classList.add('fullscreen');
    player.requestFullscreen();
  } else {
    document.exitFullscreen();
    video.classList.remove('fullscreen');
    controls.classList.remove('fullscreen');
    player.classList.remove('fullscreen');
  }
}

document.addEventListener('keyup', function (e) {
  if (e.code === 'Space') {
    play();
  }
  if (e.code === 'KeyM') {
    videoMute();
  }
  if (e.code === 'KeyF') {
    videoFull();
  }
});

window.onkeydown = function (e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
};

controlsButton.onclick = play;
video.onclick = play;
video.ontimeupdate = progressUpdate;
soundBar.oninput = changeVolume;
progressBar.oninput = fillProgressColor;
progressBar.onclick = videoreWind;
soundButton.onclick = videoMute;
fullscreenButton.onclick = videoFull;