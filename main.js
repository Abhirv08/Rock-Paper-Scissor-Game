let userScore = 0;
let compScore = 0;
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
var userScore_span = document.getElementById("userScore");
var compScore_span = document.getElementById("compScore");
var showResult_div = document.getElementById("showresponse");
var compResponse = document.getElementById("compresponse");

var passData = (userScore, compScore) => {
    var finalUserScore = userScore_span.innerHTML;
    var finalCompScore = compScore_span.innerHTML;
    localStorage.setItem("finalUserScore", finalUserScore);
    localStorage.setItem("finalCompScore",finalCompScore);
    console.log(finalUserScore, finalCompScore);
    return false;
}

var changeToFullName = (compChoice) => {
   if(compChoice === "r") return "Rock";
   else if(compChoice === "p") return "Paper";
   else return "scissors";
}

var win = (userChoice, compChoice) => {
    userScore++;
    userScore_span.innerHTML = userScore;
    passData( userScore, compScore);
    compResponse.innerHTML=changeToFullName(compChoice);
    showResult_div.innerHTML = "HURREY ! You win 🥳 ! ! !";
    showResult_div.classList.add("green-text");
    setTimeout(() => {
        showResult_div.classList.remove("green-text");
    }, 300);
    switch(userChoice){
        case "r":
            rock_div.classList.add("green");
           setTimeout(() => {
            rock_div.classList.remove("green");
           }, 300);
           break;
        case "p":
            paper_div.classList.add("green");
            setTimeout(() => {
                paper_div.classList.remove("green");
               }, 300);
            break;
        case "s":
            scissors_div.classList.add("green");
            setTimeout(() => {
               scissors_div.classList.remove("green");
               }, 300);
            break;
    }
}

var lose = (userChoice, compChoice) => {
    compScore++;
    compScore_span.innerHTML = compScore;
    passData( userScore, compScore);
    compResponse.innerHTML=changeToFullName(compChoice);
    showResult_div.innerHTML = "OOPS ! You lose 😌 ! ! !";
    showResult_div.classList.add("red-text");
    setTimeout(() => {
        showResult_div.classList.remove("red-text");
    }, 300);
    switch(userChoice){
        case "r":
            rock_div.classList.add("red");
            setTimeout(() => {
                rock_div.classList.remove("red");
               }, 300);
            break;
        case "p":
            paper_div.classList.add("red");
            setTimeout(() => {
                paper_div.classList.remove("red");
               }, 300);
            break;
        case "s":
            scissors_div.classList.add("red");
            setTimeout(() => {
                scissors_div.classList.remove("red");
               }, 300);
            break;
    }
}

var draw = (userChoice, compChoice) => {
    compResponse.innerHTML=changeToFullName(compChoice);
    showResult_div.innerHTML = "WELL ! It's a drawww 🙃 ! ! !";
    showResult_div.classList.add("gray-text");
    setTimeout(() => {
        showResult_div.classList.remove("gray-text");
    }, 300);
    switch(userChoice){
        case "r":
            rock_div.classList.add("gray");
            setTimeout(() => {
                rock_div.classList.remove("gray");
               }, 300);
            break;
        case "p":
            paper_div.classList.add("gray");
            setTimeout(() => {
               paper_div.classList.remove("gray");
               }, 300);
            break;
        case "s":
            scissors_div.classList.add("gray");
            setTimeout(() => {
                scissors_div.classList.remove("gray");
               }, 300);
            break;
    }
}

var game = (userChoice) => {
    var options = ['r', 'p', 's'];
    var compChoice = options[Math.floor(Math.random() * 3)];

    switch (userChoice + compChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, compChoice);
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;

        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, compChoice);            
            break;
    }
}

var main = () => {
    rock_div.addEventListener('click', () => {
        game("r");
    });

    paper_div.addEventListener('click', () => {
        game("p");
    });

    scissors_div.addEventListener('click', () => {
        game("s");
    });

}

main();
