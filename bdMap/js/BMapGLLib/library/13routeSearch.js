/**
 *  本测试代码仅测试路线查询，并没有将查询结果进行显示，需要查看查询结果的同学，请移步
 *  http://lbsyun.baidu.com/jsdemo.htm#sCaculateDriveTime
 *  http://lbsyun.baidu.com/jsdemo.htm#uWalkNavPanel
 *  http://lbsyun.baidu.com/jsdemo.htm#tBusLngLatSearch
 */

let kk = 0;
let startPt;
let endPt;
let routeType = "none";

function changeRouteType(){

  routeType = $("#routeSelect")[0].selectedOptions[0].value;

  if(routeType == "none"){
    return;
  }

  map.removeEventListener("click");

  map.addEventListener("click",function (e) {
    var pt = e.latlng;

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

function searchRoute(){
  var routing;
  switch (routeType) {
    case "drive":
      routing = new BMapGL.DrivingRoute(map,{
        renderOptions :{
          map:map,
          autoViewport: true
        }
      });
      break;
    case "bus":
      routing = new BMapGL.BusLineSearch(map,{
        renderOptions :{
          map:map,
          autoViewport: true
        },
        intercityPolicy:BMAP_INTERCITY_POLICY_EARLY_START,

        transitTypePolicy:BMAP_TRANSIT_TYPE_POLICY_AIRPLANE

      });
      break;
    case "walk":
      routing = new BMapGL.WalkingRoute(map,{
        renderOptions :{
          map:map,
          autoViewport: true
        }
      });
      break;
    // case "ride":
    //   routing = new BMap.RidingRoute(map,{
    //     renderOptions :{
    //       map:map,
    //       autoViewport: true
    //     }
    //   });
      break;
  }

  var startIcon = new BMapGL.Icon('../img/start.png', new BMapGL.Size(60,60));

  var endIcon = new BMapGL.Icon('../img/end.png', new BMapGL.Size(48,48));

  var startMarker = new BMapGL.Marker(startPt,{icon:startIcon});

  var endMarker = new BMapGL.Marker(endPt,{icon:endIcon});


  routing.search(startPt,endPt);

  // let routeResult = routing.getResults();
  //
  // console.log(routeResult);

  routing.setPolylinesSetCallback(function (result) {
    routing.clearResults();
    map.clearOverlays();

    map.addOverlay(startMarker);
    map.addOverlay(endMarker);

    var points = [];
    result[0].getPath().map(function (item) {
      points.push(new BMapGL.Point(item.lng,item.lat));
    });
    var polyline = new BMapGL.Polyline(points,{strokeColor:"#f608f2",strokeWeight:5,strokeOpacity:0.5});
    map.addOverlay(polyline);
  });

  routing.setMarkersSetCallback(function(result){
    var startMarker = new BMapGL.Marker(result[0].marker.point,{icon:startIcon});
    map.addOverlay(startMarker);

    var endMarker = new BMapGL.Marker(result[1].marker.point,{icon:endIcon});
    map.addOverlay(endMarker);

    //routing.clearResults();
    //result[0].marker.setOffset(new BMap.Size(0,40));
    //result[0].marker.setIcon(startIcon);
    //result[1].marker.setOffset(new BMap.Size(12,45));
    //result[1].marker.setIcon(endIcon);
  });

}


