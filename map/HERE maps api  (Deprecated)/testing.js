let data1 = {
    "code": 200,
    "data": [
        {
            "location": "Malaysia",
            "country_code": "my",
            "latitude": 4.210484,
            "longitude": 101.975766,
            "confirmed": 8734,
            "dead": 122,
            "recovered": 8526,
            "updated": "2020-07-15 20:15:09.748725+00:00"
        },
        {
            "location": "South Africa",
            "country_code": "za",
            "latitude": -30.559482,
            "longitude": 22.937506,
            "confirmed": 311049,
            "dead": 4453,
            "recovered": 160693,
            "updated": "2020-07-15 20:15:05.555782+00:00"
        }
    ]
}
let array=[];
for(var i=0;i<=1;i++)
    array.push(data1.data[i].location);

    console.log(array);