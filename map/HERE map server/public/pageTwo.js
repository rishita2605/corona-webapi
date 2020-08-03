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

    for(let j=1;j<5;j++){
    
        constClass++;

        //creating elements
        var district=document.createElement("div");
        var distname=document.createElement("div");
        var conf=document.createElement("div");
        var confnum=document.createElement("div");

        //adding classes
        $(district).addClass("a"+constClass);
        $(distname).addClass("distname");
        $(conf).addClass("distconf");
        $(conf).addClass("sub-heading-2");
        $(confnum).addClass("distconfnum");

        //appending elements
        
        
        $(district).append($(distname));
        $(district).append($(conf));
        $(".box-2").append($(district));
        
        

        //changing text content
        if($(district).hasClass("a"+constClass)){
            $(conf).text("Confirmed Cases:");
            
            $(distname).text(data[initial].districts[j].name);
            console.log($(distname).text());
            $(confnum).text(data[initial].districts[j].confirmed);
            $(".distconf").append($(confnum));
            console.log($(confnum).text());
        }
        else{
            console.log("do nothing");
        }

        
    }


})
.catch((err)=>console.log(err)));
}