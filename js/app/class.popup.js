// JavaScript Document
var popup = (function() {
	
	function init(){
		get_source_img();
	}
	function openPopup(idDiv){
		$('.popup').css('display','none');
		$(idDiv).css('display','block');
	}
	function get_source_img(){
		$('.row_detail.certified a').on('click',function(){
			openPopup('#pp_certified');
			var src = $(this).find('img').attr('src');
			$('#large_images img').attr('src',src);
		});
	}
	function closePopup(){
		$('.popup').css('display','none');
	}
	
	return {
		init:init,
		openPopup:openPopup,
		closePopup:closePopup
	};
})();	