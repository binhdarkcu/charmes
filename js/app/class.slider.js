// JavaScript Document
var slider = (function() {
	//INIT
	set={
			total		: 	0,
			current		:	0,
			name_list	: 	'.page .inner_slider .list_slider li'	
	}
	function init(){
		events();
		setCss();
		
	}
	function setCss()
	{
		$('.page .inner_slider .list_slider li:gt(0)').css('opacity',0);
		
	}
	function setW()
	{
		
	}
	function events()
	{
		$(document).on('click','a.next',function(event){
			NextSlider();
			
		});	
		$(document).on('click','a.pre',function(event){
			PreSlider();
			
		});
	}
	function show_hide_arrow(value){
		if(value==0)
		{
			$('a.pre').css('display','none');
			$('a.next').css('display','block');		
		}
		else if(value==set.n-1)
		{
			$('a.next').css('display','none');
			$('a.pre').css('display','block');	
		}
		else{
			$('a.pre, a.next').css('display','block');				
		}
			
		//console.log(value+'_'+set.n_dot);	
	}

	//animation
	function ani_Slider(value)
	{
		TweenMax.to( $(set.name_list), 1, {opacity:"0"} );
		TweenMax.fromTo( $(set.name_list).eq(value), 1, {opacity:"0"}, {opacity:"1"} );
		//show_hide_arrow(value);
		   	
	}
	//NEXT
	function NextSlider()
	{
		set.n=$(set.name_list).length;
		if (set.current < set.n - 1) {
			set.current++;
		}
		else {
			set.current = 0;
		}
		ani_Slider(set.current);
		
	}
	//PRE
	function PreSlider()
	{
		if (set.current > 0) {
			set.current--;
		}
		else {
			set.current = set.total-1;
		}
		ani_Slider(set.current);
	}
	//RETURN
	return {
		init:init,
		NextSlider:NextSlider,
		PreSlider:PreSlider
	}
})();		

