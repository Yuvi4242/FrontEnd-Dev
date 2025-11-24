$(function() {
  $("#product-list").on("click", ".product", function() {
    $(".product").removeClass("highlight");
    $(this).addClass("highlight");
  });

  $("#product-list").on("mouseenter", ".product", function() {
    $(this).find(".more").slideDown(150);
  }).on("mouseleave", ".product", function() {
    $(this).find(".more").slideUp(150);
  });

  $("#product-list").on("click", ".fav", function(e) {
    e.stopPropagation();
    $(this).closest(".product").toggleClass("selected");
  });

  $(".product").each(function() {
    const disc = parseInt($(this).find(".badge").data("discount"), 10);
    if (disc > 0) $(this).find(".badge").addClass("discount").text(disc + "% off");
  });

  $("#product-list").on("click", ".product", function() {
    const stock = $(this).data("stock");
    if (stock === 0) alert($(this).data("name") + " is out of stock!");
  });
});
