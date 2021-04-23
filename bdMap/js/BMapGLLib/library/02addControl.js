
/**
 *  添加地图控件
 **/
function addMapControls() {


  //添加地图导航控件
  map.addControl(new BMap.NavigationControl());

  //添加地图比例尺控件

  /**
   * 比例尺工具与版本标识工具所用同一个class，anchorBL, 所以，当采用CSS方式 display:none 去掉左下角
   * 的百度标识和版权标识时，缩放比例工具也会被隐藏。
   **/

  map.addControl(new BMap.ScaleControl());

  /**
   * 添加鹰眼图
   */
  map.addControl(new BMap.OverviewMapControl());

  /**
   * 此种方法添加为三种类型，地图/卫星/三维，其中切换至三维时无法显示地图，也无官方文档所说的切换城市
   * 不建议采用此种方法
   */
  // map.addControl(new BMap.MapTypeControl());
  // map.setCurrentCity("合肥");

  //添加地图控件, 矢量图和卫星图。 矢量图为卫星地图+矢量标注
  map.addControl(new BMap.MapTypeControl({
    mapTypes: [
      BMAP_NORMAL_MAP, //矢量图
      //BMAP_SATELLITE_MAP,//卫星图， 此选项不起作用
      BMAP_HYBRID_MAP //混合图， 卫星+矢量图中的街道和标注
    ]
  }));

  /**
   * 添加交通流量图
   */

  addTrafficControl();
}

