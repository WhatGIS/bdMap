/**
 * 叠加地面图片层
 */
function addGroundOverlay(){
  map.centerAndZoom(new BMapGL.Point(117.200, 36.2437), 18);
  map.enableScrollWheelZoom(true);
  map.setTilt(45);
  map.setDisplayOptions({
    poiText: false,  // 隐藏poi标注
    poiIcon: false,  // 隐藏poi图标
    building: false  // 隐藏楼块
  });


  var pStart = new BMapGL.Point(117.19635, 36.24093);
  var pEnd = new BMapGL.Point(117.20350, 36.24764);
  var bounds = new BMapGL.Bounds(new BMapGL.Point(pStart.lng, pEnd.lat), new BMapGL.Point(pEnd.lng, pStart.lat));
  var imgOverlay = new BMapGL.GroundOverlay(bounds, {
    type: 'image',
    url: '../img/gl/shouhuimap.png',
    opacity: 1
  });
  map.addOverlay(imgOverlay);
}

/**
 * 叠加地面Canvas图层
 */
function addCanvasLayer(){

  map.centerAndZoom(new BMapGL.Point(116.450484, 39.921283), 17);
  map.enableScrollWheelZoom(true);
  map.setDisplayOptions({
    poiText: false,  // 隐藏poi标注
    poiIcon: false   // 隐藏poi图标
  });
  map.addEventListener('click', function (e) {
    alert('点击位置经纬度：' + e.latlng.lng + ',' + e.latlng.lat);
  });

// 自定义canvas
  function getTextureCanvas() {
    var textureCanvas = document.createElement('canvas');
    textureCanvas.width = textureCanvas.height = 200;
    var ctx = textureCanvas.getContext('2d');
    ctx.fillStyle = '#79a913';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 6;
    ctx.lineCap = 'square';
    ctx.fillRect(0, 0, 200, 200);
    ctx.moveTo(50, 50);
    ctx.lineTo(150, 50);
    ctx.lineTo(150, 150);
    ctx.lineTo(50, 150);
    ctx.lineTo(50, 50);
    ctx.stroke();
    return textureCanvas;
  }

// 添加canvas叠加层
  var canvasSource = getTextureCanvas();
  var pStart = new BMapGL.Point(116.447717, 39.919173);
  var pEnd = new BMapGL.Point(116.453125, 39.923475);
  var bounds = new BMapGL.Bounds(new BMapGL.Point(pStart.lng, pEnd.lat), new BMapGL.Point(pEnd.lng, pStart.lat));
  var canvasOverlay = new BMapGL.GroundOverlay(bounds, {
    type: 'canvas',
    url: canvasSource,
    opacity: 0.9
  });
  map.addOverlay(canvasOverlay);

// 添加文本标注
  var opts = {
    position: new BMapGL.Point(116.4503, 39.9213),
    offset: new BMapGL.Size(-28, -20)
  };
  var label = new BMapGL.Label('日坛公园', opts);
  label.setStyle({
    color: '#fff',
    borderRadius: '5px',
    borderColor: '#fff',
    backgroundColor: '#79a913',
    fontSize: '16px',
    height: '30px',
    lineHeight: '30px'
  });
  map.addOverlay(label);
}

/**
 * 叠加地面视频层
 */
function addVideoLayer() {
  map.centerAndZoom(new BMapGL.Point(119.308, 25.668), 4);
  map.enableScrollWheelZoom(true);

// 增加地面视频叠加层
  var pStart = new BMapGL.Point(94.582033, -7.989754);
  var pEnd = new BMapGL.Point(145.358572, 30.813867);
  var bounds = new BMapGL.Bounds(new BMapGL.Point(pStart.lng, pEnd.lat), new BMapGL.Point(pEnd.lng, pStart.lat));
  var imgOverlay = new BMapGL.GroundOverlay(bounds, {
    type: 'video',
    url: '../img/cloud.mov',
    opacity: 0.5
  });
  map.addOverlay(imgOverlay);
}

/**
 * 叠加路况，注意与 2D 的区别
 */
function addTrafficLayer(){

  map.setDisplayOptions({   //为防止隐藏图层后，交通路况图层出不来，所以先把 layer 属性设 true. 否则点击 隐藏图层 后，路况无法再次显示
    layer:true
  })
  map.setTrafficOn(); // 叠加路况图层
}

function removeTrafficLayer(){
  map.setTrafficOff(); // 关闭路况图层
}

