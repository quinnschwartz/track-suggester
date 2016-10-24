
$(document).ready(function() {
  $("form").submit(function(event) {
    var name = $("#name").val();
    var computers = $("#computers").val();
    var mac = $("#macorpc").val();
    var attend = $("#attend").val();
    var company = $("#company").val();
    var describe = $("input:radio[name=describe]:checked").val();

    var result = function(){

      if (computers === "no") {
        return ("If you don't like working with computers then maybe you should reconsider studying at Epicodus!");
      } else if (describe === "artistic") {
        return ("CSS/Design!");
      } else if (describe === "logical" && attend === "January") {
          return ("PHP/Drupal!");
      } else if (mac === "PC" && describe === "logical") {
          return ("C#/.NET!");
      } else if (mac === "Mac" && describe === "logical") {
          return ("Ruby/Rails!");
      }
    };

    $(".name").text(name);
    $("#output").text(result);
    $("#track").show();

  event.preventDefault();
  });
});
