// Fetch earthquake data from the USGS GeoJSON Feed
const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson';
fetch(url)
  .then(response => response.json())
  .then(data => {
    createMap(data.features);
  });

  // Create the map with earthquake data
function createMap(earthquakeData) {
    // Initialize the map centered at a specific location
    const myMap = L.map('map').setView([37, 95], 2);
  
    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(myMap);
  
    // the color based on the depth of the earthquake
    function getColor(depth) {
      return depth > 90 ? 'red' :
             depth > 70 ? 'orange' :
             depth > 50 ? 'yellow' :
             depth > 30 ? 'green' :
             depth > 10 ? 'blue' :
                           'purple';
    }
  
    // Radius based on the magnitude of the earthquake
    function getRadius(magnitude) {
      return magnitude * 4;
    }
  
    // Loop through the earthquake data and create markers
    earthquakeData.forEach(feature => {
      const coordinates = feature.geometry.coordinates;
      const magnitude = feature.properties.mag;
      const depth = coordinates[2];
      const color = getColor(depth);
  
      const marker = L.circleMarker([coordinates[1], coordinates[0]], {
        radius: getRadius(magnitude),
        fillColor: color,
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      }).addTo(myMap);
  
      // Popup with additional information
      marker.bindPopup(`<b>Location:</b> ${feature.properties.place}<br><b>Magnitude:</b> ${magnitude}<br><b>Depth:</b> ${depth} km`);
    });
  
    // Create a legend
    const legend = L.control({ position: 'bottomright' });
    legend.onAdd = function (map) {
      const div = L.DomUtil.create('div', 'info legend');
      const depths = [0, 10, 30, 50, 70, 90];
      
      // Loop through the depths and generate a label with a colored square for each interval
      for (let i = 0; i < depths.length; i++) {
        div.innerHTML += `<i style="background:${getColor(depths[i] + 1)}"></i> ${depths[i]}${depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+'}`;
      }
  
      return div;
    };
    legend.addTo(myMap);
  }