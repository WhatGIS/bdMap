
function theLocation(){
  map.centerAndZoom('合肥市',11);
}

function panToMap(){
  map.removeEventListener('click');
  map.addEventListener('click',function (e) {
    let pt =new BMapGL.Point(e.latlng.lng,e.latlng.lat);
    map.panTo(pt);
  });
};



  /**
   * 浏览器定位
   */
  function geoLocation() {
    var geoLocation = new BMapGL.Geolocation();
    geoLocation.getCurrentPosition(function (r) {
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMapGL.Marker(r.point);
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
    var myCity = new BMapGL.LocalCity();
    myCity.get(myFun);
  }

  /**
   * SDK辅助定位
   */
  function sdkLocation() {
    var geoLocation = new BMapGL.Geolocation();
    geoLocation.enableSDKLocation();
    geoLocation.getCurrentPosition(function (r) {
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMapGL.Marker(r.point);
        map.addOverlay(mk);
        //map.panTo(r.point);
        console.log('您的新位置:' + r.point.lng + "," + r.point.lat);
      }
      else {
        alert('failed' + this.getStatus());
      }
    });
  }

