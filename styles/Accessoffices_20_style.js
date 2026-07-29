var size = 0;
var placement = 'point';
function categories_Accessoffices_20(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'LCS Access Office':
            return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [700, 700],
                  scale: 0.054285714285714284,
                  anchor: [350.0, 350.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/blue-marker.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'LCS Main Access':
            return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [317, 287],
                  scale: 0.11987381703470032,
                  anchor: [158.5, 143.5],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/la_ciotat_shipyards_qgis.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'MB92 Access Office':
            return [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [700, 700],
                  scale: 0.054285714285714284,
                  anchor: [350.0, 350.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/blue-marker_1.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_Accessoffices_20 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Indication");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#ffffff";
    var bufferWidth = 3.0;
    var textAlign = 'center';
    var offsetX = 0.0;
    var offsetY = 26.0;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("Indication") !== null) {
        labelText = String(feature.get("Indication"));
    }
    
    var style = categories_Accessoffices_20(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
