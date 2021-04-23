
function addMapMarker(){
  addMarkerPoint();
  addMarkerPolyline();
  addMarkerIcon();
  addMarkerPolygon();
}

function removeMapMarker(){
  map.clearOverlays();
}

/**
 * 添加点标注
 **/
function addMarkerPoint() {

  var marker = new BMap.Marker(point);
  map.addOverlay(marker);

  marker.addEventListener("click", function () {

    var htmlContent = ["<div class='infoBoxContent'><div class='title'><strong>中海雅园</strong><span class='price'>均价43000，overlay-下面的链接无法打开，而infobox可以</span></div>",
      "<div class='list'><ul><li><div class='left'><img src='/bdMap/img/house3.jpg'/></div><div class='left'><a target='_blank' href='http://map.baidu.com'>中海雅园南北通透四居室</a><p>4室2厅，205.00平米，3层</p></div><div class='rmb'>760万</div></li>"
      ,"<li><div class='left'><img src='/bdMap/img/house1.jpg'/></div><div class='left'><a target='_blank' href='http://map.baidu.com'>中海雅园四居室还带保姆间</a><p>2室1厅，112.00平米，16层</p></div><div class='rmb'>300万</div></li>"
      ,"<li><div class='left'><img src='/bdMap/img/house2.jpg'/></div><div class='left'><a target='_blank' href='http://map.baidu.com'>《有钥匙 随时看》花园水系</a><p>3室2厅，241.00平米，16层</p></div><div class='rmb'>400万</div></li>"
      ,"<li><div class='left'><img src='/bdMap/img/house3.jpg'/></div><div class='left'><a target='_blank' href='http://map.baidu.com'>富力城D区正规楼王大三居</a><p>3室3厅，241.00平米，17层</p></div><div class='rmb'>600万</div></li>"
      ,"<li class='last'><div class='left'><img src='/bdMap/img/house1.jpg'/></div><div class='left'><a target='_blank' href='http://map.baidu.com'>富力城豪，身份人士的象征</a><p>4室2厅，213.90平米，25层</p></div><div class='rmb'>700万</div></li>"
      ,"</ul></div>"
      ,"</div>"];

    var richContent = new BMapLib.RichMarker(htmlContent.join(""),point,{

      "anchor": new BMap.Size(-72,-86),
      "enableDragging":true
    });
    map.addOverlay(richContent);

  });
  marker.enableDragging();
  marker.addEventListener("dragend", function(e){
    alert("当前位置：" + e.point.lng + ", " + e.point.lat);
  });
}

/**
 *添加线标注
 **/
function addMarkerPolyline(){
  var polyline = new BMap.Polyline([
      new BMap.Point(117.2972,31.8988),
      new BMap.Point(117.2872,31.9088)
    ],
    {
      strokeColor:"blue",
      strokeWeight:6,
      strokeOpacity:0.5
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

  var circle = new BMap.Circle(point,500,{
    strokeColor:"green",
    strokeWeight:2,
    strokeOpacity:0.7
  });

  circle.addEventListener("click",function () {
    var center = circle.getBounds().getCenter();
    addSimpleInfo(center,"你点了这个圆。");
  });
  map.addOverlay(circle);

  var pEnd = new BMap.Point(117.3172,31.9188);
  var rectangle = new BMap.Polygon([
    new BMap.Point(point.lng,point.lat),
    new BMap.Point(pEnd.lng,point.lat),
    new BMap.Point(pEnd.lng,pEnd.lat),
    new BMap.Point(point.lng,pEnd.lat)
  ],{
    strokeColor:'yellow',
    strokeWeight:2,
    strokeOpacity:0.5
  });
  rectangle.addEventListener("click",function () {
    var center = rectangle.getBounds().getCenter();
    addSimpleInfo(center,"你点了这个长方形。");
  });
  map.addOverlay(rectangle);

  var polygon = new BMap.Polygon([
    new BMap.Point(117.2972,31.8988),
    new BMap.Point(117.2625,31.8635),
    new BMap.Point(117.3223,31.8534),
    new BMap.Point(117.3568,31.85863),
    new BMap.Point(117.3465,31.88641)
  ],{
    strokeColor:"red",
    strokeWeight: 3,
    strokeOpacity: 0.6
  });
  polygon.addEventListener("click",function (){
    var center = polygon.getBounds().getCenter();
    addSimpleInfo(center,"你点了个多边形。")
  })
  map.addOverlay(polygon);

  //map.addOverlay(new BMapLib.TextIconOverlay(new BMap.Point(117.2972,31.8988), 7));
  map.addOverlay(new BMapLib.TextIconOverlay(new BMap.Point(117.2625,31.8635), 15));
  map.addOverlay(new BMapLib.TextIconOverlay(new BMap.Point(117.3223,31.8534), 24));
  map.addOverlay(new BMapLib.TextIconOverlay(new BMap.Point(117.3568,31.85863), 48));
  map.addOverlay(new BMapLib.TextIconOverlay(new BMap.Point(117.3465,31.88641), 99));
}

/**
 * 添加自定义图标标注
 **/
function addMarkerIcon(){
  var myIcon = new BMap.Icon("/bdMap/img/1.gif",new BMap.Size(36,36));
  var pt =new BMap.Point(117.3172,31.9188);
  var marker = new BMap.Marker(pt,{
    icon: myIcon
  });
  marker.enableDragging();
  map.addOverlay(marker);

  var opts = {
    position: pt,
    offset: new BMap.Size(10,10)
  }
  var label = new BMap.Label("这是一个测试用的站点",opts);

  marker.addEventListener("onmouseout", function(e) {
    map.removeOverlay(label);
  });
  marker.addEventListener("onmouseover", function(e) {
    console.log("泵房站点: " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    map.addOverlay(label);
  });

  addMarkerInfo(marker);
}
