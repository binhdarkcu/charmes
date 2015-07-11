// JavaScript Document
var menuOjb = (function() {
	//PARAMATER
	setObj=		{
			item_menu	:	'.page nav ul.list_menu li a'
	}
	var flag=true;
	var fixed = false;
	var click = false;
	var element = $(".page .inner_fix");
	var header = $(".header_content");
	function init(){
		events();
		$(window).scroll(checkHeader);
    	$(window).resize(checkHeader);
	}
	function events()
	{
		$('.page nav ul.list_menu li a.goto').click(function(){
			
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
                fixed = true;
                $('.left_menu').animate({'right':0+'px'},300);
            }
        }else{
            if(fixed == true){
                fixed = false;
                $('.left_menu').animate({'right':-62+'px'},300);
            }
        }
    }
    
	return {
		init:init,
		activeMenu:activeMenu
	};
})();		

