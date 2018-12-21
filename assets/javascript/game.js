script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

script type="text/javascript">
    
var wordBank = ["washington", "adams", "jefferson", "madison", "monroe","jackson","harrison", "tyler", "polk", "taylor"]; // former US Presidents
var answer = [];
var wins = 0;
var losses = 0;
var guessesRem = 10;
var guessLetter = [];
var correctLetters = [];
var repeatLetters = [];
var words = [];
var remainingLetters = [];


var word = wordBank[Math.floor(Math.random() * wordBank.length)]; 
// to pick a random president word from my wordBank array.
console.log(word); 

var wordLength = word.lenght;
for (var w = 0; w < word.length; w++)  { 
    // this "for loop" loops through the random word, chosen from wordBank and applies blank spots = the word length...
    answer[w] = "_";
    //answer[w] = word[w];
    console.log(w);
}
    document.getElementById('answer').innerHTML = "" + answer.join(" ");

    

    document.onkeypress = function(event) { 
    var guess = event.key; 
    console.log(event); 

    guessLetter.push(guess);
    console.log(guessLetter);     
    document.getElementById("guessLetter").innerHTML = "Letters Already Guessed: " + guessLetter.join(", ");
    
    
    while (wordLength > 0) {

    alert(answer.join(" "));


    }

        for (var g = 0; g < word.length; g++) {

        if (word[g] === guess) {                 
            (answer[g] = guess) 
                wordLength --;
            
        //document.getElementById('answer').innerHTML = "" + answer.push("");
        //console.log(wins ++);
        }

        }







                                                }


                

    
//var guess = prompt("Guess one letter...");

//document.onkeypress= function(event) { 
   // var guess = event.key; 
   // console.log(event);

   // guessLetter.push(guess);
   // console.log(guessLetter);     
   // document.getElementById("guessLetter").innerHTML = "Letters Already Guessed: " + guessLetter.join(", "); 


//for (var g = 0; g<word.length; g++) {
  //if (words[g] === guess) {                 
    
   // document.getElementById('answer').innerHTML = "" + answer.push("");
//console.log(wins ++);
//guessesLeft = 10;
// guessesSoFar = [];
               //                             }
            //else {
              //      console.log(guessesRem --);
                
          //  }

          //                                  }
          
// }
       
   
    

//event listener closing bracket   .                