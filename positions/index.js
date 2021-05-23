$(document).ready(function() {
  $(".dropdown").select2();
  $(".dropdown").val(null).trigger("change");

  $("#position").change(function() {
    setChildProps();
  });

  $("#top").change(function() {
    setChildProps();
  });

  $("#left").change(function() {
    setChildProps();
  });

  function setChildProps() {
    var pos = $("#position").val();
    var top = $("#top").val();
    var left = $("#left").val();
    if (pos == "sticky") {
      top = "100px";
      $(".duplicate-content").show();
      $(".child-container").css("position", pos);
      $(".child-container").css("top", "0px");
      $(".child-container").css("left", "0px");
      $("#top").prop("disabled", true);
      $("#left").prop("disabled", true);
    } else {
      $(".duplicate-content").hide();
      $("#top").prop("disabled", false);
      $("#left").prop("disabled", false);
      $(".child-container").css("position", pos);
      $(".child-container").css("top", top+"px");
      $(".child-container").css("left", left+"px");
    }
  }
});