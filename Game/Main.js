const quitBtn=document.querySelector('.quitGame-btn');
const nextBtn=document.querySelector('.nextGame-btn');
const goChoice = new URL('./Choice.html', window.location.href);


// nextBtn.addEventListener('click',()=>{
//     setTimeout(goChoice,1000);
// })
quitBtn.addEventListener('click', () => {
  
  const shouldClose = window.confirm('게임을 종료하시겠습니까?');
  if (shouldClose) {
      window.close();
  }
});