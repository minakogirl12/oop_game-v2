/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //new instance of the Game class
 let game = new Game();

 //variable to check if game was already played onece or not
 let played = false;

 //select the start button and the online keyboard
 const startBtn = document.getElementById('btn__reset');
 const keyboard = document.getElementById('qwerty');

 //add event listeners
startBtn.addEventListener('click', () => {
    if(played){
        //reset the game board
        game.reset();
    }
    
    game.startGame(); 
    
    played = true;
});

keyboard.addEventListener('click', (event) => {
    let element = event.target;
    if(element.tagName == "BUTTON"){
        game.handleInteraction(element.textContent);
    }
});

document.addEventListener('keyup', (event) => {
    
    if(event.key >= 'a' && event.key <= 'z'){
        game.handleInteraction(event.key);
    }
} );
