var keyFrames = [
  {
    center: new BMapGL.Point(116.414,39.915),     // 定义第一个关键帧帧地图中心点
    zoom: 18,                                      // 定义第一个关键帧地图等级
    tilt: 60,                                      // 定义第一个关键帧地图倾斜角度
    heading: 0,                                    // 定义第一个关键帧地图旋转方向
    percentage: 0                                  // 定义第一个关键帧处于动画过程的百分比，取值范围0~1
  },
  {
    center: new BMapGL.Point(116.414,39.925),     // 定义第二个关键帧地图中心点
    zoom: 18,                                      // 定义第二个关键帧地图等级
    tilt: 60,                                      // 定义第二个关键帧地图倾斜角度
    heading: 30,                                  // 定义第二个关键帧地图旋转方向
    percentage: 0.2                                // 定义第二个关键帧处于动画过程的百分比，取值范围0~1
  },
  {
    center: new BMapGL.Point(116.414,39.935),     // 定义第三个关键帧地图中心点
    zoom: 18,                                      // 定义第三个关键帧地图等级
    tilt: 60,                                      // 定义第三个关键帧地图倾斜角度
    heading: 30,                                  // 定义第三个关键帧地图旋转方向
    percentage: 0.3                              // 定义第三个关键帧处于动画过程的百分比，取值范围0~1
  },{
    center: new BMapGL.Point(116.414,39.945),     // 定义第一个关键帧帧地图中心点
    zoom: 18,                                      // 定义第一个关键帧地图等级
    tilt: 60,                                      // 定义第一个关键帧地图倾斜角度
    heading: 0,                                    // 定义第一个关键帧地图旋转方向
    percentage: 0.4                                  // 定义第一个关键帧处于动画过程的百分比，取值范围0~1
  },{
    center: new BMapGL.Point(116.414,39.955),     // 定义第一个关键帧帧地图中心点
    zoom: 18,                                      // 定义第一个关键帧地图等级
    tilt: 60,                                      // 定义第一个关键帧地图倾斜角度
    heading: 30,                                    // 定义第一个关键帧地图旋转方向
    percentage: 0.5                                 // 定义第一个关键帧处于动画过程的百分比，取值范围0~1
  },
  {
    center: new BMapGL.Point(116.424,39.955),     // 定义第二个关键帧地图中心点
    zoom: 18,                                      // 定义第二个关键帧地图等级
    tilt: 60,                                      // 定义第二个关键帧地图倾斜角度
    heading: 0,                                  // 定义第二个关键帧地图旋转方向
    percentage: 0.6                               // 定义第二个关键帧处于动画过程的百分比，取值范围0~1
  },
  {
    center: new BMapGL.Point(116.434,39.955),     // 定义第三个关键帧地图中心点
    zoom: 18,                                      // 定义第三个关键帧地图等级
    tilt: 60,                                      // 定义第三个关键帧地图倾斜角度
    heading: 30,                                  // 定义第三个关键帧地图旋转方向
    percentage: 0.7                                  // 定义第三个关键帧处于动画过程的百分比，取值范围0~1
  },
  {
    center: new BMapGL.Point(116.444,39.955),     // 定义第三个关键帧地图中心点
    zoom: 18,                                      // 定义第三个关键帧地图等级
    tilt: 60,                                      // 定义第三个关键帧地图倾斜角度
    heading: 0,                                  // 定义第三个关键帧地图旋转方向
    percentage: 0.8                                  // 定义第三个关键帧处于动画过程的百分比，取值范围0~1
  },
  {
    center: new BMapGL.Point(116.454,39.955),     // 定义第三个关键帧地图中心点
    zoom: 18,                                      // 定义第三个关键帧地图等级
    tilt: 60,                                      // 定义第三个关键帧地图倾斜角度
    heading: 30,                                  // 定义第三个关键帧地图旋转方向
    percentage: 0.9                                  // 定义第三个关键帧处于动画过程的百分比，取值范围0~1
  },
  {
    center: new BMapGL.Point(116.464,39.955),     // 定义第三个关键帧地图中心点
    zoom: 18,                                      // 定义第三个关键帧地图等级
    tilt: 60,                                      // 定义第三个关键帧地图倾斜角度
    heading: 30,                                  // 定义第三个关键帧地图旋转方向
    percentage: 1                                  // 定义第三个关键帧处于动画过程的百分比，取值范围0~1
  }
] ;

function addMapAnimations() {
  map.centerAndZoom(new BMapGL.Point(116.414, 39.915), 17);    // 初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true);                             // 开启鼠标滚轮缩放
  map.setTilt(20);                              // 设置地图初始倾斜角度


  var opts = {
    duration: 10000,     // 设置每次迭代动画持续时间
    delay: 3000,         // 设置动画延迟开始时间
    interation: 2        // 设置动画迭代次数
  };

  var animation = new BMapGL.ViewAnimation(keyFrames, opts);        // 初始化动画实例
  animation.addEventListener('animationstart', function(e) {        // 监听动画开始事件
    console.log('start');
  });
  animation.addEventListener('animationiterations', function(e) {   // 监听动画迭代事件
    console.log('onanimationiterations');
  });
  animation.addEventListener('animationend', function(e) {        // 监听动画结束事件
    console.log('end');
  });
  animation.addEventListener('animationcancel', function(e) {       // 监听动画中途被终止事件
    console.log('cancel');
  });

  map.startViewAnimation(animation);         // 开始播放动画

  //map.cancelViewAnimation(animation);         // 强制停止动画
}

var paths = keyFrames.length;

/**
 * 飞线地图中心点
 **/
function setMapFly() {
  var i = 0;
  function resetMkPoint(i) {
    map.flyTo(keyFrames[i].center);

    if(i< paths){
      setTimeout(function () {
        i++;
        resetMkPoint(i);
      },1000);
    }
  }
  setTimeout(function () {
    resetMkPoint(5);
  },100)
}

/**
 * 移动地图中心点
 **/
function setMapPan() {
  var i = 0;
  function resetMkPoint(i) {
    map.panTo(keyFrames[i].center);
    if(i< paths){
      setTimeout(function () {
        i++;
        resetMkPoint(i);
      },1000);
    }
  }
  setTimeout(function () {
    resetMkPoint(5);
  },100)
}
