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

  if(!questionOneInput || !questionTwoInput || !questionThreeInput || !questionFourInput || !questionFiveInput){
    alert("Please make sure to answer all of the questions!");
  }else if(questionOneInput === "ruby"){

  }
  
}
