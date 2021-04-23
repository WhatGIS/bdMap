

var ac = new BMap.Autocomplete({
  "input":"suggestId"
  ,"location":map
})

ac.addEventListener('onhighlight',function (e) {
  var str = "";
  var _value = e.fromitem.value;
  var value = "";
  if(e.fromitem.index > -1){
    value = _value.province + _value.city + _value.district + _value.street + _value.business;
  }
  str = "FromItem<br />index=" + e.fromitem.index + "<br />value=" + value;
  value = "";
  if(e.toitem.index > -1){
    _value = e.toitem.value;
    value = _value.province + _value.city + _value.district + _value.street + _value.business;
  }

  str += "<br />ToItem<br />index=" + e.toitem.index + "<br />value = " + value;
  G("searchResultPanel").innerHTML = str;

});

var myValue ;
ac.addEventListener("onconfirm",function (e){
  var _value = e.item.value;
  myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
  G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue" + myValue;
  setPlace();
});

function setPlace(){
  map.clearOverlays();
  function myFun() {
    var pp = local.getResults().getPoi(0).point;
    map.centerAndZoom(pp,18);
    map.addOverlay(new BMap.Marker(pp));
  }
  var local = new BMap.LocalSearch(map,{
    onSearchComplete:myFun
  });
  local.search(myValue);
}
