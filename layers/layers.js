var wms_layers = [];


        var lyr_maps_0 = new ol.layer.Tile({
            'title': 'maps',
            'type':'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Ulicapoligon_1 = new ol.format.GeoJSON();
var features_Ulicapoligon_1 = format_Ulicapoligon_1.readFeatures(json_Ulicapoligon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ulicapoligon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ulicapoligon_1.addFeatures(features_Ulicapoligon_1);
var lyr_Ulicapoligon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ulicapoligon_1, 
                style: style_Ulicapoligon_1,
                popuplayertitle: 'Ulica poligon',
                interactive: false,
    title: 'Ulica poligon<br />\
    <img src="styles/legend/Ulicapoligon_1_0.png" /> 1.SLAVNA-111. VITEŠKA BRIGADA<br />\
    <img src="styles/legend/Ulicapoligon_1_1.png" /> 10. MAJ<br />\
    <img src="styles/legend/Ulicapoligon_1_2.png" /> ADEMA BUČE<br />\
    <img src="styles/legend/Ulicapoligon_1_3.png" /> ALBANSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_4.png" /> ALEJA LIPA<br />\
    <img src="styles/legend/Ulicapoligon_1_5.png" /> ALOJZA BENCA<br />\
    <img src="styles/legend/Ulicapoligon_1_6.png" /> ANTE FIJAMENGA<br />\
    <img src="styles/legend/Ulicapoligon_1_7.png" /> AVDE SMAJLOVIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_8.png" /> AZIZE ŠAĆIRBEGOVIĆ<br />\
    <img src="styles/legend/Ulicapoligon_1_9.png" /> BANA MATEJA NINOSLAVA<br />\
    <img src="styles/legend/Ulicapoligon_1_10.png" /> BANJALUČKA<br />\
    <img src="styles/legend/Ulicapoligon_1_11.png" /> BEHDŽETA MUTEVELIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_12.png" /> BIHAĆKA<br />\
    <img src="styles/legend/Ulicapoligon_1_13.png" /> BLAGAJSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_14.png" /> BLEDSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_15.png" /> BORACA ZLATISTA<br />\
    <img src="styles/legend/Ulicapoligon_1_16.png" /> BUGOJANSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_17.png" /> BULEVAR IVICE OSIMA<br />\
    <img src="styles/legend/Ulicapoligon_1_18.png" /> BULEVAR M.SELIMOVIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_19.png" /> BUTMIRSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_20.png" /> ĆAMILA SIJARIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_21.png" /> DERVIŠA NUMIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_22.png" /> DOBOJSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_23.png" /> DOLINA MIRA<br />\
    <img src="styles/legend/Ulicapoligon_1_24.png" /> DRINSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_25.png" /> DŽAMIJSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_26.png" /> DŽAVIDA HAVERIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_27.png" /> DŽEMALA BIJEDIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_28.png" /> EMERIKA BLUMA<br />\
    <img src="styles/legend/Ulicapoligon_1_29.png" /> ENVERA ŠEHOVIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_30.png" /> FERDE HAUPTMANA<br />\
    <img src="styles/legend/Ulicapoligon_1_31.png" /> FETAHA BEĆIRBEGOVIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_32.png" /> FIKRET KAVAZOVIĆ - ROKI<br />\
    <img src="styles/legend/Ulicapoligon_1_33.png" /> FOJNIČKA<br />\
    <img src="styles/legend/Ulicapoligon_1_34.png" /> FRA FILIPA LASTRIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_35.png" /> FRA MATIJE DIVKOVIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_36.png" /> GORAŽDANSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_37.png" /> GORNJI VELEŠIĆI<br />\
    <img src="styles/legend/Ulicapoligon_1_38.png" /> GORNJOVAKUFSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_39.png" /> GRBAVIČKA<br />\
    <img src="styles/legend/Ulicapoligon_1_40.png" /> HALIDA KAJTAZA<br />\
    <img src="styles/legend/Ulicapoligon_1_41.png" /> HAMDIJE ČEMERLIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_42.png" /> HAMIDA HADŽIBEGIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_43.png" /> HASANA BRKIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_44.png" /> HERCEGOVAČKA<br />\
    <img src="styles/legend/Ulicapoligon_1_45.png" /> HRASNIČKA<br />\
    <img src="styles/legend/Ulicapoligon_1_46.png" /> HUM BRDO<br />\
    <img src="styles/legend/Ulicapoligon_1_47.png" /> HUMSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_48.png" /> HUSINJSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_49.png" /> IGMANSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_50.png" /> ISAKA SAMOKOVLIJE<br />\
    <img src="styles/legend/Ulicapoligon_1_51.png" /> IVANA GORANA KOVAČIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_52.png" /> IVANJSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_53.png" /> KALESIJSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_54.png" /> KANARA<br />\
    <img src="styles/legend/Ulicapoligon_1_55.png" /> KEMALA KAPETANOVIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_56.png" /> KOLODVORSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_57.png" /> KRIVAJSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_58.png" /> KUPREŠKA<br />\
    <img src="styles/legend/Ulicapoligon_1_59.png" /> LOŽIONIČKA<br />\
    <img src="styles/legend/Ulicapoligon_1_60.png" /> LJUBLJANSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_61.png" /> MAHMUTA MAHMUTOVIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_62.png" /> MALTA<br />\
    <img src="styles/legend/Ulicapoligon_1_63.png" /> MARULIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_64.png" /> MILANA PRELOGA<br />\
    <img src="styles/legend/Ulicapoligon_1_65.png" /> MILINKLADSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_66.png" /> MUHAMEDA EF. PANDŽE<br />\
    <img src="styles/legend/Ulicapoligon_1_67.png" /> MUHAMEDA RIDŽANOVIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_68.png" /> MUSTAFE BEHMENA<br />\
    <img src="styles/legend/Ulicapoligon_1_69.png" /> NEDIMA FILIPOVIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_70.png" /> NERETVANSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_71.png" /> NEVESINJSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_72.png" /> NOVOPAZARSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_73.png" /> OHRIDSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_74.png" /> OLOVSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_75.png" /> ORAŠAČKA<br />\
    <img src="styles/legend/Ulicapoligon_1_76.png" /> PARK NACIONALNIH MANJINA<br />\
    <img src="styles/legend/Ulicapoligon_1_77.png" /> PAROMLINSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_78.png" /> PAVLA LUKAČA<br />\
    <img src="styles/legend/Ulicapoligon_1_79.png" /> PETRA SINANA ŠAINA<br />\
    <img src="styles/legend/Ulicapoligon_1_80.png" /> POČITELJSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_81.png" /> POFALIĆKA<br />\
    <img src="styles/legend/Ulicapoligon_1_82.png" /> PORODICE RIBAR<br />\
    <img src="styles/legend/Ulicapoligon_1_83.png" /> POSAVSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_84.png" /> PROZORSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_85.png" /> PUT MLADIH MUSLIMANA<br />\
    <img src="styles/legend/Ulicapoligon_1_86.png" /> PUT ŽIVOTA<br />\
    <img src="styles/legend/Ulicapoligon_1_87.png" /> RADENKA ABAZOVIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_88.png" /> RADNIČKA<br />\
    <img src="styles/legend/Ulicapoligon_1_89.png" /> REISA FEHIMA SPAHE<br />\
    <img src="styles/legend/Ulicapoligon_1_90.png" /> REISA FEHIMA SPAHE ČIKMA<br />\
    <img src="styles/legend/Ulicapoligon_1_91.png" /> ROBERT C. FRASURE<br />\
    <img src="styles/legend/Ulicapoligon_1_92.png" /> RUĐERA BOŠKOVIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_93.png" /> SAFETA HADŽIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_94.png" /> SAKIBA NIŠIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_95.png" /> SALIHA UDŽVARLIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_96.png" /> SAMOBORSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_97.png" /> SKOPLJANSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_98.png" /> SPLITSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_99.png" /> SPREČANSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_100.png" /> SREBRENIČKA<br />\
    <img src="styles/legend/Ulicapoligon_1_101.png" /> ŠAĆIRA SIKIRIĆA<br />\
    <img src="styles/legend/Ulicapoligon_1_102.png" /> ŠANAC<br />\
    <img src="styles/legend/Ulicapoligon_1_103.png" /> ŠIBENSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_104.png" /> TEOČAČKA<br />\
    <img src="styles/legend/Ulicapoligon_1_105.png" /> TOPAL OSMAN PAŠE<br />\
    <img src="styles/legend/Ulicapoligon_1_106.png" /> TRAVNIČKA<br />\
    <img src="styles/legend/Ulicapoligon_1_107.png" /> TREBEVIĆKA<br />\
    <img src="styles/legend/Ulicapoligon_1_108.png" /> TREBEVIĆKA-RS<br />\
    <img src="styles/legend/Ulicapoligon_1_109.png" /> TRG FADILE ODŽAKOVIĆ ŽUTE<br />\
    <img src="styles/legend/Ulicapoligon_1_110.png" /> TRG HEROJA<br />\
    <img src="styles/legend/Ulicapoligon_1_111.png" /> TRG ŽRTAVA GENOCIDA<br />\
    <img src="styles/legend/Ulicapoligon_1_112.png" /> TRIGLAVSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_113.png" /> TRNOVSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_114.png" /> VARAŽDINSKA<br />\
    <img src="styles/legend/Ulicapoligon_1_115.png" /> VELEŠIĆI<br />\
    <img src="styles/legend/Ulicapoligon_1_116.png" /> VELEŠIĆKIH BORACA<br />\
    <img src="styles/legend/Ulicapoligon_1_117.png" /> VILSONOVO ŠETALIŠTE<br />\
    <img src="styles/legend/Ulicapoligon_1_118.png" /> VRBASKA<br />\
    <img src="styles/legend/Ulicapoligon_1_119.png" /> ZAGREBAČKA<br />\
    <img src="styles/legend/Ulicapoligon_1_120.png" /> ZAHIRA PANJETE<br />\
    <img src="styles/legend/Ulicapoligon_1_121.png" /> ZENIČKA<br />\
    <img src="styles/legend/Ulicapoligon_1_122.png" /> ZMAJA OD BOSNE<br />\
    <img src="styles/legend/Ulicapoligon_1_123.png" /> <br />' });
var format_Zgrade_2 = new ol.format.GeoJSON();
var features_Zgrade_2 = format_Zgrade_2.readFeatures(json_Zgrade_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zgrade_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zgrade_2.addFeatures(features_Zgrade_2);
var lyr_Zgrade_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zgrade_2, 
                style: style_Zgrade_2,
                popuplayertitle: 'Zgrade',
                interactive: false,
    title: 'Zgrade<br />\
    <img src="styles/legend/Zgrade_2_0.png" /> Izmjena u broju objekta<br />\
    <img src="styles/legend/Zgrade_2_1.png" /> Nema izmjene u broju objekta<br />' });
var format_Kucnibroj_3 = new ol.format.GeoJSON();
var features_Kucnibroj_3 = format_Kucnibroj_3.readFeatures(json_Kucnibroj_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kucnibroj_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kucnibroj_3.addFeatures(features_Kucnibroj_3);
var lyr_Kucnibroj_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kucnibroj_3, 
                style: style_Kucnibroj_3,
                popuplayertitle: 'Kucni broj',
                interactive: false,
                title: 'Kucni broj'
            });
var group_Adresniregistar = new ol.layer.Group({
                                layers: [lyr_Ulicapoligon_1,lyr_Zgrade_2,lyr_Kucnibroj_3,],
                                fold: 'open',
                                title: 'Adresni registar'});

lyr_maps_0.setVisible(true);lyr_Ulicapoligon_1.setVisible(true);lyr_Zgrade_2.setVisible(true);lyr_Kucnibroj_3.setVisible(true);
var layersList = [lyr_maps_0,group_Adresniregistar];
lyr_Ulicapoligon_1.set('fieldAliases', {'Naziv': 'Naziv', 'label1': 'label1', 'label2': 'label2', 'rotation': 'rotation', });
lyr_Zgrade_2.set('fieldAliases', {'id': 'id', 'Izmjena': 'Izmjena', });
lyr_Kucnibroj_3.set('fieldAliases', {'broj': 'broj', 'podbroj': 'podbroj', 'label1': 'label1', 'label2': 'label2', 'puna_oznak': 'puna_oznak', });
lyr_Ulicapoligon_1.set('fieldImages', {'Naziv': 'TextEdit', 'label1': 'TextEdit', 'label2': 'TextEdit', 'rotation': 'TextEdit', });
lyr_Zgrade_2.set('fieldImages', {'id': 'TextEdit', 'Izmjena': 'TextEdit', });
lyr_Kucnibroj_3.set('fieldImages', {'broj': 'TextEdit', 'podbroj': 'TextEdit', 'label1': 'TextEdit', 'label2': 'TextEdit', 'puna_oznak': 'TextEdit', });
lyr_Ulicapoligon_1.set('fieldLabels', {'Naziv': 'no label', 'label1': 'no label', 'label2': 'no label', 'rotation': 'no label', });
lyr_Zgrade_2.set('fieldLabels', {'id': 'no label', 'Izmjena': 'no label', });
lyr_Kucnibroj_3.set('fieldLabels', {'broj': 'no label', 'podbroj': 'no label', 'label1': 'no label', 'label2': 'no label', 'puna_oznak': 'no label', });
lyr_Kucnibroj_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});