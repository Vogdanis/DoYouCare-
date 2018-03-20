var answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8;
var displayAnswer;

function submitReply(question,value){
    //console.log(question);
    //console.log(value);
    clickHandler(question);
    if(question === "Question-1"){ answer1=value;}
    if(question === "Question-2"){ answer2=value;}
    if(question === "Question-3"){ answer3=value;}
    if(question === "Question-4"){ answer4=value;}
    if(question === "Question-5"){ answer5=value;}
    if(question === "Question-6"){ answer6=value;}
    if(question === "Question-7"){ answer7=value;}
    if(question === "Question-8"){ answer8=value;printAnswers();evaluateAnswers();}
}
function printAnswers(){
    console.log("Question1 answer was = " + answer1);
    console.log("Question2 answer was = " + answer2);
    console.log("Question3 answer was = " + answer3);
    console.log("Question4 answer was = " + answer4);
    console.log("Question5 answer was = " + answer5);
    console.log("Question5 answer was = " + answer6);
    console.log("Question5 answer was = " + answer7);
    console.log("Question5 answer was = " + answer8);
}

function evaluateAnswers(){
    var totalScore;
    ////Question 1
    if(answer1 === "0"){
        totalScore =+ 0;
    }
    if(answer1 === "1"){
        totalScore =+ 1;
    }
    if(answer1 === "3"){
        totalScore =+ 3;
    }
    if(answer1 === "5"){
        totalScore =+ 5;
    }
    if(answer1 === "more"){
        totalScore =+ 10;
    }
    ////Question 2
    if(answer2 === "Chichen Tikka Masala"){
        totalScore = totalScore + 0;
    }
    if(answer2 === "Lamb Curry"){
        totalScore = totalScore + 10;
    }
     ////Question 3
     if(answer3 === "0"){
        totalScore = totalScore + 0;
    }
    if(answer3 === "1"){
        totalScore = totalScore + 1;
    }
    if(answer3 === "3"){
        totalScore = totalScore + 3;
    }
    if(answer3 === "5"){
        totalScore = totalScore + 5;
    }
    if(answer3 === "more"){
        totalScore = totalScore + 10;
    }

    ////Question 4
    if(answer4 === "0"){
        totalScore = totalScore + 0;
    }
    if(answer4 === "1"){
        totalScore = totalScore + 1;
    }
    if(answer4 === "3"){
        totalScore = totalScore + 3;
    }
    if(answer4 === "5"){
        totalScore = totalScore + 5;
    }
    if(answer4 === "more"){
        totalScore = totalScore + 10;
    }

    ////Question 5
    if(answer5 === "0"){
        totalScore = totalScore + 0;
    }
    if(answer5 === "1"){
        totalScore = totalScore + 1;
    }
    if(answer5 === "3"){
        totalScore = totalScore + 3;
    }
    if(answer5 === "5"){
        totalScore = totalScore + 5;
    }
    if(answer5 === "more"){
        totalScore = totalScore + 10;
    }

    ////Question 6
    if(answer6 === "0"){
        totalScore = totalScore + 0;
    }
    if(answer6 === "1"){
        totalScore = totalScore + 1;
    }
    if(answer6 === "3"){
        totalScore = totalScore + 3;
    }
    if(answer6 === "5"){
        totalScore = totalScore + 5;
    }
    if(answer6 === "more"){
        totalScore = totalScore + 10;
    }

    ////Question 7
    if(answer7 === "0"){
        totalScore = totalScore + 0;
    }
    if(answer7 === "1"){
        totalScore = totalScore + 1;
    }
    if(answer7 === "3"){
        totalScore = totalScore + 3;
    }
    if(answer7 === "5"){
        totalScore = totalScore + 5;
    }
    if(answer7 === "more"){
        totalScore = totalScore + 10;
    }


    ////Question 8
    if(answer8 === "0"){
        totalScore = totalScore + 0;
    }
    if(answer8 === "1"){
        totalScore = totalScore + 1;
    }
    if(answer8 === "3"){
        totalScore = totalScore + 3;
    }
    if(answer8 === "5"){
        totalScore = totalScore + 5;
    }
    if(answer8 === "more"){
        totalScore = totalScore + 10;
    }



    if(totalScore <= 5){
        console.log("You're a pro!");
        displayAnswer = "You're a pro!";
    }
    if(totalScore > 5 && totalScore <= 10){
        console.log("You need to study!");
        displayAnswer = "You need to study!";
    }
    if(totalScore > 10 && totalScore <= 100000){
        console.log("You know jack shit about chicken!");
        displayAnswer = "You know jack shit about chicken!";
    }


    ShowDiv("Give_Score");
    document.getElementById("myScore").innerHTML = displayAnswer;
    
    
}
