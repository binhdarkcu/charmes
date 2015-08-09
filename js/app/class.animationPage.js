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
              .to(three_left, 1.8, {top:-20, left:-550, opacity: 0})
              .to(three_right,1.8, {top:-50, right:-550, opacity: 0}, '-=1.8')
              .to(tall_tree, 1.2, {opacity:1}, '-=1.6')
              .to(green_circle, 1.7, {opacity:1},'-=.8')
              .to(cloud_01, 1.2, {opacity:1,left: "10%"}, '-=1.3')
              .to(cloud_02, 1.2, {opacity:1, right: "3%"}, '-=1.3')
              .to(text_jardin_2, 1, {opacity:1})
              .to(mouse_click, 1, {opacity:1})
              .to(buttterfly, 1, {opacity:1})
              .to(buttterfly, .6, {opacity:0.4, left: '49.5%'})
              .to(buttterfly, 1.7, {opacity:1, left:'50%'})
		});
	}
	
	return {
		init:init
	};
})();		