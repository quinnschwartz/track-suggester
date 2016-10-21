
$(document).ready(function() {
  $("form").submit(function(event) {
    var mac = $("#macorpc").val();
    var company = $("#company").val();
    var describe = $("input:radio[name=describe]:checked").val();


    var result = function(){

      if (mac === "Mac" && company === "SQ1" && describe === "Artistic") {
        return ("Design!");
      } else if (mac === "Mac" && company === "SQ1" && describe === "Logical") {
          return ("PHP!");
      } else if (mac === "PC" && company === "Microsoft" && describe === "Logical") {
          return ("C#!");
      } else if (mac === "Mac" && company === "Twitter" && describe === "Logical") {
          return ("Ruby!");
      }
    };


        $("#output").text(result);
        $("#track").show();

        event.preventDefault();
        });
      });
