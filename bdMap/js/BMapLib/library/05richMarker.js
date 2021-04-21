
var myRm;
var myRichMarker1;
var myRichMarker2;

/**
 * 添加富标注
 */
function addRichMarker(){

  addNormalRich();
  addBestRich();

  /**
   * 添加图片富标注
   **/
  function addNormalRich(){

    var htmlContent = "<div style='background:#E7F0F5;color:#0082CB;border:1px solid #333;width:300px;'>"
      +     "欢迎光临舜禹水务！"
      +     "<img src='http://shunyuwater.com/data/img/logo12.png' height='100px' width='300px' border='0' />"
      + "</div>";

    myRm = new BMapLib.RichMarker(htmlContent,point,{
      "anchor": new BMap.Size(-72,-86),
      "enableDragging":true});
    map.addOverlay(myRm);

    myRm.addEventListener("onmousedown", function(e) {
      console.log("MouseDown : " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    });
    myRm.addEventListener("onclick", function(e) {
      console.log("Click | ");
    });
    myRm.addEventListener("onmouseup", function(e) {
      console.log("MouseUp : " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    });
    myRm.addEventListener("onmouseout", function(e) {
      console.log("MouseOut : " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    });
    myRm.addEventListener("onmouseover", function(e) {
      console.log("MouseOver : " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    });
    myRm.addEventListener("ondragstart", function(e) {
      console.log("DragStart | ");
    });
    myRm.addEventListener("ondragging", function(e) {
      console.log("Dragging : " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    });
    myRm.addEventListener("ondragend", function(e) {
      console.log("DragEnd : " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y + " | ");
    });
    myRm.addEventListener("onremove", function(e) {
      console.log("remove |");
    });

    myRm.addEventListener("ondblclick", function(e) {
      console.log("RM dblclick |");
    });

    myRm.addEventListener("onclick", function(e) {
      console.log("RM click |");

    });
    myRm.addEventListener("ontouchend", function(e) {
      console.log("touchend |");
    });

    myRm.addEventListener("click", function(e) {
      alert("你可以拖着我移动哦。❥(^_-)")
    });
  }

  /**
   * 添加复杂富标注
   **/
  function addBestRich(){

    var htm1 = "<div id='overLay' style='width:93px;height:116px;background:url(/bdMap/img/back.png) left top no-repeat; position: absolute;'>"
      +      "<img style='margin-left:9px;margin-top: 8px;' src='/bdMap/img/small.jpg' />"
      + "</div>";

    myRichMarker1 = new BMapLib.RichMarker(htm1,  new BMap.Point(117.2972, 31.9188),{
      "anchor" : new BMap.Size(-47, -116),
      "enableDragging" : true});
    map.addOverlay(myRichMarker1);
    myRichMarker1.addEventListener("click", function(e) {
      alert("你可以拖着我移动哦。❥(^_-)")
    });

    var html2 = '<div style="position: absolute; margin: 0pt; padding: 0pt; width: 80px; height: 26px; left: -10px; top: -35px; overflow: hidden;">'
      +     '<img id="rm3_image" style="border:none;left:0px; top:0px; position:absolute;" src="/bdMap/img/back1.png">'
      + '</div>'
      + '<label class=" BMapLabel" unselectable="on" style="position: absolute; -moz-user-select: none; display: inline; cursor: inherit; border: 0px none; padding: 2px 1px 1px; white-space: nowrap; font: 12px arial,simsun; z-index: 80; color: rgb(255, 102, 0); left: 15px; top: -35px;">$ 20 B</label>';

    myRichMarker2 = new BMapLib.RichMarker(html2,  new BMap.Point(117.2872, 31.9088),{
      "anchor" : new BMap.Size(-18, -27),
      "enableDragging" : true});
    map.addOverlay(myRichMarker2);

    myRichMarker2.addEventListener("click", function(e) {
      alert("你可以拖着我移动哦。❥(^_-)")
    });

    myRichMarker2.addEventListener("onmouseover", function(e) {
      document.getElementById("rm3_image").src = "/bdMap/img/back2.png";
    });
    myRichMarker2.addEventListener("onmouseout", function(e) {
      document.getElementById("rm3_image").src = "/bdMap/img/back1.png";
    });
  }
}

/**
 * 删除富标注
 */
function removeRichMarker(){
  if(myRm)
    map.removeOverlay(myRm);

  if(myRichMarker1){
    map.removeOverlay(myRichMarker1);
  }

  if(myRichMarker2){
    map.removeOverlay(myRichMarker2);
  }
};

