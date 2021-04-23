
var lushu;
function addLuShu() {

  var  drv = new BMap.DrivingRoute("北京",{

    onSearchComplete:function (res) {
      if(drv.getStatus() == BMAP_STATUS_SUCCESS){
        var plan = res.getPlan(0);
        var arrPois = [];
        for(var j=0;j<plan.getNumRoutes();j++){
          var route = plan.getRoute(j);
          arrPois = arrPois.concat(route.getPath());
        }
        map.addOverlay(new BMap.Polyline(arrPois,{strokeColor:'#111'}));
        map.setViewport(arrPois);

        lushu = new BMapLib.LuShu(map,arrPois,{
          defaultContent:"",
          autoViewport:true,
          icon:new BMap.Icon('../img/start.png',new BMap.Size(52,26),{anchor:new BMap.Size(27,13)}),
          speed: 4500,
          enableRotation:true,
          landmarkPois:[
            {lng:116.314782,lat:39.913508,html:'加油站',pauseTime:2},
            {lng:116.315391,lat:39.964429,html:'高速公路收费<div><img src="//map.baidu.com/img/logo-map.gif"/></div>',pauseTime:3},
            {lng:116.381476,lat:39.974073,html:'肯德基早餐',pauseTime:2}
          ]});

        lushu.start();
      }
    }
  });

  var start=new BMap.Point(116.404844,39.911836);
  var end=new BMap.Point(116.308102,40.056057);
  drv.search(start,end);


  // lushu.stop();
  // lushu.pause();
  // lushu.hideInfoWindow();
  // lushu.showInfoWindow():
}


