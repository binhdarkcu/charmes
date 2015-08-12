<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="en">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<link rel="shortcut icon" href="images/favicon.ico" />
<title>albert lavenda</title>
<meta name="description" content="">
<meta name="author" content="">
<meta name="viewport" content="width=640,minimal-ui">
<link href='http://fonts.googleapis.com/css?family=Adamina' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Playfair+Display+SC:400,700' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Cabin+Sketch:400,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="css/all.css">

<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<?php
	include('merge.php');
?>
<style>
#loadingprocess .dot {
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: none;
  position: absolute;
  right: -56px;
  top: -6px;
  -webkit-transform-origin: 50% 50%;
      -ms-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
}

#loadingprocess .rotate {
  position: absolute;
  top: 50%;
}

#loadingprocess .rotate:nth-child(1) {
  -webkit-animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 0.15s;
          animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 0.15s;
  left: calc(50% - 50px);
}

#loadingprocess .rotate:nth-child(2) {
  -webkit-animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 0.3s;
          animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 0.3s;
  left: calc(50% - 50px);
}

#loadingprocess .rotate:nth-child(3) {
  -webkit-animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 0.45s;
          animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 0.45s;
  left: calc(50% - 50px);
}

#loadingprocess .rotate:nth-child(4) {
  -webkit-animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 0.6s;
          animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 0.6s;
  left: calc(50% - 50px);
}

#loadingprocess .rotate:nth-child(5) {
  -webkit-animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 0.75s;
          animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 0.75s;
  left: calc(50% - 50px);
}

#loadingprocess .rotate:nth-child(6) {
  -webkit-animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 0.9s;
          animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 0.9s;
  left: calc(50% - 50px);
}

#loadingprocess .rotate:nth-child(7) {
  -webkit-animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 1.05s;
          animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 1.05s;
  left: calc(50% - 50px);
}

#loadingprocess .rotate:nth-child(8) {
  -webkit-animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 1.2s;
          animation: spin 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 1.2s;
  left: calc(50% - 50px);
}

#loadingprocess .rotate:nth-child(9) {
  -webkit-animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 1.65s;
          animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 1.65s;
  left: calc(50% + 50px);
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}

#loadingprocess .rotate:nth-child(10) {
  -webkit-animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 1.8s;
          animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 1.8s;
  left: calc(50% + 50px);
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}

#loadingprocess .rotate:nth-child(11) {
  -webkit-animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 1.95s;
          animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 1.95s;
  left: calc(50% + 50px);
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}

#loadingprocess .rotate:nth-child(12) {
  -webkit-animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 2.1s;
          animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 2.1s;
  left: calc(50% + 50px);
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}

#loadingprocess .rotate:nth-child(13) {
  -webkit-animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 2.25s;
          animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 2.25s;
  left: calc(50% + 50px);
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}

#loadingprocess .rotate:nth-child(14) {
  -webkit-animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 2.4s;
          animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 2.4s;
  left: calc(50% + 50px);
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}

#loadingprocess .rotate:nth-child(15) {
  -webkit-animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 2.55s;
          animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 2.55s;
  left: calc(50% + 50px);
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}

#loadingprocess .rotate:nth-child(16) {
  -webkit-animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 2.7s;
          animation: spin2 3s infinite cubic-bezier(0.3, 0.5, 0.7, 0.5) 2.7s;
  left: calc(50% + 50px);
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}

#loadingprocess .dot1 {
  -webkit-animation: rainbow 6s infinite linear 0.15s;
          animation: rainbow 6s infinite linear 0.15s;
}

#loadingprocess .dot2 {
  -webkit-animation: rainbow 6s infinite linear 0.3s;
          animation: rainbow 6s infinite linear 0.3s;
}

#loadingprocess .dot3 {
  -webkit-animation: rainbow 6s infinite linear 0.45s;
          animation: rainbow 6s infinite linear 0.45s;
}

#loadingprocess .dot4 {
  -webkit-animation: rainbow 6s infinite linear 0.6s;
          animation: rainbow 6s infinite linear 0.6s;
}

#loadingprocess .dot5 {
  -webkit-animation: rainbow 6s infinite linear 0.75s;
          animation: rainbow 6s infinite linear 0.75s;
}

#loadingprocess .dot6 {
  -webkit-animation: rainbow 6s infinite linear 0.9s;
          animation: rainbow 6s infinite linear 0.9s;
}

#loadingprocess .dot7 {
  -webkit-animation: rainbow 6s infinite linear 1.05s;
          animation: rainbow 6s infinite linear 1.05s;
}

#loadingprocess .dot8 {
  -webkit-animation: rainbow 6s infinite linear 1.2s;
          animation: rainbow 6s infinite linear 1.2s;
}

#loadingprocess .dot9 {
  -webkit-animation: rainbow2 6s infinite linear 1.65s;
          animation: rainbow2 6s infinite linear 1.65s;
}

#loadingprocess .dot10 {
  -webkit-animation: rainbow2 6s infinite linear 1.8s;
          animation: rainbow2 6s infinite linear 1.8s;
}

#loadingprocess .dot11 {
  -webkit-animation: rainbow2 6s infinite linear 1.95s;
          animation: rainbow2 6s infinite linear 1.95s;
}

#loadingprocess .dot12 {
  -webkit-animation: rainbow2 6s infinite linear 2.1s;
          animation: rainbow2 6s infinite linear 2.1s;
}

#loadingprocess .dot13 {
  -webkit-animation: rainbow2 6s infinite linear 2.25s;
          animation: rainbow2 6s infinite linear 2.25s;
}

#loadingprocess .dot14 {
  -webkit-animation: rainbow2 6s infinite linear 2.4s;
          animation: rainbow2 6s infinite linear 2.4s;
}

#loadingprocess .dot15 {
  -webkit-animation: rainbow2 6s infinite linear 2.55s;
          animation: rainbow2 6s infinite linear 2.55s;
}

#loadingprocess .dot16 {
  -webkit-animation: rainbow2 6s infinite linear 2.7s;
          animation: rainbow2 6s infinite linear 2.7s;
}

@-webkit-keyframes spin2 {
  0% {
    -webkit-transform: rotate(-180deg);
            transform: rotate(-180deg);
    visibility: visible;
  }
  50% {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
    visibility: hidden;
  }
  100% {
    -webkit-transform: rotate(-180deg);
            transform: rotate(-180deg);
    visibility: hidden;
  }
}

@keyframes spin2 {
  0% {
    -webkit-transform: rotate(-180deg);
            transform: rotate(-180deg);
    visibility: visible;
  }
  50% {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
    visibility: hidden;
  }
  100% {
    -webkit-transform: rotate(-180deg);
            transform: rotate(-180deg);
    visibility: hidden;
  }
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
    visibility: visible;
  }
  50% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    visibility: hidden;
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
    visibility: hidden;
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
    visibility: visible;
  }
  50% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    visibility: hidden;
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
    visibility: hidden;
  }
}
@-webkit-keyframes rainbow {
  0% {
    background: #f20d0d;
  }
  25% {
    background: #80f20d;
  }
  50% {
    background: #0df2f2;
  }
  75% {
    background: #7f0df2;
  }
  100% {
    background: #f20d0d;
  }
}
@keyframes rainbow {
  0% {
    background: #f20d0d;
  }
  25% {
    background: #80f20d;
  }
  50% {
    background: #0df2f2;
  }
  75% {
    background: #7f0df2;
  }
  100% {
    background: #f20d0d;
  }
}
@-webkit-keyframes rainbow2 {
  0% {
    background: #80f20d;
  }
  25% {
    background: #0df2f2;
  }
  50% {
    background: #7f0df2;
  }
  75% {
    background: #f20d0d;
  }
  100% {
    background: #80f20d;
  }
}
@keyframes rainbow2 {
  0% {
    background: #80f20d;
  }
  25% {
    background: #0df2f2;
  }
  50% {
    background: #7f0df2;
  }
  75% {
    background: #f20d0d;
  }
  100% {
    background: #80f20d;
  }
}

</style>
</head>
<?php $lang = isset($_REQUEST['lang']) ? $_REQUEST['lang']: "nl";?>

<body class="css_lang_<?php echo $lang;?>">
	<div id="loadingprocess">
		<?php include('modules/includes/loader.php')?>
	</div>
	<div id="container">
        <div class="wrapper">
        	<?php 
				include("modules/home.php");
				include("modules/engagement.php");
				include("modules/wedding.php");
				include("modules/popup-collections.php");
				include("modules/intropage.php");
				include("modules/store.php");
				include("modules/collections.php");
				include("modules/menu_left.php");
				include("modules/about.php");
				include("modules/contact.php");
				include("modules/service_support.php");
				include("modules/membership.php");
				include("modules/filter.php");
			?>
        </div>
    </div>
			<?php include("modules/includes/certified.php");?>
</body>
</html>
<link rel="stylesheet" href="css/jquery.mThumbnailScroller.css">
<script>
(function($){
	$(window).load(function(){
		
		SiteMain.initHoverSlide();
		
		
	});
})(jQuery);
</script>