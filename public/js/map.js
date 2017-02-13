/**
 * [initMap description]
 * @return {[type]} [description]
 */
function initMap() {
  var uluru = {lat: 18.007867, lng: -76.791292};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
