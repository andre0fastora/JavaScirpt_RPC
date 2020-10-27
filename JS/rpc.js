//funct that decides cpus choice
function compPlay () 
{
    //random number between 0-2
    let random = Math.floor(Math.random() * 3);
    console.log(random);
    //if 0 return rock
    if (random == 0)
    {
        console.log ("Comp chooses Rock");
        return "rock";
    } 
    //if 1 return paper
    
    if (random == 1)
    {
        console.log ("Comp chooses Paper");
        return "paper";
    } 
    //if 2 return scissors
    
    if (random == 2) 
    {
        console.log ("Comp chooses scissors");
        return "scissors";
    }
}

//prompts player for selecion and returns selectio
function playerSelection () 
{
    return prompt("Rock Paper or Scissors: ");
}


function playRound(playerChoice, compChoice) 
{   //normalize case 
    playerChoiceFix = playerChoice.toLowerCase;
    //debug
    console.log("Player selection is " + playerChoiceFix)
    //check for win conditions
    
    if (playerChoice == "rock")
    {
        if (compChoice == "rock")
        {
            console.log("Tie!")
        }
        else if (compChoice == "paper")
        {
            console.log("Player loses, paper covers rock!")
        }

        else 
        {
            console.log ("Player wins, rock smashes scissors!")
        }
    }

    else if (playerChoice == "paper")
    {
        if (compChoice == "rock")
        {
            console.log("Player wins, paper cpvers rock!")
        }
        else if (compChoice == "paper")
        {
            console.log("Tie!")
        }

        else 
        {
            console.log ("Player loses, Scissors cut paper!")
        }
    }

    else 
    {
        if (compChoice == "rock")
        {
            console.log("Player loses, rock smashes scissors!")
        }
        else if (compChoice == "paper")
        {
            console.log("Player wins, scissors cut paper!")
        }

        else 
        {
            console.log ("Tie!")
        }
    }
}

function game() 
{
    for (let i = 0; i < 5; i++)
    {
        playRound(playerSelection(), compPlay());
    }
}

