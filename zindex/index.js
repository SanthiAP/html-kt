$(document).ready(function() {
  $("input[name='zind-abs-option']").change(function(){
    var val = this.value;
    if(val == "a") {
      $(".abs-elem-a").css("z-index", 1)
      $(".abs-elem-b").css("z-index", 0)
      $(".abs-elem-a").html("Element A <br>position: absolute <br> z-index: 1");
      $(".abs-elem-b").html("Element B <br>position: absolute <br> z-index: 0");
    } else {
      $(".abs-elem-a").css("z-index", 0)
      $(".abs-elem-b").css("z-index", 1)
      $(".abs-elem-a").html("Element A <br>position: absolute <br> z-index: 0");
      $(".abs-elem-b").html("Element B <br>position: absolute <br> z-index: 1");
    }
  });
});