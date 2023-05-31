// Code your solutions in this file

let name = [];
let event;
function writeCards(name,event){
    let thankYouCards = [];
    for (let i = 0; i < name.length; i++){
      thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
   return thankYouCards;
}
writeCards(["Guadalupe","Ollie","Aki"],"surprise");

let number;
function countDown(number){
    while (number>=0){
        console.log(number--);
    }
}