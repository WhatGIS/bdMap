
function addMapMarker(){
  addMarkerPoint();
  addMarkerIcon();
  addMarkerPolyline();
  addMarkerPolygon();
  addHeightMarker();
}

function addPumpStations (data) {

  keyFrames = [];
  let ki = 0;

  data.map(function(item) {

    let coordinate = [];

    curPos = curPrecentage[ki];

    coordinate = CoordTransferd.gcj02_bd09ll(item.x, item.y);

    if (item.type === "泵站") {
      console.log('blue' + item.name + 'X:' + coordinate[0] + coordinate[1]);
      setRichMarker('blue', item.name, coordinate[0], coordinate[1]);
    } else {
      console.log('orange' + item.name + 'X:' + coordinate[0] + coordinate[1]);
      setRichMarker('orange', item.name, coordinate[0], coordinate[1]);
    }

    var keyFrame = {
      center: new BMapGL.Point(coordinate[0],coordinate[1]),     // 定义第一个关键帧帧地图中心点
      zoom: 18,                                      // 定义第一个关键帧地图等级
      tilt: 60,                                      // 定义第一个关键帧地图倾斜角度
      heading: 0,                                    // 定义第一个关键帧地图旋转方向
      percentage: curPos
    }
    keyFrames.push(keyFrame);

    ki ++;

  });

  //startAnimation()

  //panToArrays();
}

function removeOverlay(){
  map.clearOverlays();
}

/**
 * 添加点标注
 **/
function addMarkerPoint() {

  var point = new BMapGL.Point(116.404,39.915);
  var marker = new BMapGL.Marker(point);
  map.addOverlay(marker);

  marker.enableDragging();
  var opts = {
    width: 200,
    height: 100,
    title:'故宫博物院'
  };
  var infoWindow = new BMapGL.InfoWindow('地址：北京市东城区王府井大姐88号乐天银泰百货八层。',opts);

  marker.addEventListener("click", function(){
    map.openInfoWindow(infoWindow,point);
  });
}

/**
 * 添加自定义图标标注
 **/
function addMarkerIcon(){

  var point = new BMapGL.Point(116.331,39.923);
  map.centerAndZoom(point,15);
  var myIcon = new BMapGL.Icon("../img/1.gif",new BMapGL.Size(36,36),{
    anchor: new BMapGL.Size(10,25),
    imageOffset: new BMapGL.Size(0,0,-25)
  });
  var marker = new BMapGL.Marker(point,{
    icon:myIcon,
    enableDragging: true
  });
  map.addOverlay(marker);

  marker.addEventListener('click',function () {
    alert("您点击了这个标注");
  });

  //自定义文本，同时添加了 marker 的鼠标移入和移出事件
  var opts = {
    position: point,
    offset: new BMapGL.Size(10,10)
  }
  var label = new BMapGL.Label("这是一个测试用的站点",opts);
  // 自定义文本标注样式
  label.setStyle({
    color: '#c6a597',
    borderRadius: '5px',
    borderColor: 'rgba(238,228,228,1)',
    backgroundColor:'rgba(73,64,64,0.72)',
    padding: '10px',
    fontSize: '16px',
    height: '30px',
    lineHeight: '30px',
    fontFamily: '微软雅黑'
  });

  marker.addEventListener("onmouseout", function(e) {
    map.removeOverlay(label);
  });
  marker.addEventListener("onmouseover", function(e) {
    console.log("泵房站点: " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    map.addOverlay(label);
  });
}

/**
 *添加线标注
 **/
function addMarkerPolyline(){
  var polyline = new BMapGL.Polyline([
    new BMapGL.Point(116.399, 39.910),
    new BMapGL.Point(116.405, 39.920),
    new BMapGL.Point(116.425, 39.900)
  ], {
    strokeColor: 'blue',
    strokeWeight: 2,
    strokeOpacity: 0.5
  });
  map.addOverlay(polyline);

  polyline.addEventListener("click",function () {
    var linePaths = polyline.getPath();
    var centerx = (linePaths[0].lng + linePaths[linePaths.length -1].lng)/2;
    var centery = (linePaths[0].lat + linePaths[linePaths.length -1].lat)/2;
    var center = new BMap.Point(centerx,centery)
    addSimpleInfo(center,"你点了这条线。")
  })
}

/**
 * 添加自定义标注
 */
function addMarkerPolygon(){

  var point = new BMapGL.Point(116.331,39.923);
  var circle = new BMapGL.Circle(point, 500, {
    strokeColor: 'blue',
    strokeWeight: 2,
    strokeOpacity: 0.5
  });

  circle.addEventListener("click",function () {
    var center = circle.getBounds().getCenter();
    //addSimpleInfo(center,"你点了这个圆。");
  });
  map.addOverlay(circle);

  var pStart = new BMapGL.Point(116.392214, 39.918985);
  var pEnd = new BMapGL.Point(116.41478, 39.911901);
  var rectangle = new BMapGL.Polygon([
    new BMapGL.Point(pStart.lng, pStart.lat),
    new BMapGL.Point(pEnd.lng, pStart.lat),
    new BMapGL.Point(pEnd.lng, pEnd.lat),
    new BMapGL.Point(pStart.lng, pEnd.lat)
  ], {
    strokeColor: 'blue',
    strokeWeight: 2,
    strokeOpacity: 0.5
  });
  map.addOverlay(rectangle);

  var polygon = new BMapGL.Polygon([
    new BMapGL.Point(116.387112, 39.920977),
    new BMapGL.Point(116.385243, 39.913063),
    new BMapGL.Point(116.394226, 39.917988),
    new BMapGL.Point(116.401772, 39.921364),
    new BMapGL.Point(116.41248, 39.927893)
  ], {
    strokeColor: 'blue',
    strokeWeight: 2,
    strokeOpacity: 0.5
  });
  polygon.addEventListener("click",function (){
    var center = polygon.getBounds().getCenter();
    //addSimpleInfo(center,"你点了个多边形。")
  })
  map.addOverlay(polygon);


// 批量绑定事件
  var clickEvts = ['click', 'dblclick', 'rightclick'];
  var moveEvts = ['mouseover', 'mouseout'];
  var overlays = [polyline, polygon, circle];

  for (let i = 0; i < clickEvts.length; i++) {
    const event = clickEvts[i];
    for (let j = 0; j < overlays.length; j++) {
      const overlay = overlays[j];
      overlay.addEventListener(event, e => {
        switch (event) {
          case 'click':
            var res = overlay.toString() +  '被单击!';
            break;
          case 'dbclick':
            var res = overlay.toString() + '被双击!';
            break;
          case 'rightclick':
            var res = overlay.toString() + '被右击!';
        }
        alert(res);
      });
    }
  }
  for (let i = 0; i < moveEvts.length; i++) {
    const event = moveEvts[i];
    for (let j = 1; j < overlays.length; j++) {
      const overlay = overlays[j];
      overlay.addEventListener(event, e => {
        switch (event) {
          case 'mouseover':
            overlay.setFillColor('#6f6cd8')
            break;
          case 'mouseout':
            overlay.setFillColor('#fff');
            break;
        }
      });
    }
  }
}

/**
 * 带高度的点纹理贴图
 */
function addHeightMarker() {

  var point = new BMapGL.Point(116.443, 39.935);
  map.centerAndZoom(point, 13);

  var citys = [{
    name: '北京大学',
    img: '../img/gl/beida.png'
  }, {
    name: '清华大学',
    img: '../img/gl/qinghua.png'
  }, {
    name: '中央财经大学',
    img: '../img/gl/zhongcai.png'
  }, {
    name: '北京交通大学',
    img: '../img/gl/beijiao.png'
  }, {
    name: '北京工业大学',
    img: '../img/gl/beigong.png'
  }, {
    name: '北京邮电大学',
    img: '../img/gl/beiyou.png'
  }, {
    name: '北京理工大学',
    img: '../img/gl/beili.png'
  }, {
    name: '北京航空航天大学',
    img: '../img/gl/beihang.png'
  }, {
    name: '中国传媒大学',
    img: '../img/gl/zhongchuan.png'
  }];

  var cityGeo = new BMapGL.Geocoder();
  for (let i = 0; i < citys.length; i++) {
    cityGeo.getPoint(citys[i].name, function (point) { // 地址解析获取对应经纬度
      var pt = new BMapGL.Point(point.lng, point.lat);
      var icon = new BMapGL.Icon(citys[i].img, new BMapGL.Size(40, 40));
      var marker = new BMapGL.Marker3D(pt, Math.round(Math.random()) * 6000, {
        size: 80,
        icon: icon
      });
      map.addOverlay(marker);
    });
  }
}
