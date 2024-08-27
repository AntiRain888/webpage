const player = document.getElementById('player');
const playedTime = document.getElementById('playedTime');
const audioTime = document.getElementById('audioTime');

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
