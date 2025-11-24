$(function() {
  $("#faqs").on("click", ".question", function() {
    $(this).next(".answer").slideToggle(150);
  });

  $("#faqs").on("mouseenter", ".question", function() {
    $(this).css("color", "#007bff");
  }).on("mouseleave", ".question", function() {
    $(this).css("color", "");
  });

  $("#faqs").on("dblclick", ".question", function() {
    $(".answer").slideUp(150);
  });

  $("#collapse-all").on("click", function() {
    $(".answer").slideUp(150);
  });

  $("#faqs").on("focus", ".answer-input", function() {
    $(this).closest(".question").addClass("focused");
  });

  $("#faqs").on("blur", ".answer-input", function() {
    $(this).closest(".question").removeClass("focused");
  });
});
