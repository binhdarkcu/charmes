// JavaScript Document
var initPage = (function() {
	//PARAMATER
	setObj=		{
		
	}
	var flag=true;
	
	function init(){
		loadPage();
	}
	function loadPage(){
		$('.mouse-event').on('click',function(){
			var pos=$('.page.home').height();
			
			$.ajax({
	            url:'modules/content.php' 
	        })
	        .done(function( html ) {
	        	$('.loadPages').append(html);
	        	$('.page.home .header_content, .page .inner_fix.fixed nav').removeAttr('style');
				setPos(pos);
	        	events();
				menuOjb.init();
				pageOjb.init();
				ProductOjb.init();
				createRadio();	
	        });
		});
	}
	function createRadio(){
		$('.iCheck input').iCheck();
	}
	function activeMenuStore(){
		$('.page .top_menu .select_menu .icon.hasbr').on('click',function(){
			$(this).removeClass('hasbr');
			$('.shadow').show();
			$('.store-filter').show().animate({'opacity':1},500);
			
		});
		$('.store-filter .storeicon').on('click',function(){
			$('.shadow').hide();
			$('.page .top_menu .select_menu .icon').addClass('hasbr');
			$('.store-filter').hide().animate({'opacity':0},500);
		});
	}
	function events()
	{
		var $blocks = $('.animBlock.notViewed');
  		var $window = $(window);
		//scrool element
		$window.on('scroll', function(e){
			$blocks.each(function(i,elem){
		  		if($(this).hasClass('viewed')) 
				return;
		  		isScrolledIntoView($(this));
			});
	 	});
	 	activeMenuStore();
	}
	function setPos(value)
	{
		$('html, body').animate({
        	scrollTop: value,
			easing: 'linear'
    	}, 800);	
	}
	function isScrolledIntoView(elem) {
  		var docViewTop = $(window).scrollTop(),
			docViewBottom = docViewTop + $(window).height(),
			elemOffset = 0;
  		if(elem.data('offset') != undefined) {
    		elemOffset = elem.data('offset');
  		}
  		var elemTop = $(elem).offset().top,
			elemBottom = elemTop + $(elem).height(); 
  		
  
  		if(elemOffset != 0) { // custom offset is updated based on scrolling direction
    		if(docViewTop - elemTop >= 0) {
      			// scrolling up from bottom
      			elemTop = $(elem).offset().top + elemOffset;
   			} 
			else {
      		// scrolling down from top
      			elemBottom = elemTop + $(elem).height() - elemOffset
    		}
  		}
  
  		if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
    		// once an element is visible exchange the classes
    		$(elem).removeClass('notViewed').addClass('viewed');
    
    		var animElemsLeft = $('.animBlock.notViewed').length;
    		if(animElemsLeft == 0){
      			// with no animated elements left debind the scroll event
      			//$(window).off('scroll');
    		}
  		}
	}
	//FUNCTION
	
	return {
		init:init,
		setPos:setPos
	}
})();		

