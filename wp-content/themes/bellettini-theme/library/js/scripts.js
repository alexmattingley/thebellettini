/*
 * This file should contain any js scripts you want to add to the site.
 * Instead of calling it in the header or throwing it inside wp_head()
 * this file will be called automatically in the footer so as not to
 * slow the page load.
*/


/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;

function loadGravatars() {
  // set the viewport using the function above
  viewport = updateViewportDimensions();
  // if the viewport is tablet or larger, we load in the gravatars
  if (viewport.width >= 768) {
  jQuery('.comment img[data-gravatar]').each(function(){
    jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
  });
	}
} // end function


//Function create_form is responsible for creating various contact forms throughout the site.
function create_form(){
  //create contact form for contact page if we are on contact page
  if(jQuery('.page-template-page-contact').length != 0){
    jQuery(document).ready(function($){
       jQuery('body').wl_formBuilder({
          formTitle: 'Contact Us',
          fields: {
             1: 'name',
             2: 'email',
             3: 'phone',
             4: 'address',
             5: 'city',
             6: 'state',
             7: 'zip',
             8: 'message'
          },
          submitText: 'Submit',
          thankyouPage: 'contact/thank-you'
       });
    });
  }else {
    //create sidebare contact page
    jQuery('body').wl_formBuilder({
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
  }
}


function create_vicinty_map(){
  var vicinities = new Array();
  vicinities[0] = new Array();
          vicinities[0]['category'] = "The Bellettini";
          vicinities[0]['name'] = "The Bellettini";
          vicinities[0]['address'] = "1115 108th Ave NE<br/> Bellevue, WA 98004";
          vicinities[0]['lat'] = 47.620874;
          vicinities[0]['lng'] = -122.197114;
          vicinities[0]['marker'] = "http://google.com/mapfiles/ms/micons/red-dot.png";vicinities[1] = new Array();
  vicinities[1]['category'] = "Arts";
  vicinities[1]['name'] = "Tateuchi Center";
  vicinities[1]['address'] = "855 106th Avenue NE Suite 150<br />Bellevue, WA 98004";
  vicinities[1]['lat'] = 47.6189193;
  vicinities[1]['lng'] = -122.1995247;
  vicinities[1]['marker'] = "http://maps.google.com/mapfiles/ms/micons/arts.png";
  vicinities[2] = new Array();
  vicinities[2]['category'] = "Arts";
  vicinities[2]['name'] = "Bellevue Art Museum";
  vicinities[2]['address'] = "510 Bellevue Way NE<br />Bellevue, WA 98004";
  vicinities[2]['lat'] = 47.6153172;
  vicinities[2]['lng'] = -122.2011678;
  vicinities[2]['marker'] = "http://maps.google.com/mapfiles/ms/micons/arts.png";
  vicinities[3] = new Array();
  vicinities[3]['category'] = "City Resources";
  vicinities[3]['name'] = "US Post Office";
  vicinities[3]['address'] = "1171 Bellevue Way NE<br />Bellevue, WA 98004";
  vicinities[3]['lat'] = 47.620767;
  vicinities[3]['lng'] = -122.2017153;
  vicinities[3]['marker'] = "http://maps.google.com/mapfiles/ms/micons/red-pushpin.png";
  vicinities[4] = new Array();
  vicinities[4]['category'] = "City Resources";
  vicinities[4]['name'] = "Bellevue Library";
  vicinities[4]['address'] = "1111 110th Ave NE<br>Bellevue, WA 98004";
  vicinities[4]['lat'] = 47.6201601;
  vicinities[4]['lng'] = -122.1943373;
  vicinities[4]['marker'] = "http://maps.google.com/mapfiles/ms/micons/red-pushpin.png";
  vicinities[5] = new Array();
  vicinities[5]['category'] = "City Resources";
  vicinities[5]['name'] = "Meydenbauer Convention Center";
  vicinities[5]['address'] = "11100 NE 6th Street<br />Bellevue, WA 98004";
  vicinities[5]['lat'] = 47.615916;
  vicinities[5]['lng'] = -122.191856;
  vicinities[5]['marker'] = "http://maps.google.com/mapfiles/ms/micons/red-pushpin.png";
  vicinities[6] = new Array();
  vicinities[6]['category'] = "Grocery Stores";
  vicinities[6]['name'] = "QFC";
  vicinities[6]['address'] = "10116 NE 8th St Bellevue<br />WA 98004";
  vicinities[6]['lat'] = 47.6185542;
  vicinities[6]['lng'] = -122.2054362;
  vicinities[6]['marker'] = "http://maps.google.com/mapfiles/ms/micons/groecerystore.png";
  vicinities[7] = new Array();
  vicinities[7]['category'] = "Grocery Stores";
  vicinities[7]['name'] = "Whole Foods";
  vicinities[7]['address'] = "888 116th Ave NE<br />Bellevue, WA 98004";
  vicinities[7]['lat'] = 47.6185386;
  vicinities[7]['lng'] = -122.1845645;
  vicinities[7]['marker'] = "http://maps.google.com/mapfiles/ms/micons/groecerystore.png";
  vicinities[8] = new Array();
  vicinities[8]['category'] = "Lodging";
  vicinities[8]['name'] = "Hyatt Regency Bellevue";
  vicinities[8]['address'] = "900 Bellevue Way NE<br />Bellevue, WA 98004";
  vicinities[8]['lat'] = 47.61828;
  vicinities[8]['lng'] = -122.201031;
  vicinities[8]['marker'] = "http://maps.google.com/mapfiles/ms/micons/lodging.png";
  vicinities[9] = new Array();
  vicinities[9]['category'] = "Medical Centers";
  vicinities[9]['name'] = "Group Health Bellevue Medical Center";
  vicinities[9]['address'] = "11511 NE 10th St<br />Bellevue, WA 98004";
  vicinities[9]['lat'] = 47.6186263;
  vicinities[9]['lng'] = -122.1864973;
  vicinities[9]['marker'] = "http://maps.google.com/mapfiles/ms/micons/hospitals.png";
  vicinities[10] = new Array();
  vicinities[10]['category'] = "Medical Centers";
  vicinities[10]['name'] = "Overlake Hospital Medical Center";
  vicinities[10]['address'] = "1035 116th Ave NE<br />Bellevue, WA 98004";
  vicinities[10]['lat'] = 47.61972;
  vicinities[10]['lng'] = -122.187574;
  vicinities[10]['marker'] = "http://maps.google.com/mapfiles/ms/micons/hospitals.png";
  vicinities[11] = new Array();
  vicinities[11]['category'] = "Medical Centers";
  vicinities[11]['name'] = "Virginia Mason Bellevue Medical Center";
  vicinities[11]['address'] = "222 112th Ave NE<br />Bellevue, WA 98004";
  vicinities[11]['lat'] = 47.6126673;
  vicinities[11]['lng'] = -122.190135;
  vicinities[11]['marker'] = "http://maps.google.com/mapfiles/ms/micons/hospitals.png";
  vicinities[12] = new Array();
  vicinities[12]['category'] = "Parks & Gardens";
  vicinities[12]['name'] = "McCormick Park";
  vicinities[12]['address'] = "11190 NE 12th Street<br />Bellevue, WA 98004";
  vicinities[12]['lat'] = 47.6210464;
  vicinities[12]['lng'] = -122.1910576;
  vicinities[12]['marker'] = "http://maps.google.com/mapfiles/ms/micons/tree.png";
  vicinities[13] = new Array();
  vicinities[13]['category'] = "Parks & Gardens";
  vicinities[13]['name'] = "Bellevue Botanical Garden";
  vicinities[13]['address'] = "12001 Main St<br />Bellevue, WA 98005";
  vicinities[13]['lat'] = 47.609982;
  vicinities[13]['lng'] = -122.1810055;
  vicinities[13]['marker'] = "http://maps.google.com/mapfiles/ms/micons/tree.png";
  vicinities[14] = new Array();
  vicinities[14]['category'] = "Parks & Gardens";
  vicinities[14]['name'] = "Bellevue Downtown Park";
  vicinities[14]['address'] = "10201 NE 4th St<br />Bellevue, WA 98004";
  vicinities[14]['lat'] = 47.613791;
  vicinities[14]['lng'] = -122.2042613;
  vicinities[14]['marker'] = "http://maps.google.com/mapfiles/ms/micons/tree.png";
  vicinities[15] = new Array();
  vicinities[15]['category'] = "Restaurants";
  vicinities[15]['name'] = "Seastar";
  vicinities[15]['address'] = "205 108th Ave NE<br />Bellevue, WA 98004";
  vicinities[15]['lat'] = 47.6123928;
  vicinities[15]['lng'] = -122.1965487;
  vicinities[15]['marker'] = "http://maps.google.com/mapfiles/ms/micons/restaurant.png";
  vicinities[16] = new Array();
  vicinities[16]['category'] = "Restaurants";
  vicinities[16]['name'] = "Daniels Broiler";
  vicinities[16]['address'] = "10500 NE 8th St<br />Bellevue, WA 98004";
  vicinities[16]['lat'] = 47.617709;
  vicinities[16]['lng'] = -122.2002356;
  vicinities[16]['marker'] = "http://maps.google.com/mapfiles/ms/micons/restaurant.png";
  vicinities[17] = new Array();
  vicinities[17]['category'] = "Restaurants";
  vicinities[17]['name'] = "John Howie Steakhouse";
  vicinities[17]['address'] = "11111 NE 8th St #125<br />Bellevue, WA 98004";
  vicinities[17]['lat'] = 47.616604;
  vicinities[17]['lng'] = -122.192653;
  vicinities[17]['marker'] = "http://maps.google.com/mapfiles/ms/micons/restaurant.png";
  vicinities[18] = new Array();
  vicinities[18]['category'] = "Shopping";
  vicinities[18]['name'] = "Bellevue Galleria";
  vicinities[18]['address'] = "550 106th Avenue NE<br />Bellevue, WA 98004";
  vicinities[18]['lat'] = 47.6151363;
  vicinities[18]['lng'] = -122.1981458;
  vicinities[18]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  vicinities[19] = new Array();
  vicinities[19]['category'] = "Shopping";
  vicinities[19]['name'] = "University Book Store";
  vicinities[19]['address'] = "990 102nd Avenue NE<br />Bellevue, WA 98004";
  vicinities[19]['lat'] = 47.6188973;
  vicinities[19]['lng'] = -122.203898;
  vicinities[19]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  vicinities[20] = new Array();
  vicinities[20]['category'] = "Shopping";
  vicinities[20]['name'] = "Lincoln Square";
  vicinities[20]['address'] = "700 Bellevue Way NE #310<br />Bellevue, WA 98004";
  vicinities[20]['lat'] = 47.6166585;
  vicinities[20]['lng'] = -122.2013727;
  vicinities[20]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  vicinities[21] = new Array();
  vicinities[21]['category'] = "Shopping";
  vicinities[21]['name'] = "Bellevue Square";
  vicinities[21]['address'] = "575 Bellevue Square<br />Bellevue, WA 98004";
  vicinities[21]['lat'] = 47.615624;
  vicinities[21]['lng'] = -122.203553;
  vicinities[21]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  vicinities[22] = new Array();
  vicinities[22]['category'] = "Shopping";
  vicinities[22]['name'] = "Barnes & Noble";
  vicinities[22]['address'] = "626 106th Ave NE<br />Bellevue, WA 98004";
  vicinities[22]['lat'] = 47.61668;
  vicinities[22]['lng'] = -122.198073;
  vicinities[22]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  vicinities[23] = new Array();
  vicinities[23]['category'] = "Shopping";
  vicinities[23]['name'] = "The Bravern";
  vicinities[23]['address'] = "11111 NE 8th St<br />Bellevue, WA 98004";
  vicinities[23]['lat'] = 47.616604;
  vicinities[23]['lng'] = -122.192653;
  vicinities[23]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  vicinities[24] = new Array();
  vicinities[24]['category'] = "Shopping";
  vicinities[24]['name'] = "Home Depot";
  vicinities[24]['address'] = "325 120th Avenue NE<br />Bellevue, WA 98005";
  vicinities[24]['lat'] = 47.6134562;
  vicinities[24]['lng'] = -122.1805578;
  vicinities[24]['marker'] = "http://maps.google.com/mapfiles/ms/micons/shopping.png";
  ;
  var numVicinity = 24;
   initialize(vicinities, numVicinity);
}


//Remove any clases that we dont need from that photo gallery images, and then add in relevant classes.
function photo_gallery_class(){
  jQuery('.gallery-thumbs img').removeClass();
  jQuery('.gallery-thumbs img').addClass('col-xs-4 col-md-4');
}

function increase_font_size(){
  var content_font_size = jQuery('#content').css('font-size').replace('px', '');
  content_font_size = parseInt(content_font_size);
  if(content_font_size < 21){
    var new_content_size = parseInt(content_font_size + 2);
    new_content_size = new_content_size + 'px';
    jQuery('#content').css('font-size', new_content_size);
  }
}

function decrease_font_size(){
  var content_font_size = jQuery('#content').css('font-size').replace('px', '');
  content_font_size = parseInt(content_font_size);
  if(content_font_size > 11){
    var new_content_size = parseInt(content_font_size - 2);
    new_content_size = new_content_size + 'px';
    jQuery('#content').css('font-size', new_content_size);
  }

}

jQuery('img.plus').on('click', function(){
  increase_font_size();
});

jQuery('img.minus').on('click',function(){
  decrease_font_size();
});

/*
 * document ready
*/
jQuery(document).ready(function($) {

  create_form();
  loadGravatars();
  photo_gallery_class();


});

/*
 * window.load
*/

jQuery(window).load(function($){
  create_vicinty_map();
});
