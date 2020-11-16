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


    handleInteraction(){

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
            lives[(this.missed-1)].firstElementChild.src = 'images/lostHeart.png'
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
        overlay.style.display = '';

        if(this.checkForWin()){
            overlay.className = 'win';
        }
        else{
            overlay.className = 'lose';
        }
    }


 }