var map = L.map('map').setView([4.628020469146535, -74.06588750401777], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Cargar archivo GeoJSON 
fetch('./map.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data, {
      style: {
        color: "blue",
        weight: 2,
        fillColor: "lightblue",
        fillOpacity: 0.5
      },
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.nombre) {
          layer.bindPopup("<b>" + feature.properties.nombre + "</b>");
        }
      }
    }).addTo(map);
  });
