//variables + eventListener
$(".mode").on('click',modeChange);
var mo=$(".mode");
var icon=$(".mode-icon");



//functions
//nav-bar fluid motion
function move(id, position) {

    var tl = gsap.timeline();
    tl.to("#bgBubble", {duration: 0.15, bottom: "-30px", ease: "ease-out"}, 0)
      .to("#bubble1", {duration: 0.1, y: "200%", boxShadow: 'none', ease: "ease-out",}, 0)
      .to("#bubble2", {duration: 0.1, y: "200%", boxShadow: 'none', ease: "ease-out",}, 0)
      .to("#bubble3", {duration: 0.1, y: "200%", boxShadow: 'none', ease: "ease-out",}, 0)
      .to("#bubble4", {duration: 0.1, y: "200%", boxShadow: 'none', ease: "ease-out",}, 0)
      .to(".icon", {duration: 0.05, opacity: 0, ease: "ease-out",}, 0)
      .to("#bgBubble", {duration: 0.2, left: position, ease: "ease-in-out"}, 0.1)
      .to("#bgBubble", {duration: 0.15, bottom: "-50px", ease: "ease-out"}, '-=0.2')
      .to(`#bubble${id}`, {duration: 0.15, y: "0%", opacity: 1, boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', ease: "ease-out"}, '-=0.1')
      .to(`#bubble${id}> span`, {duration: 0.15, y: "0%", opacity: 1, ease: "ease-out"}, '-=0.1')

    //console.log($(`#bubble${id}`).css("transform"));
    //setting visibility of prev icon when it rises up to a bubble
    for(var i=1;i<=4;i++){
      if(i==id){
        console.log("invisible");
        $(`#menu${id}`).css("opacity","0");
      }
      else{
        console.log("visible");
        $(`#menu${i}`).css("opacity","1");
      }
    }
}


//dark mode-light mode switching
function modeChange(){
  
  console.log(mo.css("background-color"));
  if(mo.css("background-color")=="rgb(0, 163, 255)"){
    icon.css("transform","scale(0.1)");
    //mo.css("transform","scale(0.1)");
    setTimeout(light,200);
    
  }
  else{
    icon.css("transform","scale(0.1)");
    //mo.css("transform","scale(0.1)");
    setTimeout(dark,200);
  }
}

function light(){
    console.log("light");
    console.log(icon);
    icon.css("transform","scale(1)");
    //mo.css("transform","scale(1)");

    mo.css("background-color","rgba(17, 29, 67, 1)");
    mo.css("color","white");
    icon.removeClass("fas fa-moon");
    icon.addClass("fas fa-sun");
    //icon transition end

    //layout transition start
}

function dark(){
    console.log("dark");
    console.log(icon);
    icon.css("transform","scale(1)");
    //mo.css("transform","scale(1)");
    mo.css("background-color","rgba(0, 163, 255, 1)");
    mo.css("color","rgba(12, 18, 44, 1)");
    icon.removeClass("fas fa-sun");
    icon.addClass("fas fa-moon");
    //icon transition end

    //layout transition start
}