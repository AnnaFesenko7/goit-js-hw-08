import Player from '@vimeo/player';
import debounce from 'lodash.debounce'
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
    
setLastSavedTime()



// let intervalId = null;

// player.on('play', myTimer);
// player.on('pause',  function() { clearInterval(intervalId) } )
       
// function myTimer(e) {
//    intervalId = setInterval(getCurrentTimeForLocalStorage, 1000);
//    console.log("🚀 ~ file: 02-video.js ~ line 20 ~ myTimer ~ intervalId ", intervalId )
    
// }



// function getCurrentTimeForLocalStorage() {
//     player.getCurrentTime().then(function (seconds) {
//         console.log(seconds)
//         localStorage.setItem('current-time', seconds);
       
//     }).catch(function (error) {
//         console.log(error)
//     });
    
// }


player.on('play', debounce(getCurrentTimeForLocalStorage, 1));

      
function getCurrentTimeForLocalStorage() {
    player.getCurrentTime().then(function (seconds) {
                      
        localStorage.setItem('current-time', seconds);
        console.log("🚀 ~ file: 02-video.js ~ line 43 ~ seconds", seconds)
        
    }).catch(function (error) {
        console.log(error)
    });
}

function setLastSavedTime() {
    const savedTime = localStorage.getItem('current-time');
    console.log("🚀 ~ file: 02-video.js ~ line 47 ~ setLastSavedTime ~ savedTime", savedTime)
    
    if (savedTime) {
        player.setCurrentTime(savedTime);
    }
   
}

 



