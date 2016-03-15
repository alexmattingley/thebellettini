		<div id="footer">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-sm-12 hidden-sm hidden-xs">
						<div class="row">
							<div class="col-sm-4">
								<?php wp_nav_menu( array( 'theme_location' => 'left-footer-links' ) ); ?>
							 </div>
							 <div class="col-sm-4">
								<?php wp_nav_menu( array( 'theme_location' => 'middle-footer-links' ) ); ?>
							 </div>
							 <div class="col-sm-4">
								<?php wp_nav_menu( array( 'theme_location' => 'right-footer-links' ) ); ?>
							 </div>
						</div><!--end row-->
					</div><!--End hidden-sm-->
					<div class="col-md-8 col-sm-12">
						<div class="row">
							<div class="col-sm-6">
								<p>The Bellettini, 1115 108th Ave NE, Bellevue, WA 98004</p>
								<p>Bellevue senior living residences<br> Retirement homes<br> Retirement communities in Washington</p>
							 </div>
							 <div class="col-sm-6">
								<p>
								 &copy; Copyright <?php echo date('Y'); ?>, The Bellettini. All Rights Reserved.<br>
								 Website content by <a href="http://www.staffordcreative.com" target="_blank">Stafford Creative</a><br>
								 Wordpress development by <a href="http://sessionwise.com/" target="_blank">Session Wise</a>
								</p>
							<div id="social_connect" style="font-size:12px;">Connect with Us:</div>
							<div id="social_media" style="font-size:28px;"><a href="https://twitter.com/WESTlivingLLC" target="_blank"><i class="fa fa-twitter-square"></i></a>&nbsp;<a href="https://plus.google.com/111680785284740530618/videos" target="_blank"><i class="fa fa-google-plus-square"></i></a>&nbsp;<a href="https://www.youtube.com/channel/UCWWbscxwc_Z3KpL4gN_D5Iw" target="_blank"><i class="fa fa-youtube-square"></i></a>&nbsp;<a href="https://www.linkedin.com/company/west-living?trk=prof-following-company-logo" target="_blank"><i class="fa fa-linkedin-square"></i></a>&nbsp;<a href="https://www.facebook.com/west.living.3?fref=ts" target="_blank"><i class="fa fa-facebook-square"></i></a></div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<?php wp_footer(); ?>
	</body>

</html> <!-- end of site. what a ride! -->
