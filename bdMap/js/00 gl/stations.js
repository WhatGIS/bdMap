
var keyFrames  = [];
var ci = 0;
var curPrecentage = [0.1,0.2,0.2,0.3,0.3,0.4,0.5,0.5,0.6,0.7,0.7,0.8,0.9,1.0];

const datas = [{
  type:'水厂',
  name: "通济桥水库",
  x: 119.831229,
  y: 29.44764
}, {
  type:'泵站',
  name: "西山森林公园",
  x: 119.877436,
  y: 29.459339
}, {
  type:'泵站',
  name: "小西门巷",
  x: 119.887059,
  y: 29.458359
},  {
  type:'泵站',
  name: "县中医院",
  x: 119.888099,
  y: 29.455995
}, {
  type:'泵站',
  name: "解放西路",
  x: 119.887985,
  y: 29.454277
},{
  type:'泵站',
  name: "文化广场",
  x: 119.889047,
  y: 29.451364
},{
  type:'泵站',
  name: "人民东路",
  x: 119.892529,
  y: 29.45285
},  {
  type:'泵站',
  name: "财富名都花园",
  x: 119.89157,
  y: 29.450731
}, {
  type:'泵站',
  name: "顺风饭店",
  x: 119.89453,
  y: 29.45052
}, {
  type:'泵站',
  name: "塔山公园",
  x: 119.894947,
  y: 29.452568
},{
  type:'泵站',
  name: "东山公园",
  x: 119.894603,
  y: 29.45905
}, {
  type:'水厂',
  name: "金狮湖",
  x: 119.904526,
  y: 29.45224
}, {
  type:'水厂',
  name: "水务局",
  x: 119.888606,
  y: 29.492546
}];

var styleJson = [{
  "featureType": "land",
  "elementType": "geometry",
  "stylers": {
    "color": "#242f3eff"
  }
}, {
  "featureType": "manmade",
  "elementType": "geometry",
  "stylers": {
    "color": "#242f3eff"
  }
}, {
  "featureType": "water",
  "elementType": "geometry",
  "stylers": {
    "color": "#17263cff"
  }
}, {
  "featureType": "road",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#9e7d60ff"
  }
}, {
  "featureType": "road",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#554631ff"
  }
}, {
  "featureType": "districtlabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d69563ff"
  }
}, {
  "featureType": "districtlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#17263cff",
    "weight": 3
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d69563ff"
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#17263cff",
    "weight": 3
  }
}, {
  "featureType": "subway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "railway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "poilabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "subwaylabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "subwaylabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "tertiarywaysign",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "tertiarywaysign",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "provincialwaysign",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "provincialwaysign",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "highwaysign",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "highwaysign",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "green",
  "elementType": "geometry",
  "stylers": {
    "color": "#263b3eff"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d0021bff"
  }
}, {
  "featureType": "nationalwaysign",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#ffffffff"
  }
}, {
  "featureType": "city",
  "elementType": "labels",
  "stylers": {
    "visibility": "on"
  }
}, {
  "featureType": "city",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d69563ff"
  }
}, {
  "featureType": "city",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#17263cff"
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d69563ff"
  }
}, {
  "featureType": "water",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#242f3eff"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#38414eff"
  }
}, {
  "featureType": "local",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#38414eff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#38414eff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#ffffff00"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#9e7d60ff"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#554631ff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#9e7d60ff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#554631ff"
  }
}, {
  "featureType": "tertiaryway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "fourlevelway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "highway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#9e7d60ff"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#554631ff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#9e7d60ff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#554631ff"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.fill",
  "stylers": {
    "color": "#9e7d60ff"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#554631fa"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "medicallabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "entertainmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "estatelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "businesstowerlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "companylabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "companylabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "governmentlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "restaurantlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "hotellabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "shoppinglabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "lifeservicelabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "lifeservicelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "carservicelabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "carservicelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "financelabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "financelabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "otherlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "otherlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "on"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d69563ff"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#17263cff"
  }
}, {
  "featureType": "airportlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "highway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "highway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "highway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "highway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "highway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "highway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "nationalway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "nationalway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "highway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "8,9",
    "level": "8"
  }
}, {
  "featureType": "provincialway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "8,9",
    "level": "9"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "8,9",
    "level": "8"
  }
}, {
  "featureType": "provincialway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "8,9",
    "level": "9"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "8,9",
    "level": "8"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "8,9",
    "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "6"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "7"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "8"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "9"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "6,10",
    "level": "10"
  }
}, {
  "featureType": "arterial",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "9,10",
    "level": "9"
  }
}, {
  "featureType": "arterial",
  "stylers": {
    "curZoomRegionId": "0",
    "curZoomRegion": "9,10",
    "level": "10"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "9,10",
    "level": "9"
  }
}, {
  "featureType": "arterial",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "9,10",
    "level": "10"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "9,10",
    "level": "9"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels",
  "stylers": {
    "visibility": "off",
    "curZoomRegionId": "0",
    "curZoomRegion": "9,10",
    "level": "10"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.topfill",
  "stylers": {
    "color": "#2a3341ff"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.sidefill",
  "stylers": {
    "color": "#313b4cff"
  }
}, {
  "featureType": "building",
  "elementType": "geometry.stroke",
  "stylers": {
    "color": "#1a212eff"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "road",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#759879ff"
  }
}, {
  "featureType": "provincialway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "cityhighway",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "arterial",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#1a2e1cff"
  }
}, {
  "featureType": "local",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "manmade",
  "elementType": "labels.text.fill",
  "stylers": {
    "color": "#d69563ff"
  }
}, {
  "featureType": "manmade",
  "elementType": "labels.text.stroke",
  "stylers": {
    "color": "#17263cff"
  }
}, {
  "featureType": "subwaystation",
  "elementType": "geometry",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels.icon",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "transportationlabel",
  "elementType": "labels",
  "stylers": {
    "visibility": "off"
  }
}, {
  "featureType": "estate",
  "elementType": "geometry",
  "stylers": {
    "color": "#2a3341ff"
  }
}];
