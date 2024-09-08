const player = document.getElementById('player');
const playedTime = document.getElementById('playedTime');
const audioTime = document.getElementById('audioTime');
// 暂停&播放
const number=true;
const music=document.getElementById("music");
const pp=document.getElementById("pp");

// 上一首
const skipForward = document.getElementById('skipup');
// 下一首
const skipBackward = document.getElementById('skipdown');

// 音量调节
var volume = document.getElementById('volume');
// 音量调节滑块
var volumeTogger = document.getElementById('volumn-togger');

function formatTime(time) {
  const secondPart = Math.floor(time % 60).toString().padStart(2, '0');
  const minutePart = Math.floor(time / 60).toString().padStart(2, '0');
  return `${minutePart}:${secondPart}`;
}


setInterval(() => {
  playedTime.innerText = formatTime(player.currentTime);
  audioTime.innerText = formatTime(player.duration);

  const ratio = player.currentTime / player.duration;
}, 1000);

// 暂停/播放功能
pp.onclick=function(){
  if(number===false){
     number=true;
    document.getElementById("pp1").style.display="block";
    document.getElementById("pp2").style.display="none";
  
    music.pause();
     
  }else{
    document.getElementById("pp1").style.display="none";
    document.getElementById("pp2").style.display="block";
    number=false;
    music.play();
  }
};

// 上一首
skipup.addEventListener('click', function (event) {
  musicId = musicId - 1;
  if (musicId < 0) {
      musicId = 3;
  }
  initAndPlay();
});

// 下一首
skipdown.addEventListener('click', function (event) {
  musicId = musicId + 1;
  if (musicId > 3) {
      musicId = 0;
  }
  initAndPlay();
});

audio.addEventListener('timeupdate', updateVolumn);
function updateVolumn() {
    audio.volume = volumeTogger.value / 70;
}


// 点击音量调节设置静音
volume.addEventListener('click', setNoVolumn);
function setNoVolumn() {
    if (volumeTogger.value == 0) {
        if (lastVolumn == 0) {
            lastVolumn = 70;
        }
        volumeTogger.value = lastVolumn;
        volume.style.backgroundImage = "url('../images/音量.png')";
    }
    else {
        lastVolumn = volumeTogger.value;
        volumeTogger.value = 0;
        volume.style.backgroundImage = "url('../images/静音.png')";
    }
}
