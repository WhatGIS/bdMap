/**
 * 镂空面绘制
 */
function getBoundary() {
  map.centerAndZoom(new BMapGL.Point(116.718, 40.142), 11);
  map.enableScrollWheelZoom(true);

  var bd = new BMapGL.Boundary();
  bd.get('北京市', function (rs) {
    // console.log('外轮廓：', rs.boundaries[0]);
    // console.log('内镂空：', rs.boundaries[1]);
    var hole = new BMapGL.Polygon(rs.boundaries, {
      fillColor: 'blue',
      fillOpacity: 0.2
    });
    map.addOverlay(hole);
  });
}

/**
 * 线圆面可编辑
 */
var polygon;
var polyline;
var circle;

function openEdit(){
  polyline.enableEditing();
  polygon.enableEditing();
  circle.enableEditing();
}

function closeEdit(){
  polyline.disableEditing();
  polygon.disableEditing();
  circle.disableEditing();
}

function editPolygon() {
  var point = new BMapGL.Point(116.404, 39.915);
  map.centerAndZoom(point, 15);
  map.enableScrollWheelZoom(true);

  // 绘制面
  polygon = new BMapGL.Polygon([
    new BMapGL.Point(116.387112, 39.920977),
    new BMapGL.Point(116.385243, 39.913063),
    new BMapGL.Point(116.394226, 39.917988),
    new BMapGL.Point(116.401772, 39.921364),
    new BMapGL.Point(116.41248, 39.927893)
  ], {
    strokeColor: 'blue',
    strokeWeight: 2,
    strokeOpacity: 0.5
  });
  map.addOverlay(polygon);
// 绘制线
  polyline = new BMapGL.Polyline([
    new BMapGL.Point(116.399, 39.910),
    new BMapGL.Point(116.405, 39.920),
    new BMapGL.Point(116.423493, 39.907445)
  ], {
    strokeColor: 'blue',
    strokeWeight: 2,
    strokeOpacity: 0.5
  });
  map.addOverlay(polyline);

// 绘制圆
  circle = new BMapGL.Circle(new BMapGL.Point(116.404, 39.915), 500, {
    strokeColor: 'blue',
    strokeWeight: 2,
    strokeOpacity: 0.5
  });
  map.addOverlay(circle);

  openEdit();
}

/**
 * 贝塞尔曲线
 */
function addBezierCurve(){
  var point = new BMapGL.Point(113.504, 39.925);
  map.centerAndZoom(point, 8);
  map.enableScrollWheelZoom();

  var path = [
    new BMapGL.Point(116.399,39.910),
    new BMapGL.Point(113.399,39.910),
    new BMapGL.Point(110.399,39.910)
  ];
  var cp1 = new BMapGL.Point(115.399,40.910);
  var cp2 = new BMapGL.Point(114.399,38.910);
  var cp3 = new BMapGL.Point(112.399,38.910);
  var controlPoints = [
    [
      cp1,
      cp2
    ],
    [
      cp3
    ]
  ];
  var bc = new BMapGL.BezierCurve(path, controlPoints);
  map.addOverlay(bc);
  map.addOverlay(new BMapGL.Marker(cp1));
  map.addOverlay(new BMapGL.Marker(cp2));
  map.addOverlay(new BMapGL.Marker(cp3));
}

/**
 * 棱柱
 */
function addPrism(){
  var point = new BMapGL.Point(116.404, 39.925);
  map.centerAndZoom(point, 10);
  map.setTilt(50);
  map.enableScrollWheelZoom();
  var bd = new BMapGL.Boundary();
  bd.get('北京市', function (rs) {
    var count = rs.boundaries.length; //行政区域的点有多少个
    var pointArray = [];
    for (var i = 0; i < count; i++) {
      var path = [];
      str = rs.boundaries[i].replace(' ', '');
      points = str.split(';');
      for (var j = 0; j < points.length; j++) {
        var lng = points[j].split(',')[0];
        var lat = points[j].split(',')[1];
        path.push(new BMapGL.Point(lng, lat));
      }
      var prism = new BMapGL.Prism(path, 5000, {
        topFillColor: '#5679ea',
        topFillOpacity: 0.5,
        sideFillColor: '#5679ea',
        sideFillOpacity: 0.9

      });
      map.addOverlay(prism);

      var events = ['click', 'mouseover', 'mouseout'];
      for (let i = 0; i < events.length; i++) {
        prism.addEventListener(events[i], e => {
          switch (events[i]) {
            case 'click':
              alert('北京市');
              break;
            case 'mouseover':
              e.target.setTopFillColor('#475fab');
              e.target.setTopFillOpacity(1);
              break;
            case 'mouseout':
              e.target.setTopFillColor('#5679ea');
              e.target.setTopFillOpacity(0.5);
              break;
          }
        });
      }
    }
  });
}
