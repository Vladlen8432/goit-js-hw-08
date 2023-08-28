import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new VimeoPlayer(iframe);

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});

document.addEventListener('DOMContentLoaded', function () {
  const savedTime = parseFloat(
    localStorage.getItem('videoplayer-current-time')
  );
  if (!isNaN(savedTime)) {
    player.setCurrentTime(savedTime);
  }
});

player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);
