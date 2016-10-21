//User Logic
$(document).ready(function()) {
  $("form#questions").submit(function(event) {

    var name = $("input#name").val();
    var computers = $("input#computers").val();
    var attend = $("select#attend").val();
    var describe = $("input:radio[name=describe]:checked").val();
    var company = $("select#company").val();
    var mac = $("input#macorpc").val();



    $("#output").text(result);
    $("#trackSuggestion").show();
event.preventDefault();
  });
});

//Business Logic

var result = function(){

  if ( computers === "no") {
    return ("If you don't like computers then maybe you should reconsider attending Epicodus...");
  } else if (describe === "Artistic") {
    return ("Design!");
  } else if (attend === "October" && describe === "Logical" && company === "Twitter") {
    return ("Ruby!");
  } else if (attend === "January" && company === "SQ1") {
    return ("PHP!");
  } else if (attend === "October" && describe === "Logical" && mac = PC) {
    return ("C#!");
};
