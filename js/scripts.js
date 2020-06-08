$(document).ready(function(){
  $("#form-reveal").click(function(event){
    event.preventDefault();

    $("#user-info").show();
    $("#display").hide();
  });

  $("#user-info").submit(function(event){
    event.preventDefault();

    const firstNameInput = $("input#first-name").val();
    const lastNameInput = $("input#last-name").val();
    const questionOneInput = $('input:radio[name="question1"]:checked').val();
    const questionTwoInput = $('input:radio[name="question2"]:checked').val();
    const questionThreeInput = $('input:radio[name="question3"]:checked').val();
    const questionFourInput = $('input:radio[name="question4"]:checked').val();
    const questionFiveInput = $('input:radio[name="question5"]:checked').val();
    
    $(".user-name").text(firstNameInput);
    $("#user-info").hide();
    $("#results").show();
    $("#display").show();

    determineLanguage(questionOneInput, questionTwoInput, questionThreeInput, questionFourInput, questionFiveInput);
  });
;})

function determineLanguage(questionOneInput, questionTwoInput, questionThreeInput, questionFourInput, questionFiveInput){
  let ruby = 0;
  let java = 0;
  let javascript = 0;

  if (!questionOneInput || !questionTwoInput || !questionThreeInput || !questionFourInput || !questionFiveInput){
    alert("Please make sure to answer all of the questions!");
  }else if (questionOneInput === "ruby"){
    ruby += 1;
  }else if (questionOneInput === "java"){
    java += 1;
  }else if (questionOneInput === "js"){
    javascript += 1;
  }
  if (questionTwoInput === "ruby"){
    ruby += 1;
  }else if (questionTwoInput === "java"){
    java += 1;
  }else if (questionTwoInput === "js"){
    javascript += 1;
  }
  if (questionThreeInput === "ruby"){
    ruby += 1;
  }else if (questionThreeInput === "java"){
    java += 1;
  }else if (questionThreeInput === "js"){
    javascript += 1;
  }
  if (questionFourInput === "ruby"){
    ruby += 1;
  }else if (questionFourInput === "java"){
    java += 1;
  }else if (questionFourInput === "js"){
    javascript += 1;
  }
  if (questionFiveInput === "ruby"){
    ruby += 1;
  }else if (questionFiveInput === "java"){
    java += 1;
  }else if (questionFiveInput === "js"){
    javascript += 1;
  }

displayLanguage(ruby, java, javascript);  
}

function displayLanguage(ruby, java, javascript){
  let returnString = "";
  if(ruby > java && ruby > javascript){
    $("#ruby-card").show("slow");
    $("#java-card").hide();
    $("#javascript-card").hide();
    $("#python-card").hide();
  } else if (java > ruby && java > javascript){
    $("#java-card").show("slow");
    $("#ruby-card").hide();
    $("#javascript-card").hide();
    $("#python-card").hide();
  } else if (javascript > ruby && javascript > java){
    $("#javascript-card").show("slow");
    $("#ruby-card").hide();
    $("#java-card").hide();
    $("#python-card").hide();
  } else {
    $("#python-card").show("slow");
    $("#ruby-card").hide();
    $("#java-card").hide();
    $("#javascript-card").hide();
  }
}


