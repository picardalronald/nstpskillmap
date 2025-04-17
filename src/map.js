
  // Replace with your actual API key
  const API_KEY ="AIzaSyDi4qSDRTSUMjDz1FPEOSCCZjj9tiEO9w0";

  // Load the Google Maps script dynamically
  function loadMap() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  // Called after the Google Maps script is loaded
  function initMap() {
    var villaSabina = { lat: 14.68797, lng: 121.02264 }; // Villa Sabina
    var novaliches = { lat: 14.72949, lng: 121.03891 }; // Novaliches

    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: villaSabina,
    });

    // Marker 1: Villa Sabina
    const markerVillaSabina = new google.maps.Marker({
      position: villaSabina,
      map: map,
      title: "Villa Sabina Subdivision, Quezon City"
    });

    // Marker 2: Novaliches
    const markerNovaliches = new google.maps.Marker({
      position: novaliches,
      map: map,
      title: "Novaliches, Quezon City"
    });

    // Marker 1: Villa Sabina
markerVillaSabina.addListener('click', function() {
  showFarmProfile(
    'Villa Sabina Subdivision',
    '50 hectares',
    '15 years',
    'Residential',
    'Quezon City',
    'Beautiful, peaceful area.',
    'John Doe',
    'Manager',
    '+639123456789',
    './images.jpg' // <-- Villa Sabina image
  );
  showSkillMap('John Doe', 'Agriculture', 'Villa Sabina Subdivision', '+639123456789');
  showAnalysis('Villa Sabina is a prime residential area with a lot of agricultural activities.');
});

// Marker 2: Novaliches
markerNovaliches.addListener('click', function() {
  showFarmProfile(
    'Novaliches Farm',
    '80 hectares',
    '10 years',
    'Commercial',
    'Quezon City',
    'Large-scale farming operations.',
    'Jane Smith',
    'Farm Manager',
    '+639876543210',
    './nova.jpg' // <-- Different image for Novaliches
  );
  showSkillMap('Jane Smith', 'Farming', 'Novaliches Farm', '+639876543210');
  showAnalysis('Novaliches focuses on industrial farming with state-of-the-art facilities.');
});
  }

  // Load the map as soon as the page is ready
  window.onload = loadMap;


