// JavaScript Document
var menuOjb = (function() {
	//PARAMATER
	setObj=		{
			item_menu	:	'.page nav ul.list_menu li a'
	}
	var flag=true;
	var fixed = false;
	var element = $(".page .inner_fix");
	var header = $(".header_content");
	function init(){
		events();
		$(window).scroll(checkHeader);
    	$(window).resize(checkHeader);
	}
	function events()
	{
		
		$('.page nav ul.list_menu li a').click(function(){
			var pos=$(this).attr('pos');
			if(pos==undefined)
			{
				return;		
			}
			else {
				var value=$('.page.'+pos).position().top;
				
			}
			if(pos>=650)
			{
				return false;
			}
			initPage.setPos(value);
		});
		/*
		$(window).scroll(function(e) {
            var pos=$('.page.'+'home').height();
			var top=$(window).scrollTop();
			console.log(pos+'_'+top);
			if (top>=pos-110)
			{
				fixmenu();
			}
			else {
				unfixmenu();
			}
        });*/
	}
	function fixmenu()
	{
		$('.page .inner_fix').addClass('fixed');
		$('.left_menu').animate({'right':0+'px'},300);	
	}
	function unfixmenu()
	{
		$('.page .inner_fix').removeClass('fixed');
		$('.left_menu').animate({'right':-62+'px'},300);
	}
	//FUNCTION
	function checkHeader(){
		console.log($(this).scrollTop(), $(".header_content").height() - $('.page .inner_fix').height());
        if($(this).scrollTop() > $(".header_content").height() - $('.page .inner_fix').height()){
            if(fixed == false){
                $(".page .inner_fix").addClass("fixed");
                fixed = true;
                $('.left_menu').animate({'right':0+'px'},300);
            }
        }else{
            if(fixed == true){
                $(".page .inner_fix").removeClass("fixed");
                fixed = false;
                $('.left_menu').animate({'right':-62+'px'},300);
            }
        }
    }
    
	return {
		init:init
	}
})();		

