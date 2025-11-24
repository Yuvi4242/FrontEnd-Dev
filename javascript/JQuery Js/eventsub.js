$(function(){
  function show(m){
    $("#message").stop(true,true).text(m).fadeIn(200).delay(1200).fadeOut(200,function(){ $(this).text(""); });
  }

  $("#sub").on("click",function(){ $("#topics .topic").addClass("on"); show("Subscribed to all"); });
  $("#unsub").on("click",function(){ $("#topics .topic").removeClass("on"); show("Unsubscribed from all"); });
  $("#add").on("click",function(){
    const t = "topic-"+Date.now();
    $("#topics").append(`<div class="topic" data-topic="${t}">${t} <button class="toggle">Toggle</button></div>`);
    show("Added topic");
  });
  $("#remove").on("click",function(){
    const last = $("#topics .topic").last();
    if(last.length) { last.remove(); show("Removed last topic"); } else show("No topics");
  });
  $("#topics").on("click",".toggle",function(e){
    e.stopPropagation();
    const p = $(this).closest(".topic");
    p.toggleClass("on");
    show(p.hasClass("on") ? "Enabled" : "Disabled");
  });
});
