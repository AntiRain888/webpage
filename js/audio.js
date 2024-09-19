const player = document.getElementById('player');
const playedTime = document.getElementById('playedTime');
const audioTime = document.getElementById('audioTime');
// 暂停&播放
let isPaused=true;
const music=document.getElementById("music");
const pp=document.getElementById("pp");

// 上一首
const skipForward = document.getElementById('skipup');
// 下一首
const skipBackward = document.getElementById('skipdown');

// 音量调节
const volume = document.getElementById('volume');
// 音量调节滑块
const volumeTogger = document.getElementById('volumn-togger');
//倍速
const speed = document.getElementById('speed');

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
  if(isPaused===false){
     isPaused=true;
    document.getElementById("pp1").style.display="block";
    document.getElementById("pp2").style.display="none";
  
    player.pause();
     
  }else{
    document.getElementById("pp1").style.display="none";
    document.getElementById("pp2").style.display="block";
    isPaused=false;
    player.play();
  }
};

// 上一首
skipup.addEventListener('click', function () {
  musicId = musicId - 1;
  if (musicId < 0) {
      musicId = 3;
  }
  initAndPlay();
});

// 下一首
skipdown.addEventListener('click', function () {
  musicId = musicId + 1;
  if (musicId > 3) {
      musicId = 0;
  }
  initAndPlay();
});


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

speed.addEventListener('click', function () {
  speedText = speed.innerText;
  if (speedText == "1.0X") {
      speed.innerText = "1.5X";
      player.playbackRate = 1.5;
  }
  else if (speedText == "1.5X") {
      speed.innerText = "2.0X";
      player.playbackRate = 2.0;
  }
  else if (speedText == "2.0X") {
      speed.innerText = "0.5X";
      player.playbackRate = 0.5;
  }
  else if (speedText == "0.5X") {
      speed.innerText = "1.0X";
      player.playbackRate = 1.0;
  }
});

volumeTogger.addEventListener('change',function(e){
  console.log(e.target.value/100)
  player.volume=e.target.value/100
})