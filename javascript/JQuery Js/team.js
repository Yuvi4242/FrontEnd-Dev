$(function(){
  $(document).on("click",".manager",function(){
    const m=$(this).attr("id");
    $(".d").removeClass("h");
    $(`.d[data-m=${m}]`).addClass("h");
  });

  $(document).on("mouseenter",".m",function(){
    $(this).find(".c").show();
  }).on("mouseleave",".m",function(){
    $(this).find(".c").hide();
  });

  $(document).on("click","h2",function(){
    $(this).closest(".dept").find(".m").css("background","#dfe6e9");
  });

  $("#rand").click(function(){
    const all=$(".d");
    const r=all.eq(Math.floor(Math.random()*all.length));
    r.addClass("h");
    setTimeout(()=>$(".m").removeClass("h"),2000);
  });

  $("#col").click(()=>$(".d").slideToggle());
});
