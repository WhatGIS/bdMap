
function routeSearch(e) {

  let kk = 0;

  let startPt;
  let endPt;
  let routeType = "none";

  addClickEvent();

  function searchRoute(){
    var routing;
    switch (routeType) {
      case "drive":
        routing = new BMap.DrivingRoute(map,{
          renderOptions :{
            map:map,
            autoViewport: true
          }
        });
        break;
      case "bus":
        routing = new BMap.TransitRoute(map,{
          renderOptions :{
            map:map,
            autoViewport: true
          },
          intercityPolicy:BMAP_INTERCITY_POLICY_EARLY_START,

          transitTypePolicy:BMAP_TRANSIT_TYPE_POLICY_AIRPLANE

        });
        break;
      case "walk":
        routing = new BMap.WalkingRoute(map,{
          renderOptions :{
            map:map,
            autoViewport: true
          }
        });
        break;
      case "ride":
        routing = new BMap.RidingRoute(map,{
          renderOptions :{
            map:map,
            autoViewport: true
          }
        });
        break;
    }

    var startIcon = new BMap.Icon('/bdMap/img/start.png', new BMap.Size(60,60));

    var endIcon = new BMap.Icon('/bdMap/img/end.png', new BMap.Size(48,48));

    var startMarker = new BMap.Marker(startPt,{icon:startIcon});


    var endMarker = new BMap.Marker(endPt,{icon:endIcon});


    routing.search(startPt,endPt);

    let routeResult = routing.getResults();

    console.log(routeResult);

    routing.setPolylinesSetCallback(function (result) {
      routing.clearResults();
      map.clearOverlays();

      map.addOverlay(startMarker);
      map.addOverlay(endMarker);

      var points = [];
      result[0].Ar.map(function (item) {
        points.push(new BMap.Point(item.lng,item.lat));
      });
      var polyline = new BMap.Polyline(points,{strokeColor:"#ff5943",strokeWeight:5,strokeOpacity:0.5});
      map.addOverlay(polyline);
    });

    // routing.setMarkersSetCallback(function(result){
    //   var startMarker = new BMap.Marker(result[0].marker.point,{icon:startIcon});
    //   map.addOverlay(startMarker);
    //
    //   var endMarker = new BMap.Marker(result[1].marker.point,{icon:endIcon});
    //   map.addOverlay(endMarker);
    //
    //   //routing.clearResults();
    //   //result[0].marker.setOffset(new BMap.Size(0,40));
    //   //result[0].marker.setIcon(startIcon);
    //   //result[1].marker.setOffset(new BMap.Size(12,45));
    //   //result[1].marker.setIcon(endIcon);
    // });

  }

  function addClickEvent(){

    routeType = $("#routeSelect")[0].selectedOptions[0].value;

    if(routeType == "none"){
      return;
    }

    map.removeEventListener("click");

    map.addEventListener("click",function (e) {
      var pt = e.point;

      if(kk == 0) {
        startPt = pt;
        kk = 1;
      } else if(kk ==1) {
        endPt = pt;
        kk = 0;
        searchRoute();
      }
    })
  }
}
