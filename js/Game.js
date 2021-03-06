/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{

    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase('A wise person listens and takes in more instruction'), 
                        new Phrase('Do not envy the violent man nor choose any of his ways'),
                        new Phrase('Aqcuire wisdome, acquire understanding'),
                        new Phrase('Idle hands will cause proverty'),
                        new Phrase('The deviousness of the treacherous will destroy them')];
        this.activePhrase = null;
    }
    /**
     * Function that starts the game
     * Hides the screen overlay, calls getRandomPhrase and sets the activePhrase property
     * Then calls addPhraseToDisplay to show the random phrase to the user
     */
    
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Randomly selects a phrase from the array
     */
    getRandomPhrase(){
        let randNum = Math.floor(Math.random() * (this.phrases.length-1));
        return this.phrases[randNum];
    }


    handleInteraction(letter){
        //check if letter exist in the phrase if letter exists and reveals to the board
        //and greys out the letter
        if(this.activePhrase.checkLetter(letter)){
            this.activePhrase.showMatchedLetter(letter);
            this.disableLetter(letter, 'chosen');
            if(this.checkForWin()){
                this.gameOver();
            }
            
        }
        //else remove life and greys out letter
        else{

            this.removeLife();
            this.disableLetter(letter, 'wrong');
        
        }
    }

    /**
     * Function to disable chosen letter and change the class name
     * @param {*} letter the letter chosen by the user
     * @param {*} elemnentClass new class name for the button 
     */
    disableLetter(letter, elemnentClass){
        const letters = document.getElementsByClassName('key');
        for(let i = 0; i < letters.length; i++){
            if(letters[i].textContent == letter){
                letters[i].disabled = 'true';
                letters[i].className = elemnentClass;
                break;
            }
        }
    }

    /**
     * Function that removes a life when called
     * It will call the gameOver function if the user has missed 5 times
     */
    removeLife(){

        this.missed++;
        //if the users has missed five time call the game over method
        if(this.missed == 5)
        {
            this.gameOver();
        }
        //if not game over change the heart image to indicate a lost life
        else{
            //select all the hearts
            let lives = document.querySelectorAll('#scoreboard li');
            lives[(this.missed-1)].firstElementChild.src = 'images/lostHeart.png';
        }
    }

    /**
     * Function that checks if there are any elements with hide class, if there are none then
     * that means all the letters have been revealed
     */
    checkForWin(){
        
        if(document.querySelector('.hide')){
            //user has not won yet return false
            return false;
        }
        else{
            return true;
        }
    }

/**
 * Function that shows the overlay and a message if the player won or lost
 */
    gameOver(){

        let overlay = document.getElementById('overlay');
        let message = document.getElementById('game-over-message');
        overlay.style.display = '';

        if(this.checkForWin()){
            overlay.className = 'win';
            message.textContent = "Congratulations! You've won the game."; 
        }
        else{
            overlay.className = 'lose';
            message.textContent = "Sorry, you've lost. Maybe next time ";
        }
    }

    /**
     * Function that resets the gameboard
     */
    reset(){

        //re-enable all buttons
        const letters = document.querySelectorAll('#qwerty button');
        for(let i = 0; i < letters.length; i++){
           letters[i].disabled = 'false';
           letters[i].className = 'key';
        }

        //change all hearts to full
        //select all the hearts
        let lives = document.querySelectorAll('.tries');
        for(let i = 0; i < lives.length; i++){
            lives[i].firstElementChild.src = 'images/liveHeart.png';
        }

    }


 }