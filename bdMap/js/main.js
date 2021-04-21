var map;
var point = new BMap.Point(117.2972, 31.8988);

function G(id){
  return document.getElementById(id);
}


/**
 * 加载地图事件
 **/
function setMap(){
  initialMap();
  addMapControls();
  addDrawManager();
}
