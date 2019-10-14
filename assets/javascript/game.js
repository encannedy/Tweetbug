document.addEventListener("DOMContentLoaded",
    function () {
        var wins = 0;
        var loses = 0;
        var userScore = 0;
        var topaz = Math.floor(Math.random() * (12-1) +1);
        var peridot = Math.floor(Math.random() * (12-1) +1);
        var ruby = Math.floor(Math.random() * (12-1) +1);
        var amethyst = Math.floor(Math.random() * (12-1) +1);

        var cpuGuess = Math.floor(Math.random() * (120 - 19) + 19);


        var winsText = $("#winsText");
        var losesText = $("#losesText"); 

        $("#total-score").click = function (event) {
            userScore = event.key;
            if (userScore === cpuGuess) {
                wins = wins + 1;
                winsText.textContent = wins;
                cpuGuess = Math.floor(Math.random() * 2);
                console.log(cpuGuess);
                console.log (topaz);
            }
        }
    });