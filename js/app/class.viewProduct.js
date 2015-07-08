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
		$(document).on('click','.page .content_product .list_products li',function(event){
			if(flag)
			{
				showProducts();	
			}
		});
	}
	function showProducts()
	{
		var top=parseInt($('.page.store').position().top)+500;
		$('.product-detail').slideUp(500).slideDown(500);
		initPage.setPos(top);
	}
	function closeProduct()
	{
		
	}
	return {
		init:init
	}
})();		

