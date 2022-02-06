import Player from '@vimeo/player';
import debounce from 'lodash.debounce'
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
    
setLastSavedTime()

// player.on('play', myTimer);
       
// function myTimer(e) {
//     setInterval(getCurrentTimeForLocalStorage, 1000);
//     console.log(myTimer)
// }

// function stopTimer() {
//    clearInterval(myTimer);
// }

// function getCurrentTimeForLocalStorage() {
//     player.getCurrentTime().then(function (seconds) {
//         console.log(seconds)
//         localStorage.setItem('current-time', seconds);
//         stopTimer()
//     }).catch(function (error) {
//         console.log(error)
//     });
    
// }

player.on('play', debounce(getCurrentTimeForLocalStorage, 1));
      
function getCurrentTimeForLocalStorage() {
    player.getCurrentTime().then(function (seconds) {
        console.log("🚀 ~ file: 02-video.js ~ line 35 ~ seconds", seconds)
              
        localStorage.setItem('current-time', seconds);
        
    }).catch(function (error) {
        console.log(error)
    });
}

function setLastSavedTime() {
    const savedTime = localStorage.getItem('current-time');
    console.log("🚀 ~ file: 02-video.js ~ line 47 ~ setLastSavedTime ~ savedTime", savedTime)
    
    if (savedTime) {
        setPlayerOnTime(savedTime);
    }
   
}

 
function setPlayerOnTime(savedTime) {
    player.setCurrentTime(savedTime).then(function (seconds) {
        console.log("🚀 ~ file: 02-video.js ~ line 55 ~ seconds", seconds)
        
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
}


