$(document).ready(function(){
	$(".header-slider-item").owlCarousel({
	 	items : 1,
	 	autoHeight : true,
	 	pagination : false,
	 	autoPlay : true,
	 	singleItem:true,
	 	navigation : true,
	 	navigationText : [" "," "]
	 	}
	 ); 
	$(".event-slider").owlCarousel({
	 	items : 5,
	 	autoHeight : true,
	 	pagination : false,
	 	autoPlay : true,
	 	singleItem:false,
	 	navigation : true,
	 	navigationText : [" "," "]
	 	}
	 ); 
	 $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
	  $('.plus').click(function () {
	      var $input = $(this).parent().find('input');
	      $input.val(parseInt($input.val()) + 1);
	      $input.change();
	      return false;
	  });	
	  $('.toggle-menu').click(function(){
	  	$('.header-nav').slideToggle();
	  })
	  $('.menu-book-toplist-toggle').click(function(){
	  	$('.menu-book-toplist').slideToggle();
	  })
	  $('.menu-book-left-toggle').click(function(){
	  	$('.menu-service').slideToggle();
	  })
})