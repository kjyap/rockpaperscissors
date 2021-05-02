function computerPlay(){
    const element = ["Rock","Paper","Scissors"];
   
    return x= element[Math.floor(Math.random()*element.length)].toLowerCase();
    
}


function playerSelection(){
    return y = prompt("What's your element?").toLowerCase()
    
}



function playRound(){
var comp = computerPlay();
var user = playerSelection();

console.log(comp,user);

    if (user == comp) 
    {alert("It is a draw!")}

    else if (user == "rock")
        if (comp == "scissors") {alert("You Win!"); i += 1;}
        else {alert("You lost!"); j += 1;}

    else if (user == "paper") 
        if (comp == "rock") {alert("You Win!"); i += 1}
        else {alert("You lost!") ;j += 1;}

    else if (user == "scissors")
        if (comp == "paper") {alert("You Win!"); i += 1}
        else {alert("You lost!"); j += 1;}
}

var i = 0;
var j = 0;

function game(){

    for (;(i||j) < 5;) {
    playRound();
    console.log(i,j);    
    }

    if (i=5) {alert("user win")}
    else {alert("Comp Win")};
}

game();