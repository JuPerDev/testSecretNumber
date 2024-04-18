const secretNumber = Math.floor(Math.random() * 10 + 1);
const secretNumberShow = document.querySelector('#secretNumber');
secretNumberShow.innerText = `El número secreto es: ${secretNumber}`;
const entryBox = document.querySelector('#entryBox');
const validateEntry = document.querySelector('#validateEntry');
const text = document.querySelector('#text');

validateEntry.onclick = validateNumber;

function validateNumber(){
    if(secretNumber == entryBox.value){
        text.innerText = 'Adivinaste :D!! Felicitaciones'
    } else if( secretNumber > entryBox.value){
        text.innerText = 'No adivinaste :(, Pista el número secreto es mas alto :)!'
    } else {
        text.innerText = 'No adivinaste :(, Pista el número secreto es mas bajo :)!'
    }
}