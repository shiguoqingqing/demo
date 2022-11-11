function initMap(){
     createMap();//创建地图
     setMapEvent();//设置地图事件
     addMapControl();//向地图添加控件
     addMapOverlay();//向地图添加覆盖物
   }
   //创建地图
   function createMap(){
   	 //在百度地图容器中创建一个地图
     map = new BMap.Map("map");
     // 定义一个中心点坐标  设定地图的中心点和坐标并将地图显示在地图容器中
     map.centerAndZoom(new BMap.Point(120.777064,36.976915),15);
   }
   //设置地图事件
   function setMapEvent(){
     map.enableScrollWheelZoom();//启用地图滚轮放大缩小
     map.enableKeyboard();//启用键盘上下左右键移动地图
     map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
     map.enableDoubleClickZoom()//启用鼠标双击放大，默认启用(可不写)
   }
   function addClickHandler(target,window){
     target.addEventListener("click",function(){
       target.openInfoWindow(window);
     });
   }
   function addMapOverlay(){
     var markers = [
       {content:"山东省莱阳市龙门东路99号",title:"山东龙大美食股份有限公司（烟台）",imageOffset: {width:-46,height:-21},position:{lat:36.977261,lng:120.776849}}
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
	    //向地图中添加比例尺控件
     var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
     scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
     map.addControl(scaleControl);
	  //向地图中添加缩放控件
     var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
     map.addControl(navControl);
   }
   var map;
     initMap();