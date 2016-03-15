<?php get_header(); ?>
			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
				<div id="content">
					 <div class="container">
						<div class="row">
							<div id="image-responsive" class="visible-xs">
							 	<img src="/uploads/neighborhood767.jpg"  alt="The Bellettini neighborhood">		 
							</div>
							<div class="col-sm-offset-2 col-sm-10">
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
							<div class="col-sm-2 hidden-xs" id="left-nav" style="clear:both;">		
								<h2><?php echo 'special navs will go here'; ?></h2>
							</div>
							 <div id="content-text" class="col-sm-6">
									<?php the_content(); ?>
							</div>
							<div class="col-sm-4 hidden-xs">
								<img src="/uploads/neighborhood300.jpg"  alt="The Bellettini neighborhood">			
							</div>
					    	<div id="contactwl" class="col-xs-12 col-sm-4">
								<div class="well">
									<h2>Get More Information</h2>
									<div class="instrux">Please complete the form below.<br />Mandatory fields marked *</div>
									<div class="formbuilder-container"></div>
								</div>
					    	</div>
						</div>
					</div>
				</div>
			<?php endwhile; else: ?>
			<?php endif; ?>	
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
<?php get_footer(); ?>
