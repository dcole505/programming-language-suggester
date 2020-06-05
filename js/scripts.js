$(document).ready(function(){
  $("#form-reveal").click(function(event){
    event.preventDefault();

    $("#user-info").show();
  });

  $("#user-info").submit(function(event){
    event.preventDefault();

    const firstNameInput = $("input#first-name").val();
    const lastNameInput = $("input#last-name").val();
    const questionOneInput = $('input:radio[name="question1"]:checked').val();
    const questionTwoInput = $('input:radio[name="question2"]:checked').val();
    const questionThreeInput = $('input:radio[name="question3"]:checked').val();
    
    $(".user-name").text(firstNameInput);
    $("#user-info").hide();
    $("#results").show();

    determineLanguage(questionOneInput, questionTwoInput, questionThreeInput);
  });
;})

function determineLanguage(questionOneInput, questionTwoInput, questionThreeInput){

  if((questionOneInput === "ruby") || (questionTwoInput === "ruby") || (questionThreeInput === "ruby") && (questionOneInput === questionTwoInput) 
  || (questionOneInput === questionThreeInput) || (questionTwoInput === questionThreeInput)){
    $("#ruby-card").toggle();

  } else if ((questionOneInput === "java") || (questionTwoInput === "java") || (questionThreeInput === "java") && (questionOneInput === questionTwoInput) 
  || (questionOneInput === questionThreeInput) || (questionTwoInput === questionThreeInput)){
    $("#java-card").toggle();
  } else if ((questionOneInput === "js") || (questionTwoInput === "js") || (questionThreeInput === "js") && (questionOneInput === questionTwoInput) 
  || (questionOneInput === questionThreeInput) || (questionTwoInput === questionThreeInput)){
    $("#javascript-card").toggle();
  }
}
