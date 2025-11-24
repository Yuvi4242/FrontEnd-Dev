$(function(){
  var existing = ["user@example.com","demo@site.com","test@domain.com"];

  function isEmail(e){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  $("#reg").on("submit",function(e){
    e.preventDefault();
    $("#result").text("");
    $("#reg input").removeClass("err ok");

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var pass = $("#pass").val();
    var valid = true;

    if(!name){ $("#name").addClass("err"); valid=false; }
    else $("#name").addClass("ok");

    if(!isEmail(email) || existing.indexOf(email)!==-1){ $("#email").addClass("err"); valid=false; }
    else $("#email").addClass("ok");

    if(pass.length < 8){ $("#pass").addClass("err"); valid=false; }
    else $("#pass").addClass("ok");

    if(valid) $("#result").text("Registration successful!");
    else $("#result").text("Please fix highlighted fields.");
  });
});
