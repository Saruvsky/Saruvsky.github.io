//Sara Pereira up201906821

//first quizz
let quizz = confirm("Hello fellow traveller of the internet. I have a few questions for you, would you like to answer them?");

if(quizz){
    if(confirm("All answers must be written in small caps, otherwise the experience won't be as fun. Do you agree to these terms?") == true){
        alert("Let's begin!");
    }
    else{
        alert("I knew you would agree.");
    }
}   
else{
    if(confirm("Why won't you love me? But anyway, all answers must be written in small caps, otherwise the experience won't be as fun. Do you agree to these terms?") == true){
        alert("Let's begin!");
    }
    else{
        alert("I knew you would agree.");
    }
}
    

//group q1
let q1 = prompt("What time is it?");

if(q1 > 12){
    alert("Okay kinda cringe, next question.");
//in case of the response beind submitted empty it is equalled to 0, therefore the usage of 0 in the condition
}   else if(q1 < 12 && q1 > 0){
    alert("Isn't it too early for this?");
}
    else{
//in case of the response being submitted empty or cancelled, this message is shown
        alert("Why won't you answer me...");
    }



//group q2
let q2 = prompt("What color are your socks?");

if(q2 == "white"){
    alert("How boring can you be?");
}
else if(q2 == "black"){
    alert("That's pretty metal.");
}
else if(q2 == "red"){
    alert("That's rad. Haha, funny.");
}
else if(q2 == "orange"){
    alert("Juicy.");
}
else if(q2 == "pink"){
    alert("Yas queen!");
}
else if(q2 == "purple"){
    alert("I love purple!");
}
else if(q2 == "blue"){
    alert("Do you need a hug?");
}
else if(q2 == "green"){
    alert("Ew ok.");
}
else if(q2 == "yellow"){
    alert("What is wrong with you?");
}

//the usage of null and an empty "" is for cases in which you either submit an empty response or cancel
else if(q2 == "" || q2 == null){
    alert("Now you're just being mean...");
}
else{
    alert("Eh, ok.");
}



//group q3
let q3 = prompt("Can you time travel?");

if(q3 == "yes"){
    if(confirm ("Can you teach me?") == true){
        alert("Haha jk, I already know how.");
    }
    else{
        alert("Ok boomer.");
    }
}
//the usage of null and an empty "" is for cases in which you either submit an empty response or cancel
else if(q3 == ""|| q3 == null){
    alert("You're hurting my feelings...");
}

else if(q3 == "no"){
    alert("I knew you were boring.");
}



//group q4
let q4 = prompt("Are you enjoying this quizz?");

if(q4 == "yes"){
    if(prompt("Rate it from 1-5") > 2.5){
        alert("I love you too!");
    }
    else{
        alert("I'm sad.");
    }
}
else if(q4 == "no"){
    alert("I just wanted you to be happy.");
}



//group q5
let q5 = confirm("Don't worry, the quizz is almost over, can you still make it?");

if(q5){
    alert("Last question.");
} else{
    alert("Ah don't worry you'll make it.");
}

//group q6
let q6 = prompt("What is the meaning of life?");

if(q6 == "42"){
    alert("You are correct!");
}
//the usage of null and an empty "" is for cases in which you either submit an empty response or cancel
else if(q6 == ""|| q6 == null){
    alert("Bruh.");
}
else {
    alert("You must look further, otherwise you might lose your way.")
}



//group farewell
let farewell = confirm("I have enjoyed our time together and I shall miss you!");