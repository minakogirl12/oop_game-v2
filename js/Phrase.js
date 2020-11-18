/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
    constructor (phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Creates all the li elements for each character in the phrase
     */
    addPhraseToDisplay(){
        //selet parent element to li items
        const ul = document.querySelector('#phrase ul');
        let liList = "";
        //create an li element for each character in the phrase
        for(let i = 0; i < this.phrase.length; i++){
            //put current character in a variable for easier use
            let currentChar = this.phrase.charAt(i);
            //condition if character letter create an li with the letter class
            if(currentChar >= 'a' &&  currentChar <= 'z'){
                liList += `<li class="hide letter ${currentChar}">${currentChar}</li>`;
            }
            //else if a space create element with space class
            else if(currentChar == ' '){
                liList += `<li class="space"> </li>`;
            }
            //in all other cases no element will be created if another character or number
        }
        ul.innerHTML = liList;

    }

    /**
     * Function that checks if the letter exists in the phrase, it it does it returns true
     * otherwise it returns false
     * @param {*} letter a single character variable
     */
    checkLetter(letter){
        //check for the letter in the entire phrase
        if(document.querySelectorAll(`.${letter}`).length !=  0){
            return true;
        }
        else{
            return false;
        }
    }

    /**
     * Function that takes every element with a matching letter and reveals the element to the screen
     * @param {*} letter a single character variable
     */
    showMatchedLetter(letter){

        let elements = document.querySelectorAll('.' + letter);
        for(let i = 0; i < elements.length; i++){
            elements[i].classList.remove('hide'); //remove the hide class from the element
            elements[i].classList.add('show'); //add the show class to the element
        }

    }

    
 }