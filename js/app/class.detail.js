// JavaScript Document
var detailPage = (function() {
	
	function init(){
		openMemberShip();
	}
	function openMemberShip(){
		$('.membership .list_item li a').on('click',function(){
			var datapage = $(this).attr('data-page');
			$(".membership_box").css('display','none');
			$("#"+datapage).css('display','block');
			$('.page.membership').removeAttr('class').addClass('page detailPage membership maxheight '+ datapage);
		});
	}
	return {
		init:init
	};
})();		

