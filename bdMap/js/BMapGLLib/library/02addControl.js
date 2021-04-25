/**
 * 添加定位控件
 * @type {BMapGL.LocationControl}
 */
function addLocationControl() {

  var locationControl = new BMapGL.LocationControl({
    anchor:BMAP_ANCHOR_TOP_RIGHT,
    offset: new BMapGL.Size(20,20)
  });
  map.addControl(locationControl);

  locationControl.addEventListener("locationSuccess",function (e) {
    var address = "";
    address += e.addressComponent.province;
    address += e.addressComponent.city;
    address += e.addressComponent.district;
    address += e.addressComponent.street;
    address += e.addressComponent.streetNumber;
    console.log("当前定位地址:"+address);
  });

  locationControl.addEventListener("locationError",function (e) {
    console.log("定位错误："+ e.message);
  });
}

/**
 * 添加自定义版权控件
 */
function addCopyRightControl() {
  var cr = new BMapGL.CopyrightControl({
    anchor: BMAP_ANCHOR_TOP_RIGHT,
    offset: new BMapGL.Size(20, 20)
  });   //设置版权控件位置
  map.addControl(cr); //添加版权控件
  var bs = map.getBounds();   //返回地图可视区域
  cr.addCopyright({
    id: 1,
    content: "<img src='../img/baidu.jpg' width='50px' height='50px'/><a href='#' style='font-size:16px;color:#000'>@安徽舜禹水务股份有限公司</a>",
    bounds: bs
  });
}

/**
 * 城市列表
 * @type {BMapGL.CityListControl}
 */
function addCityListControl() {
  var cityControl = new BMapGL.CityListControl({
    anchor: BMAP_ANCHOR_TOP_LEFT,
    offset: new BMapGL.Size(10,5)
  });
  map.addControl(cityControl);
}


/**
 *  添加地图控件
 **/
function addMapControls() {

  //添加地图导航控件
  map.addControl(new BMapGL.NavigationControl3D());

  //添加地图比例尺控件
  /**
   * 比例尺工具与版本标识工具所用同一个class，anchorBL, 所以，当采用CSS方式 display:none 去掉左下角
   * 的百度标识和版权标识时，缩放比例工具也会被隐藏。
   **/
  map.addControl(new BMapGL.ScaleControl());

  map.addControl(new BMapGL.ZoomControl());

  addCityListControl();

  addLocationControl();

}

