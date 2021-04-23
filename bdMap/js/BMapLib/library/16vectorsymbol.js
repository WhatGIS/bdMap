var vectorWARNING;
var vectorPlane;
var vectorFCArrow;
var vectorBCArrow;
var vectorFOArrow;
var vectorBOArrow;
var vectorStar;
var vectorCLOCK;
var vectorMarker;
var vectorPeoplePath;

function addVectorSymbol() {
  var point = new BMap.Point(116.473008,39.916605);
  map.centerAndZoom(point, 16);
  map.enableScrollWheelZoom(true);

//设置marker图标为人字形
  vectorPeoplePath = new BMap.Marker(point, {
    // 设置自定义path路径25325l99
    icon: new BMap.Symbol('m0.5,48.67105l106.55963,0m-53.03642,45.73853l52.06349,51.09042m-52.06349,-51.57716l-48.65731,51.57716m48.41391,-112.39955l0,60.82238m16.17517,-77.24814c0,8.93415 -7.24208,16.17461 -16.17517,16.17461c-8.93307,0 -16.17464,-7.24046 -16.17464,-16.17461c0,-8.93309 7.24156,-16.1747 16.17464,-16.1747c8.93309,0 16.17517,7.24161 16.17517,16.1747z', {
      rotation: 0,//顺时针旋转40度
      fillColor: 'green',
      fillOpacity: 0.8,
      strokeColor: '#555',
      strokeWeight: 3//线宽
    })
  });

  vectorFCArrow = new BMap.Marker(new BMap.Point(point.lng-0.01,point.lat), {
    // 初始化方向向上的闭合箭头
    icon: new BMap.Symbol(BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW, {
      scale: 5,
      strokeWeight: 1,
      rotation: 0,//顺时针旋转30度
      fillColor: 'red',
      fillOpacity: 0.8
    })
  });

  vectorBCArrow = new BMap.Marker(new BMap.Point(point.lng+0.02 , point.lat), {
    // 初始化方向向下的闭合箭头
    icon: new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW, {
      scale: 5,
      strokeWeight: 1,
      rotation: 180,
      fillColor: 'gold',
      fillOpacity: 0.8
    })
  });

  vectorFOArrow = new BMap.Marker(new BMap.Point(point.lng +0.03, point.lat), {
    //  初始化方向向上的开放式箭头
    icon: new BMap.Symbol(BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW, {
      scale: 5,
      strokeWeight: 1,
      rotation: 0,
      fillColor: "pink",
      fillOpacity: 0.8
    })
  });

  vectorBOArrow = new BMap.Marker(new BMap.Point(point.lng+0.04,point.lat), {
    // 初始化方向向下的开放式箭头
    icon: new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
      scale: 5,
      strokeWeight: 1,
      rotation: 90,
      fillColor: 'lightgreen',
      fillOpacity: 0.8
    })
  });

//设置marker图标为水滴
  vectorMarker = new BMap.Marker(new BMap.Point(point.lng,point.lat-0.03), {
    // 指定Marker的icon属性为Symbol
    icon: new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
      scale: 2,//图标缩放大小
      fillColor: "orange",//填充颜色
      fillOpacity: 0.8//填充透明度
    })
  });

//设置marker图标为飞机
  vectorPlane = new BMap.Marker(new BMap.Point(point.lng+0.04,point.lat-0.03), {
    // 初始化小飞机Symbol
    icon: new BMap.Symbol(BMap_Symbol_SHAPE_PLANE, {
      scale: 3,
      rotation: 0
    })
  });


  vectorCLOCK = new BMap.Marker(new BMap.Point(point.lng+0.01,point.lat-0.03), {
    // 初始化闹钟形状的symbol
    icon: new BMap.Symbol(BMap_Symbol_SHAPE_CLOCK, {
      scale: 2,
      strokeWeight: 1,
      fillColor: 'blue',
      fillOpacity: 0.8
    })
  });

  vectorWARNING = new BMap.Marker(new BMap.Point(point.lng+0.02,point.lat-0.03), {
    // 初始化警告标志的symbol
    icon: new BMap.Symbol(BMap_Symbol_SHAPE_WARNING, {
      scale: 2,
      strokeWeight: 1,
      fillColor: 'pink',
      fillOpacity: 0.8
    })
  });

  vectorStar = new BMap.Marker(new BMap.Point(point.lng+0.03,point.lat-0.03), {
    // 初始化五角星symbol
    icon: new BMap.Symbol(BMap_Symbol_SHAPE_STAR, {
      scale: 5,
      fillColor: "pink",
      fillOpacity: 0.8
    })
  });
  map.addOverlay(vectorWARNING);
  map.addOverlay(vectorPlane);
  map.addOverlay(vectorFCArrow);
  map.addOverlay(vectorBCArrow);
  map.addOverlay(vectorFOArrow);
  map.addOverlay(vectorBOArrow);
  map.addOverlay(vectorStar);
  map.addOverlay(vectorMarker);
  map.addOverlay(vectorCLOCK);
  map.addOverlay(vectorPeoplePath);
  map.setViewport({center:new BMap.Point(116.501035,39.897538),zoom:14})

  show();
}

function hideVectorSymbol() {
  hide();
}

function show(){
  vectorWARNING.show();
  vectorPlane.show();
  vectorFCArrow.show();
  vectorBCArrow.show();
  vectorFOArrow.show();
  vectorBOArrow.show();
  vectorStar.show();
  vectorCLOCK.show();
  vectorMarker.show();
  vectorPeoplePath.show();
}

function hide(){
  vectorWARNING.hide();
  vectorPlane.hide();
  vectorFCArrow.hide();
  vectorBCArrow.hide();
  vectorFOArrow.hide();
  vectorBOArrow.hide();
  vectorStar.hide();
  vectorCLOCK.hide();
  vectorMarker.hide();
  vectorPeoplePath.hide();
}
