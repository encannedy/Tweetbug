document.addEventListener("DOMContentLoaded",
    function () {
        var wins = 0;
        var loses = 0;
        var cpuNumber = [Math.floor(Math.random() * (120 - 19) + 19)];


        var winsText = document.getElementById("winsText");
        var losesText = document.getElementById("losesText");

        document.onkeyup = function (event) {
            var userScore = event.key;
            if (userScore === cpuNumber) {
                wins = wins + 1;
                winsText.textContent = wins;
                cpuNumber = [Math.floor(Math.random() * 2)];
                console.log(cpuGuess);
            }
        }
    });