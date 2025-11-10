let count=0;
document.getElementById('decrease').addEventListener('click',()=> {
    
    count--
    document.getElementById('count').innerHTML=`${count}`
})
document.getElementById('reset').addEventListener('click',()=> {
    count=0
    document.getElementById('count').innerHTML=`${count}`
})
document.getElementById('increase').addEventListener('mouseenter',()=> {
    count++
    document.getElementById('count').innerHTML=`${count}`
})

