
const generInput = document.querySelector("#first input");
const secondForm = document.querySelector("#second");
const secondInput = document.querySelector("#second input");
const resoult = document.querySelector("#resoultText");
const winLose = document.querySelector("#winlose");

// 첫번째generInput에 숫자를 입력한것을 저장하자.그리고 표시해주고 
// 랜덤숫자를 변수로.

/*const ranDom = Math.ceil(Math.random()*10+1);
이걸 함수안에 넣으니 누르니 번호가 돌아간다..공부*/

function guess(event){
   event.preventDefault();
   const guessNum = secondInput.value;/*이거 지저안해줌.. input.value모르니?;;*/
   const rangeNum = generInput.value;
   const machinNum = Math.ceil(Math.random()*rangeNum); /*rangeNmu이것을 generInput로 지정을 해줘서 안됬던것.*/
   ranDomNum(guessNum,machinNum);
}

function ranDomNum(guessNum,machinNum) {
      resoult.innerText = `You chose: ${guessNum},the machin choose: ${machinNum}`;
   if(parseInt(guessNum) === machinNum) {
      winLose.innerText = "you won!!"
      
   } else {
      winLose.innerText = "you lost!!"
   }
}
secondForm.addEventListener("submit",guess );

   


