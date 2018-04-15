(() => {
console.log('video stuff loaded!');

String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase());}


//variable stack goes here
let sigils = document.querySelectorAll('.sigilContainer'),
lightbox = document.querySelector('.lightbox'),
closeLightBoxButton = lightbox.querySelector('.close-lightbox'),
vidPlayer = document.querySelector('video');
vidControls = document.querySelector('.controls');
imageBanner = document.querySelector('#houseImages');
var muteButton = document.querySelector('#muteVideo');
var houseName = ["stark", "baratheon", "lannister", "tully", "greyjoy", "arryn"];

// functions in the middle

function showHouseVideo() {
  let houseName = this.className.split(' ') [1].capIt();



//split apart the class name on th eelement, grab the house from the result.

document.querySelector('h1').textContent = `House ${this.className.split(' ')[1].capIt()}`;
//debugger
lightbox.classList.add('show-lightbox');
//make it play
vidPlayer.src =
`video/House-${houseName}.${vidPlayer.currentSrc.split('.')[1]}`;
vidPlayer.load();
vidPlayer.play();

scrollBanners(this.dataset.offset)
//debugger
}

function scrollBanners(offset) {
  //move the banner images to the left
  let moveIt = offset * 600 + "px";

  imageBanner.style.right = moveIt;
}

function closeLightbox () {
//debugger
lightbox.classList.remove('show-lightbox');
//stop the video and rewind it to 0
vidPlayer.currentTime = 0;
vidPlayer.pause();
}

function pausePlay() {
  //debugger;
  let theButton = this.firstElementChild;
  //
  if (vidPlayer.paused == true) {
    //play the video
    vidPlayer.play();
    theButton.dataset.icon = "pause-circle";
  } else{
    vidPlayer.pause();
    theButton.dataset.icon = 'play-circle';
  }

}
// i tried my best to incorporate a mute button feature, but unfortunately couldnt figure it out
function muteVideo() {
  console.log ("from muteVideo");
  if (vidPlayer.muted == true) {
    vidPlayer.muted();
  } else {
   vidPlayer.muted == false;
  }
}




// event handeling at the bottom

sigils.forEach(sigil => sigil.addEventListener('click', showHouseVideo));
closeLightBoxButton.addEventListener('click', closeLightbox);
vidPlayer.addEventListener('ended', closeLightbox);
vidControls.addEventListener('click', pausePlay);
imageHover.addEventListener('onmouseover', imageChange);
muteButton.addEventListener("click", muteVideo);



})();
