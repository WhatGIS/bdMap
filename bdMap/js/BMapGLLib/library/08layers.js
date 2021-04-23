
function addTrafficControl(){
  var ctrl = new BMapLib.TrafficControl({
    showPanel: false //是否显示路况提示面板
  });

  ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);
  map.addControl(ctrl);
}

var trafficLayer = null;//交通流量图层
var trafficType = 0 ;
/**
 * 添加交通流量图层
 */
function showTrafficLayer(){

  if(trafficType == 0){
    addTrafficeLayer();
    trafficType = 1;
  } else {
    removeTrafficLayer();
    trafficType = 0 ;
  }
}

function addTrafficeLayer(){
  trafficLayer = new BMap.TrafficLayer();
  map.addTileLayer(trafficLayer);
}

function removeTrafficLayer(){
  if(trafficLayer){
    map.removeTileLayer(trafficLayer);
  }
}

// 添加地图绘制功能
var overlays = [];
var overlaycomplete = function(e){
  overlays.push(e.overlay);
}

function clearAll(){
  for(var i=0;i< overlays.length;i++){
    map.removeOverlay(overlay);
  }
  overlays.length =0;
}

function addDrawManager(){
  var styleOptions = {
    storkColor:"red",
    fillColor:"red",
    strokeWeight:3,
    strokeOpacity:0.7,
    fillOpacity: 0.6,
    strokeStyle:'solid'
  }

  var drawingManager = new BMapLib.DrawingManager(map,{
    _isOpen:false,
    enableDrawingTool:true,
    drawingToolOptions:{
      anchor: BMAP_ANCHOR_TOP_RIGHT,
      offset: new BMap.Size(5,5)
    },
    circleOptions:styleOptions,
    polylineOptions:styleOptions,
    polygonOptions: styleOptions,
    rectangleOptions: styleOptions
  });
  drawingManager.addEventListener('overlaycomplete',overlaycomplete);

}

// 添加Canvas2D覆盖物
var canvasLayer = null;

function addCanvasLayer(){

  /**
   * 如果已存在，则删除，否则添加多个后，无法通过 removeCanvasLayer 函数删除，
   **/
  if(canvasLayer){
    removeCanvasLayer();
    canvasLayer = null;
  }

  canvasLayer = new BMap.CanvasLayer({
    update:update
  });

  function update(){
    var ctx = this.canvas.getContext("2d");
    if(!ctx){
      return;
    }

    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
    var temp = {};
    ctx.fillStyle = "rgba(50,50,255,0.7)";
    ctx.beginPath();
    var data = [
      new BMap.Point(117.3223,31.8534),
      new BMap.Point(117.3568,31.85863),
      new BMap.Point(117.3465,31.88641)
    ];
    for(var i=0,len = data.length; i<len;i++) {
      var pixel = map.pointToPixel(data[i]);
      ctx.fillRect(pixel.x,pixel.y,30,30);
    }
  }
  map.addOverlay(canvasLayer);
}

//移除canvasLayer
function removeCanvasLayer(){
  if(canvasLayer){
    map.removeOverlay(canvasLayer);
  }
}
