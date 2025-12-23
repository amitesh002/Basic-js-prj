let count=0;
document.getElementById('decrease').addEventListener('click',()=> {
    if(count>0){
        count-- ;
    }
    
    document.getElementById('count').innerHTML=`${count}`
})
document.getElementById('reset').addEventListener('click',()=> {
    count=0
    document.getElementById('count').innerHTML=`${count}`
})
document.getElementById('increase').addEventListener('click',()=> {
    count++
    document.getElementById('count').innerHTML=`${count}`
})

