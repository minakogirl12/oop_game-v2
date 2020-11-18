/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 //new instance of the Game class
 let game = new Game();

 //select the start button and the online keyboard
 const startBtn = document.getElementById('btn__reset');
 const keyboard = document.getElementById('qwerty');

 //add event listeners
startBtn.addEventListener('click', () => {
    game.startGame();
});

keyboard.addEventListener('click', (event) => {
    let element = event.target;
    if(element.tagName == "BUTTON"){
        game.handleInteraction(element.textContent);
    }
});


 //reset the game
 function reset(){}