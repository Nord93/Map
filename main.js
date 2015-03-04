
 {
// создаем карту
var map = L.map('map', {closePopupOnClick: false}).
  setView([48.7819, 44.7777], 14);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);

var loc1;//1 балон
var loc2;//2 балон
var popup = L.popup();//Окошко с инфомарцией о координатах
var pos1;//Координата 1
var pos2;//Координата 2
/* ---------- ------------ --- --------- ---------- */ }


 {
// on map click
function onClick(e) {
  // getting coordinates of click
  lat = e.latlng.lat;
  lng = e.latlng.lng;
  }
  
  // По клику вызываем функцию добавления балона
		map.on('click', function(e) {
        onMapClick(e);
		});
	
		// Функция добавления балона
function onMapClick(e) {
          if (loc1 == null) {
            loc1 = new L.marker(e.latlng, {draggable: 'true',title: 'home'});
			//---- ---- Подняли 1 маркер ---- ----
            loc1.on('dragstart', function(event) { /*Посмотреть почему требуется пробел для loc.on*/ });
			popup.setLatLng(e.latlng) // "Устанавливаем" координаты 1 маркера
			pos1=e.latlng.toString();
			loc1.bindPopup("Starting point:" + pos1);
            map.addLayer(loc1);
			//---- ---- Опустили 1 маркер ---- ----
			loc1.on('dragend', function(event) {
			var loc1 = event.target;  
			var pos1 = loc1.getLatLng();  // меняем значение координаты на новое
			loc1.bindPopup("Starting point:" + pos1);
			
			});
		}
		else if (loc2 == null) {
            loc2 = new L.marker(e.latlng, {draggable: 'true',title: 'job'});
			//---- ---- ---------------- ---- ---- 
            loc2.on('dragstart', function(event) { /*?*/ });
			popup.setLatLng(e.latlng) // "Устанавливаем" координаты 2 маркера
			pos2=e.latlng.toString();
			loc2.bindPopup("Ending point:" + pos2);
            map.addLayer(loc2);
			//---- ---- ---------------- ---- ---- 
			loc2.on('dragend', function(event) {
			var loc2 = event.target;  
			var pos2 = loc2.getLatLng();  // меняем значение координаты на новое
			loc2.bindPopup("Ending point:" + pos2);
			
			});
        }
  }

//Проверка на наличии точек на карте
	 function test() {if (loc2==undefined)
    { alert("Вы не указали пункт отправления и/или пункт назначения\nПросто щёлкните по карте два раза\nПопробуйте, это легко!")}
	 else alert("\nПункт отправления:" + pos1 +"\nПункт назначения:" + pos2 + "\nВаши данные успешно сохранены.\n\nНажмите ОК для перезагрузки страницы.")}
			
  }
  
