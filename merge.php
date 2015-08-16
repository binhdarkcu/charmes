<?PHP
	$mergeJS = false;

	$array = array(	
		"js/lib/jquery-1.11.1.min.js",
		"js/lib/TweenMax.min.js",
		"js/lib/SmoothScroll.js",
		"js/lib/icheck.js",
		"js/lib/scrolltobyspeed.jquery.js",
		"js/lib/jquery.mThumbnailScroller.js",
		"js/lib/hammer.min.js",
		"js/lib/jquery.animate-enhanced.min.js",
		"js/lib/jquery.superslides.js",
		"js/lib/jquery.selectBox.js",
		"js/lib/jquery.mousewheel.min.js",

		"js/app/class.animationPage.js",

		"js/app/class.slider.js",
		"js/app/class.menu.js",
		"js/app/class.initPage.js",
		"js/app/class.pageDetail.js",
		"js/app/class.viewProduct.js",
		"js/app/class.detail.js",
		"js/app/class.popup.js",
		"js/app/class.loading.js",
		"js/app/class.responsize.js",
		"js/app/class.siteMain.js"
	);

	$domainName =  isset($_SERVER['SERVER_NAME']) && $_SERVER['SERVER_NAME'] != "" ? $_SERVER['SERVER_NAME'] : "" ;
	if($domainName == "")
		$domainName =  isset($_SERVER['HTTP_HOST']) && $_SERVER['HTTP_HOST'] != "" ? $_SERVER['HTTP_HOST'] : "" ;

	if($mergeJS){
		if($domainName == "localhost"){
			$str = '';
			foreach ($array as $value) {
				$str .= file_get_contents($value);
			}
			
			if ($fp = fopen("all-src.js", "w")) {
				fputs( $fp, $str, strlen( $str ) );
				fclose( $fp );
				$error_msg = 'updated complete.';
			} else {
				$error_msg = "error update";
			}	
		
			$min_documentRoot = substr(__FILE__, 0, -9);
			exec('jsmin <"'.$min_documentRoot.'all-src.js" >"'.$min_documentRoot.'all.js"');
		}
?>
<script src="all.js"></script>

<?PHP			
		
	}
	else{
		foreach ($array as $value) {
?>
<script src="<?php echo $value ?>"></script>
<?PHP			
		}		
	}
?>