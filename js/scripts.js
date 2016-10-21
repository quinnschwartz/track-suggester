//User Logic
$(document).ready(function()) {
  $("form#questions").submit(function(event) {

    var name = $("input#name").val();
    var computers = $("input#computers").val();
    var attend = $("select#attend").val();
    var describe = $("input:radio[name=describe]:checked").val();
    var company = $("select#company").val();



    $("#output").text(result);
    $("#trackSuggestion").show();
event.preventDefault();
  });
});

//Business Logic

var result = function(){

  if (age < 25 && gender === "male" && genderPref === "female") {
    return ("Miley");
  } else if (age <  25 && gender === "male" && genderPref === "male") {
    return ("Brad");
  } else if (age < 25 && gender === "female" && genderPref === "male") {
    return ("Craig");
  } else if (age < 25 && gender === "female" && genderPref === "female") {
    return ("Dina");
  } else if (age > 25 && gender === "male" && genderPref === "female") {
    return ("Elanore");
  } else if (age > 25 && gender === "male" && genderPref === "male") {
    return ("Fred");
  } else if (age > 25 && gender === "female" && genderPref === "male") {
    return ("George");
  } else if (age > 25 && gender === "female" && genderPref === "female") {
    return ("Helena");
  }
};
