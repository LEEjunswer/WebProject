const music1 =document.querySelector('.music1');
const music2 =document.querySelector('.music2');
const music3 =document.querySelector('.music3');
const music4 =document.querySelector('.music4');
let musicPlayer1 = new Audio('./GameMusic/creep.mp3'); 
let musicPlayer2 = new Audio('./GameMusic/firestone.mp3'); 
let musicPlayer3 = new Audio('./GameMusic/hymn.mp3'); 
let musicPlayer4=new Audio('./GameMusic/Numb.mp3');
let choice=new Audio('./GameMusic/choice.mp3');  
const Gogame = new URL('./Game.html', window.location.href);
let gameChoice;
// -------------  밑은 addEventListener-------------------------------------------------
function choiceMusic(){
  choice.play();
}


function musicPlayNo1(){
  musicPlayer1.play();
}
function musicPauseNo1(){
 musicPlayer1.pause();
}

function musicPlayNo2(){
  musicPlayer2.play();
}
function musicPauseNo2(){
 musicPlayer2.pause();
}
function musicPlayNo3(){
  musicPlayer3.play();
}
function musicPauseNo3(){
 musicPlayer3.pause();
}

function musicPlayNo4(){
     musicPlayer4.play();
}
function musicPauseNo4(){
    musicPlayer4.pause();
}

function netxGame(){ //다음게임넘어가는 구간
  window.location.href = Gogame.href;
}
// -------------  밑은 addEventListener-------------------------------------------------
music1.addEventListener("mouseover",()=>{
  musicPlayNo1();
});

music1.addEventListener("mouseout", ()=>{
  musicPauseNo1();
});

music1.addEventListener('click',()=>{
  gameChoice = 1;
  musicPauseNo1();
  choiceMusic();
  setTimeout(netxGame,2000);
})

music2.addEventListener("mouseover",()=>{
  musicPlayNo2();
});

music2.addEventListener("mouseout", ()=>{
  musicPauseNo2();
});
music2.addEventListener('click',()=>{
  gameChoice=2;
  musicPauseNo2();
  choiceMusic();
  setTimeout(netxGame,2000);
})



music3.addEventListener("mouseover",()=>{
  musicPlayNo3();
});

music3.addEventListener("mouseout", ()=>{
  musicPauseNo3();
});

music3.addEventListener('click',()=>{
  gameChoice=3;
  musicPauseNo3();
  choiceMusic();
  setTimeout(netxGame,2000);
})

music4.addEventListener("mouseover",()=>{
  musicPlayNo4();
});

music4.addEventListener("mouseout", ()=>{
  musicPauseNo4();
});

music4.addEventListener('click',()=>{
  gameChoice=4;
  musicPauseNo4();
  choiceMusic();
  setTimeout(netxGame,2000);
})