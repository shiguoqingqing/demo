//创建和初始化地图函数：
   function initMap(){
     createMap();//创建地图
     setMapEvent();//设置地图事件
     addMapControl();//向地图添加控件
     addMapOverlay();//向地图添加覆盖物
   }
   function createMap(){
     map = new BMap.Map("map1");
     map.centerAndZoom(new BMap.Point(120.492701,36.156672),17);
   }
   function setMapEvent(){
     map.enableScrollWheelZoom();
     map.enableKeyboard();
     map.enableDragging();
     map.enableDoubleClickZoom()
   }
   function addClickHandler(target,window){
     target.addEventListener("click",function(){
       target.openInfoWindow(window);
     });
   }
   function addMapOverlay(){
     var markers = [
       {content:"山东省青岛市崂山区株洲路20号 海信创智谷A座2502",title:"山东龙大美食股份有限公司（青岛）",imageOffset: {width:-23,height:-21},position:{lat:36.156876,lng:120.491803}}
     ];
     for(var index = 0; index < markers.length; index++ ){
       var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
       var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
         imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
       })});
       var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
       var opts = {
         width: 200,
         title: markers[index].title,
         enableMessage: false
       };
       var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
       marker.setLabel(label);
       addClickHandler(marker,infoWindow);
       map.addOverlay(marker);
     };
   }
   //向地图添加控件
   function addMapControl(){
     var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
     scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
     map.addControl(scaleControl);
     var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
     map.addControl(navControl);
   }
   var map;
     initMap();
