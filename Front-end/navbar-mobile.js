//variables + events


//event listener

//functions
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


