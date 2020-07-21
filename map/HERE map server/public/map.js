
let citymap =[] 
let citynames=[];


//STATE WISE GET
fetch('/state_wise')
.then((res)=>res.json()
.then((data)=>{
  console.log("hullo");
  console.log(data);

})
.catch((err)=>console.log(err)));

//MAP RENDER GET
fetch('/map')
.then((res)=> res.json()
.then((data)=>{
  citymap=data;
      
  //MAP RENDERING 
    function addCircleToMap(map,i){
    map.addObject(new H.map.Circle(
      
      {lng:citymap[i].lng, lat:citymap[i].lat},
      (citymap[i].cases),
        {
          style: {
              strokeColor: 'rgba(253, 90, 111, 1)', // Color of the perimeter
              lineWidth: 1,
              fillColor: 'rgba(253, 90, 111, 0.5)'  // Color of the circle
                }
              }
            ));
          }

   for(var i=0;i<=255;i++){
    addCircleToMap(map,i)
   }
       


}).catch((err)=>console.log(err)));


function setStyle(map){
  
  var provider = map.getBaseLayer().getProvider();
  //styling the map bg color in dark.yaml
  //https://heremaps.github.io/maps-api-for-javascript-examples/change-style-at-load/data/dark.yaml
  var style = new H.map.Style('dark.yaml',
    'https://js.api.here.com/v3/3.1/styles/omv/');
  // set the style on the existing layer
  provider.setStyle(style);
}

//MAP API KEY
var platform = new H.service.Platform(
  {
    'apikey': '7f1S17sXDV1fKfKFWCrzSpcAlPVvFKabeaRp-jP0xSE'
  });
    
var defaultLayers = platform.createDefaultLayers();
      
var map = new H.Map(
document.getElementById('mapContainer'),
defaultLayers.vector.normal.map,
  { 
    zoom: 5,
    center: { lng: 73, lat:19  }
  });

var mapEvents = new H.mapevents.MapEvents(map);
          
          
map.addEventListener('tap', function(evt) {
              
     console.log(evt.type, evt.currentPointer.type);
});
              
var behavior = new H.mapevents.Behavior(mapEvents);
var ui = H.ui.UI.createDefault(map, defaultLayers);
    
setStyle(map);
var ctx = document.getElementById('myChart').getContext('2d');

//GRAPH SERVICE
fetch('/graph')
.then((res)=> res.json()
.then((casesData) => {
  let totalCases = []
  casesData.map(city => totalCases = totalCases.concat(city.cases));
  //console.log(totalCases); 

  let countries= []
  casesData.map(city => countries = countries.concat(city.country));
  //console.log(countries); 
  
  //GRAPH RENDERING
   var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: countries,
        datasets: [{
            label: 'Active Cases',
            barPercentage: 1,
            barThickness: 6,
            data: totalCases,
            backgroundColor: [
                'rgba(255, 99, 132, 2)',
                'rgba(54, 162, 235, 2)',
                'rgba(255, 206, 86, 2)',
                'rgba(75, 192, 192, 2)',
                'rgba(153, 102, 255, 2)',
                'rgba(255, 206, 86, 2)',
                'rgba(75, 192, 192, 2)',
                'rgba(255, 206, 86, 2)',
                'rgba(75, 192, 192, 2)',
                'rgba(255, 206, 86, 2)',
                'rgba(75, 192, 192, 2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 0.2
        }]
    },
    options: {
      scales: {
          xAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
})}).catch((err)=>console.log(err)));

var service = platform.getSearchService();

//SEARCH SERVICE
service.geocode({
  q: 'Bengaluru'
}, (result) => {
  console.log(result)
  
  result.items.forEach((item) => {
    map.addObject(new H.map.Marker(item.position));
  });
}, alert);



