const express=require('express');
const fetch = require("node-fetch");
const firebase = require("firebase");
require("firebase/firestore");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDoFv5A9WUltMZJvuj3FkU4FHq0JDxDAec",
    authDomain: "covid-19-analyser.firebaseapp.com",
    databaseURL: "https://covid-19-analyser.firebaseio.com",
    projectId: "covid-19-analyser",
    storageBucket: "covid-19-analyser.appspot.com",
    messagingSenderId: "597580544025",
    appId: "1:597580544025:web:57f2921a94ec519a055288",
    measurementId: "G-22ZDJHTDYG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 


const app=express();

app.listen(3000,()=>console.log('Listening on port 3000'));

app.use(express.static('public'));

//MAP GET
app.get('/map',(req,res)=>{

        const getData = async (url) => {
        
        const response = await fetch(url);
        dataa = (await response.json()).data;
        
      
    }
    
    const command = async () => {
      const url = 'https://www.trackcorona.live/api/countries.json';
      await getData(url);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      let cords=[];
      for(var i=0;i<=225;i++){
          cords[i]={country:dataa[i].location,lng:dataa[i].longitude,lat:dataa[i].latitude,cases:dataa[i].confirmed};
          
      }
      res.json(cords);
    }
  command();
});

//GRAPH GET
app.get('/graph',(req,res)=>{

  const getData = async (url) => {
  
  const response = await fetch(url);
  cityName = (await response.json()).data;
}

const command = async () => {
const url = 'https://www.trackcorona.live/api/countries.json';
await getData(url);
res.statusCode = 200;
res.setHeader("Content-Type", "application/json");
let city=[];
for(var i=0;i<=225;i++){
    city[i]={country:cityName[i].location,cases:cityName[i].confirmed};
    
}
res.send(city);
}
command();
});

//STATE WISE INDIA GET
app.get('/state_wise',(req,res)=>{

  const getData = async (url) => {
  
  const response = await fetch(url);
  data1 = (await response.json());
}

const command = async () => {
const url = 'https://api.covidindiatracker.com/state_data.json';
await getData(url);
res.statusCode = 200;
res.setHeader("Content-Type", "application/json");
let statewise=[];
for(var i=0;i<=30;i++){
  statewise.push(
    {
        state:data1[i].state,
        infected:data1[i].confirmed,
        recovered:data1[i].recovered,
        deaths:data1[i].deaths, 
        districts:data1[i].districtData
    
       
                  

    });
    
}
res.send(statewise);
}
command();
});

    