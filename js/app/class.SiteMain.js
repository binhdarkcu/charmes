// JavaScript Document
var SiteMain = (function() {
	//INIT
	
	function init(){
		initPage.init();
		ProductOjb.init();
		scrolltoView();
		
		
	}
	function scrolltoView(){
		$('.page.home .mouse-event').on('click',function(){
			$('html, body').stop(true, false ).animate({
	        	scrollTop: $('.page.store .top_menu').offset().top
	    	}, 15000,'linear');
	    	
		});
		
	}
	function initHoverSlide(){
		$("#my-thumbs-list").mThumbnailScroller({
          type:"hover-precise",
          speed: 10
        });
		$('.left-shadow, .right-shadow, .list_item_collections li:first-child,.list_item_collections li:last-child').hover(function(){
			$('.left-shadow').hide();
		},function(){
			$('.left-shadow').show();
		});
		$('.right-shadow, .list_item_collections li:last-child').hover(function(){
			$('.right-shadow').hide();
		},function(){
			$('.right-shadow').show();
		});
	}
	//RETURN
	return {
		init:init,
		initHoverSlide: initHoverSlide
	};
})();		

$(document).ready(function(e) {
    SiteMain.init();
	
});
