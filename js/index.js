$(document).ready(function () {
  document.onkeydown = function (e) {
    switch (e.which) {
      case 37: // left
        showPreviousSlide()
        break;

      case 38: // up
        showNextSlide()
        break;

      case 39: // right
        showNextSlide()
        break;

      case 40: // down
        showPreviousSlide();
        break;

      default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  };

  $('.next-slide').click(function() {
    showNextSlide()
  })

  $('.prev-slide').click(function() {
    showPreviousSlide();
  })

  function showNextSlide() {
    var child;
    var children = $(".overall-ppt-container").children();
    children.each(function(ind) {
      if ($(this).css("display") == "block") {
        if((ind + 1) > children.length - 1) {
          child = $('.overall-ppt-container').children().eq(0);
          return;
        }
        child = $('.overall-ppt-container').children().eq(ind+1);
      }
    });
    $(".single-slide").hide("slow");
    $(child).show("slow")
  }

  function showPreviousSlide() {
    var child;
    var children = $(".overall-ppt-container").children();
    children.each(function(ind) {
      if ($(this).css("display") == "block") {
        if((ind - 1) < 0) {
          child = $('.overall-ppt-container').children().eq(children.length - 1);
          return;
        }
        child = $('.overall-ppt-container').children().eq(ind-1);
      }
    });
    $(".single-slide").hide("slow");
    $(child).show("slow")
  }

  $("#demoApp").click(function() {
    $('<a target="_blank" href="demo/index.html"></a>')[0].click();
  });
  
  $("#bluePrintApp").click(function() {
    $('<a target="_blank" href="demo-blueprint/index.html"></a>')[0].click();
  })
  
  $("#flexApp").click(function() {
    $('<a target="_blank" href="flex/index.html"></a>')[0].click();
  })
  
  $("#positionApp").click(function() {
    $('<a target="_blank" href="positions/index.html"></a>')[0].click();
  })
  
  $("#zindApp").click(function() {
    $('<a target="_blank" href="zindex/index.html"></a>')[0].click();
  })
})