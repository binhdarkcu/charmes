// JavaScript Document
var animationPage = (function() {
	var tl = null;

	var setting = {
		running : false,
		scroll_number : 0
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
				buttterfly = $('.buttterfly'),
				handtext = $('.handtext'),
				hand_scroll = $('.hand_scroll'),
				arrow_scroll = $('.arrow_scroll'),
				//scense 2
				jewelry_behind = $('.jewelry_behind'),
				jewelry_1 = $('.jewelry_1'),
				jewelry_2 = $('.jewelry_2'),
				tree_2 = $('.tree_2'),
				bg_foot = $('.bg_foot'),
				bg_light = $('.bg_light'),
				two_jewelry = $('.two_jewelry'),
				foot_ring = $('.foot_ring'),
				eli_1 = $('.eli_1'),
				eli_2 = $('.eli_2'),
				eli_3 = $('.eli_3'),
				small_tree = $('.small_tree'),
				bg_overlays  = $('.bg_overlays'),
				fence = $('.fence')
				;

            //banner animation code (only 11 lines)
            tl.to(discover_text, .1, {display:'none'}, "label_action_1")
              .to(text_jardin, 1.1, {opacity:0})
              .to(jewelry_top, 1.1, {opacity:0,display:'none'}, '-=1.1')
              .to(three_left, 5, {top:-70, left:'-30%', opacity: 0})
              .to(three_right,5, {top:-70, right:'-30%', opacity: 0}, '-=5')
              //.to(large_branches, 1, {top: '-13%', opacity: 0 }, '-=4.5')
              .to(green_circle, 1.7, {opacity:1}, '-=4.7')
              .to(cloud_01, 1.2, {opacity:1,left: "10%"}, '-=4')
              .to(cloud_02, 1, {opacity:1, right: "3.5%"}, '-=4')
              .to(tall_tree, 1.2, {opacity:1}, '-=3.5')
              .to(text_jardin_2, 1.2, {opacity:1}, '-=3')
              .to(mouse_click, 1.2, {opacity:1}, '-=3')
              .to(hand_scroll, 2, {display: 'block'},'-=2')
              .to(buttterfly, 2, {css:{opacity:1, marginRight:'0em'}},'-=3')
              .to(arrow_scroll, 1, {display: 'block'},'-=2')
              .to(handtext, 1, {opacity: 1, onComplete:setAllowScroll},'-=4')
             //action 3
              .to(text_jardin_2, 1.2, {opacity:0}, "label_action_2")
              .to(mouse_click, .5, {opacity:0}, "-=1.2")
              .to(hand_scroll, .5, {display: 'none'},'-=1.2')
              .to(arrow_scroll, 1, {display: 'none'},'-=1.2')
              .to(handtext, 1, {display: 'none'}, '-=1.2')
              .to(cloud_01, 9, {left: "-25%"})
              .to(green_circle, 20, {left:'-50%'}, '-=9')
              .to(tall_tree, 4, {left:-400}, '-=20')
              .to(cloud_02, 12, {right: "100%"},  '-=20')
              .to(buttterfly, 4, {bottom: "25em" }, '-=20')
              .to(buttterfly, 2.5, {opacity: 0, width: "5em" , repeat: 3, yoyo:true}, '-=20')
              .to(buttterfly, 5, {bottom: "30em",width: "5.5em", opacity: 1}, '-=14')
              .to(buttterfly, 2, {opacity: 0, repeat: 4, yoyo:true}, '-=13')
              .to(jewelry_behind, 25, {css:{right: "-45em"}}, '-=13')
              .to(jewelry_1, 15, {left: "7%"}, '-=15')
              .to(jewelry_2, 16, {left: "28%"}, '-=17')
              .to(tree_2, 20, {right: "-84em"}, '-=13')
			  .to(bg_light, 13.5, {right: "-37em"}, '-=14')
			  .to(bg_foot, 8, {right: "45%"}, '-=9')
			  .to(two_jewelry, 16, {right: "16%"}, '-=16')
			  .to(buttterfly, 2, {opacity: 0.2,width: "6em", repeat: 4, yoyo:true }, '-=22')
			  .to(buttterfly, 9, {css:{opacity: 0, marginRight: "-15em"}}, '-=20')
			  .to(buttterfly, 15, {opacity: .6,width: "6em"}, '-=15')
			  .to(buttterfly, 10, {css:{opacity: 1, marginRight: "-29.5em"}}, '-=16')
			  .to(small_tree, 1, {opacity: 1})
			  .to(buttterfly, 1, {opacity: 1, onComplete:setAllowScroll})
			  .to(buttterfly, 1, {opacity: 1}, "label_action_3")

			  //animation scense 3
			  
			  .to(tree_2, 14, {right: "26em"})
			  .to(buttterfly, 2, {opacity: 0, repeat: 6, yoyo:true },'-=14')
			  .to(buttterfly, 6, {css:{ bottom: "31em", marginRight: "-20.5em"}},'-=14')
			  .to(jewelry_1, 10, {left: "-40%"}, '-=14')
              .to(jewelry_2, 10, {left: "-25%"}, '-=14')
			  .to(bg_foot, 10, {right: "100%"},"-=14")
			  .to(bg_light, 17, {right: "0em"}, '-=14')
			  
              .to(two_jewelry, 10, {right: "100%"}, '-=17')
              .to(jewelry_behind, 5, {right: "-10em"}, '-=16')
              
              .to(small_tree, 11, {right: "0em"},"-=14")
             
              .to(eli_1, 7, {right: "51em"},"-=13")
              .to(eli_3, 9, {right: "25em"},"-=12")
              .to(eli_2, 8, {right: "30em"},"-=12")
              .to(eli_3, 3, {top: "-18em"},"-=12")
              .to(fence, 8, {right: "-1em"},"-=12")
              
              .to(buttterfly, 3, {css:{opacity: .5, bottom: "33em", marginRight: "-14.5em"}},'-=13')
              //.to(buttterfly, 10, {opacity: .6,bottom:"12em", right: "29em"},"-=12")
              .to(bg_overlays, 5, {opacity: .2},"-=12")
              .to(buttterfly, 1, {opacity: 1})
              .to(buttterfly, 2, {opacity: 0, repeat: 6, yoyo:true })
              .to(buttterfly, 1, {opacity: 1})
			  .to(tree_2, 1, {opacity: 1}, "label_action_4")
				setting.running = true;
				tl.tweenTo("label_action_2");
            	action_mouseWheel(); // add mouse wheel
		});
	}

	function pause(){
	 tl.pause();  
	}  

	function setAllowScroll (){
		console.log('setAllowScroll');
		setting.running = false;
	}

	function action_scense_2(){
		tl.tweenTo("label_action_3");
	}
	function action_scense_3(){
		tl.tweenTo("label_action_4");
	}
	function action_mouseWheel(){
        $('#slides').bind('mousewheel DOMMouseScroll', function(event){
        	event.preventDefault();

			if (setting.running)
				return false;
			setting.running = true;
			//tl.tweenTo("label3");

		    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
		        // scroll up

		    }
		    else {
		        // scroll down
		        setting.scroll_number++;
		        if(setting.scroll_number == 1){
		        	action_scense_2();
		        }
		        if(setting.scroll_number == 2){
		        	action_scense_3();
		        }
		    }

		    
		    return false;
		});
	}
	return {
		init:init,
		action_scense_2:action_scense_2
	};
})();		