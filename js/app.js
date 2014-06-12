$(document).ready(function(){

/*--- Display information modal box ---*/
   $(".what").click(function(){
            $(".overlay").fadeIn(1000);
   });

   /*--- Hide information modal box ---*/
   $("a.close").click(function(){
            $(".overlay").fadeOut(1000);
   });
        
        /*--- Global variables ---*/
        var randomNumber;
        var newGuess;
        var checkGuess;
        var resetGuess;
        
        newGame();
        
        /*--- Create a random number ---*/
        function generateNumber() {
            randomNumber = Math.floor(Math.random()*100+1);
            console.log('The random number ' + randomNumber);
            return generateNumber;
        };
        
        /*--- Reset parameters ---*/
        function newGame (){
            resetGuess = 0;
            $('#count, #feedback').contents().remove();
            $('#count').append(resetGuess);
            $('#feedback').append('Make your Guess!');
            $('#userGuess').val('');
            $('#guessList').contents().remove();
            generateNumber();
        };
        
        /*--- Create a new game ---*/
        $('.new').click(function(){
            newGame();
        });
        
        /*--- Check new guess and evaluate ---*/

            $('#guessButton').click(function(){
                newGuess = $('input').val();
                console.log("The user's choice is " + newGuess);
                if (isNaN(newGuess) || newGuess % 1 !== 0) {
                    writeFeedback('You should type a positive number without decimals!');
                    } else if (newGuess > 100 || newGuess < 0){
                        writeFeedback('The number has to be between 0 and 100!');
                    } else if(newGuess === '') {
                        writeFeedback('You have to provide a number!');
                    } else {
                        trackGuess();
                        listGuess();
                        checkGuess = (Math.abs(newGuess - randomNumber));
                        if (checkGuess === 0 ) {
                            writeFeedback("Yes! You've got it!");
                            } else if (checkGuess <= 5) {
                                writeFeedback("It's getting hot!");
                            } else if (checkGuess > 5 && checkGuess <= 15 ) {
                                writeFeedback("Warm");
                            } else if (checkGuess > 15 && checkGuess <= 30 ) {
                                writeFeedback("Cold");
                            } else {
                                writeFeedback("Ice Cold");
                            }
                        }
                $('#userGuess').val('');
                return false;
            });

        function writeFeedback (feedback) {
            $('#feedback').text(feedback);
        };
        function trackGuess () {
            resetGuess += 1;
            $('#count').text(resetGuess);
        };
        function listGuess () {
            $('#guessList').append('<li>' + newGuess + '</li>');
        };
});