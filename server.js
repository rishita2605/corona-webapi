const express=require('express');
const fetch = require("node-fetch");


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
for(var i=0;i<=28;i++){
  statewise.push(
    {
        state:data1[i].state,
        infected:data1[i].confirmed,
        recovered:data1[i].recovered,
        deaths:data1[i].deaths, 
    
        districts:[{d1:data1[i].districtData[0]},
                    {d2:data1[i].districtData[1]},
                    {d3:data1[i].districtData[2]},
                    {d4:data1[i].districtData[3]},
                    {d5:data1[i].districtData[4]}]

    });
    
}
res.send(statewise);
}
command();
});

    