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
		$phone_number = "425-450-0800";
		?>

	</head>

	<body>
		<div id="header">
			<div class="container">
				<a class="col-sm-5" href="/">
					<img id="logo" class="full-width" src="<?php echo $images_folder ?>/logo.jpg" />
				</a>
				<div class="col-sm-7 pull-right" id="top-links">
					<span class="pull-right" id="phone">Call <?php echo $phone_number; ?></span>
				 	<div class="hidden-xs pull-right">
						<div class="top-links">
							 <?php wp_nav_menu( array( 'theme_location' => 'top-links' ) ); ?>
						</div>
						<div id="font-size">
							<img class="plus" src="<?php echo $images_folder ?>/plus.png" />
							<img class="reset" src="<?php echo $images_folder ?>/aa.png" />
							<img class="minus" src="<?php echo $images_folder ?>/minus.png" />
						</div>
				 	</div>
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
						<?php wp_nav_menu( array( 'theme_location' => 'main-nav' ) ); ?>
				 	</div><!--End navbar-collapse-->
				</div><!--end row-->
			</div><!--End container-->
		</div><!--end navigation-->