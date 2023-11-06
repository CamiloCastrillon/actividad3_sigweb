var map = L.map('map', {
    maxBounds: L.latLngBounds(
        L.latLng(3.50, -76.52), // Esquina superior izquierda del área permitida
        L.latLng(3.47, -76.46)  // Esquina inferior derecha del área permitida
      )
  }).setView([3.48, -76.48], 14);



var mapa_base_1 = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
    minZoom: 14,
	maxZoom: 16
}).addTo(map);

var mapa_base_2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
    minZoom: 14,
	maxZoom: 16
});

// Agregar control de escala
L.control.scale().addTo(map);


