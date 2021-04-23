/**
 * 单个点沿线运动
 */
function singleTrace(){

  map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);

  var myP1 = new BMap.Point(116.380967,39.913285);
  var myP2 = new BMap.Point(116.424374,39.914668);

  var myIcon = new BMap.Icon("../img/start.png",new BMap.Size(55,70),{
    offset: new BMap.Size(0,25),
    imageOffset: new BMap.Size(0,0)
  });

  console.log(myIcon);

  // var driving2 = new BMap.DrivingRoute(map,{
  //   renderOptions:{
  //     map:map,
  //     autoViewport:true
  //   }});
  // driving2.search(myP1,myP2);

  window.run = function () {
    var  driving = new BMap.DrivingRoute(map,{
        renderOptions:{
          map:map,
          autoViewport:true
        }});
    driving.search(myP1,myP2);
    driving.setSearchCompleteCallback(function () {
      var pts = driving.getResults().getPlan(0).getRoute(0).getPath();
      var paths = pts.length;

      var carMk = new BMap.Marker(pts[0],{icon:myIcon});
      map.addOverlay(carMk);
      i = 0;
      function resetMkPoint(i) {
        carMk.setPosition(pts[i]);
        if(i< paths){
          setTimeout(function () {
            i++;
            resetMkPoint(i);
          },100);
        }
      }
      setTimeout(function () {
        resetMkPoint(5);
      },100)
    });
  }
  setTimeout(function () {
    run();
  },1500);
}

/**
 * 多点沿线运动
 */
function multiTrace() {

  map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);

  var bounds = null;
  var linePoints = null;
  var spoi1 = new BMap.Point(116.380967, 39.9135285);//
  var spoi2 = new BMap.Point(116.380967, 39.953285);//
  var epoi = new BMap.Point(116.424374, 39.914668);//

  var myIcon = new BMap.Icon("../img/start.png", new BMap.Size(55, 70), {
    offset: new BMap.Size(0, 25),
    imageOffset: new BMap.Size(0, 0)
  });

  function initLine() {
    bounds = new Array();
    linePoints = new Array();
    map.clearOverlays();
    var driving3 = new BMap.DrivingRoute(map, {onSearchComplete: drawLine});
    driving3.search(spoi1, epoi);
    var driving4 = new BMap.DrivingRoute(map, {onSearchComplete: drawLine});
    driving4.search(spoi2, epoi);
  }

  function run() {
    for (var m = 0; m < linePoints.length; m++) {
      var pts = linePoints[m];
      var len = pts.length;
      var carMk = new BMap.Marker(pts[0], {icon: myIcon});
      map.addOverlay(carMk);
      resetMkPoint(1, len, pts, carMk);
    }

    function resetMkPoint(i, len, pts, carMk) {
      carMk.setPosition(pts[i]);
      if (i < len) {
        setTimeout(function () {
          i++;
          resetMkPoint(i, len, pts, carMk);
        }, 100);
      }
    }
  }

  function drawLine(results) {
    var opacity = 0.45;
    var planObj = results.getPlan(0);
    var b = new Array();
    var addMarkerFun = function (point, imgType, index, title) {
      var url;
      var width;
      var height;
      var myIcon;

      //imgType：： 1的场合，为起点和终点的图；2的场合为车的图形
      if (imgType == 1) {
        url = "../img/start1.png";
        width = 42;
        height = 34;
        myIcon = new BMap.Icon(url, new BMap.Size(width, height), {
          offset: new BMap.Size(14, 32),
          imageOffset: new BMap.Size(0, 0 - index * height)
        });
      } else {
        url = "../img/start1.png";
        width = 22;
        height = 25;
        var d = 25;
        var cha = 0;
        var jia = 0;
        if (index == 2) {
          d = 21;
          cha = 5;
          jia = 1;
        }
        myIcon = new BMap.Icon(url, new BMap.Size(width, d), {
          offset: new BMap.Size(10, (11 + jia)),
          imageOffset: new BMap.Size(0, 0 - index * height - cha)
        });
      }

      var marker = new BMap.Marker(point, {Icon: myIcon});
      if (title != null && title != "") {
        marker.setTitle(title);
      }
      //
      if (imgType == 1) {
        marker.setTop(true);
      }
      map.addOverlay(marker);
    }
    var addPoints = function (points) {
      for (var i = 0; i < points.length; i++) {
        bounds.push(points[i]);
        b.push(points[i]);
      }
    }

    for (var i = 0; i < planObj.getNumRoutes(); i++) {
      var route = planObj.getRoute(0);
      if (route.getDistance(false) <= 0) {
        continue;
      }
      addPoints(route.getPath());

      if (route.getRouteType() == BMAP_ROUTE_TYPE_DRIVING) {
        map.addOverlay(new BMap.Polyline(route.getPath(), {
          strokeColor: "#0030ff",
          strokeOpacity: opacity,
          strokeWeight: 6,
          enableMassClear: true
        }));
      } else {
        map.addOverlay(new BMap.Polyline(route.getPath(), {
          strokeColor: "#30a208",
          strokeOpacity: 0.75,
          strokeWeight: 4,
          enableMassClear: true
        }));
      }
    }
    map.setViewport(bounds);

    addMarkerFun(results.getEnd().point, 1, 1);

    addMarkerFun(results.getStart().point, 1, 0);

    linePoints[linePoints.length] = b;
  }

  initLine();
  setTimeout(function () {
    run();
  }, 1500);

}

