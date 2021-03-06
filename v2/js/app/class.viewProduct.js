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
		closeSearchItem();
		hoverProduct_detail();
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
		$('.page .top_menu .select_menu div.text .item-search .item-name a').on('click',function(){
			
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
		$('.popup-collections .list_item_collections li .link a').hover(function(e) {
            var index=$(this).find('i');
			TweenMax.to( $(this).find('i'), 0.8, {width:215, opacity: 1} );
        },function(){
        	TweenMax.to( $('.popup-collections .list_item_collections li .link a i'), 0.8, {width:0, opacity: 0.1} );
        });
	}
	function showProducts()
	{
		//$("html, body").animate({ scrollTop: $('.page.store .content_product').offset().top - 100 }, 500);
		$('.page .content_product .list_products').animate({'opacity':0},1000,function(){
			$('.page .content_product .list_products').css('display','none');
		});
		$('.product-detail').css('display','block').animate({'opacity':1},1000);
	}
	function hoverProduct(){
		$('.page .content_product .list_products li').hover(function(){
			$(this).find('img.blackimage').hide();
			var imgID = $(this).find('.blackimage').attr('data-imageid');
			console.log(imgID);
			$(this).find('img.colorimage').show().animate({'opacity':1},100,function(){
				$('#'+imgID).addClass('large_view');
			});
		});
	}
	function closeSearchItem(){
		$('.page .top_menu .select_menu div.text .item-search a.close').on('click',function(){
			$(this).parent().remove();
			closeProduct();
		});
		$('.store-filter .btnSubmit a').on('click',function(){
			pageOjb.closeAll();
		});
	}
		
	function closeProduct()
	{
		$('.page .content_product .list_products').css('display','block').animate({'opacity':1},1000);
		$('.product-detail').animate({'opacity':0},1000,function(){
			$('.product-detail').css('display','none');
			$('.product-detail .product-type .br-top').removeClass('makeline');	
			$('.product-box .button-group .box').removeClass('fadeIn animated');
		});
	}
	function animationline()
	{
		$('.product-detail .product-type .br-top').addClass('makeline');	
	}
	function hoverProduct_detail(){
		$('.ul-product .product-img').hover(function(){
			$('.product-box .button-group .box').addClass('fadeIn animated');
		},function(){
			
		});
	}
	return {
		init:init
	}
})();		

