// JavaScript Document
var detailPage = (function() {
	
	function init(){
		openMemberShip();
		hoverWedding();
		viewmore_Detail();
		viewmore_Detail();
	}
	function openMemberShip(){
		$('.membership .list_item li a').on('click',function(){
			var datapage = $(this).attr('data-page');
			$(".membership_box").css('display','none');
			$("#"+datapage).css('display','block');
			$('.page.membership').removeAttr('class').addClass('page detailPage membership maxheight '+ datapage);
		});
	}
	function viewmore_Detail(){
		$('.product-detail .product-box .button-group .moredetail a').on('click',function(){
			var datapage = $(this).attr('data-page');
			$("#product_detail_box").animate({'opacity': 0},200,function(){
				$("#product_detail_box").hide();
				$("#"+datapage).css({'display':'block','opacity':1});
			});
		});
		$('.back_box a').on('click',function(){
			var datapage = $(this).attr('data-page');
			var hidepage = $(this).attr('data-hide');
			$("#"+ hidepage).animate({'opacity': 0},200,function(){
				$("#"+hidepage).hide();
				$("#"+datapage).css('display','block').animate({'opacity': 1},100);
			});
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