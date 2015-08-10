// JavaScript Document
var animationPage = (function() {
	
	function init(){
		actionFirst();

	}
	function actionFirst(){
		//click discover
		$('.discover_link').click(function(){
			var tl = new TimelineMax(),
				discover_text = $('.discover_link'),
				//large_branches = $('.large_branches'),
				three_left = $('.tree_left'),
				three_right = $('.tree_right'),
				tall_tree = $('.tall-tree'),
				jewelry_top = $('.jewelry_top'),
				text_jardin = $('.text-jardin'),
				green_circle = $('.green_circle'),
				cloud_01 = $('.cloud_01'),
				cloud_02 = $('.cloud_02'),
				text_jardin_2 = $('.text-jardin.textjardin02'),
				mouse_click = $('.mouse_click'),
				buttterfly = $('.buttterfly');
            //banner animation code (only 11 lines)
            tl.to(discover_text, .1, {display:'none'})
              .to(text_jardin, 1.1, {opacity:0})
              .to(jewelry_top, 1.1, {opacity:0}, '-=1.1')
              .to(three_left, 4.5, {top:-50, left:'-30%', opacity: 0})
              .to(three_right,4.5, {top:-50, right:'-30%', opacity: 0}, '-=4.5')
              //.to(large_branches, 1, {top: '-13%', opacity: 0 }, '-=4.5')
              .to(green_circle, 1.7, {opacity:1}, '-=4')
              .to(cloud_01, 1.2, {opacity:1,left: "10%"}, '-=1.4')
              .to(cloud_02, 1.2, {opacity:1, right: "3%"}, '-=1.4')
              .to(tall_tree, 1.2, {opacity:1}, '-=1.2')
              .to(text_jardin_2, 1.2, {opacity:1})
              .to(mouse_click, 1.2, {opacity:1})
              .to(buttterfly, 1.2, {opacity:1})
              .to(buttterfly, .8, {opacity:0.4, left: '49.5%'})
              .to(buttterfly, 1.7, {opacity:1, left:'50%'})
            action_mouseWheel();
		});
	}
	function action_scense_2(){
		var tl_2 = new TimelineMax(),
			tall_tree = $('.tall-tree'),
			green_circle = $('.green_circle'),
			cloud_01 = $('.cloud_01'),
			cloud_02 = $('.cloud_02'),
			text_jardin_2 = $('.text-jardin.textjardin02'),
			mouse_click = $('.mouse_click'),
			buttterfly = $('.buttterfly');
		tl_2.to(text_jardin_2, 1, {opacity:0})
			.to(mouse_click, 1, {display:'none'}, "-=1")
	}

	function action_mouseWheel(){
        $('#slides').bind('mousewheel DOMMouseScroll', function(event){
		    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
		        // scroll up
		    }
		    else {
		        // scroll down
		        action_scense_2();
		    }
		});
	}
	return {
		init:init
	};
})();		