// this variable will collect the html which will eventually be placed in the side_bar
var vicinityList = "<ul>\n";
var category = "";
var numCatDisplay = 0;
var vicinityMapDiv = "map";

// arrays to hold copies of the markers and html used by the side_bar
// because the function closure trick doesnt work there
var gmarkers = [];
var map = null;


/*
 *
 */
function initialize(vicinities, numVicinity) {

	var mapDiv = document.getElementById(vicinityMapDiv);

	// create the map
	var myOptions = {
		zoom: 15,
		center: new google.maps.LatLng(vicinities[0]['lat'], vicinities[0]['lng']),
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	map = new google.maps.Map(mapDiv, myOptions);

	google.maps.event.addListener(map, 'click', function(){
		infowindow.close();
	});

	// Add markers to the map
	// Set up markers with info windows
	// add the points
	for(x = 0; x < numVicinity; x++){
		var point = new google.maps.LatLng(vicinities[x]['lat'],vicinities[x]['lng']);
		var marker = createMarker(point, vicinities[x]);

// Extending the bounds object with each LatLng
//bounds.extend(point);

//if(x == 0)
	//alert(vicinities[x]['name']);
	}

// Adjusting the map to new bounding box
//map.fitBounds(bounds)

	// put the assembled vicinityList contents into the Listing div
	document.getElementById("vicinity-list").innerHTML = vicinityList + "</ul>\n</li>\n</ul>\n";
}	// end of initialize()


var infowindow = new google.maps.InfoWindow({
	//size: new google.maps.Size(150,50)
});


/*
 * This function picks up the click and opens the corresponding info window
 */
function myclick(i) {
	google.maps.event.trigger(gmarkers[i], "click");

	// scroll to top of map
	//$('html, body').animate({ scrollTop: 150 }, 500);
}



/*
 * A function to create the marker and set up the event window function
 */
function createMarker(latlng, vicinity) {
//function createMarker(latlng, name, html) {
	//var contentString = html;
	var contentString = "<strong>" + vicinity['name'] + "</strong><br />" + vicinity['address'];



	var marker = new google.maps.Marker({
		position: latlng,
		map: map,
		icon: vicinity['marker'],
		zIndex: Math.round(latlng.lat()*-100000)<<5
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.setContent(contentString);
		infowindow.open(map,marker);
	});

	// save the info we need to use later for the side_bar
	gmarkers.push(marker);




	// Only add to vicinity list, if category is not empty.
	// Category for Camellia at Deerwood marker is empty, therefore, it's not added to the list.
	if(vicinity['category'] != ""){
		// if it's a new category, start a new list
		if(category != vicinity['category']){
			// close previous list
			if(category != ""){
				vicinityList += '</ul>\n</li>\n';
			}

			// start new list
			vicinityList += '<li class="vCategory"><b>' + vicinity['category'] + ': </b><ul>\n';

			// set category tracking to new category
			category = vicinity['category'];

			numCatDisplay += 1;
		}

		// add a line to the side_bar html
		vicinityList += '<li><a href="javascript:myclick(' + (gmarkers.length-1) + ')">' + vicinity['name'] + '<\/a></li>';
	}
}