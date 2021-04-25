/**
 * 地球模式
 */
function setMapEarth() {
  map.setMapType(BMAP_EARTH_MAP);
}

/**
 * 普通模式
 */
function setMapNormal() {

  map.setMapType(BMAP_NORMAL_MAP);
}

/**
 * 使用样式ID设置地图样式
 */
function setMapStyleFromId1(){
  map.setMapStyleV2({
    styleId:'3d71ab411f410625c74c5e0343a8a2be'
  });
}

/**
 * 使用样式ID设置地图样式
 */
function setMapStyleFromId(){
  map.setMapStyleV2({
    styleId:'f1d776a2b7da27c7455843c309a9fac3'
  });
}

/**
 * 使用样式Json文件设置地图样式
 */
function setMapStyleFromJson(){

  $.getJSON('/bdMap/data/custom_map_config.json',function (json){
    map.setMapStyleV2({
      styleJson:json
    });
  });
}
