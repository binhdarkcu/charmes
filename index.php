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

</head>
<?php $lang = isset($_REQUEST['lang']) ? $_REQUEST['lang']: "nl";?>

<body class="css_lang_<?php echo $lang;?>">
	<div id="container">
        <div class="wrapper">
        	<?php 
				include("modules/home.php");
			?>
			<div class="loadPages">
				
			</div>
        </div>
    </div>
</body>
</html>