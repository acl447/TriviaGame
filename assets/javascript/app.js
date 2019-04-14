$(document).ready(function () {

    //Global variables

    var correctAnswersCounter = 0;

    var incorrectAnswersCounter = 0;

    var unansweredQuestionsCounter = 8;

    var counter = 90;


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


    //When the start button is clicked, questions appear and time remaining countdown begins
    $("#start-button").click(function () {

        $("#question-1").text("What is Joey's favorite food?");

        $("#question-2").text("How many babies did Phoebe give birth to?");

        $("#question-3").text("What is Ross and Rachel's baby's name?");

        $("#question-4").text("What instrument does Phoebe play?");

        $("#question-5").text("What pets did Joey and Chandler have?");

        $("#question-6").text("What is the name of Monica's upstairs neighbor who would complain about noise?");

        $("#question-7").text("What is Monica's job?");

        $("#question-8").text("How many times has Ross gotten divorced?");



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

