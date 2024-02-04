var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KECAMATAN_1 = new ol.format.GeoJSON();
var features_KECAMATAN_1 = format_KECAMATAN_1.readFeatures(json_KECAMATAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KECAMATAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECAMATAN_1.addFeatures(features_KECAMATAN_1);
var lyr_KECAMATAN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KECAMATAN_1, 
                style: style_KECAMATAN_1,
                interactive: true,
    title: 'KECAMATAN <br />\
    <img src="styles/legend/KECAMATAN_1_0.png" /> Ancol<br />\
    <img src="styles/legend/KECAMATAN_1_1.png" /> Arjasari<br />\
    <img src="styles/legend/KECAMATAN_1_2.png" /> Bangunjaya<br />\
    <img src="styles/legend/KECAMATAN_1_3.png" /> Banjarsari<br />\
    <img src="styles/legend/KECAMATAN_1_4.png" /> Banjarwaringin<br />\
    <img src="styles/legend/KECAMATAN_1_5.png" /> Bantarkalong<br />\
    <img src="styles/legend/KECAMATAN_1_6.png" /> Banyuasih<br />\
    <img src="styles/legend/KECAMATAN_1_7.png" /> Banyurasa<br />\
    <img src="styles/legend/KECAMATAN_1_8.png" /> Banyuresmi<br />\
    <img src="styles/legend/KECAMATAN_1_9.png" /> Barumekar<br />\
    <img src="styles/legend/KECAMATAN_1_10.png" /> Batusumur<br />\
    <img src="styles/legend/KECAMATAN_1_11.png" /> Beber<br />\
    <img src="styles/legend/KECAMATAN_1_12.png" /> Benteng<br />\
    <img src="styles/legend/KECAMATAN_1_13.png" /> Bojongasih<br />\
    <img src="styles/legend/KECAMATAN_1_14.png" /> Bojonggambir<br />\
    <img src="styles/legend/KECAMATAN_1_15.png" /> Bojonggaok<br />\
    <img src="styles/legend/KECAMATAN_1_16.png" /> Bojongkapol<br />\
    <img src="styles/legend/KECAMATAN_1_17.png" /> Bojongkondang<br />\
    <img src="styles/legend/KECAMATAN_1_18.png" /> Bojongsari<br />\
    <img src="styles/legend/KECAMATAN_1_19.png" /> Borogojol<br />\
    <img src="styles/legend/KECAMATAN_1_20.png" /> Bugel<br />\
    <img src="styles/legend/KECAMATAN_1_21.png" /> Buniasih<br />\
    <img src="styles/legend/KECAMATAN_1_22.png" /> Burujuljaya<br />\
    <img src="styles/legend/KECAMATAN_1_23.png" /> Calingcing<br />\
    <img src="styles/legend/KECAMATAN_1_24.png" /> Campaka<br />\
    <img src="styles/legend/KECAMATAN_1_25.png" /> Campakasari<br />\
    <img src="styles/legend/KECAMATAN_1_26.png" /> Cayur<br />\
    <img src="styles/legend/KECAMATAN_1_27.png" /> Ciakar<br />\
    <img src="styles/legend/KECAMATAN_1_28.png" /> Ciampanan<br />\
    <img src="styles/legend/KECAMATAN_1_29.png" /> Ciandum<br />\
    <img src="styles/legend/KECAMATAN_1_30.png" /> Ciawang<br />\
    <img src="styles/legend/KECAMATAN_1_31.png" /> Ciawi<br />\
    <img src="styles/legend/KECAMATAN_1_32.png" /> Cibahayu<br />\
    <img src="styles/legend/KECAMATAN_1_33.png" /> Cibalanarik<br />\
    <img src="styles/legend/KECAMATAN_1_34.png" /> Cibalong<br />\
    <img src="styles/legend/KECAMATAN_1_35.png" /> Cibanteng<br />\
    <img src="styles/legend/KECAMATAN_1_36.png" /> Cibatu<br />\
    <img src="styles/legend/KECAMATAN_1_37.png" /> Cibatuireng<br />\
    <img src="styles/legend/KECAMATAN_1_38.png" /> Cibeber<br />\
    <img src="styles/legend/KECAMATAN_1_39.png" /> Cibeuti<br />\
    <img src="styles/legend/KECAMATAN_1_40.png" /> Cibongas<br />\
    <img src="styles/legend/KECAMATAN_1_41.png" /> Cibungur<br />\
    <img src="styles/legend/KECAMATAN_1_42.png" /> Cibuniasih<br />\
    <img src="styles/legend/KECAMATAN_1_43.png" /> Cibunigeulis<br />\
    <img src="styles/legend/KECAMATAN_1_44.png" /> Cidadali<br />\
    <img src="styles/legend/KECAMATAN_1_45.png" /> Cidadap<br />\
    <img src="styles/legend/KECAMATAN_1_46.png" /> Cidolog<br />\
    <img src="styles/legend/KECAMATAN_1_47.png" /> Cidugaleun<br />\
    <img src="styles/legend/KECAMATAN_1_48.png" /> Cigadog<br />\
    <img src="styles/legend/KECAMATAN_1_49.png" /> Cigalontang<br />\
    <img src="styles/legend/KECAMATAN_1_50.png" /> Cigembor<br />\
    <img src="styles/legend/KECAMATAN_1_51.png" /> Cigunung<br />\
    <img src="styles/legend/KECAMATAN_1_52.png" /> Ciharalang<br />\
    <img src="styles/legend/KECAMATAN_1_53.png" /> Cihaur<br />\
    <img src="styles/legend/KECAMATAN_1_54.png" /> Cihaurbeuti<br />\
    <img src="styles/legend/KECAMATAN_1_55.png" /> Ciheras<br />\
    <img src="styles/legend/KECAMATAN_1_56.png" /> Cijulang<br />\
    <img src="styles/legend/KECAMATAN_1_57.png" /> Cikadongdong<br />\
    <img src="styles/legend/KECAMATAN_1_58.png" /> Cikadu<br />\
    <img src="styles/legend/KECAMATAN_1_59.png" /> Cikalong<br />\
    <img src="styles/legend/KECAMATAN_1_60.png" /> Cikancra<br />\
    <img src="styles/legend/KECAMATAN_1_61.png" /> Cikapinis<br />\
    <img src="styles/legend/KECAMATAN_1_62.png" /> Cikarang<br />\
    <img src="styles/legend/KECAMATAN_1_63.png" /> Cikawung<br />\
    <img src="styles/legend/KECAMATAN_1_64.png" /> Cikawunggading<br />\
    <img src="styles/legend/KECAMATAN_1_65.png" /> Cikeusal<br />\
    <img src="styles/legend/KECAMATAN_1_66.png" /> Cikondang<br />\
    <img src="styles/legend/KECAMATAN_1_67.png" /> Cikubang<br />\
    <img src="styles/legend/KECAMATAN_1_68.png" /> Cikukulu<br />\
    <img src="styles/legend/KECAMATAN_1_69.png" /> Cikunir<br />\
    <img src="styles/legend/KECAMATAN_1_70.png" /> Cikunten<br />\
    <img src="styles/legend/KECAMATAN_1_71.png" /> Cikupa<br />\
    <img src="styles/legend/KECAMATAN_1_72.png" /> Cikuya<br />\
    <img src="styles/legend/KECAMATAN_1_73.png" /> Cilampunghilir<br />\
    <img src="styles/legend/KECAMATAN_1_74.png" /> Cilangkap<br />\
    <img src="styles/legend/KECAMATAN_1_75.png" /> Cilawu<br />\
    <img src="styles/legend/KECAMATAN_1_76.png" /> Cileuleus<br />\
    <img src="styles/legend/KECAMATAN_1_77.png" /> Cilolohan<br />\
    <img src="styles/legend/KECAMATAN_1_78.png" /> Cilumba<br />\
    <img src="styles/legend/KECAMATAN_1_79.png" /> Cimanggu<br />\
    <img src="styles/legend/KECAMATAN_1_80.png" /> Cimanuk<br />\
    <img src="styles/legend/KECAMATAN_1_81.png" /> Cinagara<br />\
    <img src="styles/legend/KECAMATAN_1_82.png" /> Cineam<br />\
    <img src="styles/legend/KECAMATAN_1_83.png" /> Cinta<br />\
    <img src="styles/legend/KECAMATAN_1_84.png" /> Cintabodas<br />\
    <img src="styles/legend/KECAMATAN_1_85.png" /> Cintajaya<br />\
    <img src="styles/legend/KECAMATAN_1_86.png" /> Cintamanik<br />\
    <img src="styles/legend/KECAMATAN_1_87.png" /> Cintaraja<br />\
    <img src="styles/legend/KECAMATAN_1_88.png" /> Cintawangi<br />\
    <img src="styles/legend/KECAMATAN_1_89.png" /> Cinunjang<br />\
    <img src="styles/legend/KECAMATAN_1_90.png" /> Cipacing<br />\
    <img src="styles/legend/KECAMATAN_1_91.png" /> Cipaingeun<br />\
    <img src="styles/legend/KECAMATAN_1_92.png" /> Cipakat<br />\
    <img src="styles/legend/KECAMATAN_1_93.png" /> Cipanas<br />\
    <img src="styles/legend/KECAMATAN_1_94.png" /> Cipari<br />\
    <img src="styles/legend/KECAMATAN_1_95.png" /> Cipasung<br />\
    <img src="styles/legend/KECAMATAN_1_96.png" /> Cipatujah<br />\
    <img src="styles/legend/KECAMATAN_1_97.png" /> Cipawitra<br />\
    <img src="styles/legend/KECAMATAN_1_98.png" /> Cipicung<br />\
    <img src="styles/legend/KECAMATAN_1_99.png" /> Cipondok<br />\
    <img src="styles/legend/KECAMATAN_1_100.png" /> Ciroyom<br />\
    <img src="styles/legend/KECAMATAN_1_101.png" /> Cisarua<br />\
    <img src="styles/legend/KECAMATAN_1_102.png" /> Cisaruni<br />\
    <img src="styles/legend/KECAMATAN_1_103.png" /> Cisayong<br />\
    <img src="styles/legend/KECAMATAN_1_104.png" /> Cisempur<br />\
    <img src="styles/legend/KECAMATAN_1_105.png" /> Citalahab<br />\
    <img src="styles/legend/KECAMATAN_1_106.png" /> Citamba<br />\
    <img src="styles/legend/KECAMATAN_1_107.png" /> Ciwarak<br />\
    <img src="styles/legend/KECAMATAN_1_108.png" /> Cogreg<br />\
    <img src="styles/legend/KECAMATAN_1_109.png" /> Condong<br />\
    <img src="styles/legend/KECAMATAN_1_110.png" /> Cukangjayaguna<br />\
    <img src="styles/legend/KECAMATAN_1_111.png" /> Cukangkawung<br />\
    <img src="styles/legend/KECAMATAN_1_112.png" /> Darawati<br />\
    <img src="styles/legend/KECAMATAN_1_113.png" /> Dawagung<br />\
    <img src="styles/legend/KECAMATAN_1_114.png" /> Dayeuhmanggung<br />\
    <img src="styles/legend/KECAMATAN_1_115.png" /> Deudeul<br />\
    <img src="styles/legend/KECAMATAN_1_116.png" /> Dirgahayu<br />\
    <img src="styles/legend/KECAMATAN_1_117.png" /> Eureunpalay<br />\
    <img src="styles/legend/KECAMATAN_1_118.png" /> Geresik<br />\
    <img src="styles/legend/KECAMATAN_1_119.png" /> Girijaya<br />\
    <img src="styles/legend/KECAMATAN_1_120.png" /> Girikancana<br />\
    <img src="styles/legend/KECAMATAN_1_121.png" /> Giriwangi<br />\
    <img src="styles/legend/KECAMATAN_1_122.png" /> Godog<br />\
    <img src="styles/legend/KECAMATAN_1_123.png" /> Gombong<br />\
    <img src="styles/legend/KECAMATAN_1_124.png" /> Gunajaya<br />\
    <img src="styles/legend/KECAMATAN_1_125.png" /> Gunungsari<br />\
    <img src="styles/legend/KECAMATAN_1_126.png" /> Gunungtanjung<br />\
    <img src="styles/legend/KECAMATAN_1_127.png" /> Guranteng<br />\
    <img src="styles/legend/KECAMATAN_1_128.png" /> Handapherang<br />\
    <img src="styles/legend/KECAMATAN_1_129.png" /> Hegarmanah<br />\
    <img src="styles/legend/KECAMATAN_1_130.png" /> Hegarwangi<br />\
    <img src="styles/legend/KECAMATAN_1_131.png" /> Indrajaya<br />\
    <img src="styles/legend/KECAMATAN_1_132.png" /> Jahiang<br />\
    <img src="styles/legend/KECAMATAN_1_133.png" /> Janggala<br />\
    <img src="styles/legend/KECAMATAN_1_134.png" /> Jatihurip<br />\
    <img src="styles/legend/KECAMATAN_1_135.png" /> Jatijaya<br />\
    <img src="styles/legend/KECAMATAN_1_136.png" /> Jatiwaras<br />\
    <img src="styles/legend/KECAMATAN_1_137.png" /> Jayamukti<br />\
    <img src="styles/legend/KECAMATAN_1_138.png" /> Jayapura<br />\
    <img src="styles/legend/KECAMATAN_1_139.png" /> Jayaputra<br />\
    <img src="styles/legend/KECAMATAN_1_140.png" /> Jayaratu<br />\
    <img src="styles/legend/KECAMATAN_1_141.png" /> Jayasari<br />\
    <img src="styles/legend/KECAMATAN_1_142.png" /> Jelegong<br />\
    <img src="styles/legend/KECAMATAN_1_143.png" /> Kadipaten<br />\
    <img src="styles/legend/KECAMATAN_1_144.png" /> Kadongdong<br />\
    <img src="styles/legend/KECAMATAN_1_145.png" /> Kalapagenep<br />\
    <img src="styles/legend/KECAMATAN_1_146.png" /> Kalimanggis<br />\
    <img src="styles/legend/KECAMATAN_1_147.png" /> Kamulyan<br />\
    <img src="styles/legend/KECAMATAN_1_148.png" /> Kaputihan<br />\
    <img src="styles/legend/KECAMATAN_1_149.png" /> Karanganyar<br />\
    <img src="styles/legend/KECAMATAN_1_150.png" /> Karangjaya<br />\
    <img src="styles/legend/KECAMATAN_1_151.png" /> Karanglayung<br />\
    <img src="styles/legend/KECAMATAN_1_152.png" /> Karangmekar<br />\
    <img src="styles/legend/KECAMATAN_1_153.png" /> Karangmukti<br />\
    <img src="styles/legend/KECAMATAN_1_154.png" /> Karangmulya<br />\
    <img src="styles/legend/KECAMATAN_1_155.png" /> Karangnunggal<br />\
    <img src="styles/legend/KECAMATAN_1_156.png" /> Karangresik<br />\
    <img src="styles/legend/KECAMATAN_1_157.png" /> Karangsembung<br />\
    <img src="styles/legend/KECAMATAN_1_158.png" /> Karikil<br />\
    <img src="styles/legend/KECAMATAN_1_159.png" /> Karyabakti<br />\
    <img src="styles/legend/KECAMATAN_1_160.png" /> Karyamandala<br />\
    <img src="styles/legend/KECAMATAN_1_161.png" /> Karyamekar<br />\
    <img src="styles/legend/KECAMATAN_1_162.png" /> Karyawangi<br />\
    <img src="styles/legend/KECAMATAN_1_163.png" /> Kawitan<br />\
    <img src="styles/legend/KECAMATAN_1_164.png" /> Kawungsari<br />\
    <img src="styles/legend/KECAMATAN_1_165.png" /> Kersagalih<br />\
    <img src="styles/legend/KECAMATAN_1_166.png" /> Kersamaju<br />\
    <img src="styles/legend/KECAMATAN_1_167.png" /> Kertaharja<br />\
    <img src="styles/legend/KECAMATAN_1_168.png" /> Kertajaya<br />\
    <img src="styles/legend/KECAMATAN_1_169.png" /> Kertamukti<br />\
    <img src="styles/legend/KECAMATAN_1_170.png" /> Kertanegla<br />\
    <img src="styles/legend/KECAMATAN_1_171.png" /> Kertaraharja<br />\
    <img src="styles/legend/KECAMATAN_1_172.png" /> Kertasari<br />\
    <img src="styles/legend/KECAMATAN_1_173.png" /> Kiarajangkung<br />\
    <img src="styles/legend/KECAMATAN_1_174.png" /> Kubangsari<br />\
    <img src="styles/legend/KECAMATAN_1_175.png" /> Kudadepa<br />\
    <img src="styles/legend/KECAMATAN_1_176.png" /> Kujang<br />\
    <img src="styles/legend/KECAMATAN_1_177.png" /> Kurniabakti<br />\
    <img src="styles/legend/KECAMATAN_1_178.png" /> Kutawaringin<br />\
    <img src="styles/legend/KECAMATAN_1_179.png" /> Layabakti<br />\
    <img src="styles/legend/KECAMATAN_1_180.png" /> Lemahputih<br />\
    <img src="styles/legend/KECAMATAN_1_181.png" /> Lengkongbarang<br />\
    <img src="styles/legend/KECAMATAN_1_182.png" /> Lengkongjaya<br />\
    <img src="styles/legend/KECAMATAN_1_183.png" /> Leuwidulang<br />\
    <img src="styles/legend/KECAMATAN_1_184.png" /> Leuwiliang<br />\
    <img src="styles/legend/KECAMATAN_1_185.png" /> Leuwisapi<br />\
    <img src="styles/legend/KECAMATAN_1_186.png" /> Linggajati<br />\
    <img src="styles/legend/KECAMATAN_1_187.png" /> Linggalaksana<br />\
    <img src="styles/legend/KECAMATAN_1_188.png" /> Linggamukti<br />\
    <img src="styles/legend/KECAMATAN_1_189.png" /> Linggamulya<br />\
    <img src="styles/legend/KECAMATAN_1_190.png" /> Linggaraja<br />\
    <img src="styles/legend/KECAMATAN_1_191.png" /> Linggasari<br />\
    <img src="styles/legend/KECAMATAN_1_192.png" /> Linggawangi<br />\
    <img src="styles/legend/KECAMATAN_1_193.png" /> Lingsirna<br />\
    <img src="styles/legend/KECAMATAN_1_194.png" /> Madiasari<br />\
    <img src="styles/legend/KECAMATAN_1_195.png" /> Malangbong<br />\
    <img src="styles/legend/KECAMATAN_1_196.png" /> Mandalagiri<br />\
    <img src="styles/legend/KECAMATAN_1_197.png" /> Mandalaguna<br />\
    <img src="styles/legend/KECAMATAN_1_198.png" /> Mandalahayu<br />\
    <img src="styles/legend/KECAMATAN_1_199.png" /> Mandalajaya<br />\
    <img src="styles/legend/KECAMATAN_1_200.png" /> Mandalamekar<br />\
    <img src="styles/legend/KECAMATAN_1_201.png" /> Mandalasari<br />\
    <img src="styles/legend/KECAMATAN_1_202.png" /> Mandalawangi<br />\
    <img src="styles/legend/KECAMATAN_1_203.png" /> Manggungjaya<br />\
    <img src="styles/legend/KECAMATAN_1_204.png" /> Manggungsari<br />\
    <img src="styles/legend/KECAMATAN_1_205.png" /> Mangkonjaya<br />\
    <img src="styles/legend/KECAMATAN_1_206.png" /> Mangunreja<br />\
    <img src="styles/legend/KECAMATAN_1_207.png" /> Manonjaya<br />\
    <img src="styles/legend/KECAMATAN_1_208.png" /> Margabakti<br />\
    <img src="styles/legend/KECAMATAN_1_209.png" /> Margahayu<br />\
    <img src="styles/legend/KECAMATAN_1_210.png" /> Margajaya<br />\
    <img src="styles/legend/KECAMATAN_1_211.png" /> Margalaksana<br />\
    <img src="styles/legend/KECAMATAN_1_212.png" /> Margaluyu<br />\
    <img src="styles/legend/KECAMATAN_1_213.png" /> Margamulya<br />\
    <img src="styles/legend/KECAMATAN_1_214.png" /> Margasari<br />\
    <img src="styles/legend/KECAMATAN_1_215.png" /> Margawati<br />\
    <img src="styles/legend/KECAMATAN_1_216.png" /> Maroko<br />\
    <img src="styles/legend/KECAMATAN_1_217.png" /> Medanglayang<br />\
    <img src="styles/legend/KECAMATAN_1_218.png" /> Mekarjaya<br />\
    <img src="styles/legend/KECAMATAN_1_219.png" /> Mekarsari<br />\
    <img src="styles/legend/KECAMATAN_1_220.png" /> Mekartani<br />\
    <img src="styles/legend/KECAMATAN_1_221.png" /> Mekarwangi<br />\
    <img src="styles/legend/KECAMATAN_1_222.png" /> Melatisuka<br />\
    <img src="styles/legend/KECAMATAN_1_223.png" /> Mertajaya<br />\
    <img src="styles/legend/KECAMATAN_1_224.png" /> Mugarsari<br />\
    <img src="styles/legend/KECAMATAN_1_225.png" /> Mulyasari<br />\
    <img src="styles/legend/KECAMATAN_1_226.png" /> Muncang<br />\
    <img src="styles/legend/KECAMATAN_1_227.png" /> Nagaratengah<br />\
    <img src="styles/legend/KECAMATAN_1_228.png" /> Nagrog<br />\
    <img src="styles/legend/KECAMATAN_1_229.png" /> Nangelasari<br />\
    <img src="styles/legend/KECAMATAN_1_230.png" /> Nangerang<br />\
    <img src="styles/legend/KECAMATAN_1_231.png" /> Nanggewer<br />\
    <img src="styles/legend/KECAMATAN_1_232.png" /> Nangtang<br />\
    <img src="styles/legend/KECAMATAN_1_233.png" /> Neglasari<br />\
    <img src="styles/legend/KECAMATAN_1_234.png" /> Nusawangi<br />\
    <img src="styles/legend/KECAMATAN_1_235.png" /> Padahurip<br />\
    <img src="styles/legend/KECAMATAN_1_236.png" /> Padakembang<br />\
    <img src="styles/legend/KECAMATAN_1_237.png" /> Padamulya<br />\
    <img src="styles/legend/KECAMATAN_1_238.png" /> Padasuka<br />\
    <img src="styles/legend/KECAMATAN_1_239.png" /> Padawaras<br />\
    <img src="styles/legend/KECAMATAN_1_240.png" /> Pagerageung<br />\
    <img src="styles/legend/KECAMATAN_1_241.png" /> Pagerbumi<br />\
    <img src="styles/legend/KECAMATAN_1_242.png" /> Pagersari<br />\
    <img src="styles/legend/KECAMATAN_1_243.png" /> Pakalongan<br />\
    <img src="styles/legend/KECAMATAN_1_244.png" /> Pakemitan<br />\
    <img src="styles/legend/KECAMATAN_1_245.png" /> Pakemitan Kidul<br />\
    <img src="styles/legend/KECAMATAN_1_246.png" /> Pameutingan<br />\
    <img src="styles/legend/KECAMATAN_1_247.png" /> Pamijahan<br />\
    <img src="styles/legend/KECAMATAN_1_248.png" /> Pamokolan<br />\
    <img src="styles/legend/KECAMATAN_1_249.png" /> Pamoyanan<br />\
    <img src="styles/legend/KECAMATAN_1_250.png" /> Pancasura<br />\
    <img src="styles/legend/KECAMATAN_1_251.png" /> Pancawangi<br />\
    <img src="styles/legend/KECAMATAN_1_252.png" /> Pangkalan<br />\
    <img src="styles/legend/KECAMATAN_1_253.png" /> Pangliaran<br />\
    <img src="styles/legend/KECAMATAN_1_254.png" /> Panumbangan<br />\
    <img src="styles/legend/KECAMATAN_1_255.png" /> Panyiaran<br />\
    <img src="styles/legend/KECAMATAN_1_256.png" /> Panyingkiran<br />\
    <img src="styles/legend/KECAMATAN_1_257.png" /> Papayan<br />\
    <img src="styles/legend/KECAMATAN_1_258.png" /> Parakanhonje<br />\
    <img src="styles/legend/KECAMATAN_1_259.png" /> Parentas<br />\
    <img src="styles/legend/KECAMATAN_1_260.png" /> Parumasan<br />\
    <img src="styles/legend/KECAMATAN_1_261.png" /> Parung<br />\
    <img src="styles/legend/KECAMATAN_1_262.png" /> Parungponteng<br />\
    <img src="styles/legend/KECAMATAN_1_263.png" /> Pasirbatang<br />\
    <img src="styles/legend/KECAMATAN_1_264.png" /> Pasirhuni<br />\
    <img src="styles/legend/KECAMATAN_1_265.png" /> Pasirmukti<br />\
    <img src="styles/legend/KECAMATAN_1_266.png" /> Pasirmuncang<br />\
    <img src="styles/legend/KECAMATAN_1_267.png" /> Pasirpanjang<br />\
    <img src="styles/legend/KECAMATAN_1_268.png" /> Pasirsalam<br />\
    <img src="styles/legend/KECAMATAN_1_269.png" /> Pasirtamiang<br />\
    <img src="styles/legend/KECAMATAN_1_270.png" /> Pawindan<br />\
    <img src="styles/legend/KECAMATAN_1_271.png" /> Payungagung<br />\
    <img src="styles/legend/KECAMATAN_1_272.png" /> Pedangkamulyan<br />\
    <img src="styles/legend/KECAMATAN_1_273.png" /> Purwarahayu<br />\
    <img src="styles/legend/KECAMATAN_1_274.png" /> Purwasari<br />\
    <img src="styles/legend/KECAMATAN_1_275.png" /> Puspahiang<br />\
    <img src="styles/legend/KECAMATAN_1_276.png" /> Puspajaya<br />\
    <img src="styles/legend/KECAMATAN_1_277.png" /> Puspamukti<br />\
    <img src="styles/legend/KECAMATAN_1_278.png" /> Pusparahayu<br />\
    <img src="styles/legend/KECAMATAN_1_279.png" /> Pusparaja<br />\
    <img src="styles/legend/KECAMATAN_1_280.png" /> Puspasari<br />\
    <img src="styles/legend/KECAMATAN_1_281.png" /> Puteran<br />\
    <img src="styles/legend/KECAMATAN_1_282.png" /> Rajadatu<br />\
    <img src="styles/legend/KECAMATAN_1_283.png" /> Rajamandala<br />\
    <img src="styles/legend/KECAMATAN_1_284.png" /> Rajapolah<br />\
    <img src="styles/legend/KECAMATAN_1_285.png" /> Raksajaya<br />\
    <img src="styles/legend/KECAMATAN_1_286.png" /> Raksasari<br />\
    <img src="styles/legend/KECAMATAN_1_287.png" /> Rancapaku<br />\
    <img src="styles/legend/KECAMATAN_1_288.png" /> Salawu<br />\
    <img src="styles/legend/KECAMATAN_1_289.png" /> Salebu<br />\
    <img src="styles/legend/KECAMATAN_1_290.png" /> Sancang<br />\
    <img src="styles/legend/KECAMATAN_1_291.png" /> Santanamekar<br />\
    <img src="styles/legend/KECAMATAN_1_292.png" /> Saribakti<br />\
    <img src="styles/legend/KECAMATAN_1_293.png" /> Sarimanggu<br />\
    <img src="styles/legend/KECAMATAN_1_294.png" /> Sarimukti<br />\
    <img src="styles/legend/KECAMATAN_1_295.png" /> Sariwangi<br />\
    <img src="styles/legend/KECAMATAN_1_296.png" /> Selawangi<br />\
    <img src="styles/legend/KECAMATAN_1_297.png" /> Sepatnunggal<br />\
    <img src="styles/legend/KECAMATAN_1_298.png" /> Serang<br />\
    <img src="styles/legend/KECAMATAN_1_299.png" /> Setiawangi<br />\
    <img src="styles/legend/KECAMATAN_1_300.png" /> Setiawaras<br />\
    <img src="styles/legend/KECAMATAN_1_301.png" /> Setiawargi<br />\
    <img src="styles/legend/KECAMATAN_1_302.png" /> Sidamulih<br />\
    <img src="styles/legend/KECAMATAN_1_303.png" /> Simpang<br />\
    <img src="styles/legend/KECAMATAN_1_304.png" /> Sinagar<br />\
    <img src="styles/legend/KECAMATAN_1_305.png" /> Sindangasih<br />\
    <img src="styles/legend/KECAMATAN_1_306.png" /> Sindangbarang<br />\
    <img src="styles/legend/KECAMATAN_1_307.png" /> Sindanggalih<br />\
    <img src="styles/legend/KECAMATAN_1_308.png" /> Sindangherang<br />\
    <img src="styles/legend/KECAMATAN_1_309.png" /> Sindangjaya<br />\
    <img src="styles/legend/KECAMATAN_1_310.png" /> Sindangkerta<br />\
    <img src="styles/legend/KECAMATAN_1_311.png" /> Sindangpalay<br />\
    <img src="styles/legend/KECAMATAN_1_312.png" /> Sindangraja<br />\
    <img src="styles/legend/KECAMATAN_1_313.png" /> Sindangsari<br />\
    <img src="styles/legend/KECAMATAN_1_314.png" /> Singajaya<br />\
    <img src="styles/legend/KECAMATAN_1_315.png" /> Singaparna<br />\
    <img src="styles/legend/KECAMATAN_1_316.png" /> Singasari<br />\
    <img src="styles/legend/KECAMATAN_1_317.png" /> Singkir<br />\
    <img src="styles/legend/KECAMATAN_1_318.png" /> Sirnagalih<br />\
    <img src="styles/legend/KECAMATAN_1_319.png" /> Sirnajaya<br />\
    <img src="styles/legend/KECAMATAN_1_320.png" /> Sirnaputra<br />\
    <img src="styles/legend/KECAMATAN_1_321.png" /> Sirnasari<br />\
    <img src="styles/legend/KECAMATAN_1_322.png" /> Situgede<br />\
    <img src="styles/legend/KECAMATAN_1_323.png" /> Sodonghilir<br />\
    <img src="styles/legend/KECAMATAN_1_324.png" /> Sukaasih<br />\
    <img src="styles/legend/KECAMATAN_1_325.png" /> Sukabakti<br />\
    <img src="styles/legend/KECAMATAN_1_326.png" /> Sukadana<br />\
    <img src="styles/legend/KECAMATAN_1_327.png" /> Sukagalih<br />\
    <img src="styles/legend/KECAMATAN_1_328.png" /> Sukaharja<br />\
    <img src="styles/legend/KECAMATAN_1_329.png" /> Sukahening<br />\
    <img src="styles/legend/KECAMATAN_1_330.png" /> Sukaherang<br />\
    <img src="styles/legend/KECAMATAN_1_331.png" /> Sukahurip<br />\
    <img src="styles/legend/KECAMATAN_1_332.png" /> Sukajadi<br />\
    <img src="styles/legend/KECAMATAN_1_333.png" /> Sukakarsa<br />\
    <img src="styles/legend/KECAMATAN_1_334.png" /> Sukakerta<br />\
    <img src="styles/legend/KECAMATAN_1_335.png" /> Sukalaksana<br />\
    <img src="styles/legend/KECAMATAN_1_336.png" /> Sukaluyu<br />\
    <img src="styles/legend/KECAMATAN_1_337.png" /> Sukamahi<br />\
    <img src="styles/legend/KECAMATAN_1_338.png" /> Sukamaju<br />\
    <img src="styles/legend/KECAMATAN_1_339.png" /> Sukamaju Kaler<br />\
    <img src="styles/legend/KECAMATAN_1_340.png" /> Sukamaju Kidul<br />\
    <img src="styles/legend/KECAMATAN_1_341.png" /> Sukamanah<br />\
    <img src="styles/legend/KECAMATAN_1_342.png" /> Sukamantri<br />\
    <img src="styles/legend/KECAMATAN_1_343.png" /> Sukamenak<br />\
    <img src="styles/legend/KECAMATAN_1_344.png" /> Sukamukti<br />\
    <img src="styles/legend/KECAMATAN_1_345.png" /> Sukamulih<br />\
    <img src="styles/legend/KECAMATAN_1_346.png" /> Sukamulya<br />\
    <img src="styles/legend/KECAMATAN_1_347.png" /> Sukamurni<br />\
    <img src="styles/legend/KECAMATAN_1_348.png" /> Sukanagalih<br />\
    <img src="styles/legend/KECAMATAN_1_349.png" /> Sukanagara<br />\
    <img src="styles/legend/KECAMATAN_1_350.png" /> Sukapada<br />\
    <img src="styles/legend/KECAMATAN_1_351.png" /> Sukapancar<br />\
    <img src="styles/legend/KECAMATAN_1_352.png" /> Sukapura<br />\
    <img src="styles/legend/KECAMATAN_1_353.png" /> Sukaraharja<br />\
    <img src="styles/legend/KECAMATAN_1_354.png" /> Sukaraja<br />\
    <img src="styles/legend/KECAMATAN_1_355.png" /> Sukarame<br />\
    <img src="styles/legend/KECAMATAN_1_356.png" /> Sukarapih<br />\
    <img src="styles/legend/KECAMATAN_1_357.png" /> Sukarasa<br />\
    <img src="styles/legend/KECAMATAN_1_358.png" /> Sukaratu<br />\
    <img src="styles/legend/KECAMATAN_1_359.png" /> Sukaresik<br />\
    <img src="styles/legend/KECAMATAN_1_360.png" /> Sukasari<br />\
    <img src="styles/legend/KECAMATAN_1_361.png" /> Sukasenang<br />\
    <img src="styles/legend/KECAMATAN_1_362.png" /> Sukasetia<br />\
    <img src="styles/legend/KECAMATAN_1_363.png" /> Sukasukur<br />\
    <img src="styles/legend/KECAMATAN_1_364.png" /> Sukatani<br />\
    <img src="styles/legend/KECAMATAN_1_365.png" /> Sukawangi<br />\
    <img src="styles/legend/KECAMATAN_1_366.png" /> Sukawangun<br />\
    <img src="styles/legend/KECAMATAN_1_367.png" /> Sumberjaya<br />\
    <img src="styles/legend/KECAMATAN_1_368.png" /> Sundakerta<br />\
    <img src="styles/legend/KECAMATAN_1_369.png" /> Sundawenang<br />\
    <img src="styles/legend/KECAMATAN_1_370.png" /> Talagasari<br />\
    <img src="styles/legend/KECAMATAN_1_371.png" /> Tamansari<br />\
    <img src="styles/legend/KECAMATAN_1_372.png" /> Tanjung<br />\
    <img src="styles/legend/KECAMATAN_1_373.png" /> Tanjungbarang<br />\
    <img src="styles/legend/KECAMATAN_1_374.png" /> Tanjungjaya<br />\
    <img src="styles/legend/KECAMATAN_1_375.png" /> Tanjungkarang<br />\
    <img src="styles/legend/KECAMATAN_1_376.png" /> Tanjungkerta<br />\
    <img src="styles/legend/KECAMATAN_1_377.png" /> Tanjungmekar<br />\
    <img src="styles/legend/KECAMATAN_1_378.png" /> Tanjungmulya<br />\
    <img src="styles/legend/KECAMATAN_1_379.png" /> Tanjungpura<br />\
    <img src="styles/legend/KECAMATAN_1_380.png" /> Tanjungsari<br />\
    <img src="styles/legend/KECAMATAN_1_381.png" /> Taraju<br />\
    <img src="styles/legend/KECAMATAN_1_382.png" /> Tarunajaya<br />\
    <img src="styles/legend/KECAMATAN_1_383.png" /> Tawang<br />\
    <img src="styles/legend/KECAMATAN_1_384.png" /> Tawangbanteng<br />\
    <img src="styles/legend/KECAMATAN_1_385.png" /> Tenjonagara<br />\
    <img src="styles/legend/KECAMATAN_1_386.png" /> Tenjonegara<br />\
    <img src="styles/legend/KECAMATAN_1_387.png" /> Tenjowaringin<br />\
    <img src="styles/legend/KECAMATAN_1_388.png" /> Toblong<br />\
    <img src="styles/legend/KECAMATAN_1_389.png" /> Tobongjaya<br />\
    <img src="styles/legend/KECAMATAN_1_390.png" /> Tonjong<br />\
    <img src="styles/legend/KECAMATAN_1_391.png" /> Tonjongsari<br />\
    <img src="styles/legend/KECAMATAN_1_392.png" /> Urug<br />\
    <img src="styles/legend/KECAMATAN_1_393.png" /> Wakap<br />\
    <img src="styles/legend/KECAMATAN_1_394.png" /> Wandasari<br />\
    <img src="styles/legend/KECAMATAN_1_395.png" /> Wangunjaya<br />\
    <img src="styles/legend/KECAMATAN_1_396.png" /> Wangunsari<br />\
    <img src="styles/legend/KECAMATAN_1_397.png" /> Wargakerta<br />\
    <img src="styles/legend/KECAMATAN_1_398.png" /> <br />'
        });
var format_JALAN_LN_25K_2 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_2 = format_JALAN_LN_25K_2.readFeatures(json_JALAN_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_2.addFeatures(features_JALAN_LN_25K_2);
var lyr_JALAN_LN_25K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_25K_2, 
                style: style_JALAN_LN_25K_2,
                interactive: true,
    title: 'JALAN_LN_25K<br />\
    <img src="styles/legend/JALAN_LN_25K_2_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JALAN_LN_25K_2_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JALAN_LN_25K_2_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/JALAN_LN_25K_2_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JALAN_LN_25K_2_4.png" /> Jalan Setapak<br />'
        });
var format_PEMERINTAHAN_PT_25K_3 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_3 = format_PEMERINTAHAN_PT_25K_3.readFeatures(json_PEMERINTAHAN_PT_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_3.addFeatures(features_PEMERINTAHAN_PT_25K_3);
var lyr_PEMERINTAHAN_PT_25K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_25K_3, 
                style: style_PEMERINTAHAN_PT_25K_3,
                interactive: true,
    title: 'PEMERINTAHAN_PT_25K<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_3_0.png" /> Kantor Camat<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_3_1.png" /> Kantor Kepala Desa<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_3_2.png" /> Kantor Pemerintah Lainnya<br />\
    <img src="styles/legend/PEMERINTAHAN_PT_25K_3_3.png" /> Kantor Polisi<br />'
        });
var format_SUNGAI_LN_25K_4 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_4 = format_SUNGAI_LN_25K_4.readFeatures(json_SUNGAI_LN_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_4.addFeatures(features_SUNGAI_LN_25K_4);
var lyr_SUNGAI_LN_25K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_25K_4, 
                style: style_SUNGAI_LN_25K_4,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_4.png" /> SUNGAI_LN_25K'
            });

lyr_OSMStandard_0.setVisible(true);lyr_KECAMATAN_1.setVisible(true);lyr_JALAN_LN_25K_2.setVisible(true);lyr_PEMERINTAHAN_PT_25K_3.setVisible(true);lyr_SUNGAI_LN_25K_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KECAMATAN_1,lyr_JALAN_LN_25K_2,lyr_PEMERINTAHAN_PT_25K_3,lyr_SUNGAI_LN_25K_4];
lyr_KECAMATAN_1.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'WEB': 'WEB', 'Gambar': 'Gambar', });
lyr_JALAN_LN_25K_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PEMERINTAHAN_PT_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_SUNGAI_LN_25K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KECAMATAN_1.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'WEB': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_JALAN_LN_25K_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PEMERINTAHAN_PT_25K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_SUNGAI_LN_25K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_KECAMATAN_1.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'hidden field', 'WIADKC': 'inline label - visible with data', 'WADMKK': 'inline label - always visible', 'WIADKK': 'no label', 'WADMPR': 'inline label - always visible', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', 'WEB': 'inline label - always visible', 'Gambar': 'inline label - always visible', });
lyr_JALAN_LN_25K_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PEMERINTAHAN_PT_25K_3.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_SUNGAI_LN_25K_4.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});