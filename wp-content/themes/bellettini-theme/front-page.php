<?php 
	//Page variables:
	$images_folder = "/wp-content/themes/bellettini-theme/library/images";
?>


<?php get_header(); ?>
		<div id="content">
			<div class="container">
				<div id="banner">
					<img src="<?php echo get_field('featured_banner_image'); ?>" />
				</div>
				<div class="row" id="home_video_panel">
				    <div id="home_video" class="col-md-5">
				        <iframe width="100%" height="250px" src="<?php echo get_field('post_iframe_link') ?>" frameborder="0" allowfullscreen></iframe>
				    </div>
			        <div id="home_video_text" class="col-md-7">
			       		<?php echo get_field('video_description_and_text'); ?>
				        <div class="tdcms-form-actions">
				           <button class="btn"><a href="<?php echo get_field('post_iframe_link') ?>" target="_blank">See the New Video!</a></button>
				        </div>
			        </div>
			    </div>
				<div class="row">
					<div id="content-text" class="col-md-8">
						<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
							
							<?php the_content(); ?>

						<?php endwhile; else: ?>
						<?php endif; ?>	
					</div>
					<div id="lunchTour" class="col-md-4">
				      <a href="/contact"><img class="" src="<?php echo $images_folder ?>/lunch-tour.jpg" /></a><br/>
						<script type='text/javascript' src='http://www.westliving.net/wp-content/themes/duena/js/jquery.wl-formbuilder.js?ver=1.1'></script>
						<script>
						jQuery(document).ready(function($){
							$('body').wl_formBuilder({
								formTitle: 'Contact Us',
								fields: {
									1: 'name',
									2: 'email',
									3: 'phone',
									4: 'message',
								},
								submitText: 'Submit',
								thankyouPage: '/contact/thank-you'
							});
						});
						</script>
					<div class="well">
					  <h2>Get More Information</h2>
					  <div class="instrux">Please complete the form below.<br />Mandatory fields marked *</div>
					  <div class="formbuilder-container"></div>
					</div>
					</div>
				</div> <!--end row-->
			</div>
		</div>
<?php get_footer(); ?>