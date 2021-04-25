
let local = null; //公共变量 查询对象
let rendOpts = {
  map:map,
  autoViewport:true,
  panel:"results",
  selectFirstResult:false
};

var searchOpts = {
  renderOptions: rendOpts,
  pageCapacity:6,
  onSearchComplete:function (results) {
    if(local.getStatus() == BMAP_STATUS_SUCCESS){
      var s = [];
      for(var i=0;i<results.getCurrentNumPois();i++){
        s.push(results.getPoi(i).title + "," + results.getPoi(i).address);
      }
      console.log(s.join("<br>"));
    }
  }
};

function clearSearch(){
  if(local){
    local.clearResults();
  }
};

/**
 * POI搜索
 */
function poiSearch(){
  //clearSearch();
  local = new BMap.LocalSearch(map,searchOpts);
  local.search("公园");
};

function nearbySearch(){
  //clearSearch();
  local = new BMap.LocalSearch(map,searchOpts);
  local.searchNearby("酒店","三里庵");
};

function inBoundSearch(){
  //clearSearch();
  local = new BMap.LocalSearch(map,searchOpts);
  local.searchInBounds("银行",map.getBounds());
};
