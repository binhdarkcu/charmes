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
		$(window).scroll(function(){
			activeScroll();	
		});
		gotoscroll();
	}
	function activeMenu(value)
	{
		$('.page nav ul.list_menu li a').removeClass('active');
		if(!$(value).hasClass('active'))
		{
			$(value).addClass('active');	
		}
		
			
	}
	function gotoscroll()
	{
		$('nav ul.list_menu li a.goto').click(function(e){
			var value=$(this).attr('pos');
			var collections=parseInt($('.page.store .top_menu').offset().top)-20,
			Jewelries=parseInt($('.page.store .inner_slider').offset().top)-330;
			if(value=='collections')
			{
				initPage.setPos(collections);	
			}
			else if(value=='Jewelries')
			{
				initPage.setPos(Jewelries);		
			}
		});	
	}
	function activeScroll()
	{
		var collections=parseInt($('.page.store .top_menu').offset().top),
		Jewelries=parseInt($('.page.store .inner_slider').offset().top);
		
		var top=$(window).scrollTop();
		//console.log(collections+'_'+Jewelries+'_'+top);
		if(top>=Jewelries-330&&top<=collections-20)
		{
			$('nav ul.list_menu li a').removeClass('active')
			$('nav ul.list_menu li a.'+'Jewelries').addClass('active');
			return false;	
		}
		else if(top>=collections-20) {
			$('nav ul.list_menu li a').removeClass('active')
			$('nav ul.list_menu li a.'+'collections').addClass('active');	
			return false;	
		}
		else if(top<=Jewelries){
			$('nav ul.list_menu li a.'+'Jewelries').removeClass('active');	
			return false;
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

