var geocoder = new google.maps.Geocoder();

function geocoderCallback(results, status, map){
  if (status == google.maps.GeocoderStatus.OK) {
    var position = results[0].geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: position
    });
    map.setCenter(position);
  };
}

function centerOnUserLocation(map) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
       initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
       map.setCenter(initialLocation);
       smoothZoom(map, 13, 8);
    });
  };
};

function textSearchMap(map) {
  var findCenterFromGeocoderResults = function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var position = results[0].geometry.location
      map.setCenter(position);
      map.setZoom(14);
    } else {
      console.log(status);
    }
  };
  var geocoderOptions = { address: $('.center-on').val() };
  geocoder.geocode( geocoderOptions, findCenterFromGeocoderResults);
};

function addMarkers(map) {
  var showMarkerFromGeocoderResults = function(results, status) {
    geocoderCallback(results, status, map);
  };
  $('.address').each(function(index, element) {
    var geocoderOptions = { address: $(element).text() };
    geocoder.geocode(geocoderOptions, showMarkerFromGeocoderResults);
  });
}

function addInfoWindows(map) {
  var showMarkerFromGeocoderResults = function(results, status) {
    geocoderCallback(results, status, map);
  };
  request('GET', '/jobs', 'json')
  .done(function(response){
    $.each(response, function(index, job){
      var geocoderOptions = { address: job.postcode };
      geocoder.geocode( geocoderOptions, showMarkerFromGeocoderResults);
      var infoWindowContent = '<div id="info-window-container">' + '<a href="/jobs/' + job.id + '"><h3>' + job.title + '</h3></a><p>' + job.description + '</p></div>';
      var infowindow = new google.maps.InfoWindow({
        content: infoWindowContent
      });
      // google.maps.event.addListener(marker, 'click', function() {
      //   $('*[id*=info-window-content]:visible').each(function() {
      //     $(this).parent().parent().parent().parent().hide();
      //   });
      //   infowindow.open(map, marker);
      // });
    });
  });
};

function initIndexMap() {
  var mapOptions = indexMapOptions;
  var map = new google.maps.Map(document.getElementById('jobs-index-map'), mapOptions);
  addInfoWindows(map);
  $('#by-location').on('click', function() {
    centerOnUserLocation(map);
  });
  $('#jobs-index-map-search').keypress(function(e) {
    if (e.which == 13) {
      var inputAddress = $('#jobs-index-map-search').val();
      $('#jobs-index-map-search').val('');
      $('.center-on').val(inputAddress);
      textSearchMap(map);
    };
  });
};

function initShowMap() {
  var mapOptions = showMapOptions;
  var map = new google.maps.Map(document.getElementById('job-show-map'), mapOptions);
  addMarkers(map);
};