
function addBigData() {

  if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
    var points = [];  // 添加海量点数据
    for (var i = 0; i < bigdata.data.length; i++) {
      points.push(new BMap.Point(bigdata.data[i][0], bigdata.data[i][1]));
    }
    var options = {
      size: BMAP_POINT_SIZE_SMALL,
      shape: BMAP_POINT_SHAPE_STAR,
      color: '#d340c3'
    }
    var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
    pointCollection.addEventListener('click', function (e) {
      alert('单击点的坐标为：' + e.point.lng + ',' + e.point.lat);  // 监听点击事件
    });
    map.addOverlay(pointCollection);  // 添加Overlay
    map.setZoom(13);
  } else {
    alert('请在chrome、safari、IE8+以上浏览器查看本示例');
  }
}
