var wms_layers = [];

var format_VILLAGE2_0 = new ol.format.GeoJSON();
var features_VILLAGE2_0 = format_VILLAGE2_0.readFeatures(json_VILLAGE2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VILLAGE2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VILLAGE2_0.addFeatures(features_VILLAGE2_0);
var lyr_VILLAGE2_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VILLAGE2_0, 
                style: style_VILLAGE2_0,
                popuplayertitle: 'VILLAGE2',
                interactive: true,
                title: '<img src="styles/legend/VILLAGE2_0.png" /> VILLAGE2'
            });
var format_WELL1_1 = new ol.format.GeoJSON();
var features_WELL1_1 = format_WELL1_1.readFeatures(json_WELL1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WELL1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WELL1_1.addFeatures(features_WELL1_1);
var lyr_WELL1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WELL1_1, 
                style: style_WELL1_1,
                popuplayertitle: 'WELL1',
                interactive: true,
                title: '<img src="styles/legend/WELL1_1.png" /> WELL1'
            });
var lyr_Clippedmask_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Clipped (mask)<br />\
    <img src="styles/legend/Clippedmask_2_0.png" /> 6.60056<br />\
    <img src="styles/legend/Clippedmask_2_1.png" /> 8.3985<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Clippedmask_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8672952.313401, 1149661.400427, 8686227.128466, 1167842.685918]
        })
    });

lyr_VILLAGE2_0.setVisible(true);lyr_WELL1_1.setVisible(true);lyr_Clippedmask_2.setVisible(true);
var layersList = [lyr_VILLAGE2_0,lyr_WELL1_1,lyr_Clippedmask_2];
lyr_VILLAGE2_0.set('fieldAliases', {'NAME1': 'NAME1', });
lyr_WELL1_1.set('fieldAliases', {'Id': 'Id', 'WELLNO': 'WELLNO', 'Link': 'Link', 'PH': 'PH', 'Village': 'Village', 'Naper': 'Naper', 'SAR': 'SAR', 'MR': 'MR', 'PS': 'PS', 'RSC': 'RSC', 'Kelleyrat': 'Kelleyrat', 'ID_1': 'ID_1', 'SSP': 'SSP', 'LINKNO2': 'LINKNO2', 'Village2': 'Village2', });
lyr_VILLAGE2_0.set('fieldImages', {'NAME1': '', });
lyr_WELL1_1.set('fieldImages', {'Id': '', 'WELLNO': '', 'Link': '', 'PH': '', 'Village': '', 'Naper': '', 'SAR': '', 'MR': '', 'PS': '', 'RSC': '', 'Kelleyrat': '', 'ID_1': '', 'SSP': '', 'LINKNO2': '', 'Village2': '', });
lyr_VILLAGE2_0.set('fieldLabels', {'NAME1': 'no label', });
lyr_WELL1_1.set('fieldLabels', {'Id': 'no label', 'WELLNO': 'no label', 'Link': 'no label', 'PH': 'no label', 'Village': 'no label', 'Naper': 'no label', 'SAR': 'no label', 'MR': 'no label', 'PS': 'no label', 'RSC': 'no label', 'Kelleyrat': 'no label', 'ID_1': 'no label', 'SSP': 'no label', 'LINKNO2': 'no label', 'Village2': 'no label', });
lyr_WELL1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});