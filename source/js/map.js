function initialize() {
  var officeLatLng = new google.maps.LatLng(59.93632276, 30.32106467);
  var mapOptions = {
    zoom: 16,
    center: officeLatLng,
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
    scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  // Some circle marker properties
  new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 13,
      fillOpacity: 100,
      fillColor: '#d22856',
      strokeWeight: 10,
      strokeColor: 'white'
    }
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(officeLatLng);
  });
}
var contactsMap = document.querySelector('.contacts__map');
window.addEventListener('load', function() {
  contactsMap.id = 'map-canvas';
  contactsMap.classList.add('contacts__map--js');
});

google.maps.event.addDomListener(window, 'load', initialize);
