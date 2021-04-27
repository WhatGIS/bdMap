
/**
 * 地址解析
 */
function geoCode(){
  var myGeo = new BMapGL.Geocoder();
  let address = "合肥市马鞍山路合肥工业大学"
  myGeo.getPoint(address,function (point) {
    if(point){
      map.centerAndZoom(point,16);
      map.addOverlay(new BMapGL.Marker(point));
      console.log("X:" + point.lng + ",Y:"+point.lat);
      alert(point);
    }
  });
};

/**
 * 地址逆解析
 */
function geoDecode() {
  map.addEventListener("click",function (e) {
    var pt = new BMapGL.Point(e.latlng.lng,e.latlng.lat);
    var geoc = new BMapGL.Geocoder();
    geoc.getLocation(pt,function (rs) {
      var opts = {
        title:"行政区划归属",
        width:220,
        height:92
      };

      var addComp = rs.addressComponents;
      let address = '<div>省：' + addComp.province + "</div>" +
                    '<div>市：' + addComp.city + "</div>" +
                    '<div>区：' + addComp.district + "</div>" +
                    '<div>区：' + addComp.street + "</div>"
      var infoWindow = new BMapGL.InfoWindow(address,opts);
      map.openInfoWindow(infoWindow,pt);
    })
  });
}
