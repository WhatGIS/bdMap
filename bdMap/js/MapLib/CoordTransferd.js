//坐标转换

var CoordTransferd = {
  PI: Math.PI,
  x_pi: Math.PI * 3000.0 / 180.0,
  delta: function(lat, lon) {
    // Krasovsky 1940
    //
    // a = 6378245.0, 1/f = 298.3
    // b = a * (1 - f)
    // ee = (a^2 - b^2) / a^2;
    var a = 6378245.0; //  a: 卫星椭球坐标投影到平面地图坐标系的投影因子。
    var ee = 0.00669342162296594323; //  ee: 椭球的偏心率。
    var dLat = this.transformLat(lon - 105.0, lat - 35.0);
    var dLon = this.transformLon(lon - 105.0, lat - 35.0);
    var radLat = lat / 180.0 * this.PI;
    var magic = Math.sin(radLat);
    magic = 1 - ee * magic * magic;
    var sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / ((a * (1 - ee)) / (magic * sqrtMagic) * this.PI);
    dLon = (dLon * 180.0) / (a / sqrtMagic * Math.cos(radLat) * this.PI);
    return {
      'lat': dLat,
      'lon': dLon
    };
  },

  //WGS-84 to GCJ-02
  wgs84_gcj02: function(wgsLon, wgsLat) {
    if (this.outOfChina(wgsLat, wgsLon))
      return [wgsLon, wgsLat];

    var d = this.delta(wgsLat, wgsLon);
    return [wgsLon + d.lon, wgsLat + d.lat];
  },
  //GCJ-02 to WGS-84
  gcj02_wgs84: function(gcjLon, gcjLat) {
    if (this.outOfChina(gcjLat, gcjLon))
      return [gcjLon, gcjLat];

    var d = this.delta(gcjLat, gcjLon);
    return [gcjLon - d.lon, gcjLat - d.lat];
  },
  //GCJ-02 to WGS-84 exactly
  gcj02_wgs84_precise: function(gcjLon, gcjLat) {
    var initDelta = 0.01;
    var threshold = 0.000000001;
    var dLat = initDelta,
      dLon = initDelta;
    var mLat = gcjLat - dLat,
      mLon = gcjLon - dLon;
    var pLat = gcjLat + dLat,
      pLon = gcjLon + dLon;
    var wgsLat, wgsLon, i = 0;
    while (1) {
      wgsLat = (mLat + pLat) / 2;
      wgsLon = (mLon + pLon) / 2;
      var tmp = this.gcj_encrypt(wgsLat, wgsLon)
      dLat = tmp.lat - gcjLat;
      dLon = tmp.lon - gcjLon;
      if ((Math.abs(dLat) < threshold) && (Math.abs(dLon) < threshold))
        break;

      if (dLat > 0) pLat = wgsLat;
      else mLat = wgsLat;
      if (dLon > 0) pLon = wgsLon;
      else mLon = wgsLon;

      if (++i > 10000) break;
    }
    return [wgsLon, wgsLat];
  },
  //GCJ-02 to BD-09
  gcj02_bd09ll: function(gcjLon, gcjLat) {
    var x = gcjLon,
      y = gcjLat;
    var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * this.x_pi);
    var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * this.x_pi);
    var bdLon = z * Math.cos(theta) + 0.0065;
    var bdLat = z * Math.sin(theta) + 0.006;
    return [bdLon, bdLat];
  },
  //BD-09 to GCJ-02
  bd09ll_gcj02: function(bdLon, bdLat) {
    var x = bdLon - 0.0065,
      y = bdLat - 0.006;
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * this.x_pi);
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * this.x_pi);
    var gcjLon = z * Math.cos(theta);
    var gcjLat = z * Math.sin(theta);
    return [gcjLon, gcjLat];
  },

  wgs84_bd09ll: function(wgsLon, wgsLat) {
    var c = this.wgs84_gcj02(wgsLon, wgsLat);
    return this.gcj02_bd09ll(c[0], c[1]);
  },

  bd09ll_wgs84: function(bdLon, bdLat) {
    var c = this.bd09ll_gcj02(bdLon, bdLat);
    return this.gcj02_wgs84(c[0], c[1]);
  },

  outOfChina: function(lat, lon) {
    if (lon < 72.004 || lon > 137.8347)
      return true;
    if (lat < 0.8293 || lat > 55.8271)
      return true;
    return false;
  },
  transformLat: function(x, y) {
    var ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(y * this.PI) + 40.0 * Math.sin(y / 3.0 * this.PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(y / 12.0 * this.PI) + 320 * Math.sin(y * this.PI / 30.0)) * 2.0 / 3.0;
    return ret;
  },
  transformLon: function(x, y) {
    var ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    ret += (20.0 * Math.sin(6.0 * x * this.PI) + 20.0 * Math.sin(2.0 * x * this.PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(x * this.PI) + 40.0 * Math.sin(x / 3.0 * this.PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(x / 12.0 * this.PI) + 300.0 * Math.sin(x / 30.0 * this.PI)) * 2.0 / 3.0;
    return ret;
  },
  //点 point : [x,y] || point = POINT (502191.096 3566974.408);
  //线 LineString ： LINESTRING (490490.6967081384 3321780.0803670767,493764.922006589 3320787.8908826974);
  //面 polygon ： POLYGON ((489397.1716044215 3322943.455610494,489397.1716044215 3325585.0608937046,494511.048498842 3325585.0608937046,494511.048498842 3322943.455610494,489397.1716044215 3322943.455610494));
  //转换类型 transfType ： true（投影坐标==> 大地坐标）/false（大地坐标==>投影坐标）;
  //项目名称 project ： 特定项目转换;
  lmProjectCommonCoordTransf: function(coord, transfType, project) {

    transfType = transfType ? true : false;
    //[x,y]
    if (Array.isArray(coord) && coord.length === 2) {

      return this.lmCoordTransf(coord[0], coord[1], transfType, project);
    }
    coord = coord.toLowerCase();
    //point (x y)
    if (coord.indexOf("point") != -1) {
      let point = " point (";
      coord = coord.replace("point", "").replace("(", "").replace(")", "");
      let coordArr = [];
      if (coord.indexOf(",") != -1) {
        coordArr = coord.split(",");
        coordArr = this.lmCoordTransf(coordArr[0], coordArr[1], transfType, project);
        return " POINT(" + coordArr[0] + "," + coordArr[1] + ")"
      } else {
        coordArr = coord.split(" ");
        coordArr = this.lmCoordTransf(coordArr[0], coordArr[1], transfType, project);
        return " POINT(" + coordArr[0] + " " + coordArr[1] + ")"
      }
    }
    //LINESTRING(x1 y1,x2 y2...)
    if (coord.indexOf("linestring") != -1) {
      let line = " LINESTRING(";
      coord = coord.replace("linestring", "").replace("(", "").replace(")", "");
      let coordArr = coord.split(",");
      coordArr.forEach(point => {
        let coordinates = point.split(" ");
        coordinates = this.lmCoordTransf(coordinates[0], coordinates[1], transfType, project);
        line = line + coordinates[0] + " " + coordinates[1] + ",";
      });
      return line.substring(0, line.length - 1) + ") ";

    }
    //POLYGON
    if (coord.indexOf("polygon") != -1) {
      let polygon = " POLYGON((";
      coord = coord.replace("polygon", "").replace("((", "").replace("))", "");
      let coordArr = coord.split(",");

      coordArr.forEach(point => {
        let coordinates = point.split(" ");
        coordinates = this.lmCoordTransf(coordinates[0], coordinates[1], transfType, project);
        polygon = polygon + coordinates[0] + " " + coordinates[1] + ",";

      });

      return polygon.substring(0, polygon.length - 1) + "))";
    }

    return "Transf error !";
  },

  //transfType:true   投影坐标==> 大地坐标
  //transfType:false 大地坐标==>投影坐标
  lmCoordTransf: function(x_put, y_put, transfType, project) {
    x_put = Number(x_put);
    y_put = Number(y_put);
    transfType = transfType ? true : false;
    //标准坐标系转换
    if (project === "") {

      return this.lmNormalTransferd(x_put, y_put, transfType);

    }
    //特定项目坐标系转换
    else if (project === "xiaoshan") {
      return this.lmXiaoShanProjectTransferd(x_put, y_put, transfType);
    }
    else if (project === "changfeng") {
      return this.lmChangFengProjectTransferd(x_put, y_put, transfType);
    }
    else if (project === "qingtian") {
      return this.lmQingTainTransferd(x_put, y_put, transfType);
    }

    return [0, 0];

  },
  //标准坐标系转(proj4)
  lmNormalTransferd: function(x_put, y_put, transfType) {

    //WGS 84 -- WGS84 - World Geodetic System 1984, used in GPS   29.84842712  120.1059528
    proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
    //Beijing 1954 / 3-degree Gauss-Kruger CM 120E   3303368.861 510162.6914
    proj4.defs("EPSG:2437", "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs");

    if (transfType) {
      let coord = proj4(proj4('EPSG:4326'), proj4('EPSG:2437'), [x_put, y_put]);
      return coord;
    } else {
      let coord = proj4(proj4('EPSG:2437'), proj4('EPSG:4326'), [x_put, y_put]);
      return coord;
    }
  },
  //青田坐标系转(proj4)
  lmQingTainTransferd: function(x_put, y_put, transfType) {
    //WGS 84 -- WGS84 - World Geodetic System 1984, used in GPS   29.84842712  120.1059528
    proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");


    proj4.defs("EPSG:4549","+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs");


    if (transfType) {
      let coord = proj4(proj4('EPSG:4326'), proj4('EPSG:4549'), [x_put, y_put]);
      return coord;
    } else {
      let coord = proj4(proj4('EPSG:4549'), proj4('EPSG:4326'), [x_put, y_put]);
      return coord;
    }
  },
  lmChangFengProjectTransferd: function(x_put, y_put, transfType) {
    //WGS 84 -- WGS84 - World Geodetic System 1984, used in GPS   29.84842712  120.1059528
    proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
    //CGCS2000 / 3-degree Gauss-Kruger CM 117E
    proj4.defs("EPSG:4548","+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs");

    if (transfType) {
      let coord = proj4(proj4('EPSG:4326'), proj4('EPSG:4548'), [x_put, y_put]);
      return coord;
    } else {
      let coord = proj4(proj4('EPSG:4548'), proj4('EPSG:4326'), [x_put, y_put]);
      return coord;
    }
  },
  //true  wgs84坐标：杭州本地坐标系（平面）--> -- 四参数转换 --> Beijing54（平面） --> Wgs84（球面）
  //false 萧山坐标：Wgs84(球面) --> Beijing54（平面） -- 四参数转换--> 杭州本地坐标系（平面）
  lmXiaoShanProjectTransferd: function(x_put, y_put, transfType) {
    //偏移量
    let X_Offset = 12.201881344143364;
    let Y_Offset = 4.602109583903511;

    //杭州 四参数
    //旋转角度
    let d = (4.0 / 60.0) + (35.048000 / 3600);
    //平移x
    let dx = -3266736.9496;
    //平移Y
    let dy = -439821.9753;
    //比例尺
    let k = 1;
    //WGS 84 -- WGS84 - World Geodetic System 1984, used in GPS   29.84842712  120.1059528
    proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
    //Beijing 1954 / 3-degree Gauss-Kruger CM 120E   3303368.861 510162.6914
    proj4.defs("EPSG:2437", "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs");

    if (transfType) {

      //Wgs84（球面） --> Beijing54（平面）
      let Proj4coord = proj4(proj4('EPSG:4326'), proj4('EPSG:2437'), [x_put, y_put]);

      //增加统一偏移量
      let coordX = Proj4coord[0] - X_Offset;
      let coordY = Proj4coord[1] - Y_Offset;

      //Beijing54（平面）-->  杭州本地坐标系（平面）
      let TransfCoord = this.lmTransferd_4_Parameter(coordX, coordY, k, d, dx, dy);


      return [TransfCoord[0], TransfCoord[1]];

    } else {

      //杭州本地坐标系（平面）--> Beijing54（平面）
      let TransfCoord = this.lmReverseTransfer_4_Parameter(x_put, y_put, k, d, dx, dy);

      //增加统一偏移量
      let coordX = TransfCoord[0] + X_Offset;
      let coordY = TransfCoord[1] + Y_Offset;
      //Beijing54（平面）-->  Wgs84（球面）
      let Proj4coord = proj4(proj4('EPSG:2437'), proj4('EPSG:4326'), [coordX, coordY]);

      return [Proj4coord[0], Proj4coord[1]];
    }
  },

  //四参数 正算
  lmTransferd_4_Parameter: function(x_put, y_put, k, red, dx, dy) {

    let x_out = y_put * k * Math.sin(red / 180 * Math.PI) + x_put * k * Math.cos(red / 180 * Math.PI) + dy;
    let y_out = y_put * k * Math.cos(red / 180 * Math.PI) - x_put * k * Math.sin(red / 180 * Math.PI) + dx;

    return [x_out, y_out];
  },

  //四参数 反算
  lmReverseTransfer_4_Parameter: function(x_put, y_put, k, red, dx, dy) {

    let x_out = ((y_put - dx) * (-Math.sin(red / 180 * Math.PI)) + (x_put - dy) * Math.cos(red / 180 * Math.PI)) / k;
    let y_out = ((y_put - dx) * Math.cos(red / 180 * Math.PI) + (x_put - dy) * Math.sin(red / 180 * Math.PI)) / k;

    return [x_out, y_out];

  },


};


var ProjectionTransform = {
  crs: {
    'bd09ll': '+proj=longlat +datum=BD09',
    'gcj02': '+proj=longlat +datum=GCJ02',
    'wgs84': '+proj=longlat +datum=WGS84 +no_defs'
  },

  /**
   * transform geojson's coordinates
   * @param  {Object | Array} source a coordinate [x,y] or a geoJSON object to convert
   * @param  {String | CRS Object} fromCRS    crs converted from
   * @param  {String | CRS Object} toCRS      crs converted to
   * @return {Object} result geoJSON object
   */
  transform: function(source, fromCRS, toCRS) {
    if (!source) {
      return null;
    }
    if (!fromCRS || !toCRS) {
      throw new Error('must provide a valid fromCRS and toCRS.');
    }
    if (this._isCoord(source)) {
      return this._transformCoordinate(source, fromCRS, toCRS);
    } else if (this._isArray(source)) {
      var result = [];
      for (var i = 0; i < source.length; i++) {
        result.push(this.transform(source[i], fromCRS, toCRS));
      }
      return result;
    }
    return this._transformGeoJSON(source, fromCRS, toCRS);
  },

  _transformGeoJSON: function(geoJSON, fromCRS, toCRS) {
    if (geoJSON['type'] === 'Feature') {
      var geometry = this.transform(geoJSON['geometry'], fromCRS, toCRS);
      var result = this._extend({}, geoJSON);
      result['geometry'] = geometry;
      return result;
    } else if (geoJSON['type'] === 'FeatureCollection') {
      var features = geoJSON['features'];
      var result = this._extend({}, geoJSON);
      var convertedFea = [];
      for (var i = 0; i < features.length; i++) {
        convertedFea.push(this.transform(features[i], fromCRS, toCRS));
      }
      result['features'] = convertedFea;
      return result;
    } else if (geoJSON['type'] === 'GeometryCollection') {
      var geometries = geoJSON['geometries'];
      var result = this._extend({}, geoJSON);
      var convertedGeo = [];
      for (var i = 0; i < geometries.length; i++) {
        convertedGeo.push(this.transform(geometries[i], fromCRS, toCRS));
      }
      result['geometries'] = convertedGeo;
      return result;
    }
    var result = this._extend({}, geoJSON);
    var coordinates = this._transformCoordinate(geoJSON['coordinates'], fromCRS, toCRS);
    result['coordinates'] = coordinates;
    return result;
  },

  _transformCoordinate: function(coordinates, fromCRS, toCRS) {
    var f = fromCRS,
      t = toCRS;
    if (fromCRS['type'] === 'proj4') {
      f = this._toCRS(fromCRS['properties']['proj']);
    }
    if (toCRS['type'] === 'proj4') {
      t = this._toCRS(toCRS['properties']['proj']);
    }
    f = f.toLowerCase();
    t = t.toLowerCase();
    if (f === 'epsg:4326') {
      f = 'wgs84';
    }
    if (t === 'epsg:4326') {
      t = 'wgs84';
    }
    if (f === t) {
      return coordinates;
    }
    var m = f + '_' + t;
    return this._eachCoordinate(coordinates, function(c) {
      return lm_CoordTransferd[m](parseFloat(c[0]), parseFloat(c[1]));
    }, this);
  },

  _extend: function(src, dst) {
    for (var p in dst) {
      if (dst.hasOwnProperty(p)) {
        src[p] = dst[p];
      }
    }
    return src;
  },

  _toCRS: function(proj) {
    for (var p in this.crs) {
      if (proj === this.crs[p]) {
        return p;
      }
    }
    return null;
  },

  _eachCoordinate: function(coordinates, fn, context) {
    if (this._isCoord(coordinates)) {
      return fn.call(context, coordinates);
    }
    var result = [];
    for (var i = 0, len = coordinates.length; i < len; i++) {
      var p = coordinates[i];
      if (p == null) {
        continue;
      }
      if (this._isCoord(p)) {
        var pp = fn.call(context, p);
        result.push(pp);
      } else if (this._isArray(p)) {
        result.push(this._eachCoordinate(p, fn, context));
      }
    }
    return result;
  },

  _isCoord: function(coordinate) {
    if (this._isArray(coordinate) && this._isNumber(coordinate[0]) && this._isNumber(coordinate[1])) {
      return true;
    }
    return false;
  },

  _isNumber: function(val) {
    return (typeof val === 'number') && !isNaN(val);
  },

  _isArray: function(obj) {
    if (!obj) {
      return false;
    }
    return typeof obj == 'array' || (obj.constructor !== null && obj.constructor == Array);
  },

  _isString: function(_str) {
    if (_str == null) {
      return false;
    }
    return typeof _str == 'string' || (_str.constructor !== null && _str.constructor == String);
  },
};
