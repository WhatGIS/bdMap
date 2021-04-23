
/**
 * 地图定位
 */
function mapLocation(){

  geoLocation();
  cityLocation();
  sdkLocation();

  /**
   * 浏览器定位
   */
  function geoLocation() {
    var geoLocation = new BMap.Geolocation();
    geoLocation.getCurrentPosition(function (r) {
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        alert('您的位置:' + r.point.lng + "," + r.point.lat);
      }
      else {
        alert('failed' + this.getStatus());
      }
    });
  }

  /**
   * IP定位
   */
  function cityLocation() {
    function myFun(result) {
      var cityName = result.name;
      map.setCenter(cityName);
      alert("当前城市"+cityName);
    }
    var myCity = new BMap.LocalCity();
    myCity.get(myFun);
  }

  /**
   * SDK辅助定位
   */
  function sdkLocation() {
    var geoLocation = new BMap.Geolocation();
    geoLocation.enableSDKLocation();
    geoLocation.getCurrentPosition(function (r) {
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        //map.panTo(r.point);
        console.log('您的新位置:' + r.point.lng + "," + r.point.lat);
      }
      else {
        alert('failed' + this.getStatus());
      }
    });
  }
}
