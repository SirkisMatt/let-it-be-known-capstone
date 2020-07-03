'use strict';

//const apiKey = 'AIzaSyCKhNaRy9W_3st70sza2WJRW4xXkel4qEQ';
//const mapUrl = `https://www.google.com/maps/@?api='${apiKey}'&map_action=map`;

//function loadMap(){
    
//}

//loadMap();
//let map;
      function initMap() {
        //map options  
        let options = {
          zoom: 10,
          center: new google.maps.LatLng(38.168185,-85.645231),
          mapTypeId: 'terrain'
          }
        // new map
          let map = new google.maps.Map(document.getElementById('map'), options);
      
         // Add marker
         let marker = new google.maps.Marker ({
             position:{lat:38.2527,lng:-85.7585},
             map:map,
             //icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
             //animation: google.maps.Animation.DROP
         });
         let infoWindow = new google.maps.InfoWindow({
             content: "<h1>Breonna Taylor's Murders Are Still Free</h1>"
         });
      
        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        });
    }
        /*addMarker({lat:38.2527,lng:-85.7585});

        // Add Marker Function
        function addMarker(coords){
            let marker = new google.maps.Marker({
                position:coords,
                map:map,
                //icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
                animation: google.maps.Animation.DROP
        })
        };*/

//initMap();

