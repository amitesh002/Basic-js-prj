const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

let updatedMinute = 25;
let updatedSecond = 0;

let restMinute = 5;
let restSecond = 0;

let intervalId = null;
let restId = null;

document.querySelector('.start').addEventListener('click',()=> pomodoro())

document.querySelector('.pause').addEventListener('click',()=> pausePomodoro())

document.querySelector('.reset').addEventListener('click',()=> resetPomodoro())

function pomodoro(){

    if (intervalId) return;

    intervalId=setInterval(()=>{
        if (updatedMinute === 0 && updatedSecond === 0) {
             clearInterval(intervalId);
             intervalId = null;
            restPomodoro();
            return
        }

        updatedSecond--;

        if(updatedSecond<0){
            updatedMinute--;
            updatedSecond = 59;
        }

    minutes.innerHTML= updatedMinute.toString().padStart(2,'0')
    seconds.innerHTML = updatedSecond.toString().padStart(2,'0')

    

    },1000);
   
    
}

function restPomodoro(){
    restId = setInterval(()=>{
         if (restMinute === 0 && restSecond === 0) {
      clearInterval(restId);
      restId = null;
      
      restMinute = 5;
      restSecond = 0;
      updatedMinute = 25;
      updatedSecond = 0;
      pomodoro();
      return;
    }
        restSecond--
        if(restSecond<0){
            restMinute--;
            restSecond = 59;
    }

    minutes.innerHTML= restMinute.toString().padStart(2,'0')
    seconds.innerHTML = restSecond.toString().padStart(2,'0')


    },1000)
    
    
}


function resetPomodoro(){
    

    clearInterval(intervalId)
    clearInterval(restId)
     updatedMinute = 25;
     updatedSecond = 0;
     restMinute = 5;
     restSecond = 0;

     intervalId = null;
     restId = null;

     minutes.innerHTML = '25';
     seconds.innerHTML = '00';
}

function pausePomodoro(){
    clearInterval(intervalId)
    clearInterval(restId)
}
