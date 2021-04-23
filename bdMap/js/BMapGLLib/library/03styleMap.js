
/**
 * 使用样式ID设置地图样式
 */
function setMapStyleFromId(){
  map.setMapStyleV2({
    styleId:'29f56e7ce69278af249c1182f10533c7' //此样式为测试用，随时可能会被删除，请修改为自己的ID
  });
}

/**
 * 使用样式Json文件设置地图样式
 */
function setMapStyleFromJson() {

  $.getJSON('/bdMap/data/custom_map_config.json', function (json) {
    map.setMapStyleV2({
      styleJson: json
    });
  });
}
