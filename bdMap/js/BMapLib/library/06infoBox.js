
/**
 * 添加简单信息框
 */
function addSimpleInfo(point,content){
  var opts = {
    width:250,
    height:100,
    title:"<div class='title' style='color: #4FA5FC'><strong>信息窗口</strong></div>"
  };
  var infoWindow = new BMap.InfoWindow(content,opts);
  map.openInfoWindow(infoWindow,point);
  //
  // marker.addEventListener("onclick",function (e) {
  //   infoWindow.open(marker);
  // });
}

/**
 * 添加复杂信息框，使用InfoBox时，html中的链接可以打开，而使用Overlay时，链接不可以。
 * 应该Overlay虽然有链接，但应该整个作为一个marker来处理，不能对其内部进行操作。
 * @param marker
 */
function addMarkerInfo(marker){

  var html = ["<div class='infoBoxContent'><div class='title'><strong>中海雅园</strong><span class='price'>均价43000</span></div>",
    "<div class='list'><ul><li><div class='left'><img src='/bdMap/img/house3.jpg'/></div><div class='left'><a target='_blank' href='http://map.baidu.com'>中海雅园南北通透四居室</a><p>4室2厅，205.00平米，3层</p></div><div class='rmb'>760万</div></li>"
    ,"<li><div class='left'><img src='/bdMap/img/house1.jpg'/></div><div class='left'><a target='_blank' href='http://map.baidu.com'>中海雅园四居室还带保姆间</a><p>2室1厅，112.00平米，16层</p></div><div class='rmb'>300万</div></li>"
    ,"<li><div class='left'><img src='/bdMap/img/house2.jpg'/></div><div class='left'><a target='_blank' href='http://map.baidu.com'>《有钥匙 随时看》花园水系</a><p>3室2厅，241.00平米，16层</p></div><div class='rmb'>400万</div></li>"
    ,"<li><div class='left'><img src='/bdMap/img/house3.jpg'/></div><div class='left'><a target='_blank' href='http://map.baidu.com'>富力城D区正规楼王大三居</a><p>3室3厅，241.00平米，17层</p></div><div class='rmb'>600万</div></li>"
    ,"<li class='last'><div class='left'><img src='/bdMap/img/house1.jpg'/></div><div class='left'><a target='_blank' href='http://map.baidu.com'>富力城豪，身份人士的象征</a><p>4室2厅，213.90平米，25层</p></div><div class='rmb'>700万</div></li>"
    ,"</ul></div>"
    ,"</div>"];

  var infoBox = new BMapLib.InfoBox(map,html.join(""),{
    boxStyle:{
      background:"url('/bdMap/img/tipbox.gif') no-repeat center top"
      ,width: "270px"
      ,height: "300px"
    }
    ,offset: new BMap.Size(10,20)
    ,closeIconUrl:"/bdMap/img/close.png"
    ,closeIconMargin: "1px 1px 0 0"
    ,enableAutoPan: true
    ,align: INFOBOX_AT_TOP
  });

  marker.addEventListener("onclick", function(e) {
    infoBox.open(marker);
  });
}
