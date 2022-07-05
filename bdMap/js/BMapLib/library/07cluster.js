
var markerCluster = null;

var i = 1;

var defaultStyles;

var myStyles = [{
  url: '/bdMap/img/cluster/m1.png',
  size: new BMap.Size(53, 52),
  //opt_anchor: [16, 0],
  textColor: '#f5f1f6',
  opt_textSize: 10
}, {
  url: '/bdMap/img/cluster/m2.png',
  size: new BMap.Size(56, 55),
  //opt_anchor: [40, 35],
  textColor: '#ebecf1',
  opt_textSize: 12
}, {
  url: '/bdMap/img/cluster/m3.png',
  size: new BMap.Size(78, 77),
  //opt_anchor: [32, 0],
  textColor: '#e5e6ec',
  opt_textSize: 14
}];

/**
 * 点的聚合
 */
function setCluster(){

  var MAX = 100 * 1;
  var markers = [];
  var pt = null;
  var i=0;
  for(;i < MAX; i++){
    pt = new BMap.Point(Math.random() * 40 + 85, Math.random() * 30 + 21);
    markers.push(new BMap.Marker(pt));
  }

  if(markerCluster){
    markerCluster.addMarkers(markers);
  } else {
    markerCluster = new BMapLib.MarkerClusterer(map,{markers:markers}); //请记住是 MarkerClusterer
  }

  if(!defaultStyles)
  {
    defaultStyles = markerCluster.getStyles();
  }
}

var styleType =0;
function changStyles(){
  if(styleType == 0){
    markerCluster.setStyles(myStyles);
    styleType = 1;
  } else if(styleType == 1){
    markerCluster.setStyles(defaultStyles);
    styleType = 0;
  }
}

/**
 * 取消点聚合
 */
function withoutCluster(){
  if(markerCluster)
    markerCluster.clearMarkers();

  var MAX = 100;
  var pt = null;
  var i=0;
  for(;i < MAX; i++){
    pt = new BMap.Point(Math.random() * 40 + 85, Math.random() * 30 + 21);
    var marker = new BMap.Marker(pt);
    map.addOverlay(marker);
  }
}

