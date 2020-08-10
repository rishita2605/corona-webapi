count=0;

function symptomadd(){
    count++;
    console.log(count);
}
function removeSym(){
    count=0;
}
function pakkaAffected(){
    count=100
}

function done(){
    if(count>=3){
            
            navigator.geolocation.getCurrentPosition(function (position) {
               console.log(position.coords.latitude)
               console.log(position.coords.longitude)
               alert("Thank you for taking this assessment.If the information provided by you is accurate, it indicates that you are either unwell or at risk. Your test results and location history need to be sent to the Health Ministry to help you and help identify potential hotspots where infection may be spreading")
               alert(`Your location ${position.coords.latitude},${position.coords.longitude} will be sent to the MHRD for addition to their database`)
            },
            function (error) {
                console.log("The Locator was denied. :(")
            })
        
    }
    
    else if(count<3){
        alert("Your infection risk is low. We recommend that you stay at home to avoid any chance of exposure to the Novel Coronavirus.Retake the Self-Assessment Test if you develop symptoms or come in contact with a COVID-19 confirmed patient. Do visit https://www.mohfw.gov.in/ for more information");
    }
}

function reset(){
    count=0;
} 


    





