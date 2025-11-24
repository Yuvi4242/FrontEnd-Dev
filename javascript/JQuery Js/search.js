$(function(){
  function updateCount(n){ $("#count").text(n + " course(s) matched"); }

  $("#search").on("keyup",function(){
    const q = $(this).val().toLowerCase().trim();
    let matched = 0;
    $("#courses .course").each(function(){
      const txt = $(this).text();
      if(q === "" || txt.toLowerCase().indexOf(q) !== -1){
        $(this).show();
        if(q !== ""){
          const regex = new RegExp('('+q+')','ig');
          $(this).html(txt.replace(regex,'<mark>$1</mark>'));
        } else {
          $(this).html(txt);
        }
        matched++;
      } else {
        $(this).hide();
      }
    });
    updateCount(matched);
  });

  $("#clear").on("click",function(){
    $("#search").val("").trigger("keyup");
    $("#courses .course").show().each(function(){ $(this).html($(this).text()); });
  });

  updateCount($("#courses .course").length);
});
