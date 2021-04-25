/**
 * 添加简单信息窗口
 */
function addSimpleInfo(){

  var point = new BMapGL.Point(116.404, 39.925);
  map.centerAndZoom(point, 15);

  var marker = new BMapGL.Marker(point);  // 创建标注
  map.addOverlay(marker);              // 将标注添加到地图中
  var opts = {
    width : 200,     // 信息窗口宽度
    height: 100,     // 信息窗口高度
    title : "故宫博物院" , // 信息窗口标题
    message:"这里是故宫"
  }
  var infoWindow = new BMapGL.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);  // 创建信息窗口对象
  marker.addEventListener("click", function(){
    map.openInfoWindow(infoWindow, point); //开启信息窗口
  });
}

/**
 * 添加复杂信息框，使用InfoBox时，html中的链接可以打开，而使用Overlay时，链接不可以。
 * 应该Overlay虽然有链接，但应该整个作为一个marker来处理，不能对其内部进行操作。
 * @param marker
 */
function addContentInfo() {

  map.centerAndZoom(new BMapGL.Point(116.404,39.915),15);

  var marker = new BMapGL.Marker(new BMapGL.Point(116.404, 39.915));
  map.addOverlay(marker);
// 创建图文信息窗口
  var sContent = "<h4 style='margin:0 0 5px 0;'>天安门</h4>" +
    "<img style='float:right;margin:0 4px 22px' id='imgDemo' src='../img/gl/tianAnMen.jpg' width='139' height='104'/>"+
    "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>"+
    "天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门..."+
    "</p></div>";
  var infoWindow = new BMapGL.InfoWindow(sContent);
// marker添加点击事件
  marker.addEventListener('click', function () {
    this.openInfoWindow(infoWindow);
    // 图片加载完毕重绘infoWindow
    document.getElementById('imgDemo').onload = function () {
      infoWindow.redraw(); // 防止在网速较慢时生成的信息框高度比图片总高度小，导致图片部分被隐藏
    };
  });
}

function getInfoContent(){
  var point = new BMapGL.Point(116.404, 39.925);
  map.centerAndZoom(point, 15);
  var opts = {
    width: 200,
    height: 100,
    title: '故宫博物院'
  };
  var infoWindow = new BMapGL.InfoWindow('地址：北京市东城区王府井大街88号乐天银泰百货八层', opts);
  map.openInfoWindow(infoWindow, point);
  function getInfoContent() {
    alert(infoWindow.getContent());
  }
  getInfoContent();
}
