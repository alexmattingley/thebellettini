<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<?php // force Internet Explorer to use the latest rendering engine available ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title><?php wp_title(''); ?></title>

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->
		<?php // or, set /favicon.ico for IE10 win ?>
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">
            <meta name="theme-color" content="#121212">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php // wordpress head functions ?>
		<?php wp_head(); ?>
		<?php // end of wordpress head ?>

		<?php // drop Google Analytics Here ?>
		<?php // end analytics ?>
		<?php 

		//Page variables:
		$images_folder = "/wp-content/themes/bellettini-theme/library/images";
		?>

	</head>

	<body>
		<div id="bars">
			<div class="orange"></div>
			<div class="green"></div>
			<div class="red"></div>
		</div>
		<div id="header">
			<div class="container">
				<a href="/"><img id="logo" class="full-width" src="<?php echo $images_folder ?>/logo.jpg" /></a>
				<div id="top-links">
			 	<span class="hidden-xs">
					<span class="top-links">
						 <a href="/about">About Us</a>
						 <a href="http://www.westliving.net/careers/" target="_blank">Careers</a>
					</span>
					<span id="font-size">
						<img class="plus" src="<?php echo $images_folder ?>/plus.png" />
						<img class="reset" src="<?php echo $images_folder ?>/aa.png" />
						<img class="minus" src="<?php echo $images_folder ?>/minus.png" />
					</span>
			 	</span>
				<span id="phone">Call 425-450-0800</span>
				</div>
			</div><!--End Container-->
		</div><!--end header-->
		<div id="navigation" role="navigation">
			<div class="container">
				<div class="row">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							 <span class="sr-only">Toggle navigation</span>
							 <span class="icon-bar"></span>
							 <span class="icon-bar"></span>
							 <span class="icon-bar"></span>
						</button>
					</div> <!--end navbar-header-->
					<div class="collapse navbar-collapse">
						<ul id="main-menu" class="nav navbar-nav">		
							<li class=""><a href="/community">Community</a>
								<ul>
									<li class=""><a href="/community/features">Features & Amenities</a></li>
									<li class=""><a href="/community/floorplans">Floor Plans</a></li>
								</ul>
							</li>
							<li class=""><a href="/neighborhood">Neighborhood</a>
								<ul>
									<li class=""><a href="/neighborhood/vicinity-map">Vicinity Map</a></li>
									<li class=""><a href="/neighborhood/local-attractions">Local Attractions</a></li>
								</ul>
							</li>
							<li class=""><a href="/lifestyle">Lifestyle</a>
								<ul>
									<li class=""><a href="/lifestyle/dining">Dining</a></li>
									<li class=""><a href="/lifestyle/health">Health & Wellness</a></li>
									<li class=""><a href="/lifestyle/travel">Travel</a></li>
									<li class=""><a href="/lifestyle/social">Social</a></li>
									<li class=""><a href="/lifestyle/concierge">Concierge</a></li>
								</ul>
							</li>
							<li class=""><a href="/gallery">Photo Gallery</a></li>
							<li class=""><a href="/contact">Contact</a></li>
							<li class=""><a href="/contact/map">Maps & Directions</a></li>	
						</ul><!--End navbar-nav-->
				 	</div><!--End navbar-collapse-->
				</div><!--end row-->
			</div><!--End container-->
		</div><!--end navigation-->