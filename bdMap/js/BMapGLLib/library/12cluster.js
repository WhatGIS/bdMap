var data = [];

var citys = [
  '北京',
  '天津',
  '上海',
  '重庆',
  '石家庄',
  '太原',
  '呼和浩特',
  '哈尔滨',
  '长春',
  '沈阳',
  '济南',
  '南京',
  '合肥',
  '杭州',
  '南昌',
  '福州',
  '郑州',
  '武汉',
  '长沙',
  '广州',
  '南宁',
  '西安',
  '银川',
  '兰州',
  '西宁',
  '乌鲁木齐',
  '成都',
  '贵阳',
  '昆明',
  '拉萨',
  '海口'
];

var randomCount = 100000;

function addClusters(){

  map.centerAndZoom(new BMapGL.Point(109.792816,27.702774),5);
  // 构造数据
  while (randomCount--) {
    var cityCenter = mapv.utilCityCenter.getCenterByCityName(
      citys[parseInt(Math.random() * citys.length, 10)]
    );
    data.push({
      geometry: {
        type: 'Point',
        coordinates: [cityCenter.lng - 2 + Math.random() * 4, cityCenter.lat - 2 + Math.random() * 4]
      },
      properties: {
        icon: [
          '../img/marker.png',
          '../img/icon-accident.png',
          '../img/icon-location.png',
          '../img/icon-airplane.png'
        ][randomCount % 4],
        width: randomCount % 2 === 0 ? 100 / 4 : 30,
        height: randomCount % 2 === 0 ? 153 / 4 : 30
      }
    });
  }

  var view = new mapvgl.View({
    map: map
  });

  var clusterLayer = new mapvgl.ClusterLayer({
    minSize: 30, // 聚合点显示的最小直径
    maxSize: 50, // 聚合点显示的最大直径
    clusterRadius: 150, // 聚合范围半径
    gradient: {0: 'blue', 0.5: 'green', 1.0: 'red'}, // 聚合点颜色梯度
    maxZoom: 15, // 聚合的最大级别，当地图放大级别高于此值将不再聚合
    minZoom: 5, // 聚合的最小级别，当地图放大级别低于此值将不再聚合
    // 是否显示文字
    showText: true,
    // 开始聚合的最少点数，点数多于此值才会被聚合
    minPoints: 5,
    // 设置文字样式
    textOptions: {
      fontSize: 12,
      color: 'white',
      // 格式化数字显示
      format: function (count) {
        return count >= 10000 ? Math.round(count / 1000) + 'k'
          : count >= 1000 ? Math.round(count / 100) / 10 + 'k' : count;
      }
    },
    // 设置非聚合的点的icon
    // iconOptions: {
    //     width: 100 / 4,
    //     height: 153 / 4,
    //     icon: 'images/marker.png',
    // },
    enablePicked: true,
    onClick(e) {
      if (e.dataItem) {
        // 可通过dataItem下面的children属性拿到被聚合的所有点
        console.log(e.dataItem);
      }
    }
  });

  view.addLayer(clusterLayer);
  clusterLayer.setData(data);
}
