// JavaScript Document
var initPage = (function() {
	//PARAMATER
	setObj=		{
		
	}
	var flag=true;
	
	function init(){
		pageOjb.init();
		menuOjb.init();
		initFunctions();
	}
	
	function initFunctions(){
		events();
		pageOjb.init();
		ProductOjb.init();
		createRadio();
		slider.init();	
		
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
		$('.store-filter .btnSubmit, .shadow').click(function(){
			$('.shadow').hide();
			$('.page .top_menu .select_menu .icon').addClass('hasbr');
			$('.store-filter').hide().animate({'opacity':0},500);	
		});
	}
	function setPos(value, time)
	{
		$('html, body').animate({
        	scrollTop: value,
			easing: 'linear'
    	}, time);	
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
		setPos:setPos,
		initFunctions:initFunctions
	}
})();		

