
/**
 * 地址解析
 */
function geoCode(){
  var myGeo = new BMap.Geocoder();
  let address = "合肥市马鞍山路合肥工业大学"
  myGeo.getPoint(address,function (point) {
    if(point){
      map.centerAndZoom(point,16);
      map.addOverlay(new BMap.Marker(point));
      console.log("X:" + point.lng + ",Y:"+point.lat);
      alert(point);
    }
  });
  geoDecode();
};

/**
 * 地址逆解析
 */
function geoDecode() {
  var geoc = new BMap.Geocoder();
  map.addEventListener("click",function (e) {
    var pt = e.point;
    geoc.getLocation(pt,function (rs) {
      var addComp = rs.addressComponents;
      let address = addComp.province + "," + addComp.city + "," + addComp.district + "," + addComp.street + "," + addComp.streetNumber;
      alert(address);
    })
  });
}
