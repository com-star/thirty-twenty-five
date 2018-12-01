import Planet from 'planet/planet';

// variables
var mapSW = [0, 16384],
	mapNE = [20480, 4096];

// attributes
const art



// map object
var map = L.map('map').setView([0, 0], 3);

// map tiles
L.tileLayer('maps/{z}/{x}/{y}.png', {
	minZoom: 1,
	maxZoom: 6,
	continuousWorld: false,
	noWrap: true
	crs: L.CRS.Simple,
}).addTo(map);

map.setMaxBounds(new L.LatLngBounds(
	map.unproject(mapSW, map.getMaxZoom()),
	map.unproject(mapNE, map.getMaxZoom())
));

// all the markers and popups

// latlng marker
//var refmarker = L.marker([0, 0], {
//	draggable: true,
//}).addTo(map);
//refmarker.bindPopup('');

// pixel coords
//refmarker.on('dragend', function(e) {
//	refmarker.getPopup().setContent('Clicked ' + refmarker.getLatLng().toString() + '<br />'
//		+ 'Pixels ' +map.project(refmarker.getLatLng(), map.getMaxZoom().toString()))
//	.openOn(map);
//});

// welcome popup

var sys_welcome = L.popup()
    .setLatLng([0, 0])
    .setContent(`<center><img src='images/icons/Mercenary Review Board.png', width = 96, height = 96</img>
    	<p><h1>Greetings! </h1>
    	<p><b>Welcome to the websites!
    	<p>If you would like to report a bug, request a feature, assist with adding to the map or simply share your thoughts, please head on over to my github where you can find my threads and directly submit your edits for my consideration via the link below!
    	<p><b><a href="https://github.com/Napalm1473/Battletech-2018-Interactive-Map">Github Repository, readme and my threads for your comments</a></center>`)
    .openOn(map);



// system markers

var pop_Addasar = L.responsivePopup().setContent(`<h1>Addasar <img src='images/icons/Magistracy Of Canopus.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> On Addasar, glaciers have carved out beautiful fjords in the tropics and a Magistracy settlement perches in the peaks, where they mine some of the rarest gemstones in the Periphery.
    <p><b>Owner:</b> Magistracy Of Canopus
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Mining <p><b>Faction:</b> magistracy
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Addasar = L.marker(map.unproject([5734, 10331], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_Addasar).addTo(map);


    var pop_Adrar = L.responsivePopup().setContent(`<h1>Adrar <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The surface of Adrar is ruined and polluted after an early attempt at independence was quelled, harshly, by Capellan forces. The remaining population struggles to sustain an agricultural  in the wreckage.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Adrar = L.marker(map.unproject([6345, 7468], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Adrar).addTo(map);


    var pop_Aea_F = L.responsivePopup().setContent(`<h1>Aea <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Aea is a wet, lush, tropical world with an atmosphere dense with foul-smelling sulfurous volcanic outgassing. ComStar maintains an HPG facility on the ; support of that facility is the only reason the system still boasts colonists.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Aquaculture <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate, Davion
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Aea_F = L.marker(map.unproject([10279, 8013], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Aea_F).addTo(map);


    var pop_Ahlat = L.responsivePopup().setContent(`<h1>Ahlat <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> On Ahlat, a tiny Taurian installation mines rare isotopes at one pole, while at the other, a rackety collection of scuttled ships are chained together into a pirate stronghold. Sometimes, in sealed caves in the tropics, there's a not-so-secret market.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Mining, poor <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> martianVacuum
    `);
    sys_Ahlat = L.marker(map.unproject([11525, 10211], map.getMaxZoom()),{icon: mars})
    .bindPopup(pop_Ahlat).addTo(map);


    var pop_Alamagordo = L.responsivePopup().setContent(`<h1>Alamagordo <img src='images/icons/Marik.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Alamagordo was once a bustling, growing colony. Unfortunately, the world is a flash-point for conflicts between Liao and Marik, and repeated conquests reduced the infrastructure to rubble. The remaining residents eke out a living by farming.
    <p><b>Owner:</b> Marik
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture <p><b>Faction:</b> marik
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Liao, Steiner, Marik
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Liao, Marik
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Alamagordo = L.marker(map.unproject([4751, 6512], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Alamagordo).addTo(map);


    var pop_Alexandria = L.responsivePopup().setContent(`<h1>Alexandria <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Once a populous and profitable Mining colony, local strife abruptly depopulated Alexandria, as well as poisoning most of the native life.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Alexandria = L.marker(map.unproject([9148, 6049], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Alexandria).addTo(map);


    var pop_Alloway = L.responsivePopup().setContent(`<h1>Alloway <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Alloway is rocky and barren, except for a 200km-wide equatorial band of lush jungle that teems with native life. Human settlements are mostly concentrated on the edges of this band.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> poor <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Marik, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Marik, Locals
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Alloway = L.marker(map.unproject([6218, 8615], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Alloway).addTo(map);


    var pop_Andarmax = L.responsivePopup().setContent(`<h1>Andarmax <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Andarmax is not a single planet, but rather a gas giant with a Large number of moons, in varying states of terraforming. The seat of government and the ComStar temple are located on Heinlein, the Smallest of the moons.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 9
    <p><b>Tags:</b> Agriculture, rich <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> martianVacuum
    `);
    sys_Andarmax = L.marker(map.unproject([6369, 6951], map.getMaxZoom()),{icon: mars})
    .bindPopup(pop_Andarmax).addTo(map);


    var pop_Antias = L.responsivePopup().setContent(`<h1>Antias <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The icy world of Antias was a battleground of the Second Succession War. To survive, the local government made the world a free haven for  Pirates and mercenaries. Currently, the government is controlled by pirate cartels.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> manufacturing <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Marik, Liao, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao, Locals
    <p><b>Biomes:</b> Polar Frozen
    `);
    sys_Antias = L.marker(map.unproject([5643, 6831], map.getMaxZoom()),{icon: ice})
    .bindPopup(pop_Antias).addTo(map);


    var pop_Appian = L.responsivePopup().setContent(`<h1>Appian <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Appian features a lush, fertile Terran world called Omen. Every attempt to colonize Omen has failed, and the world is littered with ruins. The inhabitants are researchers in a Small station, trying to pierce Omen's secrets.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 3
    <p><b>Tags:</b> research, poor <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Appian = L.marker(map.unproject([7526, 9002], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Appian).addTo(map);


    var pop_Aquagea = L.responsivePopup().setContent(`<h1>Aquagea <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> A former holding of the Free Worlds League, Aquagea lost much of its infrastructure to the League's reprisals during their independence movement. The current inhabitants are fiercely nationalistic and detest the League.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> poor <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Marik, Magistracy Of Canopus, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Magistracy Of Canopus, Locals
    <p><b>Biomes:</b> Desert Parched, martianVacuum
    `);
    sys_Aquagea = L.marker(map.unproject([5067, 7299], map.getMaxZoom()),{icon: desert})
    .bindPopup(pop_Aquagea).addTo(map);


    var pop_Argos = L.responsivePopup().setContent(`<h1>Argos <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The savannahs and Desert s of Argos are dominated by native fauna, but a Small network of hardy, fiercely Independent townships have carved out a distinct culture in the temperate zone.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Small eventpox
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture, Mining, eventpox <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Argos = L.marker(map.unproject([10805, 9578], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Argos).addTo(map);


    var pop_Arn = L.responsivePopup().setContent(`<h1>Arn <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Once a thriving agricultural and fishing world, Arn relied on Star League orbital technology to manipulate the weather and create viable farmland. Since being abandoned, the colony's population has slowly declined, as the weather satellites gradually shut down.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Aquaculture, poor, Agriculture <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Marik, Liao, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao, Locals
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Arn = L.marker(map.unproject([5723, 7752], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_Arn).addTo(map);


    var pop_Artru_F = L.responsivePopup().setContent(`<h1>Artru <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Artru is a barren, icy rock with almost nothing of value; a token staff keeps the massive industrial Mining equipment running. It's a major travel link to Hellespont, however, and Hellespont is the headquarters of the rimward branch of the ComStar Explorer Corps.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Mining <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate
    <p><b>Biomes:</b> Polar Frozen
    `);
    sys_Artru_F = L.marker(map.unproject([10490, 9084], map.getMaxZoom()),{icon: ice})
    .bindPopup(pop_Artru_F).addTo(map);


    var pop_Athna = L.responsivePopup().setContent(`<h1>Athna <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Athna of the low albedo was established as a graphite mine before being all but abandoned by the Liao after a rebellion. But some of the old domes remain unshattered and scavengers of all sorts can be found within.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Mining <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> Lunar Vacuum
    `);
    sys_Athna = L.marker(map.unproject([5793, 5999], map.getMaxZoom()),{icon: lunar})
    .bindPopup(pop_Athna).addTo(map);


    var pop_AtreusPrime = L.responsivePopup().setContent(`<h1>Atreus Prime <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> A pleasant world in the heart of the Concordat, Atreus Prime was scarred by an ancient battle between the SLDF and Taurian rebels, well before the Amaris Civil War. A swath of the  is a barren radioactive wasteland, littered with the shells of dead 'Mechs.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> manufacturing, Agriculture <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_AtreusPrime = L.marker(map.unproject([12039, 6600], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_AtreusPrime).addTo(map);


    var pop_Balawat = L.responsivePopup().setContent(`<h1>Balawat <img src='images/icons/Magistracy Of Canopus.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Long ago, frozen Balawat was struck by a meteor that dug a hole deep in the 's crust, letting shine its inner light. Now, only in this giant crater, life thrives, including a single Large Magistracy port initially established as an art colony and since maintained by the Mining .
    <p><b>Owner:</b> Magistracy Of Canopus
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Mining, manufacturing <p><b>Faction:</b> magistracy
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Balawat = L.marker(map.unproject([5183, 10169], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_Balawat).addTo(map);


    var pop_Barras = L.responsivePopup().setContent(`<h1>Barras <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> With a population of nearly 3.5 billion and a thriving trade economy, Barras is a critical link between the Capellans and the League. As a consequence, it is also a hotbed of intrigue and espionage.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> research, manufacturing <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, ComStar, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Barras = L.marker(map.unproject([6966, 6080], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Barras).addTo(map);


    var pop_Bellatrix = L.responsivePopup().setContent(`<h1>Bellatrix <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Bellatrix has a long and proud history, having been settled in the First Exodus. The system was briefly captured by the Free Worlds League during the Star League era, but was retaken by mercenaries employed by the Capellan Confederation.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, Aquaculture, manufacturing <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> ComStar, Marik, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Bellatrix = L.marker(map.unproject([7784, 6010], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Bellatrix).addTo(map);


    var pop_Bellerophon = L.responsivePopup().setContent(`<h1>Bellerophon <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Recently liberated from mercenaries and religious fanatics, lightly-inhabited Bellerophon is arid and inhospitable, and conflicts over limited agricultural resources are common.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 3
    <p><b>Tags:</b> Agriculture <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Marik, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Marik, Locals
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Bellerophon = L.marker(map.unproject([6745, 9141], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Bellerophon).addTo(map);


    var pop_Bergtatt = L.responsivePopup().setContent(`<h1>Bergtatt <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> On Bergtatt, a sand-sharp wind has cut mountains into howling arches and singing spires, and the endless noise makes long-term residence impossible. It also makes the  difficult to scan, which mean it has a steady population of short-term residents on the run.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Desert Parched, martianVacuum
    `);
    sys_Bergtatt = L.marker(map.unproject([9305, 6553], map.getMaxZoom()),{icon: desert})
    .bindPopup(pop_Bergtatt).addTo(map);


    var pop_Bonavista = L.responsivePopup().setContent(`<h1>Bonavista <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The original colonists of this frozen world died out soon after the colony's founding, but the  has found new life as a base for  Pirates that prey on traffic between Liao and the Magistracy.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> poor <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Marik, Liao, Magistracy Of Canopus, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao, Magistracy Of Canopus, Locals
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Bonavista = L.marker(map.unproject([5186, 8495], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_Bonavista).addTo(map);


    var pop_Borden = L.responsivePopup().setContent(`<h1>Borden <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Once Borden had vast lakes but now those lakes are dry, with salt beaches. But the land, when watered, is still fertile and the  supports a specialized black market and a sizable Mining community that harvests salt, diamond and corundum.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Mining, Agriculture, manufacturing <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Borden = L.marker(map.unproject([7715, 6527], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Borden).addTo(map);


    var pop_Bringdam_F = L.responsivePopup().setContent(`<h1>Bringdam <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> A lush, high-gravity world, Bringdam's atmosphere is so dense as to be almost unbreathable. The humidity makes it a poor location for Mining, but it is an excellent agricultural world, supplying itself and a number of nearby systems.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, poor <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Taurian Concordat, Aurigan Directorate, Davion
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Bringdam_F = L.marker(map.unproject([8920, 7463], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Bringdam_F).addTo(map);


    var pop_Brinton = L.responsivePopup().setContent(`<h1>Brinton <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Brinton is an infamous world due to the plague that bears its name. Centuries ago the Capellans released a bio-weapon on the surface, which continues to be deadly even now. The target of numerous raids, Brinton is now heavily guarded by the Concordat.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 10
    <p><b>Tags:</b> manufacturing, research, rich <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Liao, Davion, ComStar, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Davion, Taurian Concordat
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Brinton = L.marker(map.unproject([9728, 7526], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_Brinton).addTo(map);


    var pop_Brisbane = L.responsivePopup().setContent(`<h1>Brisbane <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Brisbane is a beautiful ocean world with pristine white-sand beaches that conceal a deadly secret: a viral degenerative nerve disease with no cure. Those unlucky enough to contract it gradually lose the use of their limbs and muscles.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Aquaculture, recreation, rich <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Liao, Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Davion, Taurian Concordat
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Brisbane = L.marker(map.unproject([10254, 7278], map.getMaxZoom()),{icon: water})
    .bindPopup(pop_Brisbane).addTo(map);


    var pop_Brixtana = L.responsivePopup().setContent(`<h1>Brixtana <img src='images/icons/Magistracy Of Canopus.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Brixtana is a cold world with windswept Tundra  and boreal forests. Once the site of an SLDF garrison, it was conquered early in the Reunification War despite dogged resistance by Magistracy-aligned mercenaries.
    <p><b>Owner:</b> Magistracy Of Canopus
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Mining <p><b>Faction:</b> magistracy
    <p><b>Contract Employers:</b> Marik, Liao, Magistracy Of Canopus
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao, Magistracy Of Canopus
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Brixtana = L.marker(map.unproject([4198, 8661], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_Brixtana).addTo(map);


    var pop_Brockway = L.responsivePopup().setContent(`<h1>Brockway <img src='images/icons/Davion.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> A rugged, harsh world, Brockway was colonized only due to its rich mineral resources. Originally held by the Concordat, the  was seized by the Federated Suns after the Reunification War and has been a Davion holding ever since.
    <p><b>Owner:</b> Davion
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 8
    <p><b>Tags:</b> Mining, Agriculture <p><b>Faction:</b> davion
    <p><b>Contract Employers:</b> Taurian Concordat, Kurita, Davion
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Davion
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Brockway = L.marker(map.unproject([11808, 6129], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Brockway).addTo(map);


    var pop_Bromhead = L.responsivePopup().setContent(`<h1>Bromhead <img src='images/icons/Davion.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The arid world of Bromhead was settled in the first wave of colonization, and was a Taurian holding until the Reunification War. It is now a Davion possession, with a Large population in sprawling river-bank cities that nestle in the vast Desert s.
    <p><b>Owner:</b> Davion
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 9
    <p><b>Tags:</b> Mining, Agriculture, manufacturing <p><b>Faction:</b> davion
    <p><b>Contract Employers:</b> Taurian Concordat, Liao, ComStar, Kurita, Davion
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Liao, Davion
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Bromhead = L.marker(map.unproject([10374, 6705], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Bromhead).addTo(map);


    var pop_Burton = L.responsivePopup().setContent(`<h1>Burton <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Burton is a company world, the home of one of the Largest Taurian electronics manufacturers. Most of the world's Small population consists of employees, staff, and support services for O-P Computer Electronics.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> manufacturing, rich <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Burton = L.marker(map.unproject([11001, 7868], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Burton).addTo(map);


    var pop_Calseraigne = L.responsivePopup().setContent(`<h1>Calseraigne <img src='images/icons/Marik.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> A Mining and industrial world of more strategic than economic value, Calseraigne was seized from the Capellans during the Third Succession War by the Free Worlds League. The inhabitants chafe under Marik rule, and unrest and minor sabotage is common.
    <p><b>Owner:</b> Marik
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 8
    <p><b>Tags:</b> Mining, manufacturing <p><b>Faction:</b> marik
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Liao, Steiner, Marik
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Liao, Marik
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Calseraigne = L.marker(map.unproject([6248, 6442], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Calseraigne).addTo(map);


    var pop_Camadeirre = L.responsivePopup().setContent(`<h1>Camadeirre <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The Camadeirre system is choked with asteroids and dominated by three Jovian gas giants; inhabitants live on a terraformed moon. A raid by the SLDF on Camadeirre is commonly thought to have been the spark that started the New Vandenberg Uprising.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Mining, manufacturing <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Camadeirre = L.marker(map.unproject([11794, 7352], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Camadeirre).addTo(map);


    var pop_Carmichael = L.responsivePopup().setContent(`<h1>Carmichael <img src='images/icons/Davion.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Storms and befouled air make Carmichael a miserable place. The Taurian inhabitants fought a long, brutal guerilla war against the SLDF during the Reunification War, but ultimately lost; since then, the world has been a Davion holding.
    <p><b>Owner:</b> Davion
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Mining, manufacturing <p><b>Faction:</b> davion
    <p><b>Contract Employers:</b> Taurian Concordat, Kurita, Davion
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Davion
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Carmichael = L.marker(map.unproject([11352, 5942], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Carmichael).addTo(map);


    var pop_Carthage = L.responsivePopup().setContent(`<h1>Carthage <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Carthage is so far out in the distant Periphery, and so isolated, that despite its pleasant it remains only lightly settled by eccentrics, adventurers, and criminals. Its single spaceport is little more than a concrete pad with a few service buildings.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture, Mining, poor <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Carthage = L.marker(map.unproject([11335, 9036], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Carthage).addTo(map);


    var pop_Cassilda = L.responsivePopup().setContent(`<h1>Cassilda <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This aquatic world is famed for its bountiful, deadly oceans. The population is clustered on volcanic island chains along the equator, while the oceans are ruled by a vast array of native predatory life forms.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Aquaculture <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Marik, Magistracy Of Canopus, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Magistracy Of Canopus, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Cassilda = L.marker(map.unproject([4507, 7664], map.getMaxZoom()),{icon: water})
    .bindPopup(pop_Cassilda).addTo(map);


    var pop_CatesHold = L.responsivePopup().setContent(`<h1>Cate's Hold <img src='images/icons/Magistracy Of Canopus.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Cate's Hold was settled as a gambling and resort world, but soon became a critical logistical center for the Magistracy in the Reunification War. Recent prospectors have discovered caches of SLDF technology and radioactive ores, once more drawing interest to the .
    <p><b>Owner:</b> Magistracy Of Canopus
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> manufacturing, recreation <p><b>Faction:</b> magistracy
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_CatesHold = L.marker(map.unproject([4741, 9239], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_CatesHold).addTo(map);


    var pop_Cavalor = L.responsivePopup().setContent(`<h1>Cavalor <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Cavalor was settled after the Reunification War, as the Capellans sought to reinforce their borders with the Magistracy and the Free Worlds League. Since that time, fertile soil and plentiful resources have caused the population of the world to explode.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, manufacturing, recreation <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Cavalor = L.marker(map.unproject([7949, 6986], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Cavalor).addTo(map);


    var pop_Chandan = L.responsivePopup().setContent(`<h1>Chandan <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This cold and rocky world is choked by silt and ash in the air from the constant volcanic activity. Inhabitants live in hab-spheres, emerging only to work in the extensive mines or research the local silicon-based life forms.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Mining, research <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Marik, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Marik, Locals
    <p><b>Biomes:</b> martianVacuum
    `);
    sys_Chandan = L.marker(map.unproject([6894, 10223], map.getMaxZoom()),{icon: mars})
    .bindPopup(pop_Chandan).addTo(map);


    var pop_Chennai = L.responsivePopup().setContent(`<h1>Chennai <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Chennai was little more than a communications outpost and refueling point for the Capellans, and as the Succession Wars ground on, even that role stopped being worthwhile, and the world was abandoned to  Pirates and  criminals.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Chennai = L.marker(map.unproject([6696, 6530], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Chennai).addTo(map);


    var pop_Claybrooke = L.responsivePopup().setContent(`<h1>Claybrooke <img src='images/icons/Marik.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Claybrooke is a wealthy industrial and agricultural world. Ruled by a military dictatorship installed by Marik intelligence operatives, the world has become increasingly aligned with the Duchy of Andurien.
    <p><b>Owner:</b> Marik
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Mining, Agriculture, manufacturing, rich <p><b>Faction:</b> marik
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Liao, Steiner, Marik
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Liao, Marik
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Claybrooke = L.marker(map.unproject([5175, 6484], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Claybrooke).addTo(map);


    var pop_CluffsStand = L.responsivePopup().setContent(`<h1>Cluff's Stand <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Cluff's Stand is named for the revolutionary leader who seized power when the Capellans abandoned the world. It is dominated by a single, sprawling megacity, New Durban, and fed by massive coastal algae farms.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Aquaculture, manufacturing, rich <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_CluffsStand = L.marker(map.unproject([6483, 7991], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_CluffsStand).addTo(map);


    var pop_Corodiz = L.responsivePopup().setContent(`<h1>Corodiz <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Initially settled by the Taurian Concordat, Corodiz was conquered centuries ago by the Capellans in a particularly brutal campaign which included civilian massacres and torture. Its position as a crossroads between three powerful states makes it politically unstable.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, Mining <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Davion, Taurian Concordat, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat, Liao
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Corodiz = L.marker(map.unproject([9783, 6637], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Corodiz).addTo(map);


    var pop_Coromodir_F = L.responsivePopup().setContent(`<h1>Coromodir <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Coromodir is the center of power of the Aurigan government. Two habitable worlds house nearly three billion people, and at the heart of Coromodir 6 is the vast Taurian fortress that serves as both capital and last bastion of defense. Both House Arano and House Espinosa consider Coromodir their ancestral home.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 9
    <p><b>Tags:</b> manufacturing, research, recreation, rich <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate, Magistracy Of Canopus
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Coromodir_F = L.marker(map.unproject([8694, 8995], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Coromodir_F).addTo(map);


    var pop_Cursa = L.responsivePopup().setContent(`<h1>Cursa <img src='images/icons/Marik.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Cursa had long been abandoned as too marginal a colony to sustain, but played a role in the war between ComStar and the Free Worlds League. The world was used as bait for a trap, chosen because of its lack of strategic value.
    <p><b>Owner:</b> Marik
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> marik
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Liao, Steiner, Marik
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Liao, Marik
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Cursa = L.marker(map.unproject([5189, 5931], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Cursa).addTo(map);


    var pop_Cygnus = L.responsivePopup().setContent(`<h1>Cygnus <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Cygnus has a distinctive feature: a flower dubbed the 'Tundra  witch', whose pollen has hallucinogenic properties. As a consequence the local megafauna - a kind of native caribou - is prone to massive stampedes in springtime.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 3
    <p><b>Tags:</b>  <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Marik, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Marik, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Cygnus = L.marker(map.unproject([6279, 9892], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Cygnus).addTo(map);


    var pop_DainmarMajoris = L.responsivePopup().setContent(`<h1>Dainmar Majoris <img src='images/icons/Magistracy Of Canopus.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This frozen world is made habitable by the constant gemal activity that convulses its surface. This also makes it a source of highly valuable radioactive ores, and the Magistracy keeps a garrison on the  to protect its interests there.
    <p><b>Owner:</b> Magistracy Of Canopus
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Mining <p><b>Faction:</b> magistracy
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_DainmarMajoris = L.marker(map.unproject([4922, 9578], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_DainmarMajoris).addTo(map);


    var pop_DesolatePlains = L.responsivePopup().setContent(`<h1>Desolate Plains <img src='images/icons/Davion.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Desolate Plains has had the misfortune of being caught between Davion, Liao, and the Taurians, and has suffered as a consequence: space battles led to the complete destruction of the 's single Small moon, leaving a dangerous ring system in orbit.
    <p><b>Owner:</b> Davion
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b>  <p><b>Faction:</b> davion
    <p><b>Contract Employers:</b> Taurian Concordat, Kurita, Davion
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Davion
    <p><b>Biomes:</b> Desert Parched, martianVacuum
    `);
    sys_DesolatePlains = L.marker(map.unproject([11490, 6195], map.getMaxZoom()),{icon: desert})
    .bindPopup(pop_DesolatePlains).addTo(map);


    var pop_Detroit = L.responsivePopup().setContent(`<h1>Detroit <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Formerly a Magistracy holding, Detroit is a modest Mining and agricultural world. During the abortive Taurian-Canopian War, the Taurians unsuccessfully attempted an invasion of the .
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 3
    <p><b>Tags:</b> Agriculture, Aquaculture, Mining <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Marik, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Marik, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Detroit = L.marker(map.unproject([6919, 8724], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Detroit).addTo(map);


    var pop_Drozan = L.responsivePopup().setContent(`<h1>Drozan <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> A teeming agricultural world, Drozan is critical to Capellan food supply, and features massive urban centers, research facilities and food laboratories. The vast automated fields and fisheries are protected by elite Capellan Warrior House troops.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, research, Aquaculture, rich <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Drozan = L.marker(map.unproject([7219, 6504], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Drozan).addTo(map);


    var pop_Dunianshire = L.responsivePopup().setContent(`<h1>Dunianshire <img src='images/icons/Magistracy Of Canopus.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The industrial world of Dunianshire, home to the Majesty Metals corporation, is choked by pollution and the sulfurous by-products of heavy . The majority of the population lives in the city of Londinium, where breathing filters are required to go outdoors.
    <p><b>Owner:</b> Magistracy Of Canopus
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Mining, manufacturing, research <p><b>Faction:</b> magistracy
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Dunianshire = L.marker(map.unproject([4539, 9949], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Dunianshire).addTo(map);


    var pop_EarlyDawn = L.responsivePopup().setContent(`<h1>Early Dawn <img src='images/icons/Magistracy Of Canopus.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Early Dawn was conquered by the SLDF during the Reunification War. It returned to Magistracy control after the war ended, and is now dedicated to fishing and farming. The home office of Magliss Spirits, the leading producer of wine and brandy in the Periphery, is located here.
    <p><b>Owner:</b> Magistracy Of Canopus
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture, Aquaculture <p><b>Faction:</b> magistracy
    <p><b>Contract Employers:</b> Marik, Magistracy Of Canopus
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Magistracy Of Canopus
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_EarlyDawn = L.marker(map.unproject([4166, 8079], map.getMaxZoom()),{icon: water})
    .bindPopup(pop_EarlyDawn).addTo(map);


    var pop_Egress = L.responsivePopup().setContent(`<h1>Egress <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This critical military and logistical world features a Duchy Regional Training Center, where volunteers for the Capellan Confederation Armed Forces are sent for training. The RTC on Egress specializes in infantry and vehicle training.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> manufacturing, research, rich <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Egress = L.marker(map.unproject([8121, 6511], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Egress).addTo(map);


    var pop_Enkra_F = L.responsivePopup().setContent(`<h1>Enkra <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Enkra was once a Mining world, shipping raw materials to nearby Brinton. Over-Mining and the Succession Wars made it no longer a viable industry, but the  has seen a rebirth as an agricultural world outside of the badly-polluted industrial zones.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, poor <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Liao, Aurigan Directorate, Davion
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Enkra_F = L.marker(map.unproject([9362, 7541], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Enkra_F).addTo(map);


    var pop_Espia = L.responsivePopup().setContent(`<h1>Espia <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> An inhospitable muddy rock, Espia was colonized only for its use as a jump route. The population lives on rocky outcroppings amid the endless, deadly mud-flats, which are capable of swallowing an entire 'Mech whole.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Mining, poor <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Marik, Liao, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao, Locals
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Espia = L.marker(map.unproject([6041, 7018], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Espia).addTo(map);


    var pop_Fagerholm = L.responsivePopup().setContent(`<h1>Fagerholm <img src='images/icons/Marik.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Fagerholm is a dry world with Large canyon systems that are the result of millions of years of erosion from the rivers that once crossed its surface. Originally a Capellan colony, it was lost to the Free Worlds League in the aftermath of the First Succession War.
    <p><b>Owner:</b> Marik
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Mining, manufacturing <p><b>Faction:</b> marik
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Liao, Steiner, Marik
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Liao, Marik
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Fagerholm = L.marker(map.unproject([4439, 6318], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Fagerholm).addTo(map);


    var pop_Fjaldr_F = L.responsivePopup().setContent(`<h1>Fjaldr <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The original colony was Largely underground, built in the sides of deep kilometer-wide shafts that breach the ice that envelops this world. Fjaldr survives on its rich mineral resources and its position as a well-connected hub world near the Inner Sphere.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Mining <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Taurian Concordat, Aurigan Directorate, Davion
    <p><b>Biomes:</b> Polar Frozen
    `);
    sys_Fjaldr_F = L.marker(map.unproject([8598, 7418], map.getMaxZoom()),{icon: ice})
    .bindPopup(pop_Fjaldr_F).addTo(map);


    var pop_FlannagansNebulea = L.responsivePopup().setContent(`<h1>Flannagan's Nebulea <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This frozen world in the heart of Taurian space is the moon of a Large ice giant. Tidal stresses from the  have created an ocean of liquid water below the ice, and in that ocean, submarine dome cities cluster around warm volcanic vents to exploit the rich minerals found there.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Mining, manufacturing, Aquaculture <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Liao, Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Davion, Taurian Concordat
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_FlannagansNebulea = L.marker(map.unproject([10914, 7048], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_FlannagansNebulea).addTo(map);


    var pop_Flaum = L.responsivePopup().setContent(`<h1>Flaum <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Most of the few inhabitants of this arid world live in the extremely fertile floodplains of the 's only major river system, where they operate and maintain the automated farms. A Smaller number of people live in the Mining plants of Flaum's north Polar  region.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Mining, Agriculture <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Flaum = L.marker(map.unproject([10926, 7728], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Flaum).addTo(map);


    var pop_Fronc = L.responsivePopup().setContent(`<h1>Fronc <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Fronc was simultaneously colonized by both the Magistracy and the Concordat, and the fragile peace between the two colonial nations has been periodically broken by terrorism, local brush wars, and heated rhetoric.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Agriculture, Mining, manufacturing <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Marik, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Marik, Locals
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Fronc = L.marker(map.unproject([6423, 10352], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Fronc).addTo(map);


    var pop_Gangtok_F = L.responsivePopup().setContent(`<h1>Gangtok <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> As a recently-colonized world, Gangtok is bustling with boom-town energy; temporary cities have sprung up all over the unremarkable Terran world, as eager prospectors, colonists, and merchants crowd in, all looking to strike it rich.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Gangtok_F = L.marker(map.unproject([9737, 9239], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Gangtok_F).addTo(map);


    var pop_Gaucin = L.responsivePopup().setContent(`<h1>Gaucin <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This agricultural world supplies food to nearby systems and the Taurian Concordat. Much of this  is based on factory farming of the genetically-engineered Gaucin Hog, a native life-form that some activists believe is sapient.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture, research <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Gaucin = L.marker(map.unproject([10465, 9941], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Gaucin).addTo(map);


    var pop_Ghorepani = L.responsivePopup().setContent(`<h1>Ghorepani <img src='images/icons/No Faction.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This unfortunate world was once a Capellan colony. In recent years the last few surviving inhabitants were driven off- by mercenaries hired by the Magistracy, in order to create a Larger buffer between the two nations.
    <p><b>Owner:</b> No Faction
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b>  <p><b>Faction:</b> No Faction
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Ghorepani = L.marker(map.unproject([6697, 7469], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Ghorepani).addTo(map);


    var pop_Girondas = L.responsivePopup().setContent(`<h1>Girondas <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The majority of Girondas's surface area is covered by shallow oceans. Of the 20% of the 's surface that is land, most is a vast marshland, hot and foul-smelling, but excellent for both agriculture and fish farming.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, Aquaculture <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Girondas = L.marker(map.unproject([10168, 7879], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Girondas).addTo(map);


    var pop_Guldra_F = L.responsivePopup().setContent(`<h1>Guldra <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The ancestral home of House Madeira, Guldra is the most Earth-like  in the entire Aurigan region, and is a major breadbasket for the area. Massive cities house a total population just over a billion, and exporting food has made Guldra an extremely wealthy, diverse, sophisticated world.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 8
    <p><b>Tags:</b> Agriculture, manufacturing, recreation, research, rich <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Guldra_F = L.marker(map.unproject([9234, 8940], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Guldra_F).addTo(map);


    var pop_Gunthar = L.responsivePopup().setContent(`<h1>Gunthar <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Gunthar is a pleasant world covered in water. The major cities are all built on the rocky coastlines of the single Small continent; however, a spray of islands in a -girdling archipelago support a vast agricultural enterprise.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, manufacturing, Aquaculture, rich <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Gunthar = L.marker(map.unproject([7416, 6861], map.getMaxZoom()),{icon: water})
    .bindPopup(pop_Gunthar).addTo(map);


    var pop_Hastur = L.responsivePopup().setContent(`<h1>Hastur <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The wasteland  of Hastur is primarily a prison world, with the major city, Lockdown, functioning as a city-sized penal colony. Prisoners provide slave labor for the 's dangerous Mining .
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Mining <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Marik, Magistracy Of Canopus, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Magistracy Of Canopus, Locals
    <p><b>Biomes:</b> martianVacuum
    `);
    sys_Hastur = L.marker(map.unproject([4432, 7282], map.getMaxZoom()),{icon: mars})
    .bindPopup(pop_Hastur).addTo(map);


    var pop_Heliat_F = L.responsivePopup().setContent(`<h1>Heliat <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Heliat is a pleasant agricultural world, but also a backwater, thanks to its position away from all major trade routes. This relative isolation has led to an insular, conservative culture, centered around the local offshoot of Catholicism.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, poor <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Heliat_F = L.marker(map.unproject([9473, 9602], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Heliat_F).addTo(map);


    var pop_Hellespont = L.responsivePopup().setContent(`<h1>Hellespont <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Despite its location far from the Inner Sphere, Hellespont is a rich, high-tech manufacturing world. The headquarters of the ComStar Explorer Corps (Rimward) is located on the planet, and the infrastructure necessary for ComStar's operations has led to prosperity and investment.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 9
    <p><b>Tags:</b> Agriculture, Mining, manufacturing <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> ComStar, Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Hellespont = L.marker(map.unproject([12233, 10336], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Hellespont).addTo(map);


    var pop_Herotitus = L.responsivePopup().setContent(`<h1>Herotitus <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Herotitus is famed for its -wide pleasure ; it is a sought-after vacation and recreational world. This hedonism exists side-by-side with the original agricultural colonists, who are Largely puritanical and staid.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture, Aquaculture, recreation <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Herotitus = L.marker(map.unproject([7890, 8120], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Herotitus).addTo(map);


    var pop_Hibuarius = L.responsivePopup().setContent(`<h1>Hibuarius <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This lush forest world teems with diverse insect and plant life. Almost all this life, however, is highly toxic to humans, and the theocratic government has strict laws against entering the forest without protective gear.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Agriculture, Aquaculture <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Marik, Liao, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao, Locals
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Hibuarius = L.marker(map.unproject([5510, 7584], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Hibuarius).addTo(map);


    var pop_Horsham = L.responsivePopup().setContent(`<h1>Horsham <img src='images/icons/Davion.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Originally a Taurian world, Horsham boasted several Taurian Defense Force naval yards. During the Reunification War, Horsham was overrun by the SLDF, pacified, and taken by the Federated Suns. The total destruction of the naval yards was a crippling blow to the world's economy.
    <p><b>Owner:</b> Davion
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Mining, manufacturing <p><b>Faction:</b> davion
    <p><b>Contract Employers:</b> Liao, Kurita, Taurian Concordat, Davion
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Taurian Concordat, Davion
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Horsham = L.marker(map.unproject([10265, 6101], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Horsham).addTo(map);


    var pop_Hurik = L.responsivePopup().setContent(`<h1>Hurik <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Hurik is a garden world, its steep valleys and broad plains home to over one billion inhabitants. As the gateway to the Aurigan Reach, it is a nexus for trade and exploration, and supplies food and manufactured goods to all its neighbors.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large eventpox
    <p><b>Shop Max Specials:</b> 8
    <p><b>Tags:</b> Agriculture, manufacturing, research, rich, recreation, eventpox <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Aurigan Restoration, Marik, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Hurik = L.marker(map.unproject([8362, 7215], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Hurik).addTo(map);


    var pop_Ichlangis_F = L.responsivePopup().setContent(`<h1>Ichlangis <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Ichlangis is a Martian planet, with atmosphere too thin to breathe, no surface water, and temperature below freezing. The  is rich in titanium, and the ores are made easily accessible by the deep chasms that crack the planet’s surface.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Mining <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Taurian Concordat, Aurigan Directorate, Davion
    <p><b>Biomes:</b> martianVacuum
    `);
    sys_Ichlangis_F = L.marker(map.unproject([8924, 7330], map.getMaxZoom()),{icon: mars})
    .bindPopup(pop_Ichlangis_F).addTo(map);


    var pop_Illiushin = L.responsivePopup().setContent(`<h1>Illiushin <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Illushin is famed for its cheeses; its two continents feature vast fertile grasslands on which a variety of herd animals can be grazed. Large coastal spaceport cities ship luxury foods off-world, as well as manufactured goods and military supplies.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, manufacturing, Aquaculture, rich <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Illiushin = L.marker(map.unproject([11651, 7244], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Illiushin).addTo(map);


    var pop_Independence = L.responsivePopup().setContent(`<h1>Independence <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Independence is a lush world, dominated by vast oceans and jungle-covered volcanic islands. The plutocratic government runs the  primarily for recreational tourists, with the inhabitants regulated by a strict caste system.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Aquaculture, recreation <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Independence = L.marker(map.unproject([7878, 10025], map.getMaxZoom()),{icon: water})
    .bindPopup(pop_Independence).addTo(map);


    var pop_Ishtar = L.responsivePopup().setContent(`<h1>Ishtar <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The primary agricultural world of the Taurian Concordat, Ishtar was one of the earliest colonies in the region. It is totally undefended, and has no manufacturing or heavy industry, in an effort to make it less appealing to raiders. The entire population is engaged in food production.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture, Aquaculture, rich, recreation <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Ishtar = L.marker(map.unproject([11064, 6990], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Ishtar).addTo(map);


    var pop_Itica = L.responsivePopup().setContent(`<h1>Itica <img src='images/icons/No Faction.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Itica was never better than marginally habitable, and was colonized by the Capellans mostly as a defensive measure. During the Second Succession War, the Free Worlds League seized it; they pursued a scorched-earth policy, quite literally scorching the earth to bare rock.
    <p><b>Owner:</b> No Faction
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> No Faction
    <p><b>Contract Employers:</b> Marik, Magistracy Of Canopus
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Magistracy Of Canopus
    <p><b>Biomes:</b> Lunar Vacuum
    `);
    sys_Itica = L.marker(map.unproject([4894, 6571], map.getMaxZoom()),{icon: lunar})
    .bindPopup(pop_Itica).addTo(map);


    var pop_Itrom_F = L.responsivePopup().setContent(`<h1>Itrom <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> One of the four founding worlds of the Aurigan Coalition under the direction of House Gallas, Itrom is a jewel of the region, a pleasant Terran world with a population of over a billion. Centuries-old wars left a scar across the surface: a cratered radioactive wasteland that dominates the northern hemisphere.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, manufacturing, recreation, rich <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate, Magistracy Of Canopus
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Itrom_F = L.marker(map.unproject([8698, 8444], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Itrom_F).addTo(map);


    var pop_Itsbur = L.responsivePopup().setContent(`<h1>Itsbur <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Itsbur is a frozen world, nearly uninhabitable, and as a consequence the Capellan government had a difficult time recruiting colonists. Terraforming efforts never made it past the early stages, and eventually the colony died out, with insufficient population growth.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Polar Frozen
    `);
    sys_Itsbur = L.marker(map.unproject([8012, 6297], map.getMaxZoom()),{icon: ice})
    .bindPopup(pop_Itsbur).addTo(map);


    var pop_Jacomarle = L.responsivePopup().setContent(`<h1>Jacomarle <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> A hot, wet world with a dense atmosphere, Jacomarle has very little to attract conflict; the residents are farmers and fishers, and local  produces consumer goods for nearby systems. Thus despite being one jump from the border, there are no real military threats.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, Aquaculture, manufacturing <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Jacomarle = L.marker(map.unproject([6768, 6846], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Jacomarle).addTo(map);


    var pop_Jamestown = L.responsivePopup().setContent(`<h1>Jamestown <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> One of the founding worlds of the Taurian Concordat, Jamestown is a peaceful, modestly prosperous world, with three continents and vast oceans. Once the site of a SLDF garrison, the  still benefits from the high-tech industrial infrastructure.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Agriculture, Aquaculture, manufacturing <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Jamestown = L.marker(map.unproject([11233, 6980], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Jamestown).addTo(map);


    var pop_JansensHold = L.responsivePopup().setContent(`<h1>Jansen's Hold <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Jansen's Hold is a dry, cold world, dominated by windswept Tundra  in the temperate zones, and glacial mountains in the north and south. Heavily industrialized, the  is a manufacturing center for a major arms manufacturer, Taurus Territorial Industries.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 8
    <p><b>Tags:</b> Mining, manufacturing, research, rich <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_JansensHold = L.marker(map.unproject([10965, 6727], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_JansensHold).addTo(map);


    var pop_Joppa = L.responsivePopup().setContent(`<h1>Joppa <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The colony of Joppa IV is located on Specula, the gas giant's Largest moon, in the remains of an SLDF station. With no significant resources, the inhabitants of the moon have leveraged their position as a trade hub to survive.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b>  <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Marik, Liao, Magistracy Of Canopus, ComStar, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao, Magistracy Of Canopus, Locals
    <p><b>Biomes:</b> Lunar Vacuum
    `);
    sys_Joppa = L.marker(map.unproject([5794, 8230], map.getMaxZoom()),{icon: lunar})
    .bindPopup(pop_Joppa).addTo(map);


    var pop_Katinka_F = L.responsivePopup().setContent(`<h1>Katinka <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The SLDF facility on this world made it a prime target during the Periphery Uprising, and an orbital mass-driver strike left an enormous crater and a badly-disrupted ecosystem. The potential for scavenging LosTech continues to flood the system with prospectors and colonists.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, Mining <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate, Magistracy Of Canopus
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Katinka_F = L.marker(map.unproject([10138, 8673], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Katinka_F).addTo(map);


    var pop_Kazu = L.responsivePopup().setContent(`<h1>Kazu <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> A barren expanse of sand and rock, Kazu was inhabited as recently as a century ago. The technology used to extract water from the limited subterranean aquifers was destroyed in the ending days of the Second Succession War, and the  was abandoned to the sand.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Desert Parched, martianVacuum
    `);
    sys_Kazu = L.marker(map.unproject([8911, 6334], map.getMaxZoom()),{icon: desert})
    .bindPopup(pop_Kazu).addTo(map);


    var pop_Kern = L.responsivePopup().setContent(`<h1>Kern <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Once a highly-fortified military world, Kern's garrison, the 8th Sian Dragoons, was tasked with rapid response along the Rimward border. As the Third Succession War began, the armories and fortresses were shut down and demolished to prevent their potential capture.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b>  <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Davion, Taurian Concordat, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat, Liao
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Kern = L.marker(map.unproject([9520, 6867], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Kern).addTo(map);


    var pop_Kimi = L.responsivePopup().setContent(`<h1>Kimi <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The presence of two habitable worlds in this system, one arctic and one tropical, make it a rarity. Both are ruled by a theocracy, the New Salvationist Order, that preserves the ruins of SLDF bases in-system as religious shrines.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Mining <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Liao, ComStar, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Locals
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen, Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Kimi = L.marker(map.unproject([7714, 7583], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_Kimi).addTo(map);


    var pop_Kurvasa = L.responsivePopup().setContent(`<h1>Kurvasa <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Colonized during the Second Exodus, Kurvasa accepted refugees from across Capellan space. Its canyon-cities are sprawling and riotous with different cultures and traditions, and farming on the fertile mud-flats supports all 700 million residents.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Mining, manufacturing, Agriculture <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Kurvasa = L.marker(map.unproject([7423, 6009], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Kurvasa).addTo(map);


    var pop_Laconis = L.responsivePopup().setContent(`<h1>Laconis <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Laconis is a cold, watery world, and between the chilly temperatures and the annual hurricane season, most of the 75 million inhabitants live below-ground. Taurus Majoris Mining is the world's Largest employer, but many  Smaller industrial firms have relocated to the prosperous world.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Mining, manufacturing, rich, Aquaculture <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Liao, Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Davion, Taurian Concordat
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Laconis = L.marker(map.unproject([10182, 7122], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_Laconis).addTo(map);


    var pop_Landmark = L.responsivePopup().setContent(`<h1>Landmark <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The surface of Landmark is Largely barren rock outside of the sheltered coastal valleys. This is due to the constant, -encircling windstorm scouring higher elevations. As a result, the  is notably secure, and many industrial concerns conduct secret research there.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> manufacturing, research <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Landmark = L.marker(map.unproject([10783, 7223], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Landmark).addTo(map);


    var pop_Larsha = L.responsivePopup().setContent(`<h1>Larsha <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Larsha is a lynchpin of Capellan control over the Rimward portion of the Sian Commonality. Over a billion inhabitants call the pleasant Terran world home, living in four major metropolises, and they're defended by a 'Mech battalion headquartered in the 's extensive fortifications.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, research, manufacturing, recreation <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Davion, Taurian Concordat, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Larsha = L.marker(map.unproject([9359, 7132], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Larsha).addTo(map);


    var pop_Lindsay = L.responsivePopup().setContent(`<h1>Lindsay <img src='images/icons/Davion.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Lindsay is a hot, damp world with a thick continuous cloud layer fed by a ring of volcanic activity that nearly encircles the . Local farmers take maximal advantage of the short dry season to plant and harvest; in the rainy season, extensive flooding restores the rich, fertile soil.
    <p><b>Owner:</b> Davion
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, manufacturing <p><b>Faction:</b> davion
    <p><b>Contract Employers:</b> Taurian Concordat, Kurita, Davion
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Davion
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Lindsay = L.marker(map.unproject([11523, 5969], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Lindsay).addTo(map);


    var pop_Linhauiguan = L.responsivePopup().setContent(`<h1>Linhauiguan <img src='images/icons/No Faction.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This barren, empty world is a testament to the devastation of the Succession Wars; the military installations here were bombarded from orbit, and the  was irreparably damaged by the orbital strikes.
    <p><b>Owner:</b> No Faction
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> No Faction
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Linhauiguan = L.marker(map.unproject([6835, 7986], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Linhauiguan).addTo(map);


    var pop_LiusMemory = L.responsivePopup().setContent(`<h1>Liu's Memory <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This ice-locked world is pierced by deep, man-made boreholes that allow gemal heat and power to escape from the core, sustaining a bustling Mining and manufacturing  in the temperate zones created around the holes.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Mining, manufacturing <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Marik, Liao, Magistracy Of Canopus, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao, Magistracy Of Canopus, Locals
    <p><b>Biomes:</b> Polar Frozen
    `);
    sys_LiusMemory = L.marker(map.unproject([6186, 7736], map.getMaxZoom()),{icon: ice})
    .bindPopup(pop_LiusMemory).addTo(map);


    var pop_Lyreton = L.responsivePopup().setContent(`<h1>Lyreton <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This former Capellan colony is spread across three tropical moons of the system's Large gas giant. Each moon is Independent and civil conflict between the moons makes the system a tense and dangerous place.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> research, Agriculture <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Liao, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Locals
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Lyreton = L.marker(map.unproject([7887, 7851], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Lyreton).addTo(map);


    var pop_MacLeodsLand = L.responsivePopup().setContent(`<h1>MacLeod's Land <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> As a core  in the Taurian Concordant, MacLeod's Land was once devastated in the Reunification War. More recently, its Terran-like geography  and distributed population has made it a budget location for holovid shoots.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, Mining, manufacturing <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Liao, Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Davion, Taurian Concordat
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_MacLeodsLand = L.marker(map.unproject([10610, 6965], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_MacLeodsLand).addTo(map);


    var pop_Maldive = L.responsivePopup().setContent(`<h1>Maldive <img src='images/icons/No Faction.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Maldive is a casualty of the Succession Wars. Its position on the border of Davion and Liao space made it a frequent target for orbital strikes, and its fragile ecosystem collapsed entirely. It's now a wasteland, inhabited only by scavengers.
    <p><b>Owner:</b> No Faction
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b>  <p><b>Faction:</b> No Faction
    <p><b>Contract Employers:</b> Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Liao
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Maldive = L.marker(map.unproject([9808, 6343], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Maldive).addTo(map);


    var pop_Mandalas = L.responsivePopup().setContent(`<h1>Mandalas <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Founded by religious separatists from Herotitus, Mandalas is a marginal agricultural world that relies on manual labor as much as industrial farming techniques. As resources dwindle, civil unrest and religious sectarianism are creating social turmoil.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Liao, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Locals
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Mandalas = L.marker(map.unproject([8074, 8471], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Mandalas).addTo(map);


    var pop_Mangzhangdian_F = L.responsivePopup().setContent(`<h1>Mangzhangdian <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Mangzhangdian has a long year with high annual variance of  -- very hot summers and cold winters. Thanks to these extremes, the original Capellan colonial structures have long since collapsed into ruin, leaving a marginal pastoral world.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate, Magistracy Of Canopus
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Mangzhangdian_F = L.marker(map.unproject([9369, 8202], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Mangzhangdian_F).addTo(map);


    var pop_Mantharaka = L.responsivePopup().setContent(`<h1>Mantharaka <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Mantharaka is only marginally habitable, with barren rocky Highlands  and cold, arid Lowlands, but the vast and easily-accessible deposits of titanium-bearing ores have made it a viable Mining colony, regardless.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Mining <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Mantharaka = L.marker(map.unproject([7380, 9701], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Mantharaka).addTo(map);


    var pop_Mattisskogen = L.responsivePopup().setContent(`<h1>Mattisskogen <img src='images/icons/Marik.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Desolate Mattisskogen once had specialized shipbuilding facilities that were bombed to the ground during the Second Succession War. There are still remnants of the base underground, in highly unstable tunnels.
    <p><b>Owner:</b> Marik
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> marik
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Liao, Steiner, Marik
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Liao, Marik
    <p><b>Biomes:</b> Lunar Vacuum
    `);
    sys_Mattisskogen = L.marker(map.unproject([5025, 6258], map.getMaxZoom()),{icon: lunar})
    .bindPopup(pop_Mattisskogen).addTo(map);


    var pop_McevansSacrifice = L.responsivePopup().setContent(`<h1>Mcevans' Sacrifice <img src='images/icons/No Faction.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> No records indicate who McEvans was, or what their sacrifice might have been. The surface of this arctic world is bare of any sign of prior human colonization, aside from the ruins of a single colony DropShip half-buried in ice.
    <p><b>Owner:</b> No Faction
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 3
    <p><b>Tags:</b>  <p><b>Faction:</b> No Faction
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Taurian Concordat
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_McevansSacrifice = L.marker(map.unproject([7484, 10430], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_McevansSacrifice).addTo(map);


    var pop_Mechdur_F = L.responsivePopup().setContent(`<h1>Mechdur <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Mechdur is a bustling trade and industrial hub, with three different starports, over a billion inhabitants, and gleaming cities in the heart of its vast grasslands. Ruled by a group of oligarchs, it is in many ways the heart of the Aurigan region.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Mining, manufacturing, rich <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate, Magistracy Of Canopus
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Mechdur_F = L.marker(map.unproject([9186, 7923], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Mechdur_F).addTo(map);


    var pop_Merdal = L.responsivePopup().setContent(`<h1>Merdal <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Merdal is covered in a deep sea of dense, fragile vegetation. 'Solid' ground only exists on a few lifeless stone mesas. Anything that burns through the vegetation is swiftly entangled in rapidly vining blooms eager for the open space.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b>  <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Aurigan Restoration, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Liao
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Merdal = L.marker(map.unproject([8687, 7046], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Merdal).addTo(map);


    var pop_Merlin = L.responsivePopup().setContent(`<h1>Merlin <img src='images/icons/Davion.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Though there's no official record of anybody colonizing Merlin, the Desert   is Nonetheless dotted with multiple unfinished construction projects on high rocky cliffs that suggest somebody once had ambitions for the world.
    <p><b>Owner:</b> Davion
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b>  <p><b>Faction:</b> davion
    <p><b>Contract Employers:</b> Taurian Concordat, Liao, Kurita, Davion
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Liao, Davion
    <p><b>Biomes:</b> Desert Parched, martianVacuum
    `);
    sys_Merlin = L.marker(map.unproject([10596, 6273], map.getMaxZoom()),{icon: desert})
    .bindPopup(pop_Merlin).addTo(map);


    var pop_Midale = L.responsivePopup().setContent(`<h1>Midale <img src='images/icons/Davion.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Once the home of the SLDF 5th Fleet, Midale is now an agricultural world notable for its thin, high spires of rock and beautiful coral reefs. The residents farm tropical tree nuts on long, curving archipelagos.
    <p><b>Owner:</b> Davion
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, manufacturing <p><b>Faction:</b> davion
    <p><b>Contract Employers:</b> Taurian Concordat, Kurita, Davion
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Davion
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Midale = L.marker(map.unproject([11104, 6297], map.getMaxZoom()),{icon: water})
    .bindPopup(pop_Midale).addTo(map);


    var pop_Midthun = L.responsivePopup().setContent(`<h1>Midthun <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Midthun was a sterile potentiality when first visited by the Liao. They soon dismissed it from their planning, but not before leaving behind some algae and bacteria that have since established a thriving ecosystem that draws curious biologists from all over.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Aurigan Restoration, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Liao
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Midthun = L.marker(map.unproject([8261, 6867], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Midthun).addTo(map);


    var pop_Mithron = L.responsivePopup().setContent(`<h1>Mithron <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> While Mithron was originally settled by a minor religious group, the inhabitants have mostly left that faith behind. They are, however, justifiably proud of the 's sunsets, which apparently make living in the Mining settlements worth it.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Mining, manufacturing <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Mithron = L.marker(map.unproject([11959, 6330], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Mithron).addTo(map);


    var pop_Muridox = L.responsivePopup().setContent(`<h1>Muridox <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Granted as a backhanded reward to a troublesome minor Liao family, Muridox is a deep-water with vast floating hydroponics platforms and settlements on the Polar  ice caps dedicated to deep-dive harvests of native sea life.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, manufacturing, Aquaculture <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Davion, Taurian Concordat, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Muridox = L.marker(map.unproject([9067, 6833], map.getMaxZoom()),{icon: water})
    .bindPopup(pop_Muridox).addTo(map);


    var pop_Murris = L.responsivePopup().setContent(`<h1>Murris <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Murris is a vibrantly alive  with an oxygen-rich atmosphere and legendarily huge megafauna. It enjoyed a brief period as a safari destination for the Capellan Confederation nobility, but the fad for fighting giant animals with Battlemechs passed.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Murris = L.marker(map.unproject([7721, 6742], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Murris).addTo(map);


    var pop_Mystras = L.responsivePopup().setContent(`<h1>Mystras <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The faceted domes over the Mining outposts of Mystras glitter along the twilight zone of the tidally locked planet, where constant winds keep the sky clear. Despite the 's challenges the Taurians have found Mining there extremely lucrative.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Mining, poor <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Aurigan Directorate, Davion, Taurian Concordat
    <p><b>Biomes:</b> martianVacuum
    `);
    sys_Mystras = L.marker(map.unproject([11265, 9920], map.getMaxZoom()),{icon: mars})
    .bindPopup(pop_Mystras).addTo(map);


    var pop_Naryn = L.responsivePopup().setContent(`<h1>Naryn <img src='images/icons/Marik.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Naryn is a pretty blue-gold snowball that the Liao made a brief attempt to colonize before more practical minds realized it was best appreciated in holovids made from orbit. Three failed colonies are slowly sinking into the permafrost.
    <p><b>Owner:</b> Marik
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> marik
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Liao, Steiner, Marik
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Liao, Marik
    <p><b>Biomes:</b> Polar Frozen
    `);
    sys_Naryn = L.marker(map.unproject([5546, 6252], map.getMaxZoom()),{icon: ice})
    .bindPopup(pop_Naryn).addTo(map);


    var pop_NewAbilene = L.responsivePopup().setContent(`<h1>New Abilene <img src='images/icons/Magistracy Of Canopus.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> New Abilene is a grassy world dedicated to raising livestock. The pastureland is mostly owned by a few wealthy 'barons' who are prone to violent squabbles over water rights and shipping privileges; MechWarrior marshals try to keep the peace.
    <p><b>Owner:</b> Magistracy Of Canopus
    <p><b>Population:</b> Medium eventpox
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Agriculture, poor, eventpox <p><b>Faction:</b> magistracy
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_NewAbilene = L.marker(map.unproject([4690, 8672], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_NewAbilene).addTo(map);


    var pop_NewGanymede = L.responsivePopup().setContent(`<h1>New Ganymede <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> On New Ganymede, a career miner finds novelty: the valuable ore is on the surface while the water is underground.The Taurian Concordant also maintains a Desert  warfare training facility in the Polar  region.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Mining, research <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Desert Parched, martianVacuum
    `);
    sys_NewGanymede = L.marker(map.unproject([11295, 6702], map.getMaxZoom()),{icon: desert})
    .bindPopup(pop_NewGanymede).addTo(map);


    var pop_NewRoland = L.responsivePopup().setContent(`<h1>New Roland <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> New Roland is a Terra-like  with unusually mobile and predatory plant life, so most of the residents live on the coastlines and work on the oceans, which is also where most of the non-insectile animal life dwells.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, Aquaculture, research <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_NewRoland = L.marker(map.unproject([6254, 7348], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_NewRoland).addTo(map);


    var pop_NewVallis = L.responsivePopup().setContent(`<h1>New Vallis <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The Mining colony of New Vallis is located on the tidally locked moon of a gas giant locally known as Joramander. It has a single city, with a notoriously active nightlife, on a plateau covered with huge, slow-growing trees.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Mining, manufacturing <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_NewVallis = L.marker(map.unproject([11157, 6652], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_NewVallis).addTo(map);


    var pop_NewVandenburg = L.responsivePopup().setContent(`<h1>New Vandenburg <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Long after its eponymous Uprising, New Vandenburg remains a core component in the Taurian Concordant's military industrial complex, while also mantaining a wealth of  industries that make it a highly desirable place to live.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> manufacturing, Agriculture, Aquaculture, Mining, research, rich <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Liao, Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Davion, Taurian Concordat
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_NewVandenburg = L.marker(map.unproject([10278, 7465], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_NewVandenburg).addTo(map);


    var pop_Niomede = L.responsivePopup().setContent(`<h1>Niomede <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Niomede is the Largest airless rock in a system full of them. Yet people dwell there, deep under the surface in sealed caves. The original valuable mineral deposit was long ago exhausted, but a thriving astronomical research community endures.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 8
    <p><b>Tags:</b> research <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, ComStar, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> Lunar Vacuum
    `);
    sys_Niomede = L.marker(map.unproject([6458, 5955], map.getMaxZoom()),{icon: lunar})
    .bindPopup(pop_Niomede).addTo(map);


    var pop_NonDiz = L.responsivePopup().setContent(`<h1>Non Diz <img src='images/icons/Davion.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Non Diz was briefly occupied by the Capellan Confederation, in order to keep it clear of  Pirates. Eventually they determined even  Pirates didn't want to deal with the endless dust storms, and redirected their resources elsewhere.
    <p><b>Owner:</b> Davion
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b>  <p><b>Faction:</b> davion
    <p><b>Contract Employers:</b> Liao, Kurita, Taurian Concordat, Davion
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Taurian Concordat, Davion
    <p><b>Biomes:</b> Desert Parched, martianVacuum
    `);
    sys_NonDiz = L.marker(map.unproject([10025, 6465], map.getMaxZoom()),{icon: desert})
    .bindPopup(pop_NonDiz).addTo(map);


    var pop_Paf = L.responsivePopup().setContent(`<h1>Paf <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Paf was briefly a Taurian research station, but the punishing  made Large-scale construction far too expensive to further exploit the 's possible resources.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b>  <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Aurigan Directorate, Davion, Taurian Concordat
    <p><b>Biomes:</b> Polar Frozen
    `);
    sys_Paf = L.marker(map.unproject([11038, 8266], map.getMaxZoom()),{icon: ice})
    .bindPopup(pop_Paf).addTo(map);


    var pop_Panzyr_F = L.responsivePopup().setContent(`<h1>Panzyr <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> As a result of multiple conflicts above the surface of Panzyr, the orbital approach to the is potentially hazardous, so despite its pleasant  and resources, Panzyr is in a slow decline. House Decimis, originally from Guldra, took possession of the world and it is now their home system.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture, poor <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Taurian Concordat, Aurigan Directorate
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Panzyr_F = L.marker(map.unproject([8593, 8106], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Panzyr_F).addTo(map);


    var pop_Payia = L.responsivePopup().setContent(`<h1>Payia <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This arid world was the site of a 'gold rush' of scavengers looking for LosTech. When hopes of sudden Star League era wealth proved unfounded, the  was slowly abandoned, and is now littered with ghost towns.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus, Locals
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Payia = L.marker(map.unproject([7308, 7470], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Payia).addTo(map);


    var pop_Peratallada = L.responsivePopup().setContent(`<h1>Peratallada <img src='images/icons/No Faction.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Once the site of a Taurian Mining colony, this world was polluted beyond recovery after only a few hundred years of . Now the air is foul and unbreathable, and the surface is cracked by fault lines and volcanoes.
    <p><b>Owner:</b> No Faction
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b>  <p><b>Faction:</b> No Faction
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Taurian Concordat
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Peratallada = L.marker(map.unproject([9905, 10288], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Peratallada).addTo(map);


    var pop_Pilpala = L.responsivePopup().setContent(`<h1>Pilpala <img src='images/icons/Marik.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Pilpala recently changed hands when the Free Worlds League moved in a Large number of mercenaries that dominated the few troops stationed there by the Capellan Confederation. The 's mercantile population is uneasily adapting to the regime change.
    <p><b>Owner:</b> Marik
    <p><b>Population:</b> Medium eventpox
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, Aquaculture, research, eventpox <p><b>Faction:</b> marik
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Liao, Steiner, Marik
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Liao, Marik
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Pilpala = L.marker(map.unproject([5874, 6650], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Pilpala).addTo(map);


    var pop_Pinard = L.responsivePopup().setContent(`<h1>Pinard <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Pinard was and is a Taurian manufacturing center, despite having its cities bombed into radioactive rubble during the Reunification War. The Taurians built new cities and new factories, leaving the dangerous ruins as an eternal reminder.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Mining, Agriculture, manufacturing <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Pinard = L.marker(map.unproject([10723, 7028], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_Pinard).addTo(map);


    var pop_Piriapolis = L.responsivePopup().setContent(`<h1>Piriapolis <img src='images/icons/Marik.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> While visitors to Piriapolis are welcomed at its starport, the privilege of emigrating there is jealously guarded as a way of protecting the precious Lippanzer horses that were once almost wiped out during a bandit raid.
    <p><b>Owner:</b> Marik
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, Aquaculture <p><b>Faction:</b> marik
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Liao, Steiner, Marik
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Liao, Marik
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Piriapolis = L.marker(map.unproject([4028, 6193], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Piriapolis).addTo(map);


    var pop_Pojos = L.responsivePopup().setContent(`<h1>Pojos <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Pojos, with its colored ice ring, is beautiful to look at but dangerous to approach. The  specializes in botanical concerns, and the tolerances of the thorny Pojos Rose make it a desirable bloom across the Confederation.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, manufacturing, research, recreation, rich <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Aurigan Restoration, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Pojos = L.marker(map.unproject([8539, 6700], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Pojos).addTo(map);


    var pop_Portland = L.responsivePopup().setContent(`<h1>Portland <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> A former Taurian world, Portland was invaded as part of the Taurian-Canopian war, but its inhabitants successfully repelled the Magistracy with guerilla tactics. Now Independent, the population engages in subsistence farming and a slow trickle of food exports.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 3
    <p><b>Tags:</b> Agriculture, poor <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Portland = L.marker(map.unproject([8688, 10234], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Portland).addTo(map);


    var pop_Principia = L.responsivePopup().setContent(`<h1>Principia <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Principia is the seat of the judiciary for the Capellan Confederation and, as such, caters to the needs of Capellan nobles who have taken it as a vacation home. It also has courts dedicated to adjucating mercenary contracts with the Liao.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 9
    <p><b>Tags:</b> recreation, research, rich <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Principia = L.marker(map.unproject([6451, 6177], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Principia).addTo(map);


    var pop_Pyrrhus = L.responsivePopup().setContent(`<h1>Pyrrhus <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Technically part of the Taurian Concordant, Pyrrhus is a dreary rock where convicts are turned loose with a pickaxe and a pat on the back, there to make a poor living as a miner, or, more likely, join one of the resident pirate gangs.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Mining, poor <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Pyrrhus = L.marker(map.unproject([11524, 8544], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Pyrrhus).addTo(map);


    var pop_Qalzi_F = L.responsivePopup().setContent(`<h1>Qalzi <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Qalzi is a relatively recent addition to Aurigan holdings. The cold and rocky Terran world is in a legal limbo, with the Taurian Concordat maintaining that their original colony, since abandoned, gives them a prior claim on the system.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, Mining <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate, Davion
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Qalzi_F = L.marker(map.unproject([10385, 8285], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_Qalzi_F).addTo(map);


    var pop_Quimberton = L.responsivePopup().setContent(`<h1>Quimberton <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Despite a lack of natural resources or majestic scenery, Quimberton has managed to become a recreational hub, mostly due to vast estates it rents out as timeshares to well-off people who want a taste of true wealth.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, research, recreation, rich <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Quimberton = L.marker(map.unproject([8475, 6206], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Quimberton).addTo(map);


    var pop_RegisRoost_F = L.responsivePopup().setContent(`<h1>Regis Roost <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Regis Roost is filled with fungal life, in a dizzying array of forms; fungal 'plants', 'fish' and even 'animals' comprise the complex biosphere of the world. Consequently, the air is thick with spores. Visitors are prone to an unpleasant illness known as 'spore-lung'.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate, Magistracy Of Canopus
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_RegisRoost_F = L.marker(map.unproject([10217, 8446], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_RegisRoost_F).addTo(map);


    var pop_Renfield = L.responsivePopup().setContent(`<h1>Renfield <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> One of the original s of the Taurian Concordant, Renfield has a deep purple nutrient-rich ocean that produces the raw materials for most of the 's thriving industries. The residents are known for being particularly antisocial.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, Aquaculture, manufacturing <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Renfield = L.marker(map.unproject([11919, 6912], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Renfield).addTo(map);


    var pop_Renown = L.responsivePopup().setContent(`<h1>Renown <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Renown is a Terran paradise when the skies are clear, which unfortunately doesn't happen very often. The  is subject to vast tornadoes and 'meteorologist' is an essential position in Renown's mostly-automated factories and farms.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, manufacturing <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Renown = L.marker(map.unproject([7474, 7255], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Renown).addTo(map);


    var pop_Repulse = L.responsivePopup().setContent(`<h1>Repulse <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Repulse is a lush agricultural world with valuable Mining deposits accessed through vast gashes at the rocky poles. Despite the ary resources, the population remains low due to an undesireable and mercurial .
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture, Mining <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, ComStar, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Repulse = L.marker(map.unproject([6852, 7236], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Repulse).addTo(map);


    var pop_Rockwellawan = L.responsivePopup().setContent(`<h1>Rockwellawan <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Formerly a Magistracy world, Rockwellawan has found new life as an Independent Mining colony. During the abortive Taurian-Canopian War, the Taurians landed on the planet, but were unable to decisively engage the Magistracy.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture, Mining, rich <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Rockwellawan = L.marker(map.unproject([8095, 9555], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Rockwellawan).addTo(map);


    var pop_Rollis = L.responsivePopup().setContent(`<h1>Rollis <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Temperate Rollis is the source of a rare and highly valued variety of wood, and, consequentially, a busy black market. It also serves as a jumping-off point for those planning an adventurous journey into the Periphery.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> poor <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Davion, Taurian Concordat, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Rollis = L.marker(map.unproject([10146, 6866], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Rollis).addTo(map);


    var pop_RyansFate_F = L.responsivePopup().setContent(`<h1>Ryans Fate <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> A hot, arid world with a single, shallow, briny sea, Ryans Fate survives on flood farming in the brief rainy seasons, and Mining high-quality crystals and fissionable materials from the extensive caverns that honeycomb the 's surface.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Mining, manufacturing <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Taurian Concordat, Aurigan Directorate
    <p><b>Biomes:</b> Desert Parched, martianVacuum
    `);
    sys_RyansFate_F = L.marker(map.unproject([8644, 7741], map.getMaxZoom()),{icon: desert})
    .bindPopup(pop_RyansFate_F).addTo(map);


    var pop_Sacromonte = L.responsivePopup().setContent(`<h1>Sacromonte <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This subterranean colony is excavated into a barren rocky . It serves as a critical shipping and travel link between the Aurigan region and the Magistracy. Trade, both legal and wise, thrives here.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 3
    <p><b>Tags:</b> poor <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Liao, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Locals
    <p><b>Biomes:</b> Lunar Vacuum
    `);
    sys_Sacromonte = L.marker(map.unproject([7884, 8887], map.getMaxZoom()),{icon: lunar})
    .bindPopup(pop_Sacromonte).addTo(map);


    var pop_Salardion = L.responsivePopup().setContent(`<h1>Salardion <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Once a minor travel hub, this system was quarantined due to an incurable, disfiguring viral plague. The moons serve as bases for pirate activity, but the status of the population on the surface is unknown.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Marik, Liao, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Salardion = L.marker(map.unproject([5529, 7151], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Salardion).addTo(map);


    var pop_Samantha = L.responsivePopup().setContent(`<h1>Samantha <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> One of the founding s of the Taurian Concordant, Samantha is a Large  where cold-weather entertainment thrives and a broad range of manufacturing industries benefit from the low temperatures.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture, Aquaculture, manufacturing <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Samantha = L.marker(map.unproject([11148, 6912], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_Samantha).addTo(map);


    var pop_Sax = L.responsivePopup().setContent(`<h1>Sax <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> An ancient water world dotted with thousands of island chains, Sax is the home of a Liao training facility as well as several specialized research campuses that rely on the 's tectonic stability.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 8
    <p><b>Tags:</b> Mining, research <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Sax = L.marker(map.unproject([6414, 6630], map.getMaxZoom()),{icon: water})
    .bindPopup(pop_Sax).addTo(map);


    var pop_Segerica = L.responsivePopup().setContent(`<h1>Segerica <img src='images/icons/No Faction.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Segerica was a Capellan industrial world, with extensive manufacturing facilities tucked into its -wide canyon systems. These facilities were the target of orbital nuclear strikes from the Free Worlds League, and the  has been an empty wasteland since.
    <p><b>Owner:</b> No Faction
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> No Faction
    <p><b>Contract Employers:</b> Marik, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Segerica = L.marker(map.unproject([5787, 7482], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Segerica).addTo(map);


    var pop_Smithon_F = L.responsivePopup().setContent(`<h1>Smithon <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> A former Star League era armory and fortification, Smithon is the home system of House Karosas. The old Capellan fortresses have been converted to civilian habitation, and enterprising scavengers scour the  for any remaining LosTech.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> poor <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate, Davion
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Smithon_F = L.marker(map.unproject([9526, 8174], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Smithon_F).addTo(map);


    var pop_Spencer = L.responsivePopup().setContent(`<h1>Spencer <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This former Taurian world is encircled by a vast shallow ocean, teeming with native and Terran aquatic life. During the abortive Taurian-Canopian War, the Magistracy invaded as a retaliation for attacks on their worlds.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 3
    <p><b>Tags:</b> Aquaculture, poor <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Marik, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Marik, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Spencer = L.marker(map.unproject([6584, 9719], map.getMaxZoom()),{icon: water})
    .bindPopup(pop_Spencer).addTo(map);


    var pop_Spitz = L.responsivePopup().setContent(`<h1>Spitz <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> A nearly lifeless world reminiscient of primordial Terra, Spitz is primarily of interest to exogeologists who study the early days of future life-bearing s.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Spitz = L.marker(map.unproject([11874, 8093], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Spitz).addTo(map);


    var pop_Sunnywood = L.responsivePopup().setContent(`<h1>Sunnywood <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Sunnywood is a disingenuously-named barren rock world where an ambitious colony spent centuries dying. Many ruins dot the world as a testament to humanity's optimism.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Aurigan Restoration, Taurian Concordat, Magistracy Of Canopus, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Magistracy Of Canopus, Liao
    <p><b>Biomes:</b> Desert Parched, martianVacuum
    `);
    sys_Sunnywood = L.marker(map.unproject([7938, 7268], map.getMaxZoom()),{icon: desert})
    .bindPopup(pop_Sunnywood).addTo(map);


    var pop_Tarragona = L.responsivePopup().setContent(`<h1>Tarragona <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> This inhospitable world is subjected to fierce tidal stresses from the gas giant it orbits, with constant earthquakes and storms making colonization a deadly enterprise. Even so, some hardy people cling to the world, Mining heavy metals and fissionable material.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 3
    <p><b>Tags:</b> Mining, poor <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_Tarragona = L.marker(map.unproject([9322, 10528], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_Tarragona).addTo(map);


    var pop_Taurus = L.responsivePopup().setContent(`<h1>Taurus <img src='images/icons/Taurian Concordat.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The political and cultural capital of the Taurian Concordant, and the technological heart of the Periphery, this system is defended by a dangerous asteroid belt that makes it nearly impossible to approach without local support.
    <p><b>Owner:</b> Taurian Concordat
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 9
    <p><b>Tags:</b> Agriculture, Aquaculture, Mining, manufacturing, recreation, research, rich <p><b>Faction:</b> taurian
    <p><b>Contract Employers:</b> Davion, Taurian Concordat
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Taurian Concordat
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Taurus = L.marker(map.unproject([11143, 7063], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Taurus).addTo(map);


    var pop_Thurrock = L.responsivePopup().setContent(`<h1>Thurrock <img src='images/icons/Marik.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The site of a decisive battle betwen the SLDF and the Magistracy almost 500 years ago, Thurrock has long since recovered from that war and now thrives as a regional industrial and tourism center.
    <p><b>Owner:</b> Marik
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, manufacturing, research, recreation, rich <p><b>Faction:</b> marik
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Liao, Steiner, Marik
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Liao, Marik
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Thurrock = L.marker(map.unproject([4622, 6831], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Thurrock).addTo(map);


    var pop_Tincalunas = L.responsivePopup().setContent(`<h1>Tincalunas <img src='images/icons/No Faction.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Tincalunas was abandoned due to natural disasters that make it a marginal colony despite its Terran . Intense tidal forces from a nearby gas giant shattered the 's moon and cause constant volcanism on the surface.
    <p><b>Owner:</b> No Faction
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> No Faction
    <p><b>Contract Employers:</b> Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Tincalunas = L.marker(map.unproject([7482, 8078], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Tincalunas).addTo(map);


    var pop_Tiverton = L.responsivePopup().setContent(`<h1>Tiverton <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Tiverton is a lush water world, with archipelagos of volcanic islands strewn all around the surface. Fishing and algae farming are the backbone industries, but it's also known for being a haven for organized crime and piracy.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b> Agriculture, Aquaculture <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Taurian Concordat, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Tiverton = L.marker(map.unproject([8309, 10165], map.getMaxZoom()),{icon: water})
    .bindPopup(pop_Tiverton).addTo(map);


    var pop_Turin = L.responsivePopup().setContent(`<h1>Turin <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The valuable Turin beef is grown on the vast grasslands of the 's single continent, although maintaining the alien-Terran hybrid is expensive. In recent years, the ranchers have begun branching out into horse breeding.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, rich <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Liao
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Turin = L.marker(map.unproject([6972, 6450], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Turin).addTo(map);


    var pop_Tyrlon_F = L.responsivePopup().setContent(`<h1>Tyrlon <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Tyrlon's two worlds are both inhabited. Arid Tyrlon 5 is an agricultural world, with farming in the flood-plains of its major river systems. Oceanic Tyrlon 6 has a toxic concentration of oxygen but is habitable on plateaus above the dense cloud layer. It is there that House Parata has its seat of power.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Mining, manufacturing, Aquaculture <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen, Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Tundra Frozen
    `);
    sys_Tyrlon_F = L.marker(map.unproject([9264, 8544], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Tyrlon_F).addTo(map);


    var pop_Umgard_F = L.responsivePopup().setContent(`<h1>Umgard <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Due to the tidal stresses of Umgard's two moons, the  is torn by volcanoes and earthquakes, and the air is a near-toxic soup of foul-smelling gases. It's a jungle world, with forests teeming with life, but machinery tends to corrode quickly in the murky environment.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Mining <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Aurigan Directorate, Davion
    <p><b>Biomes:</b> Lowlands Spring, Desert Parched, Badlands Parched
    `);
    sys_Umgard_F = L.marker(map.unproject([9473, 7811], map.getMaxZoom()),{icon: tropical})
    .bindPopup(pop_Umgard_F).addTo(map);


    var pop_Untran = L.responsivePopup().setContent(`<h1>Untran <img src='images/icons/No Faction.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The surface of Untran is an endless bleak Desert planet, with scouring winds and sand. It's honeycombed with caves, where the original Capellan colonists harvested precious stones and ores. The  has no agriculture at all; when it was abandoned, the colonies withered and died.
    <p><b>Owner:</b> No Faction
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> No Faction
    <p><b>Contract Employers:</b> Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao
    <p><b>Biomes:</b> Desert Parched, martianVacuum
    `);
    sys_Untran = L.marker(map.unproject([7510, 7877], map.getMaxZoom()),{icon: desert})
    .bindPopup(pop_Untran).addTo(map);


    var pop_UrCruinne = L.responsivePopup().setContent(`<h1>Úr Cruinne <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Úr Cruinne is a frozen wasteland, but gemal vents create temperate zones in which the 's few inhabitants live and mine the plentiful mineral resources.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 2
    <p><b>Tags:</b> Mining, poor <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Marik, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Marik, Locals
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_UrCruinne = L.marker(map.unproject([6081, 9142], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_UrCruinne).addTo(map);


    var pop_Valdives = L.responsivePopup().setContent(`<h1>Valdives <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Valdives was originally colonized by those looking to exploit its vast gemal energy, but the volcanos proved to be more trouble than it was worth. Lostech prospectors sometimes tell tales about the treasures under the ash.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Desert Parched, martianVacuum
    `);
    sys_Valdives = L.marker(map.unproject([8856, 6531], map.getMaxZoom()),{icon: desert})
    .bindPopup(pop_Valdives).addTo(map);


    var pop_Vard = L.responsivePopup().setContent(`<h1>Vard <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Almost a billion people live in the cleverly engineered treetop cities of Vard, where descent to the lush jungle of ground level is only possible for short times and with armed protection from the wildlife.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Agriculture, Aquaculture, manufacturing, research, recreation, rich <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Vard = L.marker(map.unproject([8273, 6102], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Vard).addTo(map);


    var pop_Victoria = L.responsivePopup().setContent(`<h1>Victoria <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The administrative capital of its Capellan Confederation Commonality, Victoria is famous for its violently bad weather, underground cities, and beautiful domed parks. Many industries take advantage of the local natural resources.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 7
    <p><b>Tags:</b> Mining, manufacturing, research, rich <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> ComStar, Marik, Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Davion, Liao
    <p><b>Biomes:</b> Polar Frozen
    `);
    sys_Victoria = L.marker(map.unproject([8730, 5913], map.getMaxZoom()),{icon: ice})
    .bindPopup(pop_Victoria).addTo(map);


    var pop_Villanueva = L.responsivePopup().setContent(`<h1>Villanueva <img src='images/icons/Marik.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Villanueva is a lightly-settled, extremely humid water . Most of the inhabitants are engaged in food production and processing, and live in Small settlements around automated facilities.
    <p><b>Owner:</b> Marik
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, Aquaculture, manufacturing <p><b>Faction:</b> marik
    <p><b>Contract Employers:</b> Magistracy Of Canopus, Liao, Steiner, Marik
    <p><b>Contract Targets:</b> Aurigan Pirates, Magistracy Of Canopus, Liao, Marik
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Villanueva = L.marker(map.unproject([4300, 5927], map.getMaxZoom()),{icon: water})
    .bindPopup(pop_Villanueva).addTo(map);


    var pop_Viribium = L.responsivePopup().setContent(`<h1>Viribium <img src='images/icons/No Faction.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The airless world of Viribium was a critical military base, defending Liao's border from the Free Worlds League. The League seized the base in the Second Succession War, and then abandoned it, detonating nuclear devices inside the facilities before leaving.
    <p><b>Owner:</b> No Faction
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b>  <p><b>Faction:</b> No Faction
    <p><b>Contract Employers:</b> Marik, Magistracy Of Canopus
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Magistracy Of Canopus
    <p><b>Biomes:</b> Lunar Vacuum
    `);
    sys_Viribium = L.marker(map.unproject([5147, 6927], map.getMaxZoom()),{icon: lunar})
    .bindPopup(pop_Viribium).addTo(map);


    var pop_Ward = L.responsivePopup().setContent(`<h1>Ward <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Ward is a warm water  with one Small continent. The utopian ideals of Ward's original settlers remain strong in its population of 1.5 billion, and the  thrives based on their reputation for solid construction work.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Mining, manufacturing <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Aurigan Restoration, Taurian Concordat, Magistracy Of Canopus, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Taurian Concordat, Magistracy Of Canopus, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Ward = L.marker(map.unproject([8222, 7533], map.getMaxZoom()),{icon: water})
    .bindPopup(pop_Ward).addTo(map);


    var pop_Weldry_F = L.responsivePopup().setContent(`<h1>Weldry <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Weldry is a cold world with a thin atmosphere that's only breathable in the Lowlands  and valleys. The Highlands  are barren, windswept, uninhabited ice. The highest form of life is a vicious stinging insect that can form mile-wide swarms.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 5
    <p><b>Tags:</b> Agriculture, manufacturing <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Taurian Concordat, Aurigan Directorate
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Weldry_F = L.marker(map.unproject([8251, 7679], map.getMaxZoom()),{icon: arctic})
    .bindPopup(pop_Weldry_F).addTo(map);


    var pop_WyethsGlory = L.responsivePopup().setContent(`<h1>Wyeth's Glory <img src='images/icons/No Faction.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> The colony of Thamel was abandoned after several battles left the surface irradiated and uninhabitable. The Capellans have made several attempts to re-establish an outpost on the world, renaming it Wyeth's Glory after one of the MechWarriors killed in battle there.
    <p><b>Owner:</b> No Faction
    <p><b>Population:</b> None
    <p><b>Shop Max Specials:</b> 4
    <p><b>Tags:</b>  <p><b>Faction:</b> No Faction
    <p><b>Contract Employers:</b> Liao, Magistracy Of Canopus
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Magistracy Of Canopus
    <p><b>Biomes:</b> Highlands Spring, Highlands Fall, Badlands Parched, Tundra Frozen, martianVacuum
    `);
    sys_WyethsGlory = L.marker(map.unproject([7047, 7703], map.getMaxZoom()),{icon: rocky})
    .bindPopup(pop_WyethsGlory).addTo(map);


    var pop_Yuris = L.responsivePopup().setContent(`<h1>Yuris <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Originally a Star League staging ground, Yuris has a long and bloody history of urban conflict with various resistance groups. Despite this, in the lush rural regions, many industries prosper.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 9
    <p><b>Tags:</b> Mining, Agriculture, Aquaculture, manufacturing, research, recreation, rich <p><b>Faction:</b> liao    <p><b>Contract Employers:</b> Davion, ComStar, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Liao
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Yuris = L.marker(map.unproject([9758, 5983], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Yuris).addTo(map);

    var pop_Zangul_F = L.responsivePopup().setContent(`<h1>Zangul <img src='images/icons/Aurigan Restoration.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Zangul is a cold water-world with chains of rocky islands and sprawling archipelagos. Most of the population lives on a single island, which is entirely covered with the slowly-decaying hulk of the original Capellan spaceport.
    <p><b>Owner:</b> Aurigan Restoration
    <p><b>Population:</b> Small
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Aquaculture, poor <p><b>Faction:</b> restoration
    <p><b>Contract Employers:</b> Aurigan Restoration
    <p><b>Contract Targets:</b> Aurigan Pirates, Liao, Taurian Concordat, Aurigan Directorate, Davion
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Polar Frozen, Tundra Frozen
    `);
    sys_Zangul_F = L.marker(map.unproject([9367, 7286], map.getMaxZoom()),{icon: water})
    .bindPopup(pop_Zangul_F).addTo(map);


    var pop_Zanzibar = L.responsivePopup().setContent(`<h1>Zanzibar <img src='images/icons/Liao.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Zanzibar was originally settled by the Taurian Concordant, but was absorbed during a Liao expansion centuries ago. It has a strong black market where almost anything can be traded.
    <p><b>Owner:</b> Liao
    <p><b>Population:</b> Large
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Mining, manufacturing <p><b>Faction:</b> liao
    <p><b>Contract Employers:</b> Davion, Liao
    <p><b>Contract Targets:</b> Aurigan Pirates, Davion, Liao
    <p><b>Biomes:</b> Desert Parched, Badlands Parched, Polar Frozen
    `);
    sys_Zanzibar = L.marker(map.unproject([9390, 6365], map.getMaxZoom()),{icon: arid})
    .bindPopup(pop_Zanzibar).addTo(map);


    var pop_Zathras = L.responsivePopup().setContent(`<h1>Zathras <img src='images/icons/Locals.png', width = 40, height = 40</img></h1>
    <p><b>Description:</b> Zathras was a Magistracy system that broke away and declared its independence. The new state styles itself an 'Empire', and has made aggressive moves towards the newly-Independent Aquagea.
    <p><b>Owner:</b> Locals
    <p><b>Population:</b> Medium
    <p><b>Shop Max Specials:</b> 6
    <p><b>Tags:</b> Agriculture, Mining <p><b>Faction:</b> Independent
    <p><b>Contract Employers:</b> Marik, Magistracy Of Canopus, Locals
    <p><b>Contract Targets:</b> Aurigan Pirates, Marik, Magistracy Of Canopus, Locals
    <p><b>Biomes:</b> Lowlands Spring, Lowlands Fall, Highlands Spring, Highlands Fall, Desert Parched, Badlands Parched, Polar Frozen, Tundra Frozen
    `);
    sys_Zathras = L.marker(map.unproject([4407, 6964], map.getMaxZoom()),{icon: terran})
    .bindPopup(pop_Zathras).addTo(map);

// layer groups
var lg_welcome = L.layerGroup([sys_welcome]);
	lg_all = L.layerGroup([sys_Addasar, sys_Adrar, sys_Aea_F, sys_Ahlat, sys_Alamagordo, sys_Alexandria, sys_Alloway, sys_Andarmax, sys_Antias, sys_Appian, sys_Aquagea, sys_Argos, sys_Arn, sys_Artru_F, sys_Athna, sys_AtreusPrime, sys_Balawat, sys_Barras, sys_Bellatrix, sys_Bellerophon, sys_Bergtatt, sys_Bonavista, sys_Borden, sys_Bringdam_F, sys_Brinton, sys_Brisbane, sys_Brixtana, sys_Brockway, sys_Bromhead, sys_Burton, sys_Calseraigne, sys_Camadeirre, sys_Carmichael, sys_Carthage, sys_Cassilda, sys_CatesHold, sys_Cavalor, sys_Chandan, sys_Chennai, sys_Claybrooke, sys_CluffsStand, sys_Corodiz, sys_Coromodir_F, sys_Cursa, sys_Cygnus, sys_DainmarMajoris, sys_DesolatePlains, sys_Detroit, sys_Drozan, sys_Dunianshire, sys_EarlyDawn, sys_Egress, sys_Enkra_F, sys_Espia, sys_Fagerholm, sys_Fjaldr_F, sys_FlannagansNebulea, sys_Flaum, sys_Fronc, sys_Gangtok_F, sys_Gaucin, sys_Ghorepani, sys_Girondas, sys_Guldra_F, sys_Gunthar, sys_Hastur, sys_Heliat_F, sys_Hellespont, sys_Herotitus, sys_Hibuarius, sys_Horsham, sys_Hurik, sys_Ichlangis_F, sys_Illiushin, sys_Independence, sys_Ishtar, sys_Itica, sys_Itrom_F, sys_Itsbur, sys_Jacomarle, sys_Jamestown, sys_JansensHold, sys_Joppa, sys_Katinka_F, sys_Kazu, sys_Kern, sys_Kimi, sys_Kurvasa, sys_Laconis, sys_Landmark, sys_Larsha, sys_Lindsay, sys_Linhauiguan, sys_LiusMemory, sys_Lyreton, sys_MacLeodsLand, sys_Maldive, sys_Mandalas, sys_Mangzhangdian_F, sys_Mantharaka, sys_Mattisskogen, sys_McevansSacrifice, sys_Mechdur_F, sys_Merdal, sys_Merlin, sys_Midale, sys_Midthun, sys_Mithron, sys_Muridox, sys_Murris, sys_Mystras, sys_Naryn, sys_NewAbilene, sys_NewGanymede, sys_NewRoland, sys_NewVallis, sys_NewVandenburg, sys_Niomede, sys_NonDiz, sys_Paf, sys_Panzyr_F, sys_Payia, sys_Peratallada, sys_Pilpala, sys_Pinard, sys_Piriapolis, sys_Pojos, sys_Portland, sys_Principia, sys_Pyrrhus, sys_Qalzi_F, sys_Quimberton, sys_RegisRoost_F, sys_Renfield, sys_Renown, sys_Repulse, sys_Rockwellawan, sys_Rollis, sys_RyansFate_F, sys_Sacromonte, sys_Salardion, sys_Samantha, sys_Sax, sys_Segerica, sys_Smithon_F, sys_Spencer, sys_Spitz, sys_Sunnywood, sys_Tarragona, sys_Taurus, sys_Thurrock, sys_Tincalunas, sys_Tiverton, sys_Turin, sys_Tyrlon_F, sys_Umgard_F, sys_Untran, sys_UrCruinne, sys_Valdives, sys_Vard, sys_Victoria, sys_Villanueva, sys_Viribium, sys_Ward, sys_Weldry_F, sys_WyethsGlory, sys_Yuris, sys_Zangul_F, sys_Zanzibar, sys_Zathras]);
	lg_largeweps = L.layerGroup([sys_Itrom_F, sys_Mechdur_F, sys_Laconis, sys_Burton, sys_Claybrooke, sys_Illiushin, sys_CluffsStand]);
	lg_smallweps = L.layerGroup([sys_Sax, sys_Niomede, sys_Drozan, sys_NewRoland]);
	lg_equipment = L.layerGroup([sys_Yuris, sys_Hurik, sys_Victoria, sys_NewVandenburg]);
	lg_blackmarket = L.layerGroup([sys_Addasar, sys_Ahlat, sys_Alloway, sys_Antias, sys_Barras, sys_Bergtatt, sys_Borden, sys_Bringdam_F, sys_Brisbane, sys_Burton, sys_CatesHold, sys_Cavalor, sys_CluffsStand, sys_Egress, sys_Hastur, sys_Herotitus, sys_Ichlangis_F, sys_Independence, sys_Itrom_F, sys_Joppa, sys_Larsha, sys_Mantharaka, sys_Mechdur_F, sys_Pojos, sys_Principia, sys_Pyrrhus, sys_Quimberton, sys_Rollis, sys_Sacromonte, sys_Salardion, sys_Thurrock, sys_Tiverton, sys_Vard, sys_Ward, sys_Zanzibar]);
	lg_rich = L.layerGroup([sys_Andarmax, sys_Brinton, sys_Brisbane, sys_Burton, sys_Claybrooke, sys_CluffsStand, sys_Coromodir_F, sys_Drozan, sys_Egress, sys_Guldra_F, sys_Gunthar, sys_Hurik, sys_Illiushin, sys_Ishtar, sys_Itrom_F, sys_JansensHold, sys_Laconis, sys_Mechdur_F, sys_NewVandenburg, sys_Pojos, sys_Principia, sys_Quimberton, sys_Rockwellawan, sys_Taurus, sys_Thurrock, sys_Turin, sys_Vard, sys_Victoria, sys_Yuris]);
	lg_mining = L.layerGroup([sys_Addasar, sys_Ahlat, sys_Argos, sys_Artru_F, sys_Athna, sys_Balawat, sys_Borden, sys_Brixtana, sys_Brockway, sys_Bromhead, sys_Calseraigne, sys_Camadeirre, sys_Carmichael, sys_Carthage, sys_Chandan, sys_Claybrooke, sys_Corodiz, sys_DainmarMajoris, sys_Detroit, sys_Dunianshire, sys_Espia, sys_Fagerholm, sys_Fjaldr_F, sys_FlannagansNebulea, sys_Flaum, sys_Fronc, sys_Hastur, sys_Hellespont, sys_Horsham, sys_Ichlangis_F, sys_JansensHold, sys_Katinka_F, sys_Kimi, sys_Kurvasa, sys_Laconis, sys_LiusMemory, sys_MacLeodsLand, sys_Mantharaka, sys_Mechdur_F, sys_Mithron, sys_Mystras, sys_NewGanymede, sys_NewVallis, sys_NewVandenburg, sys_Pinard, sys_Pyrrhus, sys_Qalzi_F, sys_Repulse, sys_Rockwellawan, sys_RyansFate_F, sys_Sax, sys_Tarragona, sys_Taurus, sys_Tyrlon_F, sys_Umgard_F, sys_UrCruinne, sys_Victoria, sys_Ward, sys_Yuris, sys_Zanzibar, sys_Zathras]);
	lg_manufacturing = L.layerGroup([sys_Antias, sys_AtreusPrime, sys_Balawat, sys_Barras, sys_Bellatrix, sys_Borden, sys_Brinton, sys_Bromhead, sys_Burton, sys_Calseraigne, sys_Camadeirre, sys_Carmichael, sys_CatesHold, sys_Cavalor, sys_Claybrooke, sys_CluffsStand, sys_Coromodir_F, sys_Dunianshire, sys_Egress, sys_Fagerholm, sys_FlannagansNebulea, sys_Fronc, sys_Guldra_F, sys_Gunthar, sys_Hellespont, sys_Horsham, sys_Hurik, sys_Illiushin, sys_Itrom_F, sys_Jacomarle, sys_Jamestown, sys_JansensHold, sys_Kurvasa, sys_Laconis, sys_Landmark, sys_Larsha, sys_Lindsay, sys_LiusMemory, sys_MacLeodsLand, sys_Mechdur_F, sys_Midale, sys_Mithron, sys_Muridox, sys_NewVallis, sys_NewVandenburg, sys_Pinard, sys_Pojos, sys_Renfield, sys_Renown, sys_RyansFate_F, sys_Samantha, sys_Taurus, sys_Thurrock, sys_Tyrlon_F, sys_Vard, sys_Victoria, sys_Villanueva, sys_Ward, sys_Weldry_F, sys_Yuris, sys_Zanzibar]);
	lg_research = L.layerGroup([sys_Appian, sys_Barras, sys_Brinton, sys_Chandan, sys_Coromodir_F, sys_Drozan, sys_Dunianshire, sys_Egress, sys_Gaucin, sys_Guldra_F, sys_Hurik, sys_JansensHold, sys_Landmark, sys_Larsha, sys_Lyreton, sys_NewGanymede, sys_NewRoland, sys_NewVandenburg, sys_Niomede, sys_Pilpala, sys_Pojos, sys_Principia, sys_Quimberton, sys_Sax, sys_Taurus, sys_Thurrock, sys_Vard, sys_Victoria, sys_Yuris]);
	lg_starleague = L.layerGroup([sys_Andarmax, sys_Bellatrix, sys_Brisbane, sys_Brixtana, sys_CatesHold, sys_Cavalor, sys_Claybrooke, sys_Dunianshire, sys_Hurik, sys_Illiushin, sys_Jamestown, sys_Joppa, sys_Kimi, sys_Midale, sys_NewRoland, sys_NewVandenburg, sys_Niomede, sys_Piriapolis, sys_Repulse, sys_Smithon_F, sys_Victoria, sys_Yuris, sys_Zathras]);
	lg_hub = L.layerGroup([sys_Barras, sys_Bellatrix, sys_Bergtatt, sys_Borden, sys_Bringdam_F, sys_Burton, sys_Egress, sys_Hellespont, sys_Herotitus, sys_Hurik, sys_Ichlangis_F, sys_Joppa, sys_Mantharaka, sys_Mechdur_F, sys_Panzyr_F, sys_Principia, sys_Rollis, sys_Sacromonte, sys_Salardion, sys_Taurus, sys_Ward, sys_Weldry_F, sys_Zangul_F]);


var filters = {
	"ALL the things!" : lg_all,
	"Best Places for Large +++ Weapons" : lg_largeweps,
	"Best Places for Small +++ Weapons" : lg_smallweps,
	"Best Places for ++ Equipment" : lg_equipment,
	"Black Market" : lg_blackmarket,
	"Research" : lg_research,
	"Rich" : lg_rich,
	"Mining" : lg_mining,
	"SLDF" : lg_starleague,
	"Manufacturing" : lg_manufacturing,
	"Travel Hub" : lg_hub,
	"Welcome Message" : lg_welcome
}

// layer control
L.control.layers(null, filters, {position: 'topright'}).addTo(map);

// stuff i may use

// auto popup
// marker.bindPopup('<b>Test</b>').openPopup();

// on click report
// map.on('click', function(e) {
// 	alert(e.latlng);
// });
