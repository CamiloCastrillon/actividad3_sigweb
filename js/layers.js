var style_supermercados = {
    radius: 5, // Tamaño del punto (ajusta según tus preferencias)
    fillColor: 'blue', // Color de relleno del punto
    color: '#600000', // Color del borde del punto
    weight: 0.3, // Grosor del borde del punto
    opacity: 1, // Opacidad del punto
    fillOpacity: 0.6 // Opacidad del relleno del punto
};

var layer_supermercados = L.geoJson(supermercados, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, style_supermercados);
    }
}).addTo(map);