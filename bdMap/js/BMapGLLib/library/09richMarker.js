  /**
   * 添加图片富标注
   **/
  function addRichMarker(){

    map.centerAndZoom(new BMapGL.Point(116.401952,40.032704),12);

    var htm1 =
      "<div id='overLay' style='width:93px;height:116px; background:url(//bj.bcebos.com/v1/mapopen/github/BMapGLLib/RichMarker/examples/images/back.png) left top no-repeat;position: absolute;'>" +
      "<img style='margin-left:9px;margin-top: 8px;' src='//bj.bcebos.com/v1/mapopen/github/BMapGLLib/RichMarker/examples/images/small.jpg' />" +
      "</div>",
      myRichMarker1 = new BMapGLLib.RichMarker(htm1, new BMapGL.Point(116.30816, 40.056863), {
        "anchor": new BMapGL.Size(-47, -116),
        "enableDragging": true
      });
    map.addOverlay(myRichMarker1);

    var html2 =
      '<div style="position: absolute; margin: 0pt; padding: 0pt; width: 80px; height: 26px; left: -10px; top: -35px; overflow: hidden;">' +
      '<img id="rm3_image" style="border:none;left:0px; top:0px; position:absolute;" src="http://bj.bcebos.com/v1/mapopen/github/BMapGLLib/RichMarker/examples/images/back1.png">' +
      '</div>' +
      '<label class=" BMapLabel" unselectable="on" style="position: absolute; -moz-user-select: none; display: inline; cursor: inherit; border: 0px none; padding: 2px 1px 1px; white-space: nowrap; font: 12px arial,simsun; z-index: 80; color: rgb(255, 102, 0); left: 15px; top: -35px;">$ 20 B</label>',
      myRichMarker2 = new BMapGLLib.RichMarker(html2, new BMapGL.Point(116.402922, 39.99908), {
        "anchor": new BMapGL.Size(-18, -27),
        "enableDragging": true
      });
    map.addOverlay(myRichMarker2);

    myRichMarker2.addEventListener("onmouseover", function (e) {
      document.getElementById("rm3_image").src = "//bj.bcebos.com/v1/mapopen/github/BMapGLLib/RichMarker/examples/images/back2.png";
    });
    myRichMarker2.addEventListener("onmouseout", function (e) {
      document.getElementById("rm3_image").src = "//bj.bcebos.com/v1/mapopen/github/BMapGLLib/RichMarker/examples/images/back1.png";
    });

    // myRm.addEventListener("onmousedown", function(e) {
    //   console.log("MouseDown : " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    // });
    // myRm.addEventListener("onclick", function(e) {
    //   console.log("Click | ");
    // });
    // myRm.addEventListener("onmouseup", function(e) {
    //   console.log("MouseUp : " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    // });
    // myRm.addEventListener("onmouseout", function(e) {
    //   console.log("MouseOut : " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    // });
    // myRm.addEventListener("onmouseover", function(e) {
    //   console.log("MouseOver : " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    // });
    // myRm.addEventListener("ondragstart", function(e) {
    //   console.log("DragStart | ");
    // });
    // myRm.addEventListener("ondragging", function(e) {
    //   console.log("Dragging : " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    // });
    // myRm.addEventListener("ondragend", function(e) {
    //   console.log("DragEnd : " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    // });
    // myRm.addEventListener("onremove", function(e) {
    //   console.log("remove |");
    // });
    //
    // myRm.addEventListener("ondblclick", function(e) {
    //   console.log("RM dblclick |");
    // });
    //
    // myRm.addEventListener("onclick", function(e) {
    //   console.log("RM click |");
    //
    // });
    // myRm.addEventListener("ontouchend", function(e) {
    //   console.log("touchend |");
    // });
    //
    // myRm.addEventListener("click", function(e) {
    //   alert("你可以拖着我移动哦。❥(^_-)")
    // });
  }

  /**
   * 添加InfoBox
   **/
  function addInfoBox(){
    var poi = new BMapGL.Point(116.307852, 40.057031);
    map.centerAndZoom(poi, 19);
    
    var html = [
      "<div class='infoBoxContent'><div class='title'><strong>中海雅园</strong><span class='price'>均价43000</span></div>",
      "<div class='list'><ul><li><div class='left'><img src='../img/gl/wucaicheng.jpg'/></div><div class='left'><a target='_blank' href='//map.baidu.com'>中海雅园南北通透四居室</a><p>4室2厅，205.00平米，3层</p></div><div class='rmb'>760万</div></li>",
      "<li><div class='left'><img src='../img/gl/wucaicheng.jpg'/></div><div class='left'><a target='_blank' href='//map.baidu.com'>中海雅园四居室还带保姆间</a><p>2室1厅，112.00平米，16层</p></div><div class='rmb'>300万</div></li>",
      "<li><div class='left'><img src='../img/gl/wucaicheng.jpg'/></div><div class='left'><a target='_blank' href='//map.baidu.com'>《有钥匙 随时看》花园水系</a><p>3室2厅，241.00平米，16层</p></div><div class='rmb'>400万</div></li>",
      "<li><div class='left'><img src='../img/gl/wucaicheng.jpg'/></div><div class='left'><a target='_blank' href='//map.baidu.com'>富力城D区正规楼王大三居</a><p>3室3厅，241.00平米，17层</p></div><div class='rmb'>600万</div></li>",
      "<li class='last'><div class='left'><img src='../img/gl/wucaicheng.jpg'/></div><div class='left'><a target='_blank' href='//map.baidu.com'>富力城豪，身份人士的象征</a><p>4室2厅，213.90平米，25层</p></div><div class='rmb'>700万</div></li>",
      "</ul></div>", "</div>"
    ];

    var infoBox = new BMapGLLib.InfoBox(map, html.join(""), {
      boxStyle: {
        background: "#6cb2fa",
        width: "270px",
        height: "300px"
      },
      closeIconMargin: "1px 1px 0 0",
      closeIconUrl: '//mapopen.bj.bcebos.com/github/BMapGLLib/InfoBox/examples/images/close.png',
      enableAutoPan: true,
      align: INFOBOX_AT_BOTTOM,
      offset: new BMapGL.Size(15, -150)
    });
    var marker = new BMapGL.Marker(poi);
     // map.addOverlay(marker);
    infoBox.open(marker);
    marker.enableDragging();
    // $("close").onclick = function () {
    //   infoBox.close();
    // }
    // $("open").onclick = function () {
    //   infoBox.open(marker);
    // }
    // $("show").onclick = function () {
    //   infoBox.show();
    // }
    // $("hide").onclick = function () {
    //   infoBox.hide();
    // }
    // $("enableAutoPan").onclick = function () {
    //   infoBox.enableAutoPan();
    // }
    // $("disableAutoPan").onclick = function () {
    //   infoBox.disableAutoPan();
    // }

    function $(id) {
      return document.getElementById(id);
    }
  }


