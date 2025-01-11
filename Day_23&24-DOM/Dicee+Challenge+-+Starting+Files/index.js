let randomNumber1 = Math.floor((Math.random()*6)+1);
const diceNumber1 = `images/dice${randomNumber1}.png`;
document.querySelector(".dice .img1").setAttribute("src",diceNumber1);

let randomNumber2 = Math.floor((Math.random()*6)+1);
const diceNumber2 = `images/dice${randomNumber2}.png`;
document.querySelector(".dice .img2").setAttribute("src",diceNumber2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins";
}
else {
    document.querySelector("h1").textContent = "Draw ! Play Again";
}