var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_rumah1_1 = new ol.format.GeoJSON();
var features_rumah1_1 = format_rumah1_1.readFeatures(json_rumah1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumah1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumah1_1.addFeatures(features_rumah1_1);
var lyr_rumah1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumah1_1, 
                style: style_rumah1_1,
                popuplayertitle: "rumah1",
                interactive: true,
    title: 'rumah1<br />\
    <img src="styles/legend/rumah1_1_0.png" /> 1<br />\
    <img src="styles/legend/rumah1_1_1.png" /> 2<br />\
    <img src="styles/legend/rumah1_1_2.png" /> 3<br />\
    <img src="styles/legend/rumah1_1_3.png" /> 4<br />\
    <img src="styles/legend/rumah1_1_4.png" /> 7<br />\
    <img src="styles/legend/rumah1_1_5.png" /> 9<br />\
    <img src="styles/legend/rumah1_1_6.png" /> 10<br />'
        });
var format_fasilitas_2 = new ol.format.GeoJSON();
var features_fasilitas_2 = format_fasilitas_2.readFeatures(json_fasilitas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_2.addFeatures(features_fasilitas_2);
var lyr_fasilitas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitas_2, 
                style: style_fasilitas_2,
                popuplayertitle: "fasilitas",
                interactive: true,
    title: 'fasilitas<br />\
    <img src="styles/legend/fasilitas_2_0.png" /> <br />\
    <img src="styles/legend/fasilitas_2_1.png" /> 1<br />\
    <img src="styles/legend/fasilitas_2_2.png" /> 2<br />\
    <img src="styles/legend/fasilitas_2_3.png" /> 3<br />'
        });
var format_mesjid_3 = new ol.format.GeoJSON();
var features_mesjid_3 = format_mesjid_3.readFeatures(json_mesjid_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mesjid_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mesjid_3.addFeatures(features_mesjid_3);
var lyr_mesjid_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mesjid_3, 
                style: style_mesjid_3,
                popuplayertitle: "mesjid",
                interactive: true,
                title: '<img src="styles/legend/mesjid_3.png" /> mesjid'
            });
var format_jalan1_4 = new ol.format.GeoJSON();
var features_jalan1_4 = format_jalan1_4.readFeatures(json_jalan1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan1_4.addFeatures(features_jalan1_4);
var lyr_jalan1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan1_4, 
                style: style_jalan1_4,
                popuplayertitle: "jalan1",
                interactive: true,
                title: '<img src="styles/legend/jalan1_4.png" /> jalan1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_rumah1_1.setVisible(true);lyr_fasilitas_2.setVisible(true);lyr_mesjid_3.setVisible(true);lyr_jalan1_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_rumah1_1,lyr_fasilitas_2,lyr_mesjid_3,lyr_jalan1_4];
lyr_rumah1_1.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'LUAS': 'LUAS', 'Status': 'Status', });
lyr_fasilitas_2.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas': 'luas', });
lyr_mesjid_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_jalan1_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_rumah1_1.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'LUAS': 'TextEdit', 'Status': 'TextEdit', });
lyr_fasilitas_2.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas': '', });
lyr_mesjid_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_jalan1_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_rumah1_1.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_fasilitas_2.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', 'luas': 'inline label - always visible', });
lyr_mesjid_3.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', });
lyr_jalan1_4.set('fieldLabels', {'id': 'hidden field', 'nama': 'inline label - always visible', });
lyr_jalan1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});