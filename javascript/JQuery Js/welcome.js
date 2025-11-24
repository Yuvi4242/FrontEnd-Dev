$(document).ready(function() {
  const hour = new Date().getHours();
  let part = "Hello";
  if (hour >= 5 && hour < 12) part = "Good Morning";
  else if (hour >= 12 && hour < 17) part = "Good Afternoon";
  else part = "Good Evening";

  $("#greeting").text(`${part}, Visitor!`);

  $("#change-greet").on("click", function() {
    $("#greeting").text("Keep going — small steps every day!");
    $("#sub-msg").text("Press Toggle to hide/show welcome box.");
  });

  $("#toggle-welcome").on("click", function() {
    $("#welcomeBox").toggle();
  });

  $("#greeting").on("click", function() {
    alert("Welcome clicked!");
  });

  $("#show-time").on("click", function() {
    const now = new Date().toLocaleTimeString();
    $("#sub-msg").text(`Current time: ${now}`);
  });
});
