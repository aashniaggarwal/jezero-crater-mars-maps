ol.proj.proj4.register(proj4);
//ol.proj.get("ESRI:103885").setExtent([4572891.143253, 1068780.238620, 4662581.949296, 1122744.029176]);
var wms_layers = [];

var lyr_Slope_Web_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Slope_Web<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Slope_Web_0.png",
            attributions: ' ',
            projection: 'ESRI:103885',
            alwaysInRange: true,
            imageExtent: [4573663.250853, 1079453.140188, 4605583.250853, 1109693.140188]
        })
    });
var format_Jezero_sites_1 = new ol.format.GeoJSON();
var features_Jezero_sites_1 = format_Jezero_sites_1.readFeatures(json_Jezero_sites_1, 
            {dataProjection: 'ESRI:103885', featureProjection: 'ESRI:103885'});
var jsonSource_Jezero_sites_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jezero_sites_1.addFeatures(features_Jezero_sites_1);
var lyr_Jezero_sites_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jezero_sites_1, 
                style: style_Jezero_sites_1,
                popuplayertitle: 'Jezero_sites',
                interactive: true,
                title: '<img src="styles/legend/Jezero_sites_1.png" /> Jezero_sites'
            });

lyr_Slope_Web_0.setVisible(true);lyr_Jezero_sites_1.setVisible(true);
var layersList = [lyr_Slope_Web_0,lyr_Jezero_sites_1];
lyr_Jezero_sites_1.set('fieldAliases', {'name': 'name', 'latitude': 'latitude', 'longitude': 'longitude', 'image_url': 'image_url', });
lyr_Jezero_sites_1.set('fieldImages', {'name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'image_url': 'TextEdit', });
lyr_Jezero_sites_1.set('fieldLabels', {'name': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'image_url': 'no label', });
lyr_Jezero_sites_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});