$(".fa-chart-area").on("click",controlLoop);
$(".list-item").on("click",detailsDisplay);
//$(".list-item").on("click",detailsState)
var count=0;
var state="";
state=$(".dropbtn").text();
function controlLoop(){
console.log(count);

if(count==0){
    distContent();
    count++;
}
else{
    count++;
}
}

function distContent(){

fetch('/state_wise')
.then((res)=>res.json()
.then((data)=>{
  var constClass=0;
  var initial=0;
  var stateCount=0;
    if(state=="Andhra Pradesh"){
        for(let i=0;i<data.length;i++){
            if(data[i].state==="Andhra Pradesh"){
                initial=i;
            }
        }
        
    
        for(let j=0 ;j<data[initial].districts.length ; j++){
        
            constClass++;
    
    
            //creating elements
            district=document.createElement("div");
            var distname=document.createElement("div");
            var conf=document.createElement("div");
            var confnum=document.createElement("div");
            var conftxt=document.createElement("div");
    
            //adding classes
            $(district).addClass("a"+constClass);
            $(distname).addClass("distname");
            $(conf).addClass("distconf");
            $(conf).addClass("sub-heading-2");
            $(confnum).addClass("distconfnum");
            $(conftxt).addClass("distconftxt");
    
            //appending elements
            $(conf).append($(conftxt));
            $(conf).append($(confnum));
            $(district).append($(distname));
            $(district).append($(conf));
            $(".box-2").append($(district));
            
            
    
            //changing text content
            if($(district).hasClass("a"+constClass)){
                $(conftxt).text("Confirmed Cases:");
                $(distname).text(data[initial].districts[j].name);
                console.log($(distname).text());
                $(confnum).text(data[initial].districts[j].confirmed);
                console.log($(confnum).text());
            }
            else{
                console.log("do nothing");
            }
    }
   
    }
    else
    {
        console.log("nada");
    }


})
.catch((err)=>console.log(err)));
}

function detailsDisplay(evt){
    console.log('details display');
    state=$(".dropbtn").text();
    var constClass=0;
    var initial=0;
    var stateCount=0;
    console.log(evt.target);
    var he=40;
    state=$(evt.target).text();
    
    console.log(stateCount);
    $(".box-2").empty();
    fetch('/state_wise')
.then((res)=>res.json()
.then((data)=>{
    
    //changing state data
    for(let r=0;r<data.length;r++){ 
        if(data[r].state==$(evt.target).text()){
           
           $(".deanum").text(data[r].deaths);
           $(".recnum").text(data[r].recovered);
           $(".confnum").text(data[r].infected);
        }
      }
    
    console.log("state"+ state);
        for(let i=0;i<data.length;i++){
            console.log("data state"+data[i].state);
            console.log(state);
            if(data[i].state== $(evt.target).text()){
                stateCount=i;
                console.log("state count"+stateCount);
            }
        }

        //he=he + he*data[stateCount].districts.length;
        //$(".box-2").css("height",he);
        console.log(state);
        console.log("state position"+stateCount);
    
        for(let j=0 ;j < data[stateCount].districts.length ; j++){
        
            constClass++;
        
            console.log(constClass);
    
            //creating elements
            district=document.createElement("div");
            var distname=document.createElement("div");
            var conf=document.createElement("div");
            var confnum=document.createElement("div");
            var conftxt=document.createElement("div");
    
            //adding classes
            $(district).addClass("a"+constClass);
            $(distname).addClass("distname");
            $(conf).addClass("distconf");
            $(conf).addClass("sub-heading-2");
            $(confnum).addClass("distconfnum");
            $(conftxt).addClass("distconftxt");
    
            //appending elements
            $(conf).append($(conftxt));
            $(conf).append($(confnum));
            $(district).append($(distname));
            $(district).append($(conf));
            $(".box-2").append($(district));
            
            
    
            //changing text content
            if($(district).hasClass("a"+constClass)){
                $(conftxt).text("Confirmed Cases:");
                $(distname).text(data[stateCount].districts[j].name);
                console.log($(distname).text());
                $(confnum).text(data[stateCount].districts[j].confirmed);
                //console.log($(confnum).text());
            }
            else{
                console.log("do nothing");
            }
    
        }
    
})
.catch((err)=>console.log(err)));
}