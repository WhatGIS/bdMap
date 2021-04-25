
function showInfo(e){
  alert('点击位置经纬度:' + e.latlng.lng + ',' + e.latlng.lat);
};


/**
 * 地图点击事件
 */
function addMapClick() {
  map.addEventListener("click",showInfo);
}

// 移除地图点击事件
function removeMapClick() {
  map.removeEventListener('click', showInfo);
}

/**
 * 添加地图事件
 */
function addMapLoaded() {

  /**
   * 地图所有图块都加载完成时触发此事件
   */
  map.addEventListener("tilesloaded",function () {
    alert('地图加载完成！');
  });





  // map.addEventListener("dblclick",function () {
  //   console.log("dblclick event.");
  //   map.removeEventListener("dblclick");
  // });
  //
  // /**
  //  * 右键单击事件
  //  */
  // map.addEventListener("rightclick",function () {
  //   console.log("rightclick");
  // });
  //
  // /**
  //  * 右键双击事件
  //  */
  // map.addEventListener("rightdblclick",function () {
  //   console.log("rightdblclick");
  // });
  //
  // /**
  //  * 鼠标移动
  //  **/
  // map.addEventListener("mousemove",function () {
  //   console.log("mousemove event.");
  //   map.removeEventListener("mousemove");
  // });
  //
  // /**
  //  * 鼠标移入地图
  //  */
  // map.addEventListener("mouseover",function () {
  //   console.log("mouseover");
  // });
  //
  // /**
  //  * 鼠标移出地图
  //  */
  // map.addEventListener("mouseout",function () {
  //   console.log("mouseout");
  // });
  //
  // /**
  //  * 移动开始
  //  */
  // map.addEventListener("movestart",function () {
  //   console.log("movestart");
  // });
  //
  // /**
  //  * 移动中
  //  */
  // map.addEventListener("moving",function () {
  //   console.log("moving");
  // });
  //
  // /**
  //  * 移动结束
  //  */
  // map.addEventListener("moveend",function () {
  //   console.log("moveend");
  // });
  //
  // /**
  //  * 缩放开始事件
  //  */
  // map.addEventListener("zoomstart",function () {
  //   console.log("地图缩放开始至" + this.getZoom()+"级");
  // });
  //
  // /**
  //  * 缩放结束事件
  //  */
  // map.addEventListener("zoomend",function () {
  //   console.log("地图缩放结束至" + this.getZoom()+"级");
  // });
  //
  // /**
  //  * 添加覆盖物
  //  */
  // map.addEventListener("addoverlay",function () {
  //   console.log("addoverlay");
  // });
  //
  // /**
  //  * 删除覆盖物
  //  */
  // map.addEventListener("removeoverlay",function () {
  //   console.log("removeoverlay");
  // });
  //
  // /**
  //  * 清除覆盖物
  //  */
  // map.addEventListener("clearoverlay",function () {
  //   console.log("clearoverlay");
  // });
  //
  // /**
  //  * 添加控件
  //  */
  // map.addEventListener("addcontrol",function () {
  //   console.log("addcontrol");
  // });
  //
  // /**
  //  * 删除控件
  //  */
  // map.addEventListener("removecontrol",function () {
  //   console.log("removecontrol");
  // });
  //
  // /**
  //  * 拖拽开始
  //  */
  // map.addEventListener("dragstart",function () {
  //   console.log("dragstart");
  // });
  //
  // /**
  //  * 拖拽移动中
  //  */
  // map.addEventListener("dragging",function () {
  //   console.log("dragging");
  // });
  //
  // /**
  //  * 拖拽结束
  //  */
  // map.addEventListener("dragend",function () {
  //   console.log("dragend");
  // });
  //
  // /**
  //  * 添加自定义图层
  //  */
  // map.addEventListener("addtilelayer",function () {
  //   console.log("addtilelayer");
  // });
  //
  // /**
  //  * 删除自定义图层
  //  */
  // map.addEventListener("removetilelayer",function () {
  //   console.log("removetilelayer");
  // });
  //
  // /**
  //  * 调用Map.centerAndZoom()方法时会触发此事件。这表示位置、缩放层级已经确定，但可能还在载入地图图块
  //  */
  // map.addEventListener("load",function () {
  //   console.log("load");
  // });
  //
  // /**
  //  * 地图可视区域变化大小
  //  */
  // map.addEventListener("resize",function () {
  //   console.log("resize");
  // });




  // /**
  //  * 点击热区触发事件
  //  */
  // map.addEventListener("hotspotclick",function () {
  //   console.log("hotspotclick");
  // });
  //
  // /**
  //  * 移至热区触发事件
  //  */
  // map.addEventListener("hotspotover",function () {
  //   console.log("hotspotover");
  // });
  //
  // /**
  //  * 移出区触发事件
  //  */
  // map.addEventListener("hotspotout",function () {
  //   console.log("hotspotout");
  // });
  //
  // /**
  //  * 触摸开始时触发此事件，仅适用移动设备
  //  */
  // map.addEventListener("touchstart",function () {
  //   console.log("touchstart");
  // });
  //
  // /**
  //  * 触摸移动时触发此事件，仅适用移动设备
  //  */
  // map.addEventListener("touchmove",function () {
  //   console.log("touchmove");
  // });
  //
  // /**
  //  * 触摸结束时触发此事件，仅适用移动设备
  //  */
  // map.addEventListener("touchend",function () {
  //   console.log("touchend");
  // });
  //
  // /**
  //  * 长按事件，仅适用移动设备
  //  */
  // map.addEventListener("longpress",function () {
  //   console.log("longpress");
  // });
}
