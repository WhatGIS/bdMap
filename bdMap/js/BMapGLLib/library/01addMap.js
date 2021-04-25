
/**
 * 初始化地图
 **/
function initialMap() {
  map = new BMapGL.Map("allmap");
  addMapLoaded();
  map.centerAndZoom(point,15);// 初始化地图，中心点和缩放级别
  map.enableScrollWheelZoom(true);//支持滚轴缩放

  map.setHeading(0);//地图旋转角度
  map.setTilt(70);//倾斜角



}

/**
 * 异步加载
 */
function loadMapAsync() {
  function loadJScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//api.map.baidu.com/api?type=webgl&v=1.0&ak=您的密钥&callback=init';
    document.body.appendChild(script);
  }
  function init() {
    var map = new BMapGL.Map('container'); // 创建Map实例
    var point = new BMapGL.Point(116.404, 39.915); // 创建点坐标
    map.centerAndZoom(point, 10);
    map.enableScrollWheelZoom(); // 启用
  }
  window.onload = loadJScript();
}
