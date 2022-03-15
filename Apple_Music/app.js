const playBtn = document.getElementById('play-btn');
const backBtn = document.getElementById('backward-btn');
const forwardBtn = document.getElementById('forward-btn');
const songEl = document.getElementById('song');
const artistEl = document.getElementById('artist');
const imgEl = document.getElementById('img-song');
const player = document.querySelector('.player-buttons');

const playerBtns = document.querySelector('.player-buttons');



let musicList = [
    {
        img:'../images/img-1.jpeg',
        name:'another-day',
        music:'../Music/another-day.mp3',
        artist:'Eminem'
    },
    {
        img:'../images/img-2.jpeg',
        name:'dont-you',
        music:'../Music/dont-you.mp3',
        artist:'Dualipa'
    },
    {
        img:'../images/img-3.jpeg',
        name:'everything-feels',
        music:'everything-feels.mp3',
        artist:'Linkin park'
    },
    {
        img:'../images/img-4.jpeg',
        name:'spirit-blossom',
        music:'../Music/spirit-blossom.mp3',
        artist:'50cent'
    }
];


let trackIndex = 2;
let isPlaying = false;
let isRandom = false;
let updateTimer;

loadTrack(musicList[trackIndex]);


playBtn.addEventListener('click', () => {
    const isPlaying = playerBtns.classList.contains('play-btn');

    if(isPlaying){
        pauseSong();
    }   else {
        playSong();
    }
})

function loadTrack(trackIndex){
    
    songEl.innerText = trackIndex.name;
    artistEl.innerText = trackIndex.artist;

    audio.src = musicList[trackIndex];
    

}

function playSong(){
    playerBtns.classList.add('play-btn');

    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    
}

function pauseSong(){
    playerBtns.classList.remove('play-btn');

    playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;

}