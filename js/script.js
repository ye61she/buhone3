if (window.matchMedia("(max-width: 400px)").matches) {
   
 } else {

 }
$(document).ready(function(){
   $('.container1').slick({
      dots:true,
   });
});

$(document).ready(function(){
   $('.container2').slick({
      dots:true,
      slidesToShow: 4,
      slidesToScroll: 4,
      
   });
});
if (window.matchMedia("(max-width: 600px)").matches) {
   $('.container2').slick({
      dots:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      
   });
} else if (window.matchMedia("(max-width: 800px)").matches) {
   $('.container2').slick({
      dots:true,
      slidesToShow: 2,
      slidesToScroll: 2,
      
   });
} else if (window.matchMedia("(max-width: 1100px)").matches){
   $('.container2').slick({
      dots:true,
      slidesToShow: 3,
      slidesToScroll: 3,
      
   });
} else{ }


$(document).ready(function(){
   $('.container3').slick({
      dots:true,
   });
});

let navmenu = document.getElementById('navmenu'),
navbut = document.getElementById('navbut');
// 
let menuBool = false; 
let bodyScroll = document.getElementById('bodyScroll');
const el = document.getElementById('header');

navbut.onclick = function(){
   if (menuBool == false){
      navmenu.style.display="flex";
      bodyScroll.style.overflow="hidden";
      el.scrollIntoView();
      menuBool = true;
   }
   else{
      navmenu.style.display="none";
      bodyScroll.style.overflow="auto";
      menuBool = false;
   }
}