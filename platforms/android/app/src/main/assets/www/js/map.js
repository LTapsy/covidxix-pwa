function initialLoad(){
  var covid
  fetch("https://cors-anywhere.herokuapp.com/" + "https://coronavirus-tracker-api.herokuapp.com/all", {
      "method": "GET"
  })
  .then(res => res.json())          
  .then(covid => {
      console.log(covid);
      // alert(JSON.stringify(covid));
  
      var map = L.map('map');

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 20,
      id: 'mapbox/streets-v11',
      accessToken: 'pk.eyJ1IjoibHRhcHN5IiwiYSI6ImNrNmpqdmN1MzBjaTEzbm51eHl5eDY0OXQifQ.73Nn_FvmKwm2Q-fLF2nLZw'
      }).addTo(map);
      
      var redIcon = new L.Icon({
          iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
      });


      
      for(x=0;x!=covid.confirmed.locations.length;x++){
        if(covid.confirmed.locations[x].latest != "0"){
          var marker = L.marker([covid.confirmed.locations[x].coordinates.lat,covid.confirmed.locations[x].coordinates.long],{icon: redIcon}).addTo(map).bindPopup("COVID-19: There are "+covid.confirmed.locations[x].latest+ " case/s reported here in "+covid.confirmed.locations[x].province+" , "+covid.confirmed.locations[x].country).openPopup();
          var circle = L.circle([covid.confirmed.locations[x].coordinates.lat, covid.confirmed.locations[x].coordinates.long], {
              color: 'none',//color of the stroke for the radius parameter
              fillColor: 'maroon',//color of the fill for the radius parameter
              fillOpacity: 0.2,
              radius: 500000
          }).addTo(map);
        }
      }


      var current_position, current_accuracy;
      
      function onLocationFound(e) {
      
        if (current_position) {
            map.removeLayer(current_position);
            map.removeLayer(current_accuracy);
        }
      
        var radius = 800;
      
        current_position = L.marker(e.latlng).addTo(map)
          .bindPopup("You are within " + radius + " meters from this point").openPopup();
      
        current_accuracy = L.circle(e.latlng, radius).addTo(map);
      }
      
      function onLocationError(e) {
        alert(e.message);
      }
      
      map.on('locationfound', onLocationFound);
      map.on('locationerror', onLocationError);
      
      function locate() {
        map.locate({setView: true,maxZoom:8});
      }
      
      locate();
      $(".loadingScreen").hide();
  })
  .catch(err => {
      console.log(err);
  });
  
  
  
  }initialLoad();
  
  
  
  
      