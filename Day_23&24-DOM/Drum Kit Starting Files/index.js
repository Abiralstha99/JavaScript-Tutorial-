// document.querySelectorAll("button").addEventListener("click",function (){
//     alert("I got clicked");
// });

const button = document.querySelectorAll("button");  // returns a nodelist
for (let n = 0 ; n<button.length ; n++){
    button[n].addEventListener("click",function (){
        let clickedButton = this.innerHTML;
        makeSound(clickedButton);
        buttonAnimation(clickedButton);
    } );
}


document.addEventListener("keypress", function(event){
    // console.log(event);
    // console.log(event.code);
    makeSound(event.key);
    buttonAnimation(event.key);
    
})

function makeSound(key){
    switch (key) {
        case "w" :
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a" : 
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "s" : 
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "d" : 
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j" :
            let snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;
        
        case "k" :
            let crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;
        
        case "l" :
            let kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(this.innerHTML);
            
    }    
}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}