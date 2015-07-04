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
			activeMenu(this);
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
	}
	function activeMenu(value)
	{
		$('.page nav ul.list_menu li a').removeClass('active');
		if(!$(value).hasClass('active'))
		{
			$(value).addClass('active');	
		}
			
	}
	//FUNCTION
	function checkHeader(){
        if($(this).scrollTop() > $(".header_content").height()){
            if(fixed == false){
                //$(".page .inner_fix").addClass("fixed");
                fixed = true;
                $('.left_menu').animate({'right':0+'px'},300);
            }
        }else{
            if(fixed == true){
                //$(".page .inner_fix").removeClass("fixed");
                fixed = false;
                $('.left_menu').animate({'right':-62+'px'},300);
            }
        }
    }
    
	return {
		init:init
	}
})();		

