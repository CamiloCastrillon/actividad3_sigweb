// ocultar y mostrar puntos
var boton_activar = document.getElementById('ocultar_mostrar');

// Variable para rastrear el estado de la capa
var puntos_activados = true;

// Función para alternar la capa de puntos
boton_activar.addEventListener('click', function() {
  if (puntos_activados) {
    // Desactivar la capa de puntos
    map.removeLayer(layer_supermercados_icono);
    map.removeLayer(layer_supermercados);
    layer_supermercados.addTo(map);
    puntos_activados = false;
  } else {
    // Activar la capa de puntos
    map.removeLayer(layer_supermercados);
    map.removeLayer(layer_supermercados_icono);
    puntos_activados = true;
  }
});

// cambia la capa a una con otro icono
var boton_iconos = document.getElementById('iconos');

var iconoActivado = false;

boton_iconos.addEventListener('click', function() {
    if (iconoActivado) {
        map.removeLayer(layer_supermercados);
        layer_supermercados_icono.addTo(map);
        iconoActivado = false;
    } else {
        map.removeLayer(layer_supermercados_icono);
        layer_supermercados.addTo(map);
        iconoActivado = true;
    }
});

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

//activa mapa de calor
var heatmap = document.getElementById('heatmap');

var heat = false;

heatmap.addEventListener('click', function() {
    if (heat) {
        heatLayer.addTo(map);
        heat  = false;
    } else {
        map.removeLayer(heatLayer);
        heat = true;
    }
});

//geolocalizacion
L.control.locate({setView:'false',flyto:'false',drawCircle:'false',showCompass:'true',drawMarker:'false',keepCurrentZoomLevel:'true',locateOptions: {
    enableHighAccuracy: true}}).addTo(map);