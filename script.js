console.log("Welcome to ROOH");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  { songName: "Malang Sajna", filePath: "1.mp3", coverPath: "cover1.jpg" },
  {
    songName: "Munda Sona Hoon Mai",
    filePath: "2.mp3",
    coverPath: "cover2.jpg",
  },
  {
    songName: "Phir Aur Kya Chahiye",
    filePath: "3.mp3",
    coverPath: "cover3.jpg",
  },
  { songName: "What Jhumka ?", filePath: "4.mp3", coverPath: "cover4.jpg" },
  { songName: "Tere Hawale", filePath: "5.mp3", coverPath: "cover5.jpg" },
  {
    songName: "Pyaar Hota Kayi Baar Hai",
    filePath: "6.mp3",
    coverPath: "cover6.jpg",
  },
  { songName: "Kesariya", filePath: "7.mp3", coverPath: "cover7.jpg" },
  { songName: "Rasiya", filePath: "8.mp3", coverPath: "cover8.jpg" },
  { songName: "Aaj Ke Baad", filePath: "9.mp3", coverPath: "cover9.jpg" },
  { songName: "Naseeb Se", filePath: "10.mp3", coverPath: "cover10.jpg" },
];

songItems.forEach((element, i) => {
  //console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//audioElement.play();

// Handle play/pause click
  
masterPlay.addEventListener('click', ()=>{
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//Listen to Events
audioElement.addEventListener("timeupdate", () => {
  //console.log('timeupdate');
  //seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //console.log(progress)
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e)=>{
      makeAllPlays();
      
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `${songIndex+1}.mp3`;
      audioElement.play();
      gif.style.opacity = 1;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
      audioElement.play();
      audioElement.currentTime = 0;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
      audioElement.play();
      audioElement.currentTime = 0;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
})