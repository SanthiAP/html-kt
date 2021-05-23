$(document).ready(function() {
  var map;
  var queryResults;
  require(["esri/map",
  "esri/layers/FeatureLayer",
  "esri/tasks/query",
  "esri/tasks/QueryTask",
  "esri/symbols/SimpleFillSymbol",
  "esri/symbols/SimpleLineSymbol", 
  "esri/Color",
  "esri/graphic",
  "esri/dijit/HomeButton"
], 
  function(Map,
    FeatureLayer,
    Query,
    QueryTask, 
    SimpleFillSymbol,
    SimpleLineSymbol, 
    Color,
    Graphic,
    HomeButton) { 

    $("#state").select2();
    var sfs = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
      new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
      new Color([255,0,0]), 2),new Color([255,255,0,0.25])
    );
    var url = "https://services3.arcgis.com/GMZ4IYywBPIILrLA/arcgis/rest/services/India_States/FeatureServer/0";

    map = new Map("map", {
      basemap: "gray",
      center: [78.9629, 20.5937],
      zoom: 4,
      showAttribution: false,
      logo: false
    });

    var homeButton = new HomeButton({
      theme: "HomeButton",
      map: map
    }, "home");
    homeButton.startup();

    var statesLayer = new FeatureLayer(url, {
      id: "states"
    });
    map.addLayer(statesLayer);

    var query = new Query();
    query.where = "1=1";
    query.outFields = ["st_nm"];
    query.returnGeometry = true;
    var queryTask = new QueryTask(url);
    queryTask.execute(query, querySuccess, queryFailure); 

    function querySuccess(resp) {
      queryResults = [];
      $("#state").empty();
      resp.features.forEach(element => {
        var attr = element.attributes;
        queryResults.push({
          "name": attr.st_nm,
          "geometry": element.geometry
        });
        $("#state").append('<option value="'+ attr.st_nm +'">'+ attr.st_nm +'</option>');
      });
      $('#state').val(null).trigger('change');
    }

    function queryFailure(err) {
      console.log(err);
    }

    $("#state").change(function() {
      map.graphics.clear();
      var selectedState = $("#state").val();
      var matchingVals = queryResults.filter(function(item) {
        return item.name == selectedState;
      })
      map.graphics.add(new Graphic(matchingVals[0].geometry, sfs));
      map.setExtent(matchingVals[0].geometry.getExtent(), true);
    })
  });
})