'use strict'

let d, i;

let randomnumber = generatRandom();
function generatRandom (){
    let digits =[];
    while(digits.length <4){
        const digit =math.floor(math.random()*10)
        if(!digits.includes(digit)){
            digits.push(digit);
        }
    }
}
function setMsg(message){
document.querySelector('.message').textContext()=message;
}
document.querySelector('.check').addEventListener('click',chechGeuss);

function chechGeuss(){
   let guess =document.querySelector('.guess').value;
   
}