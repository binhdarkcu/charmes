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
		hoverProduct();
		
	}
	function events()
	{
		$(document).on('click','.page .content_product .list_products li',function(event){
			if(flag)
			{
				showProducts();
				setTimeout(function(){
					animationline();
					
				},1000);
					
				//return false;
			}
		});
		$('.page .top_menu .select_menu p.text').on('click',function(){
			closeProduct();
			return false;
		});
		hoverPure();
	}
	function hoverPure()
	{
		$(document).on('hover','.product-detail .product-feed ul li a',function(event){
            //var index=$(this).index();
			//console.log(222);
        });	
		$('.product-detail .product-feed ul li a').hover(function(e) {
            var index=$(this).find('i');
			TweenMax.to( $(this).find('i'), 0.8, {width:192, opacity: 1} );
        },function(){
        	TweenMax.to( $('.product-detail .product-feed ul li a i'), 0.8, {width:0, opacity: 0.1} );
        });
		
	}
	function showProducts()
	{
		initPage.setPos($('.page.store .top_menu').offset().top, 800);
		setTimeout(function(){
			$('.page .content_product .list_products').animate({'opacity':0},1000,function(){
				$('.page .content_product .list_products').css('display','none');
			});
			$('.product-detail').css('display','block').animate({'opacity':1},1000);
			
		});
	}
	function hoverProduct(){
		$('.page .content_product .list_products li').hover(function(){
			$(this).find('img.large_view').addClass('hover');
		});
		$('.page .content_product .list_products li .group_img .small_right').on('click',function(){
			//var src = $(this).attr('src');
			//var large_src = $('.page .content_product .list_products li .group_img .large_view').attr('src');
			//$('.page .content_product .list_products li .group_img .small_right').attr('src',large_src);
			//$('.page .content_product .list_products li .group_img .large_view').attr('src',src);
		});
	}
	function closeProduct()
	{
		$('.page .content_product .list_products').css('display','block').animate({'opacity':1},1000);
		$('.product-detail').animate({'opacity':0},1000,function(){
			$('.product-detail').css('display','none');
		});
	}
	function animationline()
	{
		$('.product-detail .product-type .br-top').stop(true,false).animate({'opacity':1,'width':100+'%'},1000);	
	}
	return {
		init:init
	}
})();		

