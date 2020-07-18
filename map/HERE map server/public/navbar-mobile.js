//variables + eventListener
//$(".mode").on('click',modeChange);
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
        $(`#menu${id}`).css("opacity","0");
      }
      else{
        $(`#menu${i}`).css("opacity","1");
      }
    }
}



//styling the map
$(".H_btn").css("background-color","#0ea4fe");
$("svg.H_icon").css("fill","#05053c");
$(".H_scalebar").css("text-shadow","none");
$("polyline").css("stroke","white");
$(".H_context_menu_item_separator").css("border-top","2px solid #05053c");

//performing this since the div to be changed has no class
//alternative which didn't work
//$('div[style~="overflow: hidden;"]').css("border-radius","0.5em");

var elements = $("div").filter(function() {
  // only keep the elements that have the correct value for overflow
  return $(this).css("overflow") === "hidden";
});

console.log(elements);

var mapCont=elements[2];
console.log(mapCont);
$(mapCont).css("border-radius","0.5em");

//$("element").css("border-radius","0.5em");

var view=$(".H_btn");
console.log(view);

var del=view[2];
console.log(del);
$(del).remove();
