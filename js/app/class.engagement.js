// JavaScript Document
var pageOjb = (function() {
	//PARAMATER
	setObj=		{
			item_menu	:	'.page nav ul.list_menu li a'
	}
	var tl=null
	function init(){
		events();
	}
	function events()
	{.page nav ul.list_menu li a.active').click(function(){
			animatePopup();
		});
		
	}
	function animatePopup()
	{
		tl = new TimelineMax();
		tl.set ($('.page.engagement'),{css:{'display':'block'}})
		  .to( $('.page .bg_overlay'), 0.4, { css:{opacity:0.8 }} )
		  .to( $('.page .content_view'), 0.4, { css:{height:64+'%' }},'-=0.4' )
	}
	return {
		init:init
	}
})();		

