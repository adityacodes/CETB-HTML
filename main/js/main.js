$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
      transitionStyle : "fade",
      autoPlay: 3000,
      slideSpeed : 300,
      pagination: false,
      singleItem:true,
      dots: false,
  });
var owl = $("#owl-demo");

   // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
 
});