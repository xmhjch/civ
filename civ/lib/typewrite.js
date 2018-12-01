

// the list of strings for typing animations
var techlist = [
	"Mining – 43000 BC",
	"Pottery – 18000 BC",
	"Masonry – 10000 BC",
	"Archery – 10000 BC",
	"Animal Husbandry – 10000 BC",
	"Agriculture – 10000 BC",
	"Trapping – 5500 BC",
	"Sailing – 5500 BC",
	"The Wheel – 4500 BC",
	"Horseback Riding – 3500 BC",
	"Bronze Working – 3300 BC",
	"Writing – 3200 BC",
	"Calendar – 2500 BC",
	"Mathematics – 2000 BC",
	"Iron Working – 1200 BC",
	"Engineering – 1300 BC",
	"Optics – 750 BC",
	"Metal Casting – 700 BC",
	"Theology – 700 BC",
	"Currency – 600 BC",
	"Drama – 600 BC",
	"Philosophy – 600 BC",
	"Guilds – 300 BC",
	"Civic Service – 210 BC",
	"Construction – 200 BC",
	"Steel – 100 BC",
	"Physics – 692",
	"Machinery – 725",
	"Gunpowder – 800",
	"Education – 860",
	"Compass – 1100",
	"Chivalry – 1170",
	"Economics – 1350",
	"Banking – 1407",
	"Printing Press – 1440",
	"Architecture – 1450",
	"Navigation – 1480",
	"Metallurgy – 1556",
	"Astronomy – 1609",
	"Acoustics – 1637",
	"Scientific Theory – 1687",
	"Steam Power – 1712",
	"Industrialization – 1760",
	"Military Science – 1760",
	"Chemistry – 1789",
	"Archaeology – 1800",
	"Railroad – 1811",
	"Electricity – 1821",
	"Replaceable Parts – 1803",
	"Fertilizer – 1842",
	"Rifling – 1850",
	"Plastic – 1856",
	"Biology – 1859",
	"Refrigeration – 1860",
	"Ecology – 1866",
	"Dynamite – 1867",
	"Combustion – 1886",
	"Radio – 1896",
	"Flight – 1903",
	"Combined Arms – 1914",
	"Ballistics – 1917",
	"Rocketry – 1926",
	"Atomic Theory – 1927",
	"Electronics – 1929",
	"Penicilin – 1928",
	"Radar – 1934",
	"Computers – 1946",
	"Nuclear Fission – 1945",
	"Stealth – 1958",
	"Satellites – 1957",
	"Advanced Ballistics – 1957",
	"Telecom – 1958",
	"Lasers – 1960",
	"Robotics – 1961",
	"Mobile Tactics – 1966",
	"Particle physics – 1974",
	"Nanotechnology – 1981",
	"Globalization – 1983",
	"Nuclear Fusion – 1991",
	"The Internet – 1990"
	
	
];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


var typed = new Typed('.typewords', {
  strings: techlist,
  shuffle: true,
  typeSpeed: 90,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
  backDelay: 1000,
  cursorChar: '|',
  autoInsertCss: true


});





