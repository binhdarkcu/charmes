// JavaScript Document
var animationPage = (function() {
	var tl = null;

	var setting = {
		
	}

	//FUNCTIONS
	function init(){
		initVideo();
	}

	//VIDEOS
	function initVideo(){ 
		var w = $(window).width();	
		var h = $(window).height();	

		// 1280 * 720
		var nw = h * 1280 / 720;

		console.log(h,nw);
		$('.scense_container').css({width:nw, height:h});
	}

	//RETURN
	return {
		init:init
	};
})();		