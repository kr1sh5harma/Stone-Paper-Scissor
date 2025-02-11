let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame = (userchoice) => {
    console.log("user choice = ",userchoice);
    const compchoice = genCompChoice();
    console.log("comp choice = ",compchoice);

    if(userchoice===compchoice){
        //draw game
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            //scissors, paper
            userWin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            //scissor, rock
            userWin = compchoice === "scissor" ? false : true;
        }
        else{
            userWin = compchoice === "rock" ? false : true; 
        }
        showWinner(userWin,userchoice,compchoice);
    }

};

const showWinner = (userWin,userchoice,compchoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You won !!");
        msg.innerText = `You Won! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        console.log("You lose !!");
        msg.innerText = `You Lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";

    }
}

const drawGame = () => {
    console.log("draw");
    msg.innerText = "Draw !"
    msg.style.backgroundColor = "orange";

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
});