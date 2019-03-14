$(document).ready(function () {

    


  




    $("#start-button").click(function () {

        $("#question-1").text("Question 1 text");

        $("#question-2").text("Question 1 text");

        $("#question-3").text("Question 1 text");

        $("#question-4").text("Question 1 text");

        $("#question-5").text("Question 1 text");

        $("#question-6").text("Question 1 text");

        $("#question-7").text("Question 1 text");

        $("#question-8").text("Question 1 text");
        
        

        var counter = 30;

        var countDown = setInterval(function() {
            counter--;
    
            console.log(counter);
    
            if (counter === 0) {
    
                clearInterval(countDown);

                alert();


                
    
    
            }

            $("#time-remaining").text(counter);
    
    
        }, 1000);




    }); 

    $("")



});

