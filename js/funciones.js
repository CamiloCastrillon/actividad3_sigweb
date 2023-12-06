//cambia el mapa base
var cambia_base = document.getElementById('cambiar_base');

var cambio = false;

cambia_base.addEventListener('click', function() {
    if (cambio) {
        map.removeLayer(mapa_base_1);
        mapa_base_2.addTo(map);
        cambio = false;
    } else {
        map.removeLayer(mapa_base_2);
        mapa_base_1.addTo(map);
        cambio= true;
    }
});

//geolocalizacion
L.control.locate().addTo(map);
