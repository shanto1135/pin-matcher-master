function getpin() {
    const pin = Math.round(Math.random()*10000);
    const stringPin = pin + '';
    if (stringPin.length == 4) {
        return pin;
    }
    else{
        console.log('got 3 number and call agin',pin);
        return  getpin();
    }
}
function generatepin() {
const pin = getpin()
document.getElementById('pin-show').value = pin;
}
document.getElementById('key-pad').addEventListener('click',function(event){
 const number = event.target.innerText;
 const calc = document.getElementById('inputs-show');
if(isNaN(number)){
    if(number == 'C'){
        calc.value = '';
    }
}
else{
   
    const previousNumber = calc.value;
    const newnumber = previousNumber + number;
    calc.value = newnumber;
}

})
document.getElementById('ssubmitbtn').addEventListener('click',function(){
    const pin =  document.getElementById('pin-show').value;
    const key =  document.getElementById('inputs-show').value;
  const pinWrong =  document.getElementById("fail-pin");
  const pinRight =  document.getElementById("success-pin");
 
    if(pin == key) {
        pinRight.style.display = 'block';
        pinWrong.style.display = 'none';
    }
 else{
     pinWrong.style.display = 'block';
     pinRight.style.display = 'none';
 }

})
