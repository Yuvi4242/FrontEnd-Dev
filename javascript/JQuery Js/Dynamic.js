$(function(){
  $("#add").on("click",function(){
    const t = $("#title").val().trim() || "Untitled Post";
    $("#posts").append(`<article class="post">${t}</article>`);
    $("#title").val("");
  });

  $("#prepend").on("click",function(){
    $("#posts").prepend('<article class="post featured">Featured: Hot Topic</article>');
  });

  $("#remove").on("click",function(){ $("#posts .post").last().remove(); });

  $("#addtag").on("click",function(){
    const tag = $("#tagtext").val().trim();
    const last = $("#posts .post").last();
    if(!last.length) return alert("No posts");
    if(!tag) return alert("Enter tag");
    last.before(`<div class="tag">#${tag}</div>`);
    $("#tagtext").val("");
  });

  setInterval(function(){
    $("#posts .post").each(function(){
      const txt = $(this).text().toLowerCase();
      if(txt.indexOf("react") !== -1 || txt.indexOf("node") !== -1) $(this).css("border","2px solid #28a745");
      else $(this).css("border","");
    });
  },1500);
});
