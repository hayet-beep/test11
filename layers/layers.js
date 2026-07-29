var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 0.609000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Area_1 = new ol.format.GeoJSON();
var features_Area_1 = format_Area_1.readFeatures(json_Area_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Area_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_1.addFeatures(features_Area_1);
var lyr_Area_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Area_1, 
                style: style_Area_1,
                popuplayertitle: 'Area',
                interactive: false,
    title: 'Area<br />\
    <img src="styles/legend/Area_1_0.png" /> Mer<br />\
    <img src="styles/legend/Area_1_1.png" /> Terre<br />' });
var format_Building_2 = new ol.format.GeoJSON();
var features_Building_2 = format_Building_2.readFeatures(json_Building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_2.addFeatures(features_Building_2);
var lyr_Building_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_2, 
                style: style_Building_2,
                popuplayertitle: 'Building',
                interactive: false,
                title: '<img src="styles/legend/Building_2.png" /> Building'
            });
var format_Roads_3 = new ol.format.GeoJSON();
var features_Roads_3 = format_Roads_3.readFeatures(json_Roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_3.addFeatures(features_Roads_3);
var lyr_Roads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_3, 
                style: style_Roads_3,
                popuplayertitle: 'Roads',
                interactive: false,
                title: '<img src="styles/legend/Roads_3.png" /> Roads'
            });
var format_Parking_4 = new ol.format.GeoJSON();
var features_Parking_4 = format_Parking_4.readFeatures(json_Parking_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parking_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parking_4.addFeatures(features_Parking_4);
var lyr_Parking_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parking_4, 
                style: style_Parking_4,
                popuplayertitle: 'Parking',
                interactive: false,
                title: '<img src="styles/legend/Parking_4.png" /> Parking'
            });
var format_Parkingpoints_5 = new ol.format.GeoJSON();
var features_Parkingpoints_5 = format_Parkingpoints_5.readFeatures(json_Parkingpoints_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parkingpoints_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parkingpoints_5.addFeatures(features_Parkingpoints_5);
var lyr_Parkingpoints_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parkingpoints_5, 
                style: style_Parkingpoints_5,
                popuplayertitle: 'Parking points',
                interactive: false,
    title: 'Parking points<br />\
    <img src="styles/legend/Parkingpoints_5_0.png" /> Moto<br />\
    <img src="styles/legend/Parkingpoints_5_1.png" /> Voiture<br />\
    <img src="styles/legend/Parkingpoints_5_2.png" /> Voiture Elec<br />' });
var format_Pompier_6 = new ol.format.GeoJSON();
var features_Pompier_6 = format_Pompier_6.readFeatures(json_Pompier_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pompier_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pompier_6.addFeatures(features_Pompier_6);
var lyr_Pompier_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pompier_6, 
                style: style_Pompier_6,
                popuplayertitle: 'Pompier',
                interactive: false,
                title: '<img src="styles/legend/Pompier_6.png" /> Pompier'
            });
var format_Offices_7 = new ol.format.GeoJSON();
var features_Offices_7 = format_Offices_7.readFeatures(json_Offices_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Offices_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Offices_7.addFeatures(features_Offices_7);
var lyr_Offices_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Offices_7, 
                style: style_Offices_7,
                popuplayertitle: 'Offices',
                interactive: false,
                title: '<img src="styles/legend/Offices_7.png" /> Offices'
            });
var format_YachtingVillage_8 = new ol.format.GeoJSON();
var features_YachtingVillage_8 = format_YachtingVillage_8.readFeatures(json_YachtingVillage_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YachtingVillage_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YachtingVillage_8.addFeatures(features_YachtingVillage_8);
var lyr_YachtingVillage_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YachtingVillage_8, 
                style: style_YachtingVillage_8,
                popuplayertitle: 'Yachting Village',
                interactive: false,
                title: '<img src="styles/legend/YachtingVillage_8.png" /> Yachting Village'
            });
var format_PaintCabin_9 = new ol.format.GeoJSON();
var features_PaintCabin_9 = format_PaintCabin_9.readFeatures(json_PaintCabin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaintCabin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaintCabin_9.addFeatures(features_PaintCabin_9);
var lyr_PaintCabin_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PaintCabin_9, 
                style: style_PaintCabin_9,
                popuplayertitle: 'Paint Cabin',
                interactive: false,
                title: '<img src="styles/legend/PaintCabin_9.png" /> Paint Cabin'
            });
var format_Nef_10 = new ol.format.GeoJSON();
var features_Nef_10 = format_Nef_10.readFeatures(json_Nef_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nef_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nef_10.addFeatures(features_Nef_10);
var lyr_Nef_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nef_10, 
                style: style_Nef_10,
                popuplayertitle: 'Nef',
                interactive: false,
                title: '<img src="styles/legend/Nef_10.png" /> Nef'
            });
var format_HardstandingArea_11 = new ol.format.GeoJSON();
var features_HardstandingArea_11 = format_HardstandingArea_11.readFeatures(json_HardstandingArea_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HardstandingArea_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HardstandingArea_11.addFeatures(features_HardstandingArea_11);
var lyr_HardstandingArea_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HardstandingArea_11, 
                style: style_HardstandingArea_11,
                popuplayertitle: 'Hardstanding Area',
                interactive: false,
                title: '<img src="styles/legend/HardstandingArea_11.png" /> Hardstanding Area'
            });
var format_AOTMB92_12 = new ol.format.GeoJSON();
var features_AOTMB92_12 = format_AOTMB92_12.readFeatures(json_AOTMB92_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AOTMB92_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOTMB92_12.addFeatures(features_AOTMB92_12);
var lyr_AOTMB92_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOTMB92_12, 
                style: style_AOTMB92_12,
                popuplayertitle: 'AOT MB92',
                interactive: false,
                title: '<img src="styles/legend/AOTMB92_12.png" /> AOT MB92'
            });
var format_MB92WorkshopOffices_13 = new ol.format.GeoJSON();
var features_MB92WorkshopOffices_13 = format_MB92WorkshopOffices_13.readFeatures(json_MB92WorkshopOffices_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MB92WorkshopOffices_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MB92WorkshopOffices_13.addFeatures(features_MB92WorkshopOffices_13);
var lyr_MB92WorkshopOffices_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MB92WorkshopOffices_13, 
                style: style_MB92WorkshopOffices_13,
                popuplayertitle: 'MB92 Workshop & Offices',
                interactive: false,
                title: '<img src="styles/legend/MB92WorkshopOffices_13.png" /> MB92 Workshop & Offices'
            });
var format_Stairs_14 = new ol.format.GeoJSON();
var features_Stairs_14 = format_Stairs_14.readFeatures(json_Stairs_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stairs_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stairs_14.addFeatures(features_Stairs_14);
var lyr_Stairs_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stairs_14,
maxResolution:0.5600893230452393,
 
                style: style_Stairs_14,
                popuplayertitle: 'Stairs',
                interactive: false,
    title: 'Stairs<br />\
    <img src="styles/legend/Stairs_14_0.png" /> Lift<br />\
    <img src="styles/legend/Stairs_14_1.png" /> Stair<br />' });
var format_RestrictedArea_15 = new ol.format.GeoJSON();
var features_RestrictedArea_15 = format_RestrictedArea_15.readFeatures(json_RestrictedArea_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RestrictedArea_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RestrictedArea_15.addFeatures(features_RestrictedArea_15);
var lyr_RestrictedArea_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RestrictedArea_15, 
                style: style_RestrictedArea_15,
                popuplayertitle: 'Restricted Area',
                interactive: true,
                title: '<img src="styles/legend/RestrictedArea_15.png" /> Restricted Area'
            });
var format__16 = new ol.format.GeoJSON();
var features__16 = format__16.readFeatures(json__16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__16.addFeatures(features__16);
var lyr__16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__16, 
                style: style__16,
                popuplayertitle: '',
                interactive: false,
    title: '<br />\
    <img src="styles/legend/_16_0.png" /> <br />\
    <img src="styles/legend/_16_1.png" /> <br />\
    <img src="styles/legend/_16_2.png" /> <br />' });
var format_Gatehouse_17 = new ol.format.GeoJSON();
var features_Gatehouse_17 = format_Gatehouse_17.readFeatures(json_Gatehouse_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gatehouse_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gatehouse_17.addFeatures(features_Gatehouse_17);
var lyr_Gatehouse_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gatehouse_17, 
                style: style_Gatehouse_17,
                popuplayertitle: 'Gatehouse',
                interactive: false,
                title: '<img src="styles/legend/Gatehouse_17.png" /> Gatehouse'
            });
var format_BusStation_18 = new ol.format.GeoJSON();
var features_BusStation_18 = format_BusStation_18.readFeatures(json_BusStation_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BusStation_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BusStation_18.addFeatures(features_BusStation_18);
var lyr_BusStation_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BusStation_18, 
                style: style_BusStation_18,
                popuplayertitle: 'Bus Station',
                interactive: false,
                title: '<img src="styles/legend/BusStation_18.png" /> Bus Station'
            });
var format_ZoneFumeur_19 = new ol.format.GeoJSON();
var features_ZoneFumeur_19 = format_ZoneFumeur_19.readFeatures(json_ZoneFumeur_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneFumeur_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneFumeur_19.addFeatures(features_ZoneFumeur_19);
var lyr_ZoneFumeur_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneFumeur_19, 
                style: style_ZoneFumeur_19,
                popuplayertitle: 'Zone-Fumeur',
                interactive: false,
                title: '<img src="styles/legend/ZoneFumeur_19.png" /> Zone-Fumeur'
            });
var format_Accessoffices_20 = new ol.format.GeoJSON();
var features_Accessoffices_20 = format_Accessoffices_20.readFeatures(json_Accessoffices_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accessoffices_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accessoffices_20.addFeatures(features_Accessoffices_20);
var lyr_Accessoffices_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accessoffices_20, 
                style: style_Accessoffices_20,
                popuplayertitle: 'Access offices',
                interactive: false,
    title: 'Access offices<br />\
    <img src="styles/legend/Accessoffices_20_0.png" /> LCS Access Office<br />\
    <img src="styles/legend/Accessoffices_20_1.png" /> LCS Main Access<br />\
    <img src="styles/legend/Accessoffices_20_2.png" /> MB92 Access Office<br />' });
var group_Gatehouse = new ol.layer.Group({
                                layers: [lyr__16,lyr_Gatehouse_17,],
                                fold: 'open',
                                title: 'Gatehouse'});
var group_Building = new ol.layer.Group({
                                layers: [lyr_AOTMB92_12,lyr_MB92WorkshopOffices_13,lyr_Stairs_14,],
                                fold: 'close',
                                title: 'Building'});
var group_LCSFacilities = new ol.layer.Group({
                                layers: [lyr_Pompier_6,lyr_Offices_7,lyr_YachtingVillage_8,lyr_PaintCabin_9,lyr_Nef_10,lyr_HardstandingArea_11,],
                                fold: 'open',
                                title: 'LCS Facilities'});
var group_Parking = new ol.layer.Group({
                                layers: [lyr_Parking_4,lyr_Parkingpoints_5,],
                                fold: 'close',
                                title: 'Parking'});
var group_0Fonddecarte = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_Area_1,lyr_Building_2,lyr_Roads_3,],
                                fold: 'open',
                                title: '0- Fond de carte'});

lyr_OSMStandard_0.setVisible(true);lyr_Area_1.setVisible(true);lyr_Building_2.setVisible(true);lyr_Roads_3.setVisible(true);lyr_Parking_4.setVisible(true);lyr_Parkingpoints_5.setVisible(true);lyr_Pompier_6.setVisible(true);lyr_Offices_7.setVisible(true);lyr_YachtingVillage_8.setVisible(true);lyr_PaintCabin_9.setVisible(true);lyr_Nef_10.setVisible(true);lyr_HardstandingArea_11.setVisible(true);lyr_AOTMB92_12.setVisible(true);lyr_MB92WorkshopOffices_13.setVisible(true);lyr_Stairs_14.setVisible(true);lyr_RestrictedArea_15.setVisible(true);lyr__16.setVisible(true);lyr_Gatehouse_17.setVisible(true);lyr_BusStation_18.setVisible(true);lyr_ZoneFumeur_19.setVisible(true);lyr_Accessoffices_20.setVisible(true);
var layersList = [group_0Fonddecarte,group_Parking,group_LCSFacilities,group_Building,lyr_RestrictedArea_15,group_Gatehouse,lyr_BusStation_18,lyr_ZoneFumeur_19,lyr_Accessoffices_20];
lyr_Area_1.set('fieldAliases', {'id': 'id', 'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', });
lyr_Building_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Roads_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Parking_4.set('fieldAliases', {'id': 'id', 'Parking': 'Parking', });
lyr_Parkingpoints_5.set('fieldAliases', {'id': 'id', 'Parking': 'Parking', });
lyr_Pompier_6.set('fieldAliases', {'Text': 'Text', 'Url': 'Url', });
lyr_Offices_7.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_YachtingVillage_8.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_PaintCabin_9.set('fieldAliases', {'Zone': 'Zone', });
lyr_Nef_10.set('fieldAliases', {'Zone': 'Zone', });
lyr_HardstandingArea_11.set('fieldAliases', {'Zone': 'Zone', 'Url': 'Url', });
lyr_AOTMB92_12.set('fieldAliases', {'Entreprise': 'Entreprise', 'Url': 'Url', 'Logo': 'Logo', });
lyr_MB92WorkshopOffices_13.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'id': 'id', 'Service': 'Service', 'Groupe': 'Groupe', 'Level': 'Level', 'IND': 'IND', 'path': 'path', });
lyr_Stairs_14.set('fieldAliases', {'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_RestrictedArea_15.set('fieldAliases', {'Indices': 'Indices', 'Rules': 'Rules', });
lyr__16.set('fieldAliases', {'id': 'id', 'indi': 'indi', });
lyr_Gatehouse_17.set('fieldAliases', {'Indication': 'Indication', });
lyr_BusStation_18.set('fieldAliases', {'id': 'id', });
lyr_ZoneFumeur_19.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Accessoffices_20.set('fieldAliases', {'Indication': 'Indication', });
lyr_Area_1.set('fieldImages', {'id': 'TextEdit', 'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', });
lyr_Building_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_Roads_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Parking_4.set('fieldImages', {'id': 'TextEdit', 'Parking': 'TextEdit', });
lyr_Parkingpoints_5.set('fieldImages', {'id': 'TextEdit', 'Parking': 'TextEdit', });
lyr_Pompier_6.set('fieldImages', {'Text': 'TextEdit', 'Url': 'TextEdit', });
lyr_Offices_7.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_YachtingVillage_8.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_PaintCabin_9.set('fieldImages', {'Zone': 'TextEdit', });
lyr_Nef_10.set('fieldImages', {'Zone': 'TextEdit', });
lyr_HardstandingArea_11.set('fieldImages', {'Zone': 'TextEdit', 'Url': 'TextEdit', });
lyr_AOTMB92_12.set('fieldImages', {'Entreprise': 'TextEdit', 'Url': 'TextEdit', 'Logo': 'ExternalResource', });
lyr_MB92WorkshopOffices_13.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'id': 'TextEdit', 'Service': 'TextEdit', 'Groupe': 'TextEdit', 'Level': 'TextEdit', 'IND': 'TextEdit', 'path': 'TextEdit', });
lyr_Stairs_14.set('fieldImages', {'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_RestrictedArea_15.set('fieldImages', {'Indices': 'TextEdit', 'Rules': 'ExternalResource', });
lyr__16.set('fieldImages', {'id': 'TextEdit', 'indi': 'TextEdit', });
lyr_Gatehouse_17.set('fieldImages', {'Indication': 'TextEdit', });
lyr_BusStation_18.set('fieldImages', {'id': 'TextEdit', });
lyr_ZoneFumeur_19.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Accessoffices_20.set('fieldImages', {'Indication': 'TextEdit', });
lyr_Area_1.set('fieldLabels', {'id': 'no label', 'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', });
lyr_Building_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_Roads_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Parking_4.set('fieldLabels', {'id': 'no label', 'Parking': 'no label', });
lyr_Parkingpoints_5.set('fieldLabels', {'id': 'hidden field', 'Parking': 'no label', });
lyr_Pompier_6.set('fieldLabels', {'Text': 'no label', 'Url': 'no label', });
lyr_Offices_7.set('fieldLabels', {'Zone': 'no label', 'Url': 'no label', });
lyr_YachtingVillage_8.set('fieldLabels', {'Zone': 'no label', 'Url': 'no label', });
lyr_PaintCabin_9.set('fieldLabels', {'Zone': 'no label', });
lyr_Nef_10.set('fieldLabels', {'Zone': 'no label', });
lyr_HardstandingArea_11.set('fieldLabels', {'Zone': 'no label', 'Url': 'no label', });
lyr_AOTMB92_12.set('fieldLabels', {'Entreprise': 'no label', 'Url': 'no label', 'Logo': 'no label', });
lyr_MB92WorkshopOffices_13.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'id': 'no label', 'Service': 'no label', 'Groupe': 'no label', 'Level': 'no label', 'IND': 'no label', 'path': 'no label', });
lyr_Stairs_14.set('fieldLabels', {'EntityHand': 'no label', 'Text': 'no label', });
lyr_RestrictedArea_15.set('fieldLabels', {'Indices': 'no label', 'Rules': 'no label', });
lyr__16.set('fieldLabels', {'id': 'no label', 'indi': 'no label', });
lyr_Gatehouse_17.set('fieldLabels', {'Indication': 'no label', });
lyr_BusStation_18.set('fieldLabels', {'id': 'no label', });
lyr_ZoneFumeur_19.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Accessoffices_20.set('fieldLabels', {'Indication': 'no label', });
lyr_Accessoffices_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});