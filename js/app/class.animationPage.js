// JavaScript Document
var animationPage = (function() {
	var tl = null;

	var settting = {
		running : false
	}

	function init(){
		actionFirst();

	}
	function actionFirst(){
		//click discover
		$('.discover_link').click(function(){
			$('html, body').stop(true, false ).animate({
	        	scrollTop: 0
	    	}, 10);
			tl = new TimelineMax({}),
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
            tl.to(discover_text, .1, {display:'none'}, "label_action_1")
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
              .to(buttterfly, .8, {opacity:0.4, left: '49.5%', onComplete:setAllowScroll})
              .to(buttterfly, 1.7, {opacity:1, left:'50%'})
             //action 3
              .to(text_jardin_2, 1.2, {opacity:0}, "label_action_2")
              .to(mouse_click, 1.2, {opacity:0}, "-=1.2")
              .to(cloud_01, 9, {left: "-25%"})
              .to(green_circle, 20, {left:'-50%'}, '-=9')
              .to(tall_tree, 8, {left:-400}, '-=20')
              .to(cloud_02, 15, {right: "100%"},  '-=20')
              .to(buttterfly, 5, {opacity:1,repeat: 3 }, "label_action_3")
              .to(buttterfly, 4, {opacity:0 }, "label_action_3")
				settting.running = true;
				tl.tweenTo("label_action_2");
            	action_mouseWheel(); // add mouse wheel
		});
	}

	function pause(){
	 tl.pause();  
	}  

function setAllowScroll (){
	console.log('setAllowScroll');
	settting.running = false;
}

	function action_scense_2(){
		tl.tweenTo("label_action_3");
	}

	function action_mouseWheel(){
        $('#slides').bind('mousewheel DOMMouseScroll', function(event){
        	event.preventDefault();

			if (settting.running)
				return false;
			console.log('settting.running');
			settting.running = true;
			//tl.tweenTo("label3");

		    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
		        // scroll up

		    }
		    else {
		        // scroll down
		        action_scense_2();
		    }

		    
		    return false;
		});
	}
	return {
		init:init,
		action_scense_2:action_scense_2
	};
})();		