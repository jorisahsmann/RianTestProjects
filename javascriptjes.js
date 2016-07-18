function TestFunction() {
    document.getElementById("button").style.color = "#ff0000";
}
function ChangeClassNameById(elementname, className)
{
  console.log(elementname +" " +className);
    document.getElementById(elementname).className = className;
}

function rps(Userrps) {
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
     console.log("Computer: " + computerChoice);
/*
    if (Userrps === computerChoice)
    console.log( "The result is a tie!");
    else if (Userrps === "scissors") {
      if (computerChoice === "rock")
      console.log("paper wins");
      else console.log("scissors wins");
    } else if (Userrps === "paper")
*/
document.getElementById("computerChoice").innerHTML= "computer picked: " + computerChoice ;


switch(Userrps){
  case "paper":
    switch (computerChoice) {
      case "paper":
        document.getElementById("result").innerHTML= "the result is a tie";
        document.getElementById("result").className="tie";
        break;
      case "rock":
        document.getElementById("result").innerHTML="Player wins!";
        break
      case "scissors":
        document.getElementById("result").innerHTML="computer wins";
        break
      default:
        document.getElementById("result").innerHTML="error :(";
      }

    break;
  case "rock":
    switch (computerChoice) {
      case "paper":
        document.getElementById("result").innerHTML="You lost";
      break;
      case "rock":
        document.getElementById("result").innerHTML="Headbounce";
      break
      case "scissors":
        document.getElementById("result").innerHTML="You killed him";
      break
      default:
        document.getElementById("result").innerHTML="error :(";

  }
  break;
  case "scissors":
    switch (computerChoice) {
      case "paper":
        document.getElementById("result").innerHTML="You cut him in half";
        break;
      case "rock":
        document.getElementById("result").innerHTML="Try again, you lost";
        break
      case "scissors":
        document.getElementById("result").innerHTML="its a tie";
        break
      default:
        document.getElementById("result").innerHTML="error :(";

      }
    break
  }
}
//var userChoice = prompt("Do you choose rock, paper or scissors?");
//var compare = function(choice1, choice2){
