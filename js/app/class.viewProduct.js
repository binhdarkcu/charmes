// JavaScript Document
var ProductOjb = (function() {
	//PARAMATER
	setObj=		{
			item_menu	:	'.page nav ul.list_menu li a'
	}
	var tl=null,
		flag=true;
	function init(){
		events();
	}
	function events()
	{
		
		
	}
	function showProducts(value)
	{
		tl = new TimelineMax();
		tl.set ($('.page.'+value),{css:{'display':'block'}})
		  .set( $('.page .bg_overlay'), { css:{display:'block' }} )
		  .to( $('.page.'+value+' .bg_overlay'), 0.4, { css:{opacity:0.8 }} )
		  .to( $('.page.'+value+' .content_view'), 0.4, { css:{height:64+'%' }},'-=0.4' )
	}
	function closeProduct()
	{
		
	}
	
	return {
		init:init
	}
})();		

