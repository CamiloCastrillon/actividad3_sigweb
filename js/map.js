var map = L.map('map', {
    maxBounds: L.latLngBounds(
        L.latLng(3.50, -76.52), // Esquina superior izquierda del área permitida
        L.latLng(3.47, -76.46)  // Esquina inferior derecha del área permitida
      )
  }).setView([3.48, -76.48], 14);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
    minZoom: 14,
	maxZoom: 16
}).addTo(map);
