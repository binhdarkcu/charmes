// JavaScript Document
var initPage = (function() {
	//PARAMATER
	setObj=		{
		
	}
	var flag=true;
	
	function init(){
		events();
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
      			$(window).off('scroll');
    		}
  		}
	}
	//FUNCTION
	
	return {
		init:init,
		setPos:setPos
	}
})();		

