var acc = document.getElementById('acc') 
var acc1 = document.getElementById('acc1') 
var acc2 = document.getElementById('acc2') 
var acc3 = document.getElementById('acc3') 
var rej = document.getElementById('rej') 
var rej1 = document.getElementById('rej1') 
var rej2 = document.getElementById('rej2') 
var rej3 = document.getElementById('rej3') 
var ch1 = document.getElementById('ch1') 
var ch2 = document.getElementById('ch2') 
var ch3 = document.getElementById('ch3') 
var ch4 = document.getElementById('ch4') 
var acc5 = document.getElementsByClassName('acc');


acc.addEventListener('click',function(){
    ch1.innerHTML = "Accepted";
    ch1.style.backgroundColor = "green";
    ch1.style.color = "white";
})
acc1.addEventListener('click',function(){
    ch2.innerHTML = "Accepted";
    ch2.style.backgroundColor = "green";
    ch2.style.color = "white";
})
acc2.addEventListener('click',function(){
    ch3.innerHTML = "Accepted";
    ch3.style.backgroundColor = "green";
    ch3.style.color = "white";
})
acc3.addEventListener('click',function(){
    ch4.innerHTML = "Accepted";
    ch4.style.backgroundColor = "green";
    ch4.style.color = "white";
})
rej.addEventListener('click',function(){
    ch1.innerHTML = "Rejected";
    ch1.style.backgroundColor = "red";
    ch1.style.color = "white";
})
rej1.addEventListener('click',function(){
    ch2.innerHTML = "Rejected";
    ch2.style.backgroundColor = "red";
    ch2.style.color = "white";
})
rej2.addEventListener('click',function(){
    ch3.innerHTML = "Rejected";
    ch3.style.backgroundColor = "red";
    ch3.style.color = "white";
})
rej3.addEventListener('click',function(){
    ch4.innerHTML = "Rejected";
    ch4.style.backgroundColor = "red";
    ch4.style.color = "white";
})