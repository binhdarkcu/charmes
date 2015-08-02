// JavaScript Document
var detailPage = (function() {
	
	function init(){
		openMemberShip();
		hoverWedding();
	}
	function openMemberShip(){
		$('.membership .list_item li a').on('click',function(){
			var datapage = $(this).attr('data-page');
			$(".membership_box").css('display','none');
			$("#"+datapage).css('display','block');
			$('.page.membership').removeAttr('class').addClass('page detailPage membership maxheight '+ datapage);
		});
	}
	function hoverWedding(){
		$('.content_wedding .desc .list_item li').hover(function(){
			var selector = $(this).attr('class');
			$('.content_wedding .img_block').css('display','none');
			$("#"+selector).css('display','block');
		});
	}
	function createSelect(){
		$('.selectStyle select').selectBox();
	}
	
	return {
		init:init,
		createSelect:createSelect
	};
})();		
$(window).load(function(){
	detailPage.createSelect();
});