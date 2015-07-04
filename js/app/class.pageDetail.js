// JavaScript Document
var pageOjb = (function() {
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
		$('.page nav ul.list_menu li a').click(function(){
			var value=$(this).attr('value');
			console.log(flag);
				if(flag==true&&value!='not')
				{
					animatePopup(value);
					flag=false;
				}
				else if(value!='not'&&flag==false)
				{
					FadeinContent(value);
				}
				else if(value=='not'){
					closeAll();
					flag=true;
				}
			
		});
		
	}
	function animatePopup(value)
	{
		tl = new TimelineMax();
		tl.set ($('.page.'+value),{css:{'display':'block'}})
		  .to( $('.page .bg_overlay'), 0.4, { css:{opacity:0.8 }} )
		  .to( $('.page .content_view'), 0.4, { css:{height:64+'%' }},'-=0.4' )
	}
	function FadeinContent(value)
	{
		$('.page.detailPage').css('display','none')
		$('.page.'+value).css('display','block')
		$('.page.'+value+' .desc, .page.'+value+' .img_block').addClass('fadeIn');
		
	}
	function closeAll()
	{
		$('.page.detailPage').css('display','none')
		$('.page.detailPage'+' .desc, .page.detailPage .img_block').removeClass('fadeIn');
		$('.page .bg_overlay').css({opacity:0 });
		$('.page .content_view').css({height:0+'%' });	
	}

	return {
		init:init
	}
})();		

