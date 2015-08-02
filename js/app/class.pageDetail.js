// JavaScript Document
var pageOjb = (function() {
	//PARAMATER
	setObj=		{
			item_menu	:	'.page nav ul.list_menu li a'
	}
	var tl=null,
		flaginit=true;
	function init(){
		events();
	}
	function events()
	{
		
		$('.page .nav_bar_home a.internal').hover(function(){
			var value=$(this).attr('value');
			menuOjb.activeMenu(this);
			if(flaginit==true)
			{
				setTimeout(function(){
					animatePopup(value);
				},400);
				
			}
			else if(flaginit==false)
			{
				FadeinContent(value);
			}
			
		},function(){
			menuOjb.activeScroll();
		});
		$('.page nav ul.list_menu li a.goto').hover(function(){
			closeAll();
			
			$('.page .nav_bar_home a.internal').removeClass('active');
			flaginit=true;
		});
		$('.page .bg_overlay').hover(function(){
			closeAll();
			
			//$('.page nav ul.list_menu li a').removeClass('active');
			flaginit=true;
		});
		
	}
	function animatePopup(value)
	{
		var he = 510;
		tl = new TimelineMax({onComplete:function(){flaginit=false; }});
		if(value == 'popup-collections'){
			he=465;
		}
		tl.set ($('.page.'+value),{css:{'display':'block'}})
		  .set( $('.page .bg_overlay'), { css:{display:'block' }} )
		  .to( $('.page.'+value+' .bg_overlay'), 0.4, { css:{opacity:0.8 }} )
		  .to( $('.page.'+value+' .content_view'), 0.4, { css:{height: he}},'-=0.4' )
	}
	function FadeinContent(value)
	{
		var he = 500;
		if(value == 'popup-collections'){
			he=465;
		}
		$('.page.detailPage').css('display','none')
		$('.page.detailPage.'+value).css('display','block');
		$('.page.detailPage.'+value+' .bg_overlay').css({'display':'block', opacity:0.8 });
		$('.page.detailPage.'+value+' .content_view').css({height:he});
		$('.page.detailPage.'+value+' .desc, .page.detailPage'+value+' .img_block').addClass('fadeIn');
		
	}
	function closeAll()
	{
		tl = new TimelineMax();
		tl
		  .to( $('.page .bg_overlay'), 0.4, { css:{opacity:0 }} )
		  .to( $('.page .content_view'), 0.4, { css:{height:0+'%' }},'-=0.4' )
		  .set ($('.page.detailPage'),{css:{'display':'none'}})
		  .set ($('.page .bg_overlay'),{ css:{'display':'none' }});
		 $('.page.detailPage'+' .desc, .page.detailPage .img_block').removeClass('fadeIn');
	}

	return {
		init:init,
		closeAll:closeAll
	}
})();		

