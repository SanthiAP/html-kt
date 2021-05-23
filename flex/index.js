$(document).ready(function() {
  $(".dropdown").select2();

  $("#flexDirection").change(function() {
    setFlexProp()
  });
  
  $("#justifyContent").change(function() {
    setFlexProp();
  });

  function setFlexProp() {
    var flexdir = $("#flexDirection").val();
    var justCont = $("#justifyContent").val();
    $(".flex-box").css("flex-direction", flexdir);
    $(".flex-box").css("justify-content", justCont);
  }

  $("#addItem").click(function() {
    var childCount = $(".flex-box").children().length;
    if(childCount > 5) {
      return;
    }
    $(".flex-box").append('<div class="box">Box'+ (childCount+1) +'</div>');
  });

  $("#removeItem").click(function() {
    var childCount = $(".flex-box").children().length;
    if(childCount == 1) {
      return;
    }

    $('.flex-box').children().last().remove();
  });
})