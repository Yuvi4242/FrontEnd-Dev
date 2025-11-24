$(function(){
  $("#hide").click(()=>$(".b").first().hide());
  $("#show").click(()=>$(".b").show());
  $("#slide").click(()=>$(".b").first().slideToggle());
  $("#fade").click(()=>$(".b").eq(1).fadeToggle());

  let i=0;
  const b=$(".b");
  setInterval(()=>{
    b.eq(i).fadeOut(500,function(){
      i=(i+1)%b.length;
      b.eq(i).fadeIn(500);
    });
  },5000);
});
