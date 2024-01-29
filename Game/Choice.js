
const music1 =document.querySelector('.music1');
const music2 =document.querySelector('.music2');
const music3 =document.querySelector('.music3');
const music4 =document.querySelector('.music4');
let musicPlayer1 = new Audio('./GameMusic/creep.mp3'); 
let musicPlayer2 = new Audio('./GameMusic/firestone.mp3'); 
let musicPlayer3 = new Audio('./GameMusic/hymn.mp3'); 
let musicPlayer4 = new Audio('./GameMusic/Numb.mp3');
let choice=new Audio('./GameMusic/choice.mp3');  
const Gogame = new URL('./Game.html', window.location.href);
export let key =0;


// -------------  밑은 addEventListener-------------------------------------------------
function localDate(num) {
  localStorage.setItem('Music', num);
}

function choiceMusic(){
  choice.play();
}

function musicPlayNo1(){
  musicPlayer1.play();
}
function musicPause(){
 musicPlayer1.pause();
 musicPlayer2.pause();
 musicPlayer3.pause();
 musicPlayer4.pause();
}

function musicPlayNo2(){
  musicPlayer2.play();
}

function musicPlayNo3(){
  musicPlayer3.play();
}

function musicPlayNo4(){
     musicPlayer4.play();
}


function nextGame(){ 
 
  window.location.href = Gogame.href;
}
// -------------  밑은 addEventListener-------------------------------------------------

music1.addEventListener("mouseover",()=>{
  musicPlayNo1();
});

music1.addEventListener("mouseout", ()=>{
  musicPause();
});


 music1.addEventListener('click',()=>{
  localDate(1);

  musicPause();
  choiceMusic();
  setTimeout( nextGame,2000);
})

music2.addEventListener("mouseover",()=>{
  musicPlayNo2();
});

music2.addEventListener("mouseout", ()=>{
  musicPause();
});
music2.addEventListener('click',()=>{
  localDate(2);
  
  musicPause();
  choiceMusic();
  setTimeout( nextGame,2000);
})



music3.addEventListener("mouseover",()=>{
  musicPlayNo3();
 
});

music3.addEventListener("mouseout", ()=>{
  musicPause();
});

music3.addEventListener('click',()=>{
  localDate(3);
  musicPause();
  choiceMusic();
  setTimeout(nextGame,2000);
})

music4.addEventListener("mouseover",()=>{
  musicPlayNo4();
});

music4.addEventListener("mouseout", ()=>{
  musicPause();
});

music4.addEventListener('click',()=>{
  localDate(4);
  musicPause();
  choiceMusic();
  setTimeout(nextGame,2000);
  

})



