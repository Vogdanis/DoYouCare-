function clickHandler(clicked_id){
    //console.log(clicked_id);
    if(clicked_id === "quiz"){
        ShowDiv(clicked_id);
        playSound(); 
    }
    if(clicked_id === "facts"){
        ShowDiv(clicked_id);
        playSound();
    }
    if(clicked_id === "backToMenu"){
        ShowDiv(clicked_id);
    }
    if(clicked_id === "backToMenuFromQuiz"){
        ShowDiv(clicked_id);
    }
    if(clicked_id === "Question-1"){
        ShowDiv(clicked_id);
    }
    if(clicked_id === "Question-2"){
        ShowDiv(clicked_id);
    }
    if(clicked_id === "Question-3"){
        ShowDiv(clicked_id);
    }
    if(clicked_id === "Question-4"){
        ShowDiv(clicked_id);
    }
    if(clicked_id === "Question-5"){
        ShowDiv(clicked_id);
    }
    if(clicked_id === "Question-6"){
        ShowDiv(clicked_id);
    }
    if(clicked_id === "Question-7"){
        ShowDiv(clicked_id);
    }
    // if(clicked_id === "Question-8"){
    //     ShowDiv(clicked_id);
    // }
}


function ShowDiv(triggerDiv) {
    if(triggerDiv === "quiz"){
        document.getElementById("toggle-menu").style.display = "none";
        document.getElementById("toggle-quiz").style.display = "Block";
        document.getElementById("Question-1").style.display = "Block";
    }
    if(triggerDiv === "facts"){
        document.getElementById("toggle-menu").style.display = "none";
        document.getElementById("toggle-quiz").style.display = "none";
        document.getElementById("toggle-facts").style.display = "Block";
    } 
    if(triggerDiv === "backToMenu"){
        document.getElementById("toggle-facts").style.display = "none";
        document.getElementById("toggle-quiz").style.display = "none";
        document.getElementById("toggle-menu").style.display = "Block";
    } 
    if(triggerDiv === "backToMenuFromQuiz"){
        document.getElementById("toggle-facts").style.display = "none";
        document.getElementById("toggle-quiz").style.display = "none";
        document.getElementById("Question-1").style.display = "none";
        document.getElementById("Question-2").style.display = "none";
        document.getElementById("Question-3").style.display = "none";
        document.getElementById("Question-4").style.display = "none";
        document.getElementById("Question-5").style.display = "none";
        document.getElementById("Question-6").style.display = "none";

        document.getElementById("Give_Score").style.display = "none";
        document.getElementById("toggle-menu").style.display = "Block";
    } 
    if(triggerDiv === "Question-1"){
        document.getElementById("Question-1").style.display = "none";
        document.getElementById("Question-2").style.display = "Block";
    }
    if(triggerDiv === "Question-2"){
        document.getElementById("Question-2").style.display = "none";
        document.getElementById("Question-3").style.display = "Block";
    }
    if(triggerDiv === "Question-3"){
        document.getElementById("Question-3").style.display = "none";
        document.getElementById("Question-4").style.display = "Block";
    }
    if(triggerDiv === "Question-4"){
        document.getElementById("Question-4").style.display = "none";
        document.getElementById("Question-5").style.display = "Block";
    }
    if(triggerDiv === "Question-5"){
        document.getElementById("Question-5").style.display = "none";
        document.getElementById("Question-6").style.display = "Block";
        
    }
    if(triggerDiv === "Question-6"){
        document.getElementById("Question-6").style.display = "none";
        document.getElementById("Question-7").style.display = "Block";
    }
    if(triggerDiv === "Question-7"){
        document.getElementById("Question-7").style.display = "none";
        document.getElementById("Give_Score").style.display = "Block";
    }
    // if(triggerDiv === "Question-8"){
    //     document.getElementById("Question-8").style.display = "none";
    //     document.getElementById("Give_Score").style.display = "Block";
    // }
    if(triggerDiv === "Give_Score"){
        document.getElementById("Question-7").style.display = "none";
    }

}
