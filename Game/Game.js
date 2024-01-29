
const canvas =document.querySelector('#canvas');
const ctx=canvas.getContext('2d');
const score= document.querySelector('.score');
const check= document.querySelector('.check');
const comboB=document.querySelector('.combo');
const maxComboB=document.querySelector('.maxCombo');
const returnBtn=document.querySelector('.returnBtn');
const gameOutBtn=document.querySelector('.gameOutBtn');
let musicPlay1 = new Audio('./GameMusic/creepF.mp3'); 
let musicPlay2 = new Audio('./GameMusic/firestone1.mp3'); 
let musicPlay3 = new Audio('./GameMusic/HymF.mp3'); 
let musicPlay4 = new Audio('./GameMusic/NumbF.mp3');
let lifeList=document.querySelectorAll('.life');
const goChoice = new URL('./Choice.html', window.location.href);
const goMain = new URL('./Main.html', window.location.href);
let intervalId;
let life=0;
let maxCombo=0;
let combo=0;
let jumsu=0;
let lifeCombo=0;
function getMusic(){
  return localStorage.getItem('Music');
}
const selectedMusic = getMusic();

function winner(){
  clearInterval(intervalId);
  alert(`당신의 최대콤보=${maxCombo} 점수=${jumsu}`);
  setTimeout(()=>{
      returnBtn.classList.add('on');
    gameOutBtn.classList.add('on');
  },1000);
}


function lifeListCheck(){
   if(life===11) {
    musicPlay1.pause();
    musicPlay2.pause();
    musicPlay3.pause();
    musicPlay4.pause();
    clearInterval(intervalId);
    alert(`당신의 최대콤보=${maxCombo} 점수=${jumsu}`);
    setTimeout(()=>{
        returnBtn.classList.add('on');
      gameOutBtn.classList.add('on');
    },1000);
}
if (life <= 11) {
      lifeList[life].classList.add('on');
      life++;
    }else if(life<=1){
    life=1;
    }else if(lifeCombo==10 && life>=1){
      lifeList[life].classList.remove('on');
      life--;
      lifeCombo=0;
  }
}
let  boxList=[]; 
function drawCheckLine1() {
  ctx.beginPath();
  ctx.strokeStyle='blue';
  ctx.moveTo(0, 480);
  ctx.lineTo(500, 480);         
  ctx.stroke();                        
}
function drawCheckLine2() {
  ctx.beginPath();
  ctx.strokeStyle='blue';
  ctx.moveTo(0, 460);
  ctx.lineTo(500, 460);         
  ctx.stroke();                        
}
function draw1Line() {
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.setLineDash([5, 5]);
  ctx.moveTo(100, 0);
  ctx.lineTo(100, 500);         
  ctx.stroke();
  ctx.setLineDash([]);             
}
function draw2Line() {
  ctx.beginPath();
  ctx.strokeStyle = 'orange';
  ctx.setLineDash([5, 5]);
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 500);         
  ctx.stroke();
  ctx.setLineDash([]);             
}
function draw3Line() {
  ctx.beginPath();
  ctx.strokeStyle = 'yellow';
  ctx.setLineDash([5, 5]);
  ctx.moveTo(300, 0);
  ctx.lineTo(300, 500);         
  ctx.stroke();             
           
}
function draw4Line() {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.setLineDash([5, 5]);
  ctx.moveTo(400, 0);
  ctx.lineTo(400, 500);         
  ctx.stroke();             
  ctx.setLineDash([]);
}
function drawBackground() {
  ctx.beginPath();
  ctx.clearRect(0, 0,500,500);
  drawCheckLine1();
  drawCheckLine2();
  draw1Line();
  draw2Line();
  draw3Line();
  draw4Line();
 
}
function drawFilledRect(x, y, width, height, radius, fillColor) {
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  ctx.fill();
}
function maxComboBoard(){
  if(combo>maxCombo){
    maxCombo=combo;
    maxComboB.textContent=maxCombo+'';
  }
 
}
function keyColor(e) {
  ctx.beginPath();
  if (e.key == 'q') {
  
    drawFilledRect(0, 150, 100, 1000 * 2 / 3,40, "red");
    for (let i = 0; i < boxList.length; i++) {
      const box = boxList[i];
     
      if (box.y >= 440-10 && box.y<= 460-10 && box.x==0) {

        boxList.splice(i, 1);
        ++combo;
        ++lifeCombo;
        score.textContent= ++jumsu;
        check.innerHTML='Good'; 
        check.classList.add('on');
        comboB.classList.add('on');
        comboB.innerHTML=combo;
        setTimeout(()=>{
          check.classList.remove('on');
          comboB.classList.remove('on');
        },200);
         
      }else if(box.y >= 460-10 && box.y<= 480-10 && box.x==0) {
        boxList.splice(i, 1);
        jumsu+=3;
        ++lifeCombo;
        ++combo;
        score.textContent= jumsu;
        check.innerHTML='Great';
        check.classList.add('on');
        comboB.classList.add('on');
        comboB.innerHTML=combo;
        setTimeout(()=>{
          check.classList.remove('on');
          comboB.classList.remove('on');
        },200);
      }else if(box.y >= 480-10 && box.y<= 500-10 && box.x==0) {
          boxList.splice(i, 1);
          jumsu+=1;
          ++lifeCombo;
          ++combo;
          score.textContent= jumsu;
          check.innerHTML='Great';
          check.classList.add('on');
          comboB.classList.add('on');
          comboB.innerHTML=combo;
          setTimeout(()=>{
            check.classList.remove('on');
            comboB.classList.remove('on');
          },200);
      }  else if(box.y > 400-10 && box.y< 440-10 && box.x==0){
        check.innerHTML='Miss';
        check.classList.add('on');
        lifeCombo=0;
        combo=0;
        setTimeout(()=>{
          check.classList.remove('on');
      
        },200);
        lifeListCheck();

        }
      } 
    ctx.stroke();
  } else if (e.key == 'w') {
    drawFilledRect(100, 150, 100, 1000 * 2 / 3,40, "orange");
    for (let i = 0; i < boxList.length; i++) {
      const box = boxList[i];
     
      if (box.y >= 440-10 && box.y<= 460-10 && box.x==100) {

        boxList.splice(i, 1);
        ++combo;
        ++lifeCombo;
        score.textContent= ++jumsu;
        check.innerHTML='Good'; 
        check.classList.add('on');
        comboB.classList.add('on');
        comboB.innerHTML=combo;
        setTimeout(()=>{
          check.classList.remove('on');
          comboB.classList.remove('on');
        },200);
         
      }else if(box.y >= 460-10 && box.y<= 480-10 && box.x==100) {
        boxList.splice(i, 1);
        jumsu+=3;
        ++combo;
        ++lifeCombo;
        score.textContent= jumsu;
        check.innerHTML='Great';
        check.classList.add('on');
        comboB.classList.add('on');
        comboB.innerHTML=combo;
        setTimeout(()=>{
          check.classList.remove('on');
          comboB.classList.remove('on');
        },200);
      }else if(box.y >= 480-10 && box.y<= 500-10 && box.x==100) {
          boxList.splice(i, 1);
          jumsu+=1;
          ++combo;
          ++lifeCombo;
          score.textContent= jumsu;
          check.innerHTML='Great';
          check.classList.add('on');
          comboB.classList.add('on');
          comboB.innerHTML=combo;
          setTimeout(()=>{
            check.classList.remove('on');
            comboB.classList.remove('on');
          },200);
      }  else if(box.y > 400-10 && box.y< 440-10 && box.x==100){
        check.innerHTML='Miss';
        check.classList.add('on');
        combo=0;
        lifeCombo=0;
        setTimeout(()=>{
          check.classList.remove('on');
      
        },200);
        lifeListCheck();

        }
      } 
    ctx.stroke();
  } else if (e.key == 'e') {
    drawFilledRect(200, 150, 100, 1000 * 2 / 3,40, "yellow");
    for (let i = 0; i < boxList.length; i++) {
      const box = boxList[i];
     
      if (box.y >= 440-10 && box.y<= 460-10 && box.x==200) {

        boxList.splice(i, 1);
        ++combo;
        ++lifeCombo;
        score.textContent= ++jumsu;
        check.innerHTML='Good'; 
        check.classList.add('on');
        comboB.classList.add('on');
        comboB.innerHTML=combo;
        setTimeout(()=>{
          check.classList.remove('on');
          comboB.classList.remove('on');
        },200);
         
      }else if(box.y >= 460-10 && box.y<= 480-10 && box.x==200) {
        boxList.splice(i, 1);
        jumsu+=3;
        ++combo;
        ++lifeCombo;
        score.textContent= jumsu;
        check.innerHTML='Great';
        check.classList.add('on');
        comboB.classList.add('on');
        comboB.innerHTML=combo;
        setTimeout(()=>{
          check.classList.remove('on');
          comboB.classList.remove('on');
        },200);
      }else if(box.y >= 480-10 && box.y<= 500-10 && box.x==200) {
          boxList.splice(i, 1);
          jumsu+=1;
          ++combo;
          ++lifeCombo;
          score.textContent= jumsu;
          check.innerHTML='Great';
          check.classList.add('on');
          comboB.classList.add('on');
          comboB.innerHTML=combo;
          setTimeout(()=>{
            check.classList.remove('on');
            comboB.classList.remove('on');
          },200);
      }  else if(box.y > 400-10 && box.y< 440-10 && box.x==200){
        check.innerHTML='Miss';
        check.classList.add('on');
        combo=0;
        lifeCombo=0;
        setTimeout(()=>{
          check.classList.remove('on');
      
        },200);
        lifeListCheck();

        }
      } 
    ctx.stroke();
  } else if (e.key == 'r') {
    drawFilledRect(300, 150, 100, 1000 * 2 / 3,40, "green");
    for (let i = 0; i < boxList.length; i++) {
      const box = boxList[i];
     
      if (box.y >= 440-10 && box.y<= 460-10 && box.x==300) {

        boxList.splice(i, 1);
        ++combo;
        ++lifeCombo;
        score.textContent= ++jumsu;
        check.innerHTML='Good'; 
        check.classList.add('on');
        comboB.classList.add('on');
        comboB.innerHTML=combo;
        setTimeout(()=>{
          check.classList.remove('on');
          comboB.classList.remove('on');
        },200);
         
      }else if(box.y >= 460-10 && box.y<= 480-10 && box.x==300) {
        boxList.splice(i, 1);
        jumsu+=3;
        ++combo;
        ++lifeCombo;
        score.textContent= jumsu;
        check.innerHTML='Great';
        check.classList.add('on');
        comboB.classList.add('on');
        comboB.innerHTML=combo;
        setTimeout(()=>{
          check.classList.remove('on');
          comboB.classList.remove('on');
        },200);
      }else if(box.y >= 480-10 && box.y<= 500-10 && box.x==300) {
          boxList.splice(i, 1);
          jumsu+=1;
          ++combo;
          ++lifeCombo;
          score.textContent= jumsu;
          check.innerHTML='Great';
          check.classList.add('on');
          comboB.classList.add('on');
          comboB.innerHTML=combo;
          setTimeout(()=>{
            check.classList.remove('on');
            comboB.classList.remove('on');
          },200);
      }  else if(box.y > 400-10 && box.y< 440-10 && box.x==300){
        check.innerHTML='Miss';
        check.classList.add('on');
        combo=0;
        lifeCombo=0;
        setTimeout(()=>{
          check.classList.remove('on');
      
        },200);
        lifeListCheck();

        }
      } 
    ctx.stroke();
  } else if (e.key == 't') {
    drawFilledRect(400, 150, 100, 1000 * 2 / 3,40,"blue");
    for (let i = 0; i < boxList.length; i++) {
      const box = boxList[i];
     
      if (box.y >= 440-10 && box.y<= 460-10 && box.x==400) {

        boxList.splice(i, 1);
        ++combo;
        ++lifeCombo;
        score.textContent= ++jumsu;
        check.innerHTML='Good'; 
        check.classList.add('on');
        comboB.classList.add('on');
        comboB.innerHTML=combo;
        setTimeout(()=>{
          check.classList.remove('on');
          comboB.classList.remove('on');
        },200);
         
      }else if(box.y >= 460-10 && box.y<= 480-10 && box.x==400) {
        boxList.splice(i, 1);
        jumsu+=3;
        ++combo;
        ++lifeCombo;
        score.textContent= jumsu;
        check.innerHTML='Great';
        check.classList.add('on');
        comboB.classList.add('on');
        comboB.innerHTML=combo;
        setTimeout(()=>{
          check.classList.remove('on');
          comboB.classList.remove('on');
        },200);
      }else if(box.y >= 480-10 && box.y<= 500-10 && box.x==400) {
          boxList.splice(i, 1);
          jumsu+=1;
          ++combo;
          ++lifeCombo;
          score.textContent= jumsu;
          check.innerHTML='Great';
          check.classList.add('on');
          comboB.classList.add('on');
          comboB.innerHTML=combo;
          setTimeout(()=>{
            check.classList.remove('on');
            comboB.classList.remove('on');
          },200);
      }  else if(box.y > 400-10 && box.y< 440-10 && box.x==400){
        check.innerHTML='Miss';
        check.classList.add('on');
        combo=0;
        lifeCombo=0;
        setTimeout(()=>{
          check.classList.remove('on');
      
        },200);
        lifeListCheck();

        }
      } 
    ctx.stroke();
  }
  maxComboBoard();
  
}

function drawBoxes() {
  ctx.clearRect(0, 0,500,500);
  drawBackground() ;
  boxList.forEach(box => (box.y += 20)); //
  for (let i = 0; i < boxList.length; i++) {
    const box = boxList[i];
    drawFilledRect(box.x, box.y, box.width, box.height, box.radius, box.color);
  }
  
  for (let i = 0; i < boxList.length; i++) {
    if (boxList[i].y >= canvas.height) {
      boxList.splice(i,1);
      check.innerHTML = 'Miss';
      check.classList.add('on');
      combo = 0;
      lifeCombo;
      lifeListCheck();
      setTimeout(() => {
        check.classList.remove('on');
      }, 200);
    }
  }
}

function updateBoxes() {
  let randomX = Math.floor(Math.random() * 5) * 100;
  const newBox = { x: randomX, y: 0, width: 100, height: 20, radius: 15, color: getBoxColor(randomX) };

  boxList.push(newBox);
  boxList = boxList.filter(box => box.y <= canvas.height);

}

function getBoxColor(cnt) {
  switch (cnt) {
    case 0:
      return "red";
    case 100:
      return "orange";
    case 200:
      return "yellow";
    case 300:
      return "green";
    case 400:
      return "blue";
  }
}

function ClickKey(e){
  keyColor(e);

}
function musicNum(){

let cnt;
if (selectedMusic == 1) {
  musicPlay1.play();
cnt=470;

  intervalId = setInterval(() => {
    console.log(cnt);

    if (cnt >= 0) {

      if (cnt <= 454) {
        updateBoxes();
        
      }
      drawBoxes();
       
      cnt--;
    } 

    if(cnt <= 0) {
      drawBoxes();
      cnt--;
      if(cnt==-10) {
        winner();
        
      }
    }
  }, 500);


}else if (selectedMusic==2)
{
  musicPlay2.play();
  cnt = 567;
  intervalId = setInterval(() => {
 
    if (cnt >= 0) {
    
    if (cnt<=510) { 
      updateBoxes();
    }

    drawBoxes(); 
    console.log(cnt)
    cnt--;
  } 

  if(cnt<=0) {
    drawBoxes();
    cnt--; 
    if(cnt==-10) {

      winner();
    }
  }
  }, 400);
}
 else if (selectedMusic==3) {
  musicPlay3.play();
  cnt = 867;
  intervalId = setInterval(() => {
 
    if (cnt >= 0) {
    
    if (cnt<=740) { 
      updateBoxes();
    }

    drawBoxes(); 
    console.log(cnt)
    cnt--;
  } 

  if(cnt<=0) {
    drawBoxes(); 
    cnt--;
    if(cnt==-10) {
     
      winner();
    }
  }
  }, 300);
} else if (selectedMusic==4) {
  musicPlay4.play();
  cnt = 950;

  intervalId = setInterval(() => {
 
    if (cnt >= 0) {
    
    if (cnt<=860) { 
      updateBoxes();
    }

    drawBoxes(); 
    console.log(cnt)
    cnt--;
  } 

  if(cnt<=0) {
    drawBoxes(); 
    cnt--;
    if(cnt==-10) {
     
      winner();
    }
  }
  }, 200);
}
}

drawCheckLine1();
drawCheckLine2();
draw1Line();
draw2Line();
draw3Line();
draw4Line();
musicNum();

function moveChoice(){ 
  window.location.href = goChoice.href;
}
function moveMain(){ 
  window.location.href = goMain.href;
}



  document.addEventListener('keydown',(e)=>{
    ClickKey(e);
})

returnBtn.addEventListener('click',()=>{
  moveChoice();
});

gameOutBtn.addEventListener('click',()=>{
  moveMain();;
});
