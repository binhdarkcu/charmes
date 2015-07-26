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
	var status=true;
	function init(){
		events();
		$(window).scroll(checkHeader);
    	$(window).resize(checkHeader);
    	$(window).scroll(checkCollections);
    	$(window).resize(checkCollections);
	}
	function events()
	{
		$(window).scroll(function(){
			activeScroll();	
		});
		gotoscroll();
		$('.page .mouse-event img').click(function(){
			if (status==true)
			{
				$('.page .mouse-event').css('display','none');	
				status==false;
			}
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
	function gotoscroll()
	{
		$('nav ul.list_menu li a.goto').click(function(e){
			var value=$(this).attr('pos');
			var collections=parseInt($('.page.store .top_menu').offset().top),
			Jewelries=parseInt($('.page.store .inner_slider').offset().top)-330;
			activeMenu($(this));
			if(value=='collections')
			{
				initPage.setPos(collections, 800);
				return false;		
			}
			else if(value=='Jewelries')
			{
				initPage.setPos(Jewelries, 800);
				return false;			
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
			$('nav ul.list_menu li a').removeClass('active');
			$('nav ul.list_menu li a.'+'Jewelries').addClass('active');
			
			return false;	
		}
		else if(top>=collections-20) {
			$('nav ul.list_menu li a').removeClass('active');
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
        if($(this).scrollTop() > $("#slides").height()){
        	
            if(fixed == false){
                fixed = true;
                $('.left_menu').css({'right':0});
            }
        }else{
            if(fixed == true){
                fixed = false;
				$('.left_menu').css({'right':-62});
            }
        }
    }
    var afixed = false;
    function checkCollections(){
    	var fixedscrolltop = $(window).scrollTop();
    	height = $('.page.introPage').height() + $('.inner_slider').height() + $('.page.store h3.title').outerHeight() + $('.page.home #slides').height();
    	
    	if($(this).scrollTop() >= height){
           $("div.top_menu").addClass("fixed");
        }else{
           $("div.top_menu").removeClass("fixed");
        }
		if(fixedscrolltop>=400)
		{
			$('body').addClass('animation');
			return false;	
		}
    }
	return {
		init:init,
		activeMenu:activeMenu,
		activeScroll:activeScroll
	};
})();		

