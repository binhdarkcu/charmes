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
		$('.page nav ul.list_menu li a').hover(function(){
			var value=$(this).attr('value');
			menuOjb.activeMenu(this);
			console.log(flaginit);
			if(flaginit==true&&value!='not')
			{
				animatePopup(value);
			}
			else if(value!='not'&&flaginit==false)
			{
				FadeinContent(value);
			}
			else if(value=='not'){
				closeAll();
				flag=true;
			}
		});
		$('.page nav ul.list_menu li a.goto').hover(function(){
			flaginit=true;
			$('.page nav ul.list_menu li a').removeClass('active');
		});
		$('.page .bg_overlay').hover(function(){
			closeAll();
			$('.page nav ul.list_menu li a').removeClass('active');
			flaginit=true;
		});
		
	}
	function animatePopup(value)
	{
		tl = new TimelineMax({onComplete:function(){flaginit=false; }});
		tl.set ($('.page.'+value),{css:{'display':'block'}})
		  .set( $('.page .bg_overlay'), { css:{display:'block' }} )
		  .to( $('.page.'+value+' .bg_overlay'), 0.4, { css:{opacity:0.8 }} )
		  .to( $('.page.'+value+' .content_view'), 0.4, { css:{height:64+'%' }},'-=0.4' )
	}
	function FadeinContent(value)
	{
		$('.page.detailPage').css('display','none')
		$('.page.'+value).css('display','block');
		$('.page .bg_overlay').css({'display':'block', opacity:0.8 });
		$('.page .content_view').css({height:64+'%'});
		$('.page.'+value+' .desc, .page.'+value+' .img_block').addClass('fadeIn');
		
	}
	function closeAll()
	{
		tl = new TimelineMax();
		tl
		  .to( $('.page .bg_overlay'), 0.4, { css:{opacity:0 }} )
		  .to( $('.page .content_view'), 0.4, { css:{height:0+'%' }},'-=0.4' )
		 $('.page.detailPage'+' .desc, .page.detailPage .img_block').removeClass('fadeIn');
	}

	return {
		init:init,
		closeAll:closeAll
	}
})();		

