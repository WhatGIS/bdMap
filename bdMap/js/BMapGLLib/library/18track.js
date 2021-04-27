function addTracker() {
  map.centerAndZoom(new BMapGL.Point(116.297611, 40.047363), 17);    // 初始化地图，设置中心点坐标和地图级别

  var path = [{
    'lng': 116.297611,
    'lat': 40.047363
  }, {
    'lng': 116.302839,
    'lat': 40.048219
  }, {
    'lng': 116.308301,
    'lat': 40.050566
  }, {
    'lng': 116.305732,
    'lat': 40.054957
  }, {
    'lng': 116.304754,
    'lat': 40.057953
  }, {
    'lng': 116.306487,
    'lat': 40.058312
  }, {
    'lng': 116.307223,
    'lat': 40.056379
  }];
  var points = [];
  for (var i = 0; i < path.length; i++) {
    points.push(new BMapGL.Point(path[i].lng, path[i].lat));
  }
  var pl = new BMapGL.Polyline(points,{
    strokeColor:'#342323',
    strokeWeight:2,
    strokeStyle:'dashed'
  });

  var trackAni = new BMapGLLib.TrackAnimation(map, pl, {
    overallView: true, // 动画完成后自动调整视野到总览
    tilt: 30,          // 轨迹播放的角度，默认为55
    duration: 20000,   // 动画持续时长，默认为10000，单位ms
    delay: 3000        // 动画开始的延迟，默认0，单位ms
  });

  trackAni.start();

  //trackAni.cancel();         // 强制停止动画

}


