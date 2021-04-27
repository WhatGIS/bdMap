/**
 * 地图测距
 */
var myDis;

function addDistanceTool(){

  map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);      // 初始化地图,设置中心点坐标和地图级别

  myDis = new BMapGLLib.DistanceTool(map);

// 监听测距过程中的鼠标事件
  myDis.addEventListener('drawend', function(e) {
    console.log("drawend");
    console.log(e.points);
    console.log(e.overlays);
    console.log(e.distance);
  });
  myDis.addEventListener('addPoint',function (e) {
    console.log("addPoint");
    console.log(e.point);
    console.log(e.pixel);
    console.log(e.index);
    console.log(e.distance)
  });

  myDis.addEventListener("removepolyline",function (e) {
    console.log("removepolyline");
    console.log(e);
  });
}


function openMapDis(){
  addDistanceTool();
  myDis.open();
}

function closeMapDis() {
  if (myDis)
    myDis.close();
}


/**
 * 面积测量
 */

  var styleOptions = {
    strokeColor: '#5E87DB',   // 边线颜色
    fillColor: '#5E87DB',     // 填充颜色。当参数为空时，圆形没有填充颜色
    strokeWeight: 2,          // 边线宽度，以像素为单位
    strokeOpacity: 1,         // 边线透明度，取值范围0-1
    fillOpacity: 0.2          // 填充透明度，取值范围0-1
  };
  var labelOptions = {
    borderRadius: '2px',
    background: '#FFFBCC',
    border: '1px solid #E1E1E1',
    color: '#703A04',
    fontSize: '12px',
    letterSpacing: '0',
    padding: '5px'
  };

// 实例化鼠标绘制工具
  var drawingManager =null;
  function addAreaMeasure() {
    drawingManager = new BMapGLLib.DrawingManager(map, {
      enableCalculate: true,  // 绘制是否进行测距测面
      enableSorption: true,   // 是否开启边界吸附功能
      sorptiondistance: 20,   // 边界吸附距离
      enableGpc: true,        // 是否开启延边裁剪功能
      enableLimit: true,      // 是否开启超限提示
      limitOptions: {
        area: 50000000,     // 面积超限值
        distance: 30000     // 距离超限值
      },
      circleOptions: styleOptions,     // 圆的样式
      polylineOptions: styleOptions,   // 线的样式
      polygonOptions: styleOptions,    // 多边形的样式
      rectangleOptions: styleOptions,  // 矩形的样式
      labelOptions: labelOptions,      // label样式
    });
  }

function draw(e) {

    if(!drawingManager)
      addAreaMeasure();

  var arr = document.getElementsByClassName('bmap-btn');
  for(var i = 0; i<arr.length; i++) {
    arr[i].style.backgroundPositionY = '0';
  }
  e.style.backgroundPositionY = '-52px';
  switch(e.id) {
    case 'marker': {
      var drawingType = BMAP_DRAWING_MARKER;
      break;
    }
    case 'polyline': {
      var drawingType = BMAP_DRAWING_POLYLINE;
      break;
    }
    case 'rectangle': {
      var drawingType = BMAP_DRAWING_RECTANGLE;
      break;
    }
    case 'polygon': {
      var drawingType = BMAP_DRAWING_POLYGON;
      break;
    }
    case 'circle': {
      var drawingType = BMAP_DRAWING_CIRCLE;
      break;
    }
  }
  // 进行绘制
  if (drawingManager._isOpen && drawingManager.getDrawingMode() === drawingType) {
    drawingManager.close();
  } else {
    drawingManager.setDrawingMode(drawingType);
    drawingManager.open();
  }

// 绘制完成后获取相关的信息(面积等)
  drawingManager.addEventListener('overlaycomplete', function(e) {
    alert(e.calculate);
  });
}

/**
 * 绘制工具
 */
function addDrawManager() {
  var styleOptions = {
    strokeColor: '#5E87DB',   // 边线颜色
    fillColor: '#5E87DB',     // 填充颜色。当参数为空时，圆形没有填充颜色
    strokeWeight: 2,          // 边线宽度，以像素为单位
    strokeOpacity: 1,         // 边线透明度，取值范围0-1
    fillOpacity: 0.2          // 填充透明度，取值范围0-1
  };
  var labelOptions = {
    borderRadius: '2px',
    background: '#FFFBCC',
    border: '1px solid #E1E1E1',
    color: '#703A04',
    fontSize: '12px',
    letterSpacing: '0',
    padding: '5px'
  };

  // 实例化鼠标绘制工具
  var drawingManager = new BMapGLLib.DrawingManager(map, {
    // isOpen: true,        // 是否开启绘制模式
    enableCalculate: false, // 绘制是否进行测距测面
    enableSorption: true,   // 是否开启边界吸附功能
    sorptiondistance: 20,   // 边界吸附距离
    circleOptions: styleOptions,     // 圆的样式
    polylineOptions: styleOptions,   // 线的样式
    polygonOptions: styleOptions,    // 多边形的样式
    rectangleOptions: styleOptions,  // 矩形的样式
    labelOptions: labelOptions,      // label样式
  });

  function draw(e) {
    var arr = document.getElementsByClassName('bmap-btn');
    for(var i = 0; i<arr.length; i++) {
      arr[i].style.backgroundPositionY = '0';
    }
    e.style.backgroundPositionY = '-52px';
    switch(e.id) {
      case 'marker': {
        var drawingType = BMAP_DRAWING_MARKER;
        break;
      }
      case 'polyline': {
        var drawingType = BMAP_DRAWING_POLYLINE;
        break;
      }
      case 'rectangle': {
        var drawingType = BMAP_DRAWING_RECTANGLE;
        break;
      }
      case 'polygon': {
        var drawingType = BMAP_DRAWING_POLYGON;
        break;
      }
      case 'circle': {
        var drawingType = BMAP_DRAWING_CIRCLE;
        break;
      }
    }
    // 进行绘制
    if (drawingManager._isOpen && drawingManager.getDrawingMode() === drawingType) {
      drawingManager.close();
    } else {
      drawingManager.setDrawingMode(drawingType);
      drawingManager.open();
    }
  };
}
