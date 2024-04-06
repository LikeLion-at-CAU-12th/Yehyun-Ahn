//JS 파일에서 접근해야하는 HTML DOM 요소 선언

const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

const myResult = document.getElementById("myScore");
const comResult = document.getElementById("comScore");

const resultText = document.getElementById("display-result");

let my_result=0, com_result=0;

const resetBtn = document.getElementById("reset-button");

//선언한 dom 요소에 이벤트 생성

rockBtn.addEventListener("click", displayMychoice);
scissorsBtn.addEventListener("click", displayMychoice);
paperBtn.addEventListener("click", displayMychoice);
resetBtn.addEventListener("click", reset);

function displayMychoice(e) {
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;

        start(clickedBtn);
}

function getComChoice(e) {
    const randomValue = {
        0: ["rock", "fa-regular fa-hand-back-fist", 0],
        1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90", 1],
        2: ["paper", "fa-regular fa-hand", 2],
    };

    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

function start(myChoice) {
    let resultArray = getComChoice();
    let myChoiceNum;
    let winLose;
    
    switch(myChoice)
    {
        case "rock": myChoiceNum=0; break;
        case "scissors": myChoiceNum=1; break;
        case "paper": myChoiceNum=2; break;
    }

    if(myChoiceNum == resultArray[2])
    {
        winLose=1; // 비김
    }
    else{
        if(myChoiceNum==0 && resultArray[2]==1)
        {
            winLose=2; //이김
            my_result++;
        }
        if(myChoiceNum==0 && resultArray[2]==2)
        {
            winLose=0; //짐
            com_result++;
        }
        if(myChoiceNum==1 && resultArray[2]==2)
        {
            winLose=2; //이김
            my_result++;
        }
        if(myChoiceNum==1 && resultArray[2]==0)
        {
            winLose=0; //짐
            com_result++;
        }
        if(myChoiceNum==2 && resultArray[2]==0)
        {
            winLose=2; //이김
            my_result++;
        }
        if(myChoiceNum==2 && resultArray[2]==1)
        {
            winLose=0; //짐
            com_result++;
        }
    }

    displayComChoice(resultArray);

    showResult(winLose); //가운데에 win, lose 나타내는 함수

    myResult.innerText = my_result;
    comResult.innerText = com_result;
}

function showResult(winLose)
{
    switch(winLose){
        case 0: resultText.innerText = "lose"; break;
        case 1: resultText.innerText = "again"; break;
        case 2: resultText.innerText = "win"; break;
    }
}

function reset(e)
{
    my_result=0;
    com_result=0;
    myResult.innerText = my_result;
    comResult.innerText = com_result;
}