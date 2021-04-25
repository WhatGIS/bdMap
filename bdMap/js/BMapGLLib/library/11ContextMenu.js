var menu = new BMapGL.ContextMenu();

function addMapContextMenu(){
  map.centerAndZoom(new BMapGL.Point(116.403694, 39.927552), 12);
  var txtMenuItem = [
    {
      text: '放大一级',
      callback: function () {
        map.zoomIn();
      }
    }, {
      text: '缩小一级',
      callback: function () {
        map.zoomOut();
      }
    }
  ];
  for (var i = 0; i < txtMenuItem.length; i++) {
    menu.addItem(new BMapGL.MenuItem(txtMenuItem[i].text, txtMenuItem[i].callback, 100));
  }
  map.addContextMenu(menu);
}

function removeMapContextMenu() {
  map.removeContextMenu(menu);
}
