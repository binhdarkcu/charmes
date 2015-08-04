// JavaScript Document
var Loading = (function() {
	// PARAMATER
	var setting = {
		runOneTime	:	true,
		divReady	:	'divReadyLoader',
		classReady	:	'readyloading',
		divRun		:	'divRun',
		classRun	:	'runloading'
	}
	var imageList_Ready = new Array(
		"images/home/1.jpg",
		"images/home/2.jpg",
		"images/home/3.jpg"
	);
	
	var imageList_Run = new Array(
		

		"images/icon-menu.png",
		"images/gemstone.png",
		"images/precious.png",
		
		"images/precision.png",
		"images/conceptual.png",

		"images/meticulous.png",
		"images/warranty.png",
		"images/engagement/img_view_1.png",
		"images/wedding/ring.jpg",
		"images/wedding/flower.jpg",
		"images/wedding/img_view_2.png",
		"images/img_view_4.png",
		"images/img_view_3.png",
		"images/contact-house.png",
		"images/social.png",
		"images/search.png",
		"images/line_v.png",
		"images/cart.png",
		"images/note.png",
		"images/4-icon-2.png",
		"images/question.png",
		"images/inner-menu.png",
		"images/br-menu.png"	
	);
	// READY LOADING	
	function ready(){
		$('<div style="display:none;" id="' + setting.divReady + '"></div>').prependTo('body');
		var lenghtArray = imageList_Ready.length;;
		for(i=0; i<lenghtArray; i++){
			$('#' + setting.divReady).append('<img class="' + setting.classReady + '" onload="Loading.checkReadyloading(this);" src="' + imageList_Ready[i]  + '" />');
		}		
	}
	
	function checkReadyloading(obj){
		$(obj).removeClass(setting.classReady);
		var totalLoading = $('#' + setting.divReady + ' img.' + setting.classReady).length;
		if(totalLoading == 0)
		{
			if(setting.runOneTime){
				run();
				setting.runOneTime = false;
			}//endif
		}//end if
	}
		
	// RUN LOADING 
	function run(){
		$('<div style="display:none;" id="' + setting.divRun + '"></div>').prependTo('body');
		var lenghtArray = imageList_Run.length;;
		for(i=0; i<lenghtArray; i++){
			$('#' + setting.divRun).append('<img class="' + setting.classRun + '" onload="Loading.checkRunloading(this);" src="' + imageList_Run[i]  + '" />');
		}		
	}
	
	var timeToDisplay = false;
	function checkRunloading(obj){
		$('#container').hide();
		$(obj).removeClass(setting.classRun);
		var totalLoading = $('#' + setting.divRun + ' img').length ;
		var value_percent = Math.round((totalLoading - $('#' + setting.divRun + ' img.' + setting.classRun).length )*100/totalLoading);
		
		$('#loadingprocess').show();
			
		if(value_percent == 100){
			display();
			$('#container').show();
			$('#loadingprocess').hide();
			$("html, body").animate({ scrollTop: 0 }, 100);
		}
	}
	
	// RESULT
	function display(){
		//remove DIV TEMP
		$('#' + setting.divRun).remove();
		$('#' + setting.divReady ).remove();
	}
		
	// TRACK 
	function track(msg){
		try
		{
			console.log(msg);
		}
		catch(err)
		{
		}		
	}	
	// return
	return {
		ready:ready,
		display:display,
		checkReadyloading:checkReadyloading,
		checkRunloading:checkRunloading
	}
})();

$(document).ready(function(e) {	
    Loading.ready();
});
