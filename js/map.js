var map = L.map('map', {
    zoomControl:true, maxZoom:20, minZoom:1
}).fitBounds([[6.170227525806885,-75.6992363078164],[6.324856331156715,-75.48495189235528]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
map.createPane('pane_OSMStandard_0');
map.getPane('pane_OSMStandard_0').style.zIndex = 400;
var layer_Toner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png',
    pane: 'pane_OSMStandard_0'
});
layer_Toner;
map.addLayer(layer_Toner);



function pop_ProyPoblacion2018_2030_1(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">OBJECTID_1</th>\
                <td>' + (feature.properties['OBJECTID_1'] !== null ? autolinker.link(feature.properties['OBJECTID_1'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">CodComuna</th>\
                <td>' + (feature.properties['CodComuna'] !== null ? autolinker.link(feature.properties['CodComuna'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Comuna</th>\
                <td>' + (feature.properties['Comuna'] !== null ? autolinker.link(feature.properties['Comuna'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">CodBarrio</th>\
                <td>' + (feature.properties['CodBarrio'] !== null ? autolinker.link(feature.properties['CodBarrio'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Barrio</th>\
                <td>' + (feature.properties['Barrio'] !== null ? autolinker.link(feature.properties['Barrio'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Pob_2018</th>\
                <td>' + (feature.properties['Pob_2018'] !== null ? autolinker.link(feature.properties['Pob_2018'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Pob_2030</th>\
                <td>' + (feature.properties['Pob_2030'] !== null ? autolinker.link(feature.properties['Pob_2030'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Dif2018203</th>\
                <td>' + (feature.properties['Dif2018203'] !== null ? autolinker.link(feature.properties['Dif2018203'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Shape_Leng</th>\
                <td>' + (feature.properties['Shape_Leng'] !== null ? autolinker.link(feature.properties['Shape_Leng'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Shape_Area</th>\
                <td>' + (feature.properties['Shape_Area'] !== null ? autolinker.link(feature.properties['Shape_Area'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_ProyPoblacion2018_2030_1_0(feature) {
    if (feature.properties['Dif2018203'] >= -1417.000000 && feature.properties['Dif2018203'] <= -350.000000 ) {
        return {
        pane: 'pane_ProyPoblacion2018_2030_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.9,
        fillColor: 'rgba(230,0,0,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['Dif2018203'] >= -350.000000 && feature.properties['Dif2018203'] <= 0.000000 ) {
        return {
        pane: 'pane_ProyPoblacion2018_2030_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.9,
        fillColor: 'rgba(255,170,0,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['Dif2018203'] >= 0.000000 && feature.properties['Dif2018203'] <= 500.000000 ) {
        return {
        pane: 'pane_ProyPoblacion2018_2030_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.9,
        fillColor: 'rgba(255,255,115,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['Dif2018203'] >= 500.000000 && feature.properties['Dif2018203'] <= 3000.000000 ) {
        return {
        pane: 'pane_ProyPoblacion2018_2030_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.9,
        fillColor: 'rgba(209,255,115,1.0)',
        interactive: true,
    }
    }
    if (feature.properties['Dif2018203'] >= 3000.000000 && feature.properties['Dif2018203'] <= 7625.000000 ) {
        return {
        pane: 'pane_ProyPoblacion2018_2030_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 0.9,
        fillColor: 'rgba(56,168,0,1.0)',
        interactive: true,
    }
    }
}
map.createPane('pane_ProyPoblacion2018_2030_1');
map.getPane('pane_ProyPoblacion2018_2030_1').style.zIndex = 401;
map.getPane('pane_ProyPoblacion2018_2030_1').style['mix-blend-mode'] = 'normal';
var layer_ProyPoblacion2018_2030_1 = new L.geoJson(json_ProyPoblacion2018_2030_1, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ProyPoblacion2018_2030_1',
    layerName: 'layer_ProyPoblacion2018_2030_1',
    pane: 'pane_ProyPoblacion2018_2030_1',
    onEachFeature: pop_ProyPoblacion2018_2030_1,
    style: style_ProyPoblacion2018_2030_1_0,
});
bounds_group.addLayer(layer_ProyPoblacion2018_2030_1);
map.addLayer(layer_ProyPoblacion2018_2030_1);
function pop_Comunas_2(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['NOMBRE'] !== null ? autolinker.link(feature.properties['NOMBRE'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['IDENTIFICA'] !== null ? autolinker.link(feature.properties['IDENTIFICA'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['AreaM2'] !== null ? autolinker.link(feature.properties['AreaM2'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Comunas_2_0() {
    return {
        pane: 'pane_Comunas_2',
        opacity: 1,
        color: 'rgba(89,82,70,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 2.0,
        fillOpacity: 0,
        interactive: false,
    }
}
map.createPane('pane_Comunas_2');
map.getPane('pane_Comunas_2').style.zIndex = 402;
map.getPane('pane_Comunas_2').style['mix-blend-mode'] = 'normal';
var layer_Comunas_2 = new L.geoJson(json_Comunas_2, {
    attribution: '',
    interactive: false,
    dataVar: 'json_Comunas_2',
    layerName: 'layer_Comunas_2',
    pane: 'pane_Comunas_2',
    onEachFeature: pop_Comunas_2,
    style: style_Comunas_2_0,
});
bounds_group.addLayer(layer_Comunas_2);
map.addLayer(layer_Comunas_2);
setBounds();
var i = 0;
layer_ProyPoblacion2018_2030_1.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['Dif2018203'] !== null?String('<div style="color: #323232; font-size: 7pt; font-weight: bold; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['Dif2018203']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_ProyPoblacion2018_2030_1'});
    labels.push(layer);
    totalMarkers += 1;
      layer.added = true;
      addLabel(layer, i);
      i++;
});
var i = 0;
layer_Comunas_2.eachLayer(function(layer) {
    var context = {
        feature: layer.feature,
        variables: {}
    };
    layer.bindTooltip((layer.feature.properties['NOMBRE'] !== null?String('<div style="color: #595246; font-size: 10pt; font-weight: bold; font-style: italic; font-family: \'Open Sans\', sans-serif;">' + layer.feature.properties['NOMBRE']) + '</div>':''), {permanent: true, offset: [-0, -16], className: 'css_Comunas_2'});
    labels.push(layer);
    totalMarkers += 1;
      layer.added = true;
      addLabel(layer, i);
      i++;
});
resetLabels([layer_ProyPoblacion2018_2030_1,layer_Comunas_2]);
map.on("zoomend", function(){
    resetLabels([layer_ProyPoblacion2018_2030_1,layer_Comunas_2]);
});
map.on("layeradd", function(){
    resetLabels([layer_ProyPoblacion2018_2030_1,layer_Comunas_2]);
});
map.on("layerremove", function(){
    resetLabels([layer_ProyPoblacion2018_2030_1,layer_Comunas_2]);
});