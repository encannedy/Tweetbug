document.addEventListener("DOMContentLoaded",
    function () {
        var targetNumber;
        var wins = 0;
        var loses = 0;
        var userScore = 0;
        var winsText = $("#winsText");
        var losesText = $("#losesText");


        function reset() {
            var crystals = Math.floor(Math.random() * 11 + 1);
            var cpuGuess = Math.floor(Math.random() * 101 + 19);
            userScore = 0;
            $("#total-score").text(userScore);
            $("#cpuGuess").text(targetNumber);
        }

        function start() {
            crystals = Math.floor(Math.random() * 11 + 1);
            //create a for loop so that a random number is created for each crystal
            targetNumber = Math.floor(Math.random() * 101 + 19);
            $("#cpuGuess").text(targetNumber);
            $("#winsText").text(wins);
            $("#lossesText").text(losses);
            $("#total-score").text(userScore);
        }

        function run() {

        } if (userScore === cpuGuess) {
            alert("You win@");
            wins++;
            reset();
            $("#winsText").text(wins);
        }

        else if (userScore > targetNumber) {
            alert("You lose!");
            reset();
            losses++;
            $("#lossesText").text(losses);
        }
            
            $(".crystals").on("click", function () {
                userTotal = userTotal + crystals;
                $("#total-score").text(userScore);
                console.log(userScore);
                run();
            }

        // onclick not working entirely
        });