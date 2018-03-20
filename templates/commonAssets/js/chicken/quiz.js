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
    var totalScore = 0;
    var unitScore = 8;
    var numOfQuestions = 8;
    ////Question 1
    if(answer1 === "0"){
        totalScore += unitScore;
        console.log(totalScore);
    }
    if(answer1 === "1"){
        totalScore += unitScore * 3 / 4;
        console.log(totalScore);
    }
    if(answer1 === "3"){
        totalScore += unitScore * 2 / 4;
        console.log(totalScore);
    }
    if(answer1 === "5"){
        totalScore += unitScore * 1 / 4;
        console.log(totalScore);
    }
    if(answer1 === "more"){
        totalScore += 0;
        console.log(totalScore);
    }
    ////Question 2

    if(answer2 === "960 Million"){
        totalScore += unitScore;
        console.log(totalScore);
    }
     ////Question 3
     if(answer3 === "47 days"){
        totalScore += unitScore;
        console.log(totalScore);
    }

    ////Question 4
    if(answer4 === "4300 liters."){
        totalScore += unitScore;
        console.log(totalScore);
    }
   

    ////Question 5
    if(answer5 === "25km"){
        totalScore += unitScore;
        console.log(totalScore);
    }
   

    ////Question 6
    if(answer6 === "1kg of chicken"){
        totalScore += unitScore;
        console.log(totalScore);
    }
    if(answer6 === "1kg of cheese"){
        totalScore += 0;
        console.log(totalScore);
    }
    

    ////Question 7
    if(answer7 === "Chicken tikka masala"){
        totalScore += 0;
        console.log(totalScore);
    }
    if(answer7 === "Lamb curry"){
        totalScore += unitScore;
        console.log(totalScore);
    }


    ////Question 8
    if(answer8 === "Chicken tikka masala"){
        totalScore += 0;
        console.log(totalScore);
    }
    if(answer8 === "Lamb curry"){
        totalScore += unitScore;
        console.log("Hello");
    }



    if(totalScore <= (unitScore * (numOfQuestions * 1 / 3))){
        console.log("You know jack shit about chicken!");
        displayAnswer = "You know jack shit about chicken!";
    
    }
    if(totalScore > (unitScore * (numOfQuestions * 1 / 3)) && totalScore <= (unitScore * (numOfQuestions * 2 / 3))){
        console.log("You need to study!");
        displayAnswer = "You need to study!";
    }
    if(totalScore > (unitScore * (numOfQuestions * 2 / 3)) && totalScore <= 100000){
        console.log("You're a pro!");
        displayAnswer = "You're a pro!";
    }


    ShowDiv("Give_Score");
    document.getElementById("myScore").innerHTML = displayAnswer;
    
    
}
