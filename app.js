let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#userscore");
const computerScorePara=document.querySelector("#computerscore");
const gencompchoice=()=>{
   const options=["rock","paper", "scissor"];
   const randidx=Math.floor(Math.random()*3);
   return options[randidx];
};
const drawgame=()=>{
     msg.innerText="The game is draw. play again.";
     msg.style="#081b31;"
};
const showWinner=(userwin,userId,compchoice)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=`you Won! your ${userId} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        
    }
    else{
        compscore++;
        computerScorePara.innerText=compscore;
        msg.innerText=`you lost.${compchoice} beats your ${userId}`;
        msg.style.backgroundColor="red";
    }
};

const playgame=(choiceId)=>{
 console.log("user choice=",choiceId);
 //generate compiter choice
 const compchoice = gencompchoice();
 console.log("comp choice=",compchoice)
 if(choiceId==compchoice){
    drawgame();
 } 
 else{
    let userwin=true;
    if(choiceId==="rock"){
        userwin=compchoice==="paper"?false:true;
    }
    else if(choiceId==="paper"){
        userwin=compchoice==="scissor"?false:true;
    }
    else{
       userwin=compchoice==="rock"?false:true;
    }
    showWinner(userwin,choiceId,compchoice);
 }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        playgame(choiceId);
    });
});