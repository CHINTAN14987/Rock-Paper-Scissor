const myButton=document.getElementById('button_ID');
var USER_ROCK_SELECTOR='ROCK';
var USER_PAPER_SELECTOR='PAPER';
var USER_SCISSOR_SELECTOR='SCISSOR';
var COMPUTER_ROCK_SELECTOR='ROCK';
var COMPUTER_PAPER_SELECTOR='PAPER';
var COMPUTER_SCISSOR_SELECTOR='SCISSOR';
var COMPUTER_SELECTION;
let EnterUser;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';
 


let playerFunc=function whenUserPlay()
{
     const intialEnterUser=prompt("Please enter");
 EnterUser= intialEnterUser.toUpperCase();
    if(USER_PAPER_SELECTOR===EnterUser)
    { console.log(USER_PAPER_SELECTOR);
        return USER_PAPER_SELECTOR;
 
    }
    else if (USER_ROCK_SELECTOR===EnterUser)
    {
        console.log(USER_ROCK_SELECTOR);
        return USER_ROCK_SELECTOR;
        
    }
    else if (USER_SCISSOR_SELECTOR===EnterUser) 
    {
        console.log(USER_SCISSOR_SELECTOR);
        return USER_SCISSOR_SELECTOR;
        
    }
else {
    alert("You Entered Something Wrong");
    return;
}
}
let computerFnc=function ComputerPlays()
{
COMPUTER_SELECTION=Math.random();
if(COMPUTER_SELECTION<0.33)
{
    console.log(COMPUTER_ROCK_SELECTOR, COMPUTER_SELECTION);
    alert("Computer Chooses "+ COMPUTER_ROCK_SELECTOR);
return (COMPUTER_ROCK_SELECTOR);
}
else if (COMPUTER_SELECTION>0.33 && COMPUTER_SELECTION<0.67)
{
    console.log(COMPUTER_PAPER_SELECTOR, COMPUTER_SELECTION);
    alert("Computer Chooses "+ COMPUTER_PAPER_SELECTOR);
    return(COMPUTER_PAPER_SELECTOR);
    
}
else
{
    console.log(COMPUTER_SCISSOR_SELECTOR, COMPUTER_SELECTION);
    alert("Computer Chooses "+ COMPUTER_SCISSOR_SELECTOR);
    return( COMPUTER_SCISSOR_SELECTOR);
    
}
}

function final_Battle()
{
    
    
    winning(playerFunc(),computerFnc());
    
}

function winning(pchoice, cchoice)
{
   
    if(pchoice===cchoice)
    {
        console.log(pchoice);
                console.log(cchoice);
     return alert(RESULT_DRAW);
     }
            else if((pchoice===USER_PAPER_SELECTOR && cchoice===COMPUTER_ROCK_SELECTOR) ||
            (pchoice===USER_SCISSOR_SELECTOR && cchoice===COMPUTER_PAPER_SELECTOR) ||
            (pchoice===USER_ROCK_SELECTOR && cchoice===COMPUTER_SCISSOR_SELECTOR))
            {
                console.log(pchoice);
                console.log(cchoice);
               return alert(RESULT_PLAYER_WINS);
            }
            else
             {
                console.log(pchoice);
                console.log(cchoice);
               return alert(RESULT_COMPUTER_WINS);
            }
    
  
}
myButton.addEventListener('click', final_Battle);