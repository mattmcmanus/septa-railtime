import DS from 'ember-data';

var Station = DS.Model.extend({
  name               : DS.attr('string'),
  description        : DS.attr('string'),
  longitude          : DS.attr('number'),
  latitude           : DS.attr('number'),
  zone               : DS.attr('number'),
  wheelchairBoarding : DS.attr('boolean')
});

Station.reopenClass({
  FIXTURES: [
    { id: 90001, name: "Cynwyd", description: "Cynwyd Line", longitude: 40.0066667, latitude: -75.2316667, zone: "2", wheelchairBoarding: true },
    { id: 90002, name: "Bala", description: "Cynwyd Line", longitude: 40.0011111, latitude: -75.2277778, zone: "2", wheelchairBoarding: true },
    { id: 90003, name: "Wynnefield Avenue", description: "Cynwyd Line", longitude: 39.99, latitude: -75.2255556, zone: "1", wheelchairBoarding: false },
    { id: 90004, name: "30th Street Station", description: "All Regional Rail Lines", longitude: 39.9566667, latitude: -75.1816667, zone: "C", wheelchairBoarding: true },
    { id: 90005, name: "Suburban Station", description: "All Regional Rail Lines", longitude: 39.9538889, latitude: -75.1677778, zone: "C", wheelchairBoarding: true },
    { id: 90006, name: "Jefferson Station", description: "All Regional Rail Lines", longitude: 39.9525, latitude: -75.1580556, zone: "C", wheelchairBoarding: true },
    { id: 90007, name: "Temple University", description: "All Regional Rail Lines", longitude: 39.9813889, latitude: -75.1494444, zone: "C", wheelchairBoarding: true },
    { id: 90008, name: "North Broad", description: "Multiple Lines", longitude: 39.9922222, latitude: -75.1538889, zone: "1", wheelchairBoarding: true },
    { id: 90009, name: "Wayne Junction", description: "Multiple Lines", longitude: 40.0222222, latitude: -75.16, zone: "1", wheelchairBoarding: false },
    { id: 90201, name: "Newark", description: "Wilmington Newark Line", longitude: 39.6705556, latitude: -75.7527778, zone: "4", wheelchairBoarding: true },
    { id: 90202, name: "Churchman's Crossing", description: "Wilmington Newark Line", longitude: 39.695, latitude: -75.6725, zone: "4", wheelchairBoarding: false },
    { id: 90203, name: "Wilmington", description: "Wilmington Newark Line", longitude: 39.7372222, latitude: -75.5511111, zone: "4", wheelchairBoarding: true },
    { id: 90204, name: "Claymont", description: "Wilmington Newark Line", longitude: 39.7977778, latitude: -75.4522222, zone: "4", wheelchairBoarding: true },
    { id: 90205, name: "Marcus Hook", description: "Wilmington Newark Line", longitude: 39.8216667, latitude: -75.4194444, zone: "3", wheelchairBoarding: false },
    { id: 90206, name: "Highland Avenue", description: "Wilmington Newark Line", longitude: 39.8336111, latitude: -75.3933333, zone: "3", wheelchairBoarding: false },
    { id: 90207, name: "Chester", description: "Wilmington Newark Line", longitude: 39.8497222, latitude: -75.36, zone: "3", wheelchairBoarding: true },
    { id: 90208, name: "Eddystone", description: "Wilmington Newark Line", longitude: 39.8572222, latitude: -75.3422222, zone: "3", wheelchairBoarding: false },
    { id: 90209, name: "Crum Lynne", description: "Wilmington Newark Line", longitude: 39.8719444, latitude: -75.3311111, zone: "3", wheelchairBoarding: false },
    { id: 90210, name: "Ridley Park", description: "Wilmington Newark Line", longitude: 39.8805556, latitude: -75.3222222, zone: "3", wheelchairBoarding: false },
    { id: 90211, name: "Prospect Park - Moore", description: "Wilmington Newark Line", longitude: 39.8883333, latitude: -75.3088889, zone: "2", wheelchairBoarding: false },
    { id: 90212, name: "Norwood", description: "Wilmington Newark Line", longitude: 39.8916667, latitude: -75.3016667, zone: "2", wheelchairBoarding: false },
    { id: 90213, name: "Glenolden", description: "Wilmington Newark Line", longitude: 39.8963889, latitude: -75.29, zone: "2", wheelchairBoarding: false },
    { id: 90214, name: "Folcroft", description: "Wilmington Newark Line", longitude: 39.9005556, latitude: -75.2797222, zone: "2", wheelchairBoarding: false },
    { id: 90215, name: "Sharon Hill", description: "Wilmington Newark Line", longitude: 39.9044444, latitude: -75.2708333, zone: "2", wheelchairBoarding: false },
    { id: 90216, name: "Curtis Park", description: "Wilmington Newark Line", longitude: 39.9080556, latitude: -75.265, zone: "2", wheelchairBoarding: false },
    { id: 90217, name: "Darby", description: "Wilmington Newark Line", longitude: 39.9130556, latitude: -75.2544444, zone: "2", wheelchairBoarding: false },
    { id: 90218, name: "Allegheny", description: "Manayunk Norristown Line", longitude: 40.0036111, latitude: -75.1647222, zone: "1", wheelchairBoarding: false },
    { id: 90219, name: "East Falls", description: "Manayunk Norristown Line", longitude: 40.0113889, latitude: -75.1919444, zone: "1", wheelchairBoarding: false },
    { id: 90220, name: "Wissahickon", description: "Manayunk Norristown Line", longitude: 40.0166667, latitude: -75.2102778, zone: "2", wheelchairBoarding: false },
    { id: 90221, name: "Manayunk", description: "Manayunk Norristown Line", longitude: 40.0269444, latitude: -75.225, zone: "2", wheelchairBoarding: false },
    { id: 90222, name: "Ivy Ridge", description: "Manayunk Norristown Line", longitude: 40.0341667, latitude: -75.2355556, zone: "2", wheelchairBoarding: false },
    { id: 90223, name: "Miquon", description: "Manayunk Norristown Line", longitude: 40.0586111, latitude: -75.2663889, zone: "2", wheelchairBoarding: false },
    { id: 90224, name: "Spring Mill", description: "Manayunk Norristown Line", longitude: 40.0741667, latitude: -75.2861111, zone: "3", wheelchairBoarding: true },
    { id: 90225, name: "Conshohocken", description: "Manayunk Norristown Line", longitude: 40.0722222, latitude: -75.3086111, zone: "3", wheelchairBoarding: false },
    { id: 90226, name: "Norristown T.C.", description: "Manayunk Norristown Line", longitude: 40.1127778, latitude: -75.3441667, zone: "3", wheelchairBoarding: false },
    { id: 90227, name: "Main Street", description: "Manayunk Norristown Line", longitude: 40.1172222, latitude: -75.3486111, zone: "3", wheelchairBoarding: false },
    { id: 90228, name: "Norristown Elm Street", description: "Manayunk Norristown Line", longitude: 40.1202778, latitude: -75.3475, zone: "3", wheelchairBoarding: true },
    { id: 90301, name: "Elwyn", description: "Media Elwyn Line", longitude: 39.9075, latitude: -75.4116667, zone: "3", wheelchairBoarding: true },
    { id: 90302, name: "Media", description: "Media Elwyn Line", longitude: 39.9144444, latitude: -75.395, zone: "3", wheelchairBoarding: true },
    { id: 90303, name: "Moylan-Rose Valley", description: "Media Elwyn Line", longitude: 39.9061111, latitude: -75.3886111, zone: "3", wheelchairBoarding: false },
    { id: 90304, name: "Wallingford", description: "Media Elwyn Line", longitude: 39.9036111, latitude: -75.3719444, zone: "3", wheelchairBoarding: false },
    { id: 90305, name: "Swarthmore", description: "Media Elwyn Line", longitude: 39.9022222, latitude: -75.3508333, zone: "3", wheelchairBoarding: true },
    { id: 90306, name: "Morton-Rutledge", description: "Media Elwyn Line", longitude: 39.9077778, latitude: -75.3288889, zone: "2", wheelchairBoarding: true },
    { id: 90307, name: "Secane", description: "Media Elwyn Line", longitude: 39.9158333, latitude: -75.3097222, zone: "2", wheelchairBoarding: false },
    { id: 90308, name: "Primos", description: "Media Elwyn Line", longitude: 39.9216667, latitude: -75.2983333, zone: "2", wheelchairBoarding: true },
    { id: 90309, name: "Clifton-Aldan", description: "Media Elwyn Line", longitude: 39.9266667, latitude: -75.2902778, zone: "2", wheelchairBoarding: false },
    { id: 90310, name: "Gladstone", description: "Media Elwyn Line", longitude: 39.9327778, latitude: -75.2822222, zone: "2", wheelchairBoarding: false },
    { id: 90311, name: "Lansdowne", description: "Media Elwyn Line", longitude: 39.9375, latitude: -75.2708333, zone: "2", wheelchairBoarding: false },
    { id: 90312, name: "Fernwood-Yeadon", description: "Media Elwyn Line", longitude: 39.9397222, latitude: -75.2558333, zone: "2", wheelchairBoarding: false },
    { id: 90313, name: "Angora", description: "Media Elwyn Line", longitude: 39.9447222, latitude: -75.2386111, zone: "1", wheelchairBoarding: false },
    { id: 90314, name: "49th Street", description: "Media Elwyn Line", longitude: 39.9436111, latitude: -75.2166667, zone: "1", wheelchairBoarding: true },
    { id: 90315, name: "Noble", description: "West Trenton Line", longitude: 40.1044444, latitude: -75.1241667, zone: "3", wheelchairBoarding: false },
    { id: 90316, name: "Rydal", description: "West Trenton Line", longitude: 40.1075, latitude: -75.1105556, zone: "3", wheelchairBoarding: false },
    { id: 90317, name: "Meadowbrook", description: "West Trenton Line", longitude: 40.1113889, latitude: -75.0925, zone: "3", wheelchairBoarding: false },
    { id: 90318, name: "Bethayres", description: "West Trenton Line", longitude: 40.1166667, latitude: -75.0683333, zone: "3", wheelchairBoarding: true },
    { id: 90319, name: "Philmont", description: "West Trenton Line", longitude: 40.1219444, latitude: -75.0436111, zone: "3", wheelchairBoarding: true },
    { id: 90320, name: "Forest Hills", description: "West Trenton Line", longitude: 40.1277778, latitude: -75.0205556, zone: "3", wheelchairBoarding: true },
    { id: 90321, name: "Somerton", description: "West Trenton Line", longitude: 40.1305556, latitude: -75.0119444, zone: "3", wheelchairBoarding: true },
    { id: 90322, name: "Trevose", description: "West Trenton Line", longitude: 40.1402778, latitude: -74.9825, zone: "3", wheelchairBoarding: true },
    { id: 90323, name: "Neshaminy", description: "West Trenton Line", longitude: 40.1469444, latitude: -74.9616667, zone: "3", wheelchairBoarding: true },
    { id: 90324, name: "Langhorne", description: "West Trenton Line", longitude: 40.1608333, latitude: -74.9125, zone: "4", wheelchairBoarding: false },
    { id: 90325, name: "Woodbourne", description: "West Trenton Line", longitude: 40.1925, latitude: -74.8891667, zone: "4", wheelchairBoarding: false },
    { id: 90326, name: "Yardley", description: "West Trenton Line", longitude: 40.2352778, latitude: -74.8305556, zone: "4", wheelchairBoarding: false },
    { id: 90327, name: "West Trenton", description: "West Trenton Line", longitude: 40.2577778, latitude: -74.8152778, zone: "NJ", wheelchairBoarding: false },
    { id: 90401, name: "Airport Terminal E F", description: "Airport Line", longitude: 39.8794444, latitude: -75.2397222, zone: "4", wheelchairBoarding: true },
    { id: 90402, name: "Airport Terminal C D", description: "Airport Line", longitude: 39.8780556, latitude: -75.24, zone: "4", wheelchairBoarding: true },
    { id: 90403, name: "Airport Terminal B", description: "Airport Line", longitude: 39.8772222, latitude: -75.2413889, zone: "4", wheelchairBoarding: true },
    { id: 90404, name: "Airport Terminal A", description: "Airport Line", longitude: 39.8761111, latitude: -75.2452778, zone: "4", wheelchairBoarding: true },
    { id: 90405, name: "Eastwick", description: "Airport Line", longitude: 39.8927778, latitude: -75.2438889, zone: "1", wheelchairBoarding: true },
    { id: 90406, name: "University City", description: "Multiple Lines", longitude: 39.9480556, latitude: -75.1902778, zone: "C", wheelchairBoarding: true },
    { id: 90407, name: "Fern Rock T C", description: "Multiple Lines", longitude: 40.0405556, latitude: -75.1347222, zone: "1", wheelchairBoarding: true },
    { id: 90408, name: "Melrose Park", description: "Multiple Lines", longitude: 40.0594444, latitude: -75.1291667, zone: "2", wheelchairBoarding: true },
    { id: 90409, name: "Elkins Park", description: "Multiple Lines", longitude: 40.0713889, latitude: -75.1277778, zone: "2", wheelchairBoarding: false },
    { id: 90410, name: "Jenkintown Wyncote", description: "Multiple Lines", longitude: 40.0927778, latitude: -75.1375, zone: "3", wheelchairBoarding: false },
    { id: 90411, name: "Glenside", description: "Multiple Lines", longitude: 40.1013889, latitude: -75.1536111, zone: "3", wheelchairBoarding: false },
    { id: 90412, name: "Ardsley", description: "Warminster Line", longitude: 40.1141667, latitude: -75.1530556, zone: "3", wheelchairBoarding: true },
    { id: 90413, name: "Roslyn", description: "Warminster Line", longitude: 40.1208333, latitude: -75.1341667, zone: "3", wheelchairBoarding: true },
    { id: 90414, name: "Crestmont", description: "Warminster Line", longitude: 40.1333333, latitude: -75.1186111, zone: "3", wheelchairBoarding: true },
    { id: 90415, name: "Willow Grove", description: "Warminster Line", longitude: 40.1438889, latitude: -75.1141667, zone: "3", wheelchairBoarding: false },
    { id: 90416, name: "Hatboro", description: "Warminster Line", longitude: 40.1761111, latitude: -75.1025, zone: "4", wheelchairBoarding: false },
    { id: 90417, name: "Warminster", description: "Warminster Line", longitude: 40.1952778, latitude: -75.0891667, zone: "4", wheelchairBoarding: true },
    { id: 90501, name: "Thorndale", description: "Paoli Thorndale Line", longitude: 39.9927778, latitude: -75.7636111, zone: "4", wheelchairBoarding: true },
    { id: 90502, name: "Downingtown", description: "Paoli Thorndale Line", longitude: 40.0022222, latitude: -75.7102778, zone: "4", wheelchairBoarding: false },
    { id: 90503, name: "Whitford", description: "Paoli Thorndale Line", longitude: 40.0147222, latitude: -75.6380556, zone: "4", wheelchairBoarding: false },
    { id: 90504, name: "Exton", description: "Paoli Thorndale Line", longitude: 40.0191667, latitude: -75.6227778, zone: "4", wheelchairBoarding: true },
    { id: 90505, name: "Malvern", description: "Paoli Thorndale Line", longitude: 40.0363889, latitude: -75.5155556, zone: "4", wheelchairBoarding: false },
    { id: 90506, name: "Paoli", description: "Paoli Thorndale Line", longitude: 40.0430556, latitude: -75.4827778, zone: "4", wheelchairBoarding: false },
    { id: 90507, name: "Daylesford", description: "Paoli Thorndale Line", longitude: 40.0430556, latitude: -75.4605556, zone: "3", wheelchairBoarding: false },
    { id: 90508, name: "Berwyn", description: "Paoli Thorndale Line", longitude: 40.0480556, latitude: -75.4422222, zone: "3", wheelchairBoarding: true },
    { id: 90509, name: "Devon", description: "Paoli Thorndale Line", longitude: 40.0472222, latitude: -75.4227778, zone: "3", wheelchairBoarding: false },
    { id: 90510, name: "Strafford", description: "Paoli Thorndale Line", longitude: 40.0494444, latitude: -75.4030556, zone: "3", wheelchairBoarding: true },
    { id: 90511, name: "Wayne", description: "Paoli Thorndale Line", longitude: 40.0458333, latitude: -75.3866667, zone: "3", wheelchairBoarding: true },
    { id: 90512, name: "St. Davids", description: "Paoli Thorndale Line", longitude: 40.0438889, latitude: -75.3725, zone: "3", wheelchairBoarding: false },
    { id: 90513, name: "Radnor", description: "Paoli Thorndale Line", longitude: 40.0447222, latitude: -75.3588889, zone: "3", wheelchairBoarding: true },
    { id: 90514, name: "Villanova", description: "Paoli Thorndale Line", longitude: 40.0383333, latitude: -75.3416667, zone: "3", wheelchairBoarding: false },
    { id: 90515, name: "Rosemont", description: "Paoli Thorndale Line", longitude: 40.0277778, latitude: -75.3266667, zone: "3", wheelchairBoarding: false },
    { id: 90516, name: "Bryn Mawr", description: "Paoli Thorndale Line", longitude: 40.0219444, latitude: -75.3163889, zone: "3", wheelchairBoarding: false },
    { id: 90517, name: "Haverford", description: "Paoli Thorndale Line", longitude: 40.0138889, latitude: -75.2997222, zone: "2", wheelchairBoarding: false },
    { id: 90518, name: "Ardmore", description: "Paoli Thorndale Line", longitude: 40.0083333, latitude: -75.2902778, zone: "2", wheelchairBoarding: false },
    { id: 90519, name: "Wynnewood", description: "Paoli Thorndale Line", longitude: 40.0027778, latitude: -75.2725, zone: "2", wheelchairBoarding: false },
    { id: 90520, name: "Narberth", description: "Paoli Thorndale Line", longitude: 40.0047222, latitude: -75.2613889, zone: "2", wheelchairBoarding: false },
    { id: 90521, name: "Merion", description: "Paoli Thorndale Line", longitude: 39.9986111, latitude: -75.2513889, zone: "2", wheelchairBoarding: false },
    { id: 90522, name: "Overbrook", description: "Paoli Thorndale Line", longitude: 39.9894444, latitude: -75.2494444, zone: "2", wheelchairBoarding: true },
    { id: 90523, name: "North Hills", description: "Lansdale Doylestown Line", longitude: 40.1119444, latitude: -75.1694444, zone: "3", wheelchairBoarding: false },
    { id: 90524, name: "Oreland", description: "Lansdale Doylestown Line", longitude: 40.1183333, latitude: -75.1838889, zone: "3", wheelchairBoarding: false },
    { id: 90525, name: "Fort Washington", description: "Lansdale Doylestown Line", longitude: 40.1358333, latitude: -75.2122222, zone: "3", wheelchairBoarding: true },
    { id: 90526, name: "Ambler", description: "Lansdale Doylestown Line", longitude: 40.1536111, latitude: -75.2247222, zone: "3", wheelchairBoarding: true },
    { id: 90527, name: "Penllyn", description: "Lansdale Doylestown Line", longitude: 40.17, latitude: -75.2441667, zone: "3", wheelchairBoarding: false },
    { id: 90528, name: "Gwynedd Valley", description: "Lansdale Doylestown Line", longitude: 40.1847222, latitude: -75.2569444, zone: "3", wheelchairBoarding: false },
    { id: 90529, name: "North Wales", description: "Lansdale Doylestown Line", longitude: 40.2141667, latitude: -75.2772222, zone: "4", wheelchairBoarding: true },
    { id: 90530, name: "Pennbrook", description: "Lansdale Doylestown Line", longitude: 40.2302778, latitude: -75.2816667, zone: "4", wheelchairBoarding: true },
    { id: 90531, name: "Lansdale", description: "Lansdale Doylestown Line", longitude: 40.2427778, latitude: -75.285, zone: "4", wheelchairBoarding: true },
    { id: 90532, name: "Fortuna", description: "Lansdale Doylestown Line", longitude: 40.2594444, latitude: -75.2661111, zone: "4", wheelchairBoarding: false },
    { id: 90533, name: "Colmar", description: "Lansdale Doylestown Line", longitude: 40.2683333, latitude: -75.2544444, zone: "4", wheelchairBoarding: true },
    { id: 90534, name: "Link Belt", description: "Lansdale Doylestown Line", longitude: 40.2738889, latitude: -75.2466667, zone: "4", wheelchairBoarding: true },
    { id: 90535, name: "Chalfont", description: "Lansdale Doylestown Line", longitude: 40.2877778, latitude: -75.2097222, zone: "4", wheelchairBoarding: true },
    { id: 90536, name: "New Britain", description: "Lansdale Doylestown Line", longitude: 40.2975, latitude: -75.1797222, zone: "4", wheelchairBoarding: true },
    { id: 90537, name: "Delaware Valley College", description: "Lansdale Doylestown Line", longitude: 40.2972222, latitude: -75.1616667, zone: "4", wheelchairBoarding: true },
    { id: 90538, name: "Doylestown", description: "Lansdale Doylestown Line", longitude: 40.3063889, latitude: -75.1302778, zone: "4", wheelchairBoarding: true },
    { id: 90701, name: "Trenton", description: "Trenton Line", longitude: 40.2177778, latitude: -74.755, zone: "NJ", wheelchairBoarding: true },
    { id: 90702, name: "Levittown-Tullytown", description: "Trenton Line", longitude: 40.1402778, latitude: -74.8169444, zone: "4", wheelchairBoarding: false },
    { id: 90703, name: "Bristol", description: "Trenton Line", longitude: 40.1047222, latitude: -74.8547222, zone: "4", wheelchairBoarding: false },
    { id: 90704, name: "Croydon", description: "Trenton Line", longitude: 40.0936111, latitude: -74.9066667, zone: "3", wheelchairBoarding: true },
    { id: 90705, name: "Eddington", description: "Trenton Line", longitude: 40.0830556, latitude: -74.9336111, zone: "3", wheelchairBoarding: false },
    { id: 90706, name: "Cornwells Heights", description: "Trenton Line", longitude: 40.0716667, latitude: -74.9522222, zone: "3", wheelchairBoarding: true },
    { id: 90707, name: "Torresdale", description: "Trenton Line", longitude: 40.0544444, latitude: -74.9844444, zone: "3", wheelchairBoarding: false },
    { id: 90708, name: "Holmesburg Jct", description: "Trenton Line", longitude: 40.0327778, latitude: -75.0236111, zone: "2", wheelchairBoarding: false },
    { id: 90709, name: "Tacony", description: "Trenton Line", longitude: 40.0233333, latitude: -75.0388889, zone: "2", wheelchairBoarding: false },
    { id: 90710, name: "Bridesburg", description: "Trenton Line", longitude: 40.0105556, latitude: -75.0697222, zone: "2", wheelchairBoarding: false },
    { id: 90711, name: "North Philadelphia Amtrak", description: "Trenton Line", longitude: 39.9972222, latitude: -75.155, zone: "1", wheelchairBoarding: false },
    { id: 90712, name: "Wister", description: "Chestnut Hill East Line", longitude: 40.0361111, latitude: -75.1611111, zone: "1", wheelchairBoarding: false },
    { id: 90713, name: "Germantown", description: "Chestnut Hill East Line", longitude: 40.0375, latitude: -75.1716667, zone: "1", wheelchairBoarding: false },
    { id: 90714, name: "Washington Lane", description: "Chestnut Hill East Line", longitude: 40.0508333, latitude: -75.1713889, zone: "2", wheelchairBoarding: false },
    { id: 90715, name: "Stenton", description: "Chestnut Hill East Line", longitude: 40.0605556, latitude: -75.1786111, zone: "2", wheelchairBoarding: false },
    { id: 90716, name: "Sedgwick", description: "Chestnut Hill East Line", longitude: 40.0627778, latitude: -75.1852778, zone: "2", wheelchairBoarding: false },
    { id: 90717, name: "Mount Airy", description: "Chestnut Hill East Line", longitude: 40.0652778, latitude: -75.1908333, zone: "2", wheelchairBoarding: false },
    { id: 90718, name: "Wyndmoor", description: "Chestnut Hill East Line", longitude: 40.0733333, latitude: -75.1966667, zone: "2", wheelchairBoarding: false },
    { id: 90719, name: "Gravers", description: "Chestnut Hill East Line", longitude: 40.0775, latitude: -75.2016667, zone: "2", wheelchairBoarding: false },
    { id: 90720, name: "Chestnut Hill East", description: "Chestnut Hill East Line", longitude: 40.0811111, latitude: -75.2072222, zone: "2", wheelchairBoarding: false },
    { id: 90801, name: "Chestnut Hill West", description: "Chestnut Hill West Line", longitude: 40.0763889, latitude: -75.2083333, zone: "2", wheelchairBoarding: true },
    { id: 90802, name: "Highland", description: "Chestnut Hill West Line", longitude: 40.0705556, latitude: -75.2111111, zone: "2", wheelchairBoarding: false },
    { id: 90803, name: "St. Martins", description: "Chestnut Hill West Line", longitude: 40.0658333, latitude: -75.2044444, zone: "2", wheelchairBoarding: false },
    { id: 90804, name: "Allen Lane", description: "Chestnut Hill West Line", longitude: 40.0575, latitude: -75.1947222, zone: "2", wheelchairBoarding: true },
    { id: 90805, name: "Carpenter", description: "Chestnut Hill West Line", longitude: 40.0511111, latitude: -75.1913889, zone: "2", wheelchairBoarding: false },
    { id: 90806, name: "Upsal", description: "Chestnut Hill West Line", longitude: 40.0425, latitude: -75.19, zone: "2", wheelchairBoarding: false },
    { id: 90807, name: "Tulpehocken", description: "Chestnut Hill West Line", longitude: 40.0352778, latitude: -75.1869444, zone: "2", wheelchairBoarding: false },
    { id: 90808, name: "Chelten Avenue", description: "Chestnut Hill West Line", longitude: 40.03, latitude: -75.1808333, zone: "1", wheelchairBoarding: false },
    { id: 90809, name: "Queen Lane", description: "Chestnut Hill West Line", longitude: 40.0233333, latitude: -75.1780556, zone: "1", wheelchairBoarding: true },
    { id: 90810, name: "North Philadelphia", description: "Chestnut Hill West Line", longitude: 39.9977778, latitude: -75.1563889, zone: "1", wheelchairBoarding: false },
    { id: 90811, name: "Olney", description: "Fox Chase Line", longitude: 40.0333333, latitude: -75.1227778, zone: "1", wheelchairBoarding: true },
    { id: 90812, name: "Lawndale", description: "Fox Chase Line", longitude: 40.0513889, latitude: -75.1030556, zone: "2", wheelchairBoarding: true },
    { id: 90813, name: "Cheltenham", description: "Fox Chase Line", longitude: 40.0580556, latitude: -75.0927778, zone: "2", wheelchairBoarding: true },
    { id: 90814, name: "Ryers", description: "Fox Chase Line", longitude: 40.0641667, latitude: -75.0863889, zone: "2", wheelchairBoarding: true },
    { id: 90815, name: "Fox Chase", description: "Fox Chase Line", longitude: 40.0763889, latitude: -75.0833333, zone: "2", wheelchairBoarding: true }
  ]
});

export default Station;

