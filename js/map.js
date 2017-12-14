// The latitude and longitude of your business / place
var position = [2.318593, 48.862036];

function showGoogleMaps() {
    
    var point = {lat: position[1], lng: position[0]};
    var center = {lat: position[1], lng: position[0]-.01};
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        disableDefaultUI: true,
        center: center
    });
    var marker = new google.maps.Marker({
        position: point,
        map: map,
        animation: google.maps.Animation.DROP
    });
    
}

function load(x, y){
    position = [x, y];
    showGoogleMaps();
}

google.maps.event.addDomListener(window, 'load', showGoogleMaps);