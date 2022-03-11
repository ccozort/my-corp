
// User interface discussion
/*
Clicking on buttons
Keyboard
Image on screen
Mouse
Touch

- Buttons on the screen
- Drop down
- Images that are buttons

*/
let userChoice;

let choices = ["rock", "paper", "scissors", "lizard", "spock"];


console.log("this thing works!!!!");
let cpu = Math.floor(Math.random()*choices.length);
// let user = prompt("Choose...");
console.log("the cpu choice value was " + cpu)
// fill in computer's result depending on outcome

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_create

function diceRoll(sides){
    let sides = prompt("how many sides?");
    let numsides = parseInt(sides);
    let outcome = Math.floor(Math.random()*numsides);
    alert(outcome);
}
diceRoll();

function userRock(){
    console.log("this function is working...")
    userChoice = "rock";
    drawImg("_images/rock.jpg", "500", "900", "rock");
    playRps();
}
function userPaper(){
    userChoice = "paper";
    drawImg("_images/paper.jfif");
    drawPaper();
}
function userScissors(){
    userChoice = "scissors";
    drawImg("_images/scissors.jfif");
}


// what if this function could draw any image...
function drawImg(pic, width, height, alt){
    var x = document.createElement("IMG");
    x.setAttribute("src", pic);
    x.setAttribute("width", width);
    x.setAttribute("height", height);
    x.setAttribute("alt", alt);
    document.body.appendChild(x);
}

function playRps(){
    console.log("The computer chose...: "  + choices[cpu]);
    if (cpu == 0 && userChoice == "scissors"){
        drawImg("_images/rock.jpg");
        console.log("computer wins...")
    }
    else if (cpu == 1 && userChoice == "scissors") {
        console.log("you win");
        drawImg("_images/paper.jfif");
    }
    else if (cpu == 2 && userChoice == "scissors") {
        console.log("you tied");
    }
    else if (cpu == 0 && userChoice == "paper") {
        console.log("you win");
    }
    else if (cpu == 1 && userChoice == "paper") {
        console.log("you tied");
    }
    else if (cpu == 2 && userChoice == "paper") {
        console.log("you lost");
    }
  
}