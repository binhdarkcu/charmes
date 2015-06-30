// JavaScript Document
var SiteMain = (function() {
	//INIT
	
	function init(){
		initPage.init();
		menuOjb.init();
	}
	
	//RETURN
	return {
		init:init
	}
})();		

$(document).ready(function(e) {
    SiteMain.init();
});
