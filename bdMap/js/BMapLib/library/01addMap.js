
/**
 * 初始化地图
 **/
function initialMap() {
  map = new BMap.Map("allmap", {
    coordsType: 5,//coordsType 指定输入输出的坐标类型，3 为  gcj02坐标，5为bd011坐标，默认为5，
                  //指定完成后，API将以指定的坐标类型处理您传入的坐标
    enableBizAuthLogo: false //
  });

  map.centerAndZoom(point, 15);// 初始化地图，中心点和缩放级别
  map.enableScrollWheelZoom(true);//是否支持滚轮缩放
}
