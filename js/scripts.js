$(document).ready(function(){
  $("#form-button").click(function(event){
    $("#user-info").show();

    event.preventDefault();
  });

  $("#form-submit").submit(function(event){
    event.preventDefault();

    const firstNameInput = $("input#first-name").val();
    const lastNameInput = $("input#last-name").val();
    const questionOneInput = $("input:radio[name=question1]:checked").val();
    const questionTwoInput = $("input:radio[name=question2]:checked").val();
    const questionThreeInput = $("input:radio[name=question3]:checked").val();
  });
;})


function determineLanguage(questionOneInput, questionTwoInput, questionThreeInput){

  if((questionOneInput === "ruby") || (questionTwoInput === "ruby") || (questionThreeInput === "ruby") && (questionOneInput === questionTwoInput) 
  || (questionOneInput === questionThreeInput) || (questionTwoInput === questionThreeInput)){
    //display ruby block
  } else if ((questionOneInput === "java") || (questionTwoInput === "java") || (questionThreeInput === "java") && (questionOneInput === questionTwoInput) 
  || (questionOneInput === questionThreeInput) || (questionTwoInput === questionThreeInput)){
    //display Java block
  } else if ((questionOneInput === "js") || (questionTwoInput === "js") || (questionThreeInput === "js") && (questionOneInput === questionTwoInput) 
  || (questionOneInput === questionThreeInput) || (questionTwoInput === questionThreeInput)){
    //display JavaScript block
  }
}
