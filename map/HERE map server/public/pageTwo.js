$(".fa-chart-area").on("click",distContent);

function distContent(){
    fetch('/state_wise')
.then((res)=>res.json()
.then((data)=>{
  var constClass=0;
  var initial=0;

    for(let i=0;i<data.length;i++){
        if(data[i].state==="Andhra Pradesh"){
            initial=i;
        }
    }

    console.log(data[initial].districts.length);
    for(let j=0 ;j<data[initial].districts.length ; j++){
    
        constClass++;

        //creating elements
        var district=document.createElement("div");
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


})
.catch((err)=>console.log(err)));
}