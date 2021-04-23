
function mapPanorama(){

  addPanoramaControl();
  //addPanoramaByXy();

  function addPanoramaControl(){
    map.addTileLayer(new BMap.PanoramaCoverageLayer());

    var stCtrl = new BMap.PanoramaControl(); //构造全景控件
    stCtrl.setOffset(new BMap.Size(20, 60));
    map.addControl(stCtrl);//添加全景控件
  }

  function addPanoramaByXy(){
    map.addTileLayer(new BMap.PanoramaCoverageLayer());
    var panorama = new BMap.Panorama('results');
    panorama.setPov({heading:-40,pitch:6});
    map.removeEventListener("click");
    map.addEventListener("click",function (e) {
      var pt = e.point;
      panorama.setPosition(pt);
    })
  }
};
