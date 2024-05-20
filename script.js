
let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");

let answer = Math.floor(Math.random()*100) + 1;

let no_of_guesses = 0;
let guesses_nums = [];

function play(){
    let user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        alert("Please enter a number between 1 and 100.");
    }
    else{
        guesses_nums.push(user_guess);
        no_of_guesses+= 1;
        
        if(user_guess < answer){
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
        }
        else if(user_guess > answer){
            msg1.textContent = "Your guess is too high.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
        }
        else if(user_guess == answer){
            msg1.textContent = "Yesss! You guessed it right!";
            msg2.textContent = "The number was : " + answer;
            document.getElementById("my_btn").disabled = true;
        }
        else if(user_guess = isNaN){
            alert("Please enter a valid digit between 1 and 100.");
        }
    }
}
