var jq1 = jQuery.noConflict(true);
var jq3 = window.jQuery;

(function($){
  var idx = 0;
  var widgets = $("#v1-area .widget");
  setInterval(function(){
    widgets.removeClass("active").eq(idx).addClass("active");
    idx = (idx+1)%widgets.length;
  },3000);

  $("#v1-area").on("mouseenter",".widget",function(){
    $(this).css("box-shadow","0 6px 12px rgba(0,0,0,0.08)");
  }).on("mouseleave",".widget",function(){
    $(this).css("box-shadow","");
  });
})(jq3);

(function($){
  $(".v2").on("click",function(){
    $("#modal").show();
  });

  $("#closeModal").on("click",function(){
    $("#modal").hide();
  });

  $(".v2").on("mouseenter",function(e){
    $("#tooltip").text("Info: " + $(this).attr("id")).css({left:e.pageX+10,top:e.pageY+10}).fadeIn(100);
  }).on("mousemove",function(e){
    $("#tooltip").css({left:e.pageX+10,top:e.pageY+10});
  }).on("mouseleave",function(){
    $("#tooltip").fadeOut(100);
  });
})(jq1);
