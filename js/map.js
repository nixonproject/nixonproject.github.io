// The latitude and longitude of your business / place
var position = [27.1959739, 78.02423269999997];

function showGoogleMaps() {

    var latLng = new google.maps.LatLng(position[0], position[1]);
    var center = new google.maps.LatLng(position[0], position[1]-.01);

    var mapOptions = {
        zoom: 16, // initialize zoom level - the max value is 21
        streetViewControl: false, // hide the yellow Street View pegman
        scaleControl: true, // allow users to zoom the Google Map
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        disableDefaultUI: true,
        center: center
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Show the default red marker at the location
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP
    });
    
}

function load(x, y){
    position = [x, y];
    showGoogleMaps();
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);