// map.js
var currentFarm = {};

var map = L.map('map').setView([14.68797, 121.02264], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var markerVillaSabina = L.marker([14.68797, 121.02264]).addTo(map)
  .bindPopup("Villa Sabina Subdivision");

var markerNovaliches = L.marker([14.72949, 121.03891]).addTo(map)
  .bindPopup("Novaliches, Quezon City");

markerVillaSabina.on('click', () => {
  currentFarm = {
    name: 'Villa Sabina Subdivision',
    size: '50 hectares',
    age: '15 years',
    type: 'Residential',
    address: 'Quezon City',
    description: 'Beautiful, peaceful area.',
    directory: {
      name: 'John Doe',
      position: 'Manager',
      contact: '+639123456789'
    },
    image: './images.jpg',
    skill: {
      name: 'Juan Cruz',
      skill: 'Planting and Irrigation',
      contact: '+639223456789'
    },
    analysis: 'Good soil, high rainfall, low pest risk.'
  };
  showFarmProfileFromCurrent();
});

markerNovaliches.on('click', () => {
  currentFarm = {
    name: 'Novaliches Farm',
    size: '80 hectares',
    age: '10 years',
    type: 'Commercial',
    address: 'Quezon City',
    description: 'Large-scale farming operations.',
    directory: {
      name: 'Jane Smith',
      position: 'Farm Manager',
      contact: '+639876543210'
    },
    image: './nova.jpg',
    skill: {
      name: 'Maria Reyes',
      skill: 'Harvesting and Logistics',
      contact: '+639998877665'
    },
    analysis: 'High productivity, mechanized tools in use.'
  };
  showFarmProfileFromCurrent();
});
