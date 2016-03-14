<?php 
	//Page variables:
	$images_folder = "/wp-content/themes/bellettini-theme/library/images";
?>


<?php get_header(); ?>
		<div id="content">
			<div class="container">
				<div id="banner">
					<img src="<?php echo $images_folder ?>/home940.jpg" />
				</div>
				<div class="row" id="home_video_panel">
				    <div id="home_video" class="col-md-5">
				        <a href="https://www.youtube.com/watch?v=7xAlWy0wu40" rel="prettyPhoto"><img src="<?php echo $images_folder ?>/video_button_sm.jpg" /></a>
				    </div>
			        <div id="home_video_text" class="col-md-7">
			       		<?php echo get_field('video_description_and_text'); ?>
				        <div class="tdcms-form-actions">
				           <input type="button" class="btn" value="See the new Video!" onClick="window.open('http://www.westliving.net/thank-you-notes/', '_blank')" style="margin:-12px 0 12px 0;"> <!-- http://www.westliving.net/thank-you-notes/ -->
				        </div>
			        </div>
			    </div>
				<div class="row">
					<div id="content-text" class="col-md-8">
						<h1 id="homeHeading">BELLEVUE SENIOR LIVING </h1>
						<p><h1>WELCOME TO WORLD CLASS-SERVICE. WELCOME TO COMFORTABLE, ELEGANT SURROUNDINGS. WELCOME TO SENIOR LIVING IN BELLEVUE, WESTLIVING STYLE.</h1>
						Here at The Bellettini, we're dedicated to offering a true sense of belonging to seniors and their families. It's a feeling you'll notice the moment you're invited to &ldquo;make yourself at home&rdquo; and continues through every thoughtful, personal detail.  <br />
						<br />
						As part of the <a href="http://www.westliving.net" target="_blank">WESTliving</a> family, we understand the importance of world-class service. In fact, we even have a name for it: WESTclass service. We hire carefully and train extensively. The result? Team Members who are empowered to make a meaningful difference in the lives of those we serve and inspired to anticipate your next need - before you even know you have a next need. <br />
						<br />
						From independent living and assisted living the WESTliving experience creates and encourages a sense of belonging.  Our culture of hospitality in senior living also promotes privacy, dignity and a sense of empowerment.  A variety of activities including gardening, art classes, local tours and tai chi await here at The Bellettini. Not to mention it's right in the heart of Bellevue, Washington sitting next to the Bellevue Library.  <br />
						<br />
						Come see for yourself how The Bellettini senior living community can become your warm, welcoming place to call home. We'd love to show you around and allow you to experience for yourself a true sense of belonging!  We are here to serve!   <br /></p>
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