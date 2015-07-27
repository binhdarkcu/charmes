<section class="page home">
	<div class="menu_top">
		<a href="#" class="icon-homemenu"></a>
		<div class="nav_menu">
			<ul>
				<li><a href="#">Lolly Forever<i></i></a></li>
				<li><a href="#">Safari<i></i></a></li>
				<li><a href="#">Éclair<i></i></a></li>
				<li><a href="#">Le Jardin<i></i></a></li>
				<li><a href="#">Aladdin<i></i></a></li>
				<li><a href="#">Beautiful Mesh<i></i></a></li>
				<li><a href="#">Trés Chér<i></i></a></li>
				<li><a href="#">Happy Diamond<i></i></a></li>
				<li><a href="#">Others<i></i></a></li>
			</ul>
		</div>
	</div>
	<div id="slides">
	    <div class="slides-container">
	    	<div class="item-slide">
	    		<img src="images/home/1.jpg">
	    		<span class="mouse-event">Le Jardin</span>
	    	</div>
	      	<div class="item-slide">
	    		<img src="images/home/2.jpg">
	    		<span>Le Jardin</span>
	    	</div>
	    	<div class="item-slide">
	    		<img src="images/home/3.jpg">
	    		<span>Le Jardin</span>
	    	</div>
	    	<div class="item-slide">
	    		<img src="images/home/4.jpg">
	    		<span>Le Jardin</span>
	    	</div>
	    </div>
	
	    <div class="slides-navigation">
	      <a href="#" class="next"></a>
	      <a href="#" class="prev"></a>
	    </div>
	  </div>
    <script>
	    $(function() {
	      var $slides = $('#slides');
	
	      Hammer($slides[0]).on("swipeleft", function(e) {
	        $slides.data('superslides').animate('next');
	      });
	
	      Hammer($slides[0]).on("swiperight", function(e) {
	        $slides.data('superslides').animate('prev');
	      });
	
	      $slides.superslides({
	        hashchange: false,
	        pagination: false,
	        animation: 'fade'
	      });
	    });
	
	  </script>
</section>
<section class="page">
	<div class="inner_fix fixed nav_bar_home">
	    <div class="left_title">Albert Lavenda</div>
	    <nav>
	        <ul class="list_menu" style="right: 8.5px;">
	            <li><a class="internal" value='engagement'>Engagement<i></i></a></li>
	            <li><a class="internal" value='wedding'>Wedding<i></i></a></li>
	            <li><a class="internal" value="popup-collections">Themes<i></i></a></li>
	            <li><a class="Jewelries goto" pos="Jewelries">Jewelries<i></i></a></li>
	            <li><a class="internal" href="#">Silverwears<i></i></a></li>
	            <li><a class="goto">Services<i></i></a></li>
	            <li><a class="internal" value="membership">Membership<i></i></a></li>
	        </ul>
	    </nav>
	    <div class="contact">
	    	<a href="#" class="internal" value="about">About</a>
	    	<a href="#">Contact</a>
	    </div>
	</div>
</section>