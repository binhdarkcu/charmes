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
	    		<img src="images/home/1.jpg" style="display: none;">
<!-- 	    		<span class="mouse-event">Le Jardin</span>
 -->	    	</div>
	    </div>
	
	    <div class="slides-navigation">
	      <a href="#" class="next"></a>
	      <a href="#" class="prev"></a>
	    </div>
	    <div class="scense_container" id="scense_container">
	    	
			<div class="scense_one">
				<div class="scense_first">
					<span class="text-jardin">Le Jardin</span>
					<div class="jewelry_top position_ab"></div>
					<div class="tree_left position_ab"></div>
					<div class="tree_right position_ab"></div>
					<div class="tall-tree position_ab"></div>
					<div class="green_circle position_ab"></div>
					<div class="cloud_01 position_ab"></div>
					<div class="cloud_02 position_ab"></div>
					<span class="text-jardin textjardin02">Le Jardin</span>
					<div class="mouse_click position_ab"></div>
					<div class="hand_scroll position_ab animate-flicker-2"></div>
					<div class="arrow_scroll position_ab animate-flicker-3"></div>
					<span class="handtext position_ab">Scroll down to discover</span>
					<div class="buttterfly position_ab"><img src="images/animation/buttterfly.png"/></div>
				</div>

				<div class="scense_next_1">
					<div class="jewelry_behind position_ab">
						<img src="images/animation/jewelry_behind.png"/>
					</div>
					<div class="jewelry_1 position_ab">
						<a href="#" class="scrolldown-event"><img src="images/animation/jewelry_1.png"/></a>
					</div>
					<div class="jewelry_2 position_ab">
						<a href="#" class="scrolldown-event"><img src="images/animation/jewelry_2.png"/></a>
					</div>
					<div class="tree_2 position_ab">
						<img src="images/animation/tree-2.png"/>
					</div>
					<div class="two_jewelry position_ab">
						<a href="#" class="scrolldown-event"><img src="images/animation/two_jewelry.png"/></a>
					</div>
					<div class="bg_foot position_ab"></div>
					<div class="bg_light position_ab"></div>
					<div class="bg_overlays position_ab"></div>
					<div class="eli_1 position_ab"><img src="images/animation/light_ring_1.png"/></div>
					<div class="eli_2 position_ab"><img src="images/animation/light_ring_2.png"/></div>
					<div class="eli_3 position_ab"><img src="images/animation/light_ring_3.png"/></div>
					<div class="small_tree position_ab">
						<div class="apple_1 position_ab"><img src="images/animation/apple_1.png"/></div>
						<div class="apple_box position_ab"><img src="images/animation/box.png"/></div>
						<div class="apple_2 position_ab"><img src="images/animation/apple_2.png"/></div>
					</div>
					
				</div>
			</div>
			<a href="javascript:void(0)" class="discover_link animate-flicker">Click to discover</a>
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
	            <li><a class="internal" value="filterJewelry">Jewelries<i></i></a></li>
	            <li><a class="internal" href="#">Silverwears<i></i></a></li>
	            <li><a class="internal" value="service_support">Services<i></i></a></li>
	            <li><a class="internal" value="membership">Membership<i></i></a></li>
	        </ul>
	    </nav>
	    <div class="contact">
	    	<a href="#" class="internal" value="about">About</a>
	    	<a href="#" class="internal" value="contact">Contact</a>
	    </div>
	</div>
</section>