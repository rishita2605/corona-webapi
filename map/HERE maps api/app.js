var platform = new H.service.Platform({
    'apikey': '7f1S17sXDV1fKfKFWCrzSpcAlPVvFKabeaRp-jP0xSE'
});

var defaultLayers = platform.createDefaultLayers();

      var map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
          zoom: 10,
          center: { lng: -123.1, lat:49.25   }
        });

let citymap = [
    
    { lat: 41.878, lng: -87.629 },
    { lat: 40.714, lng: -74.005 },
    { lat: 49.25, lng: -123.1 },
    { lat: 34.052, lng: -118.243 }
 
];


   
  function addCircleToMap(map,cor){
  map.addObject(new H.map.Circle(
    cor,
    100000,
  ));
}



for (var i in citymap) {

    addCircleToMap(map,citymap[i]);
}
var mapEvents = new H.mapevents.MapEvents(map);


map.addEventListener('tap', function(evt) {

    console.log(evt.type, evt.currentPointer.type);
});

var behavior = new H.mapevents.Behavior(mapEvents);
var ui = H.ui.UI.createDefault(map, defaultLayers);
