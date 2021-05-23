var styleMapping = {
  "logo": {
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "width": "6vw",
    "height": "100%"
  },
  "header-parent": {
    "width": "100%",
    "height": "10vh",
    "background": "#f26467",
    "display": "flex",
  },
  "heading": {
    "display": "flex",
    "justify-content": "center",
    "align-items": "center",
    "width": "calc(100% - 16vw)",
    "height": "100%",
    "color": "white"
  },
  "menus": {
    "width": "10vw",
    "height": "100%",
    "display": "flex",
    "align-items": "center",
    "justify-content": "space-evenly"
  },
  "body-parent": {
    "width": "100%",
    "height": "calc(100% - 10vh)",
    "display": "flex"
  },
  "left-pane": {
    "width": "25%",
    "height": "100%"
  },
  "right-pane": {
    "width": "75%",
    "height": "100%"
  }
}

$(document).ready(function () {
  $(document).keydown(function (event) {
    if (event.which == "17")
      cntrlIsPressed = true;
  });

  $(document).keyup(function () {
    cntrlIsPressed = false;
  });

  var cntrlIsPressed = false;

  $(".logo").click(function () {
    if (cntrlIsPressed) {
      populateStyle("header-parent", "Logo Parent");
    } else {
      populateStyle("logo", "Logo");
    }
  });

  $(".heading").click(function () {
    if (cntrlIsPressed) {
      populateStyle("header-parent", "Heading Parent");
    } else {
      populateStyle("heading", "Heading");
    }
  });

  $(".menus").click(function () {
    if (cntrlIsPressed) {
      populateStyle("header-parent", "Menu Parent");
    } else {
      populateStyle("menus", "Menu");
    }
  });

  $(".left-pane").click(function () {
    if (cntrlIsPressed) {
      populateStyle("body-parent", "Left Pane Parent");
    } else {
      populateStyle("left-pane", "Left Pane");
    }
  });

  $(".right-pane").click(function () {
    if (cntrlIsPressed) {
      populateStyle("body-parent", "Right Pane Parent");
    } else {
      populateStyle("right-pane", "Right Pane");
    }
  });

  $(".close-style-content").click(function () {
    $(".prop-container").hide("slow");
  });
  
  function populateStyle(hint, heading) {
    $(".prop-container").show("slow");
    $(".prop-container").css("display", "flex");
    $("#styleHeading").text(heading);
    var obj = styleMapping[hint];
    $(".style-body").empty();
    Object.keys(obj).forEach(function (item, ind) {
      var key = item;
      var val = obj[item];
      var settop;
      if(ind == 0)
        settop = "";
      else 
        settop = "set-top";
      var elem = `
      <div class="inner-container `+ settop +`">
        <span class="prop">`+ key + `:</span>
        <span class="val">`+ val + `</span>
      </div>`;
      $(".style-body").append(elem);
    });
  }
})