//variables 
//$(".mode").on('click',modeChange);
var mo=$(".mode");
var icon=$(".mode-icon");
var pageOne=$(".main-content-1");
var pageTwo=$(".main-content-2");
var pageThree=$(".main-content-3");
var pageFour=$(".main-content-4");
var triangle=$(".fa-caret-down");
var cnum=$(".confnum");
var rnum=$(".recnum");
var dnum=$(".deanum");

//event listeners
$(".fa-home").on('click',one);
$(".fa-chart-area").on('click',two);
$(".fa-clipboard-list").on('click',three);
$(".fa-info-circle").on('click',four);
$(".circle").on('click',check);
$(".dropbtn").on('click',dropdown);
$(".list-item").on('click',listitems);

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

//navigating to first page
function one(){
  console.log("one");
  $('.main-content-1').css("display","grid");
  $('.main-content-2').css("display","none");
  $('.main-content-3').css("display","none");
  $('.main-content-4').css("display","none");
}
//navigating to second page
function two(){
  console.log("two");
  changeContentsInit();
  $('.main-content-2').css("display","grid");
  $('.main-content-1').css("display","none");
  $('.main-content-3').css("display","none");
  $('.main-content-4').css("display","none");
  //adding link for css file 
  $(pageTwo).append("<link href='page-2.css' rel='stylesheet' type='text/css'/>");
}

//navigating to second page
function three(){
  console.log("three");
  $('.main-content-3').css("display","grid");
  $('.main-content-1').css("display","none");
  $('.main-content-2').css("display","none");
  $('.main-content-4').css("display","none");
  //adding link for css file 
  $(pageTwo).append("<link href='page-3.css' rel='stylesheet' type='text/css'/>");
}

//navigating to second page
function four(){
  console.log("four");
  $('.main-content-4').css("display","grid");
  $('.main-content-1').css("display","none");
  $('.main-content-3').css("display","none");
  $('.main-content-2').css("display","none");
  //adding link for css file 
  $(pageFour).append("<link href='page-4.css' rel='stylesheet' type='text/css'/>");
}

//second page 
/*fetch('/state_wise')
.then((res)=>res.json()
.then((data)=>{
  console.log("hullo data");
  console.log(data);

})
.catch((err)=>console.log(err)));
*/

//selecting items from list
function listitems(e){

  const item=e.target;
  const txt=$(item).text();
  const icon=$(".fa-caret-down").clone();

  $(".dropbtn").text(txt);

  $(icon).appendTo(".dropbtn");
  console.log($(".dropbtn"));
  
  //$(triangle).on('click',dropdown);
}

//dropdown
function dropdown(){
  console.log("hullo dropdown");
  if($('.dropdown-content').css('display')=="none"){
    $('.dropdown-content').css('display','block');
  }
  else{
    $('.dropdown-content').css('display','none');
  }
  
}
//changing contents i.e no. of cases etc initially
function changeContentsInit(){
  fetch('/state_wise')
.then((res)=>res.json()
.then((data)=>{
  console.log("hullo data");
  console.log(data[0]);
  //finding the data for the state on top 
  for(let i=0;i<data.length;i++){ 
    if(data[i].state==="Andhra Pradesh"){
       dnum.text(data[i].deaths);
       rnum.text(data[i].recovered);
       cnum.text(data[i].infected);
    }
  }

})
.catch((err)=>console.log(err)));
  
 //for(let i=0;i<data.length;i++);
}
//symptom checker
function check(e){
  console.log(e.target);
  if($(e.target).css("background-color")=="rgba(0, 163, 255, 0.1)"){
    $(e.target).css("background-color","rgba(0, 163, 255, 1)");
    $(e.target).css("transform","scale(0.9)");
  }
  else{
    $(e.target).css("background-color","rgba(0, 163, 255, 0.1)");
    $(e.target).css("transform","scale(1)");
  }
}

