var style_supermercados = {
    radius: 5, // Tamaño del punto (ajusta según tus preferencias)
    fillColor: 'blue', // Color de relleno del punto
    color: '#600000', // Color del borde del punto
    weight: 0.3, // Grosor del borde del punto
    opacity: 1, // Opacidad del punto
    fillOpacity: 0.6 // Opacidad del relleno del punto
};

//carga la capa como geojson desde la gdb
var supermercados = L.geoJSON();

$.post("php/capas.php",
	{
		peticion: 'cargar_supermercados',

	},function (data, status, feature)
	{
	if(status=='success')
	{
		supermercados2 = eval('('+data+')');
		var supermercados = L.geoJSON(supermercados2, {
			style: style_supermercados,
			onEachFeature: oneachfeature,
		}).addTo(map);
        
        supermercados.eachLayer(function (layer) {
        	layer.setZIndexOffset(1000);
        });
	}
});

var comunas = L.tileLayer.wms('http://ws-idesc.cali.gov.co:8081/geoserver/wms?service=WMS&version=1.1.0',
{
layers: 'idesc:mc_comunas',
format: 'image/png',
transparent: true,
zIndex: 15000,
}).addTo(map);

var barrios = L.tileLayer.wms('http://ws-idesc.cali.gov.co:8081/geoserver/wms?service=WMS&version=1.1.0',
{
layers: 'idesc:mc_barrios',
format: 'image/png',
transparent: true,
zIndex: 12000,
}).addTo(map);

var via = L.tileLayer.wms('http://ws-idesc.cali.gov.co:8081/geoserver/wms?service=WMS&version=1.1.0',
{
layers: 'idesc:mc_separadores_urbanos',
format: 'image/png',
transparent: true,
zIndex: 10000,
}).addTo(map);