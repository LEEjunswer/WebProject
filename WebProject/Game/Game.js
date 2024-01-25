const canvas =document.querySelector('#canvas');
const ctx=canvas.getContext('2d');
// music1(num1) = 20초시작 총 236초+(5초주기)
// music2(num2) = 31초시작 총 222초+(5초주기)
// music3(num3) = 42초시작 총 260초+(5초주기)
// music4(num4) = 21초시작 총 187초+(5초주기)
let num;
let cnt;
let checkKey=[q,w,e,r,t];
let createKey=[]; // key값 체크하기




function ClickKey(e){
  if(e.key=='q'){

  }else if(e.key =='w'){

  }else if(e.key =='e'){

  }else if(e.key =='r'){
    
  }else if(e.key =='t'){

  }
}
// timeCheck는   cnt가 0일시 게임종료 setTimeout (5초) 이후에 게임종료후 choice나 main화면 만들기
function timeCheck(){

}