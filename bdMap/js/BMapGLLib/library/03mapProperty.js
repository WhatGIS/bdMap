function setNewZoom() {
  var zoom = document.getElementById('zoominput').value;
  map.setZoom(zoom);
}
function getMapZoom() {
  alert(map.getZoom());
}

function setNewCenter(){
  var lng = 116.514 + Math.floor(Math.random() * 589828) / 1e6;
  var lat = 39.416 + Math.floor(Math.random() * 514923) /1e6;
  var point = new BMMapGL.Point(lng,lat);
  map.setCenter(point);
}
function getMapCenter() {
  var cen = map.getCenter();
  alert('地图中心点:(' + cen.lng.toFixed(5) + ',' + cen.lat.toFixed(5) + ')');
}

function setMapZoom1() {
  map = new BMapGL.Map('allmap',{
    minZoom:5,
    maxZoom:20
  });
}

function setMapZoom2() {
  map.setMinZoom(4);
  map.setMaxZoom(20);
}

function set3DView(){
  map.setHeading(64.5);
  map.setTilt(73);
}

function showPoi() {
  map.setDisplayOptions({
    poi: true       //是否显示POI信息
  })
}

function hidePoi() {
  map.setDisplayOptions({
    poi: false       //是否显示POI信息
  })
}

function showText() {
  map.setDisplayOptions({
    poiText: true
  })
}
function hideText() {
  map.setDisplayOptions({
    poiText: false
  })
}
function showIcon() {
  map.setDisplayOptions({
    poiIcon: true
  })
}
function hideIcon() {
  map.setDisplayOptions({
    poiIcon: false
  })
}

/**
 * 显示覆盖物
 */

function showOverlay(){

  var pt = new BMapGL.Point(116.404,39.915);
  map.centerAndZoom(pt,15);
  var marker = new BMapGL.Marker(pt);
  map.addOverlay(marker);

  map.setDisplayOptions({
    overlay:true
  })
}

function hideOverlay() {
  map.setDisplayOptions({
    overlay:false
  })
}

function addTilelay() {
  tilelayer.zIndex = 110;
  tilelayer.getTilesUrl = function (point, level) {
    if(!point || level <0){
      return null;
    }

    var row = point.x;
    var col = point.y;
    var url = '//mapsv0.bdimg.com/tile/?udt=' + udtVersion + '&qt=tile&styles=' + tstyle
      + '&x=' + row + '&y=' + col + '&z=' + level;
    return url;
  }
  map.addTileLayer(this.tilelayer);
}

/**
 * 显示图层
 */
function showTilelay() {
  addTilelay();
  // map.setDisplayOptions({
  //   layer:true
  // })
}

function hideTilelay() {
  map.removeTileLayer(this.tilelayer);
  // map.setDisplayOptions({
  //   layer:false
  // })
}

var isTilePng = true;
var tileSize = 256;
var tstyle = 'pl';
var udtVersion = '20190102';
var tilelayer = new BMapGL.TileLayer({
  transparentPng:isTilePng
});

function show3Dbuild() {
  map.setDisplayOptions({
    building:true
  })
};

function hide3Dbuild() {
  map.setDisplayOptions({
    building:false
  })
}


function setMarkerVisible(){

  map.setDisplayOptions({
    overlay:false,
    layer:false,
    building:false
  })


}

function showRoadNet() {
  map.setMapType(BMAP_EARTH_MAP);
  map.setTilt(73);
  map.setDisplayOptions({
    street:true
  })
}

function hideRoadNet() {
  map.setDisplayOptions({
    street:false
  })
}

function setSkyColor() {
  map.setDisplayOptions({
    skyColors:['rgba(186,0,255,0)','rgba(186,0,255,0.2)']
  })
}

