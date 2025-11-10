const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const mili = document.querySelector('.mili')



setInterval(()=>{
    let now = new Date()
    let hourUpdated = now.getHours();
    let secondUpdated = now.getSeconds();
    let minuteUpdated = now.getMinutes();
    let miliUpdated = now.getMilliseconds();

    
    hours.innerHTML = hourUpdated.toString().padStart(2, '0');
    minutes.innerHTML = minuteUpdated.toString().padStart(2, '0');
    seconds.innerHTML = secondUpdated.toString().padStart(2, '0');
    mili.innerHTML= miliUpdated.toString().padStart(2,'0')
    

    
},1000)