function geoloc() {
    navigator.geolocation.getCurrentPosition(function (position) {
       console.log(position.coords.latitude)
       console.log(position.coords.longitude)
       alert(`Your location ${position.coords.latitude},${position.coords.longitude} will be sent to the MHRD for addition to their database`)
    },
    function (error) {
        console.log("The Locator was denied. :(")
    })
}





