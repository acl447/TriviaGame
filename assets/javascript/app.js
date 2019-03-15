$(document).ready(function () {



    var correctAnswersCounter = 0;

    var incorrectAnswersCounter = 0;

    var unansweredQuestionsCounter = 8;





    $("#start-button").click(function () {

        $("#question-1").text("What is Joey's favorite food?");

        $("#question-2").text("How many babies did Phoebe give birth to?");

        $("#question-3").text("What is Ross and Rachel's baby's name?");

        $("#question-4").text("What instrument does Phoebe play?");

        $("#question-5").text("What pets did Joey and Chandler have?");

        $("#question-6").text("What is the name of Monica's upstairs neighbor who would complain about noise?");

        $("#question-7").text("What is Monica's job?");

        $("#question-8").text("How many times has Ross gotten divorced?");



        var counter = 120;

        var countDown = setInterval(function () {
            counter--;

            console.log(counter);

            if (counter === 0) {

                clearInterval(countDown);

                unansweredQuestionsCounter -= (correctAnswersCounter + incorrectAnswersCounter);

                alert("Correct Answers: " + correctAnswersCounter + " " +
                    "Incorrect Answers: " + incorrectAnswersCounter + " " +
                    "Unanswered Questions: " + unansweredQuestionsCounter);





            }

            $("#time-remaining").text(counter);


        }, 1000);




    });

    $("input[name='answers-1']").click(function () {

        //Gets the value of whichever button is clicked in each radio button group

        var radioValue = $("input[name='answers-1']:checked").val();


        if (radioValue) {

            console.log(radioValue);

            if (radioValue == 1) {

                console.log("Correct");

                correctAnswersCounter++;

                console.log(correctAnswersCounter);
            }

            else if (radioValue == 0) {

                console.log("Incorrect");

                incorrectAnswersCounter++;

                console.log(incorrectAnswersCounter);


            }
        }

    });

    $("input[name='answers-2']").click(function () {

        var radioValue2 = $("input[name='answers-2']:checked").val();

        if (radioValue2) {

            console.log(radioValue2);

            if (radioValue2 == 1) {

                console.log("Correct");

                correctAnswersCounter++;

                console.log(correctAnswersCounter);
            }

            else if (radioValue2 == 0) {

                console.log("Incorrect");

                incorrectAnswersCounter++;

                console.log(incorrectAnswersCounter);


            }
        }

    });

    $("input[name='answers-3']").click(function () {

        var radioValue3 = $("input[name='answers-3']:checked").val();



        if (radioValue3) {

            console.log(radioValue3);

            if (radioValue3 == 1) {

                console.log("Correct");

                correctAnswersCounter++;

                console.log(correctAnswersCounter);
            }

            else if (radioValue3 == 0) {

                console.log("Incorrect");

                incorrectAnswersCounter++;

                console.log(incorrectAnswersCounter);


            }
        }

    });

    $("input[name='answers-4']").click(function () {

        var radioValue4 = $("input[name='answers-4']:checked").val();

        if (radioValue4) {

            console.log(radioValue4);

            if (radioValue4 == 1) {

                console.log("Correct");

                correctAnswersCounter++;

                console.log(correctAnswersCounter);
            }

            else if (radioValue4 == 0) {

                console.log("Incorrect");

                incorrectAnswersCounter++;

                console.log(incorrectAnswersCounter);


            }
        }

    });

    $("input[name='answers-5']").click(function () {


        var radioValue5 = $("input[name='answers-5']:checked").val();

        if (radioValue5) {

            console.log(radioValue5);

            if (radioValue5 == 1) {

                console.log("Correct");

                correctAnswersCounter++;

                console.log(correctAnswersCounter);
            }

            else if (radioValue5 == 0) {

                console.log("Incorrect");

                incorrectAnswersCounter++;

                console.log(incorrectAnswersCounter);


            }
        }

    });

    $("input[name='answers-6']").click(function () {

        var radioValue6 = $("input[name='answers-6']:checked").val();


        if (radioValue6) {

            console.log(radioValue6);

            if (radioValue6 == 1) {

                console.log("Correct");

                correctAnswersCounter++;

                console.log(correctAnswersCounter);
            }

            else if (radioValue6 == 0) {

                console.log("Incorrect");

                incorrectAnswersCounter++;

                console.log(incorrectAnswersCounter);


            }
        }

    });

    $("input[name='answers-7']").click(function () {

        var radioValue7 = $("input[name='answers-7']:checked").val();

        if (radioValue7) {

            console.log(radioValue7);

            if (radioValue7 == 1) {

                console.log("Correct");

                correctAnswersCounter++;

                console.log(correctAnswersCounter);
            }

            else if (radioValue7 == 0) {

                console.log("Incorrect");

                incorrectAnswersCounter++;

                console.log(incorrectAnswersCounter);


            }
        }

    });


    $("input[name='answers-8']").click(function () {

        var radioValue8 = $("input[name='answers-8']:checked").val();

        if (radioValue8) {

            console.log(radioValue8);

            if (radioValue8 == 1) {

                console.log("Correct");

                correctAnswersCounter++;

                console.log(correctAnswersCounter);
            }

            else if (radioValue8 == 0) {

                console.log("Incorrect");

                incorrectAnswersCounter++;

                console.log(incorrectAnswersCounter);


            }
        }

    });





});

