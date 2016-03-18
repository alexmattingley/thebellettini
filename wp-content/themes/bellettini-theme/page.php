<?php get_header();
			if ( have_posts() ) : while ( have_posts() ) : the_post(); 
			function get_sidebar_menu(){
				$sidebar_menu = get_field('sidebar_menu');
				$sidebar_menu = strtolower($sidebar_menu);
				switch ($sidebar_menu){
					case 'community':
					 	wp_nav_menu( array( 'theme_location' => 'community' ) );
						break;
					case 'neighborhood':
						wp_nav_menu( array( 'theme_location' => 'neighborhood' ) );
						break;
					case 'lifestyle':
						wp_nav_menu( array( 'theme_location' => 'lifestyle' ) );
						break;
					case 'contact':
						wp_nav_menu( array( 'theme_location' => 'contact' ) );
						break;
					default:
						echo "<a href='#'>" . get_the_title() . "</a>";
				}
			}

			?>


				<div id="content">
					<div class="container">
						<div class="row">
							<div id="image-responsive" class="visible-xs visible-sm">
							 	<?php echo the_post_thumbnail( 'full' ); ?>		 
							</div>
							<div id="bars" class="visible-xs visible-sm">
								<div class="orange"></div>
								<div class="green"></div>
								<div class="red"></div>
							</div>
							<div class="col-md-offset-2 col-md-10">
							 	<h1>
							 	<?php 
							 		if(get_field('page_header')){
							 			echo get_field('page_header');
							 		}else {
							 			echo get_the_title();
							 		} 
							 	?>
							 	</h1>
							</div>
							<div class="col-md-2 hidden-xs hidden-sm" id="left-nav" style="clear:both;">		
								<?php get_sidebar_menu(); ?>
							</div>
							 <div id="content-text" class="col-md-6">
									<?php the_content(); ?>
							</div>
							<div class="col-md-4 hidden-xs hidden-sm">
								<img src="<?php echo get_field('sidebar_image'); ?>" alt="">		
							</div>
					    	<div id="contactwl" class="col-xs-12 col-md-4 pull-right">
								<div class="well">
									<h2>Get More Information</h2>
									<div class="instrux">Please complete the form below.<br />Mandatory fields marked *</div>
									<div class="formbuilder-container"></div>
								</div>
					    	</div>
						</div>
					</div>
				</div>
				<div id="bars" class="hidden-xs hidden-sm">
					<div class="orange"></div>
					<div class="green"></div>
					<div class="red"></div>
				</div>
			<?php endwhile; else: ?>
			<?php endif; ?>	
<?php get_footer(); ?>
