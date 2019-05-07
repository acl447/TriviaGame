$(document).ready(function () {

    //Global variables

    var correctAnswersCounter = 0;

    var incorrectAnswersCounter = 0;

    var unansweredQuestionsCounter = 8;

    var counter = 90;

    let radioButtonsGroup1 = '<label for="">Sandwiches<input class="radio-button" id="" type="radio" name="answers-1" value=1></label><label for="">Pizza<input class="radio-button" id="" type="radio" name="answers-1" value=0></label><label for="">Ice Cream<input class="radio-button" id="" type="radio" name="answers-1" value=0></label><label for="">Doritos<input class="radio-button" id="" type="radio" name="answers-1" value=0></label>';

    let radioButtonsGroup2 = '<label for="">1<input class="radio-button" id="" type="radio" name="answers-2" value=0></label><label for="">3<input class="radio-button" id="" type="radio" name="answers-2" value=1></label><label for="">2<input class="radio-button" id="" type="radio" name="answers-2" value=0></label><label for="">0<input class="radio-button" id="" type="radio" name="answers-2" value=0></label>';

    let radioButtonsGroup3 = '<label for="">Jack<input class="radio-button" id="" type="radio" name="answers-3" value=0></label><label for="">Emma<input class="radio-button" id="" type="radio" name="answers-3" value=1></label><label for="">Ben<input class="radio-button" id="" type="radio" name="answers-3" value=0></label><label for="">Stephanie<input class="radio-button" id="" type="radio" name="answers-3" value=0></label>';
    
    let radioButtonsGroup4 = '<label for="">Drums<input class="radio-button" id="" type="radio" name="answers-4" value=0></label><label for="">Keyboard<input class="radio-button" id="" type="radio" name="answers-4" value=0></label><label for="">Guitar<input class="radio-button" id="" type="radio" name="answers-4" value=1></label><label for="">Ukelele<input class="radio-button" id="" type="radio" name="answers-4" value=0></label>';
    
    let radioButtonsGroup5 = '<label for="">Chick and Duck<input class="radio-button" id="" type="radio" name="answers-5" value=1></label><label for="">Dog and Chick<input class="radio-button" id="" type="radio" name="answers-5" value=0></label><label for="">Cat and Dog<input class="radio-button" id="" type="radio" name="answers-5" value=0></label><label for="">2 Dogs<input class="radio-button" id="" type="radio" name="answers-5" value=0></label>';
    
    let radioButtonsGroup6 = ' <label for="">Mr. Heckles<input class="radio-button" id="" type="radio" name="answers-6" value=1></label><label for="">Mr. Schmitt<input class="radio-button" id="" type="radio" name="answers-6" value=0></label><label for="">Mrs. Cankles<input class="radio-button" id="" type="radio" name="answers-6" value=0></label><label for="">Mr. Nitpick<input class="radio-button" id="" type="radio" name="answers-6" value=0></label>';
    
    let radioButtonsGroup7 = '<label for="">Masseuse<input class="radio-button" id="" type="radio" name="answers-7" value=0></label><label for="">Fashion Designer<input class="radio-button" id="" type="radio" name="answers-7" value=0></label><label for="">Actress<input class="radio-button" id="" type="radio" name="answers-7" value=0></label><label for="">Chef<input class="radio-button" id="" type="radio" name="answers-7" value=1></label>';
    
    let radioButtonsGroup8 = '<label for="">3<input class="radio-button" id="" type="radio" name="answers-8" value=1></label><label for="">1<input class="radio-button" id="" type="radio" name="answers-8" value=0></label><label for="">2<input class="radio-button" id="" type="radio" name="answers-8" value=0></label><label for="">0<input class="radio-button" id="" type="radio" name="answers-8" value=0></label>';
    
    //Function to determine user's numbers of correct answers, incorrect answers, and unanswered questions, and alert to the user
    function gameOutcome() {

        //Gets the value of whichever button is clicked in each group of radio buttons

        var radioValue = $("input[name='answers-1']:checked").val();

        var radioValue2 = $("input[name='answers-2']:checked").val();

        var radioValue3 = $("input[name='answers-3']:checked").val();

        var radioValue4 = $("input[name='answers-4']:checked").val();

        var radioValue5 = $("input[name='answers-5']:checked").val();

        var radioValue6 = $("input[name='answers-6']:checked").val();

        var radioValue7 = $("input[name='answers-7']:checked").val();

        var radioValue8 = $("input[name='answers-8']:checked").val();



        if (radioValue) {

            if (radioValue == 1) {

                correctAnswersCounter++;
            }

            else if (radioValue == 0) {

                incorrectAnswersCounter++;
            }

        };

        if (radioValue2) {

            if (radioValue2 == 1) {

                correctAnswersCounter++;

            }

            else if (radioValue2 == 0) {

                incorrectAnswersCounter++;

            }
        };

        if (radioValue3) {

            if (radioValue3 == 1) {

                correctAnswersCounter++;

            }

            else if (radioValue3 == 0) {

                incorrectAnswersCounter++;

            }
        };

        if (radioValue4) {

            if (radioValue4 == 1) {

                correctAnswersCounter++;
            }

            else if (radioValue4 == 0) {

                incorrectAnswersCounter++;

            }
        };

        if (radioValue5) {

            if (radioValue5 == 1) {

                correctAnswersCounter++;

            }

            else if (radioValue5 == 0) {

                incorrectAnswersCounter++;

            }


        };

        if (radioValue6) {

            if (radioValue6 == 1) {

                correctAnswersCounter++;

            }

            else if (radioValue6 == 0) {

                incorrectAnswersCounter++;

            }

        };

        if (radioValue7) {

            if (radioValue7 == 1) {

                correctAnswersCounter++;

            }

            else if (radioValue7 == 0) {

                incorrectAnswersCounter++;

            }

        };

        if (radioValue8) {

            if (radioValue8 == 1) {

                correctAnswersCounter++;

            }

            else if (radioValue8 == 0) {

                incorrectAnswersCounter++;

            }

        };

        unansweredQuestionsCounter -= (correctAnswersCounter + incorrectAnswersCounter);

        alert("Correct Answers: " + correctAnswersCounter + " " +
            "Incorrect Answers: " + incorrectAnswersCounter + " " +
            "Unanswered Questions: " + unansweredQuestionsCounter
        )

    };


    //When the start button is clicked, questions, answer choices & submit button appear and time remaining countdown begins
    $("#start-button").click(function () {

        $("#time-remaining-label").append("Time Remaining:");

        $("#seconds").append("Seconds");

        $("#question-1").text("What is Joey's favorite food?");

        $("#radio-buttons-1").append(radioButtonsGroup1);
        
        $("#question-2").text("How many babies did Phoebe give birth to?");

        $("#radio-buttons-2").append(radioButtonsGroup2);

        $("#question-3").text("What is Ross and Rachel's baby's name?");

        $("#radio-buttons-3").append(radioButtonsGroup3);

        $("#question-4").text("What instrument does Phoebe play?");

        $("#radio-buttons-4").append(radioButtonsGroup4);

        $("#question-5").text("What pets did Joey and Chandler have?");

        $("#radio-buttons-5").append(radioButtonsGroup5);

        $("#question-6").text("What is the name of Monica's upstairs neighbor who would complain about noise?");

        $("#radio-buttons-6").append(radioButtonsGroup6);

        $("#question-7").text("What is Monica's job?");

        $("#radio-buttons-7").append(radioButtonsGroup7);

        $("#question-8").text("How many times has Ross gotten divorced?");

        $("#radio-buttons-8").append(radioButtonsGroup8);

        $("#submit-div").append('<button type="submit" id="submit" class="btn btn-primary">Submit</button>');



        var countDown = setInterval(function () {
            counter--;


            //when countdown reaches zero, run game outcome function
            if (counter === 0) {

                clearInterval(countDown);

                gameOutcome();  
        

            }

            $("#time-remaining").text(counter);

        }, 1000);

    });




    //When submit button is clicked, run game outcome function
    $("#submit").click(function () {

        gameOutcome();

    });

});

