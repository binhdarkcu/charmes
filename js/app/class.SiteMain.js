// JavaScript Document
var SiteMain = (function() {
	//INIT
	
	function init(){
		initPage.init();
		ProductOjb.init();
		scrolltoView();
		clickhomemenu();
		
	}
	function scrolltoView(){
		$('.page.home .mouse-event').on('click',function(){
			$('html, body').stop(true, false ).animate({
	        	scrollTop: $('.page.store .top_menu').offset().top
	    	}, 25000,'linear');
	    	
		});
		
	}
	function clickhomemenu(){
		var cl = false;
		$('.menu_top .icon-homemenu').on('click',function(){
			if(cl == false){
				$(this).css('height',8);
				$('.menu_top .nav_menu').animate({'top':0},400);
				cl = true;
			}else{
				$(this).css('height',24);
				$('.menu_top .nav_menu').animate({'top':-70},400);
				cl = false;
			}
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
