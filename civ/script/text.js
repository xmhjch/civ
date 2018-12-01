



// all the detailed information for techs
$(this).attr('id')


$(document).on("click", ".tech", function(){
	if(!$(this).attr('class').split(' ').includes('light')){
		return false;
	}
	var techid = $(this).attr('id');
	var title = "";
	var time = "";
	var quote = "";
	var img = "";
	var detail = "";

	switch(techid){
		case "MINING":
			img = '<img class="techimgD" src="res/img/tech/TECH_MINING.png">';
			title = '<div class="titleD">'+"MINING" + '</div>';
			time = '<div class="timeD">' + "43000 BC" + '</div>';
			quote = '<div class="quoteD">' + '"The meek shall inherit the Earth, but not its mineral rights."' + '<br>' + '- J. Paul Getty' + '</div>';
			detail = '<div class="detailD">' + "Mining is the process of extracting various useful substances from beneath the earth's surface. The earliest mined elements include copper, iron, diamonds, gold, silver, salt and coal. Since one can't eat any of that stuff (except for salt, of course, but you see where we're heading here), miners must be part of a community that grows enough excess food to support them and their families." + '<br><br>' +
					"The oldest mine yet discovered was found in Swaziland, Africa. It was dug some 40,000 years ago to mine ochre, a mineral used in burial ceremonies and for body art. Flint, a brittle and easily-sharpened mineral used by early man for scrapers, knives and arrowheads may have been the first item mined on a large scale in Europe. Flint mine shafts some 100 feet deep and dating back to the Neolithic Period (8000 - 2000 BC) have been discovered in France and England."
					+ '</div>';
			break;


		case "POTTERY":
			img = '<img class="techimgD" src="res/img/tech/TECH_POTTERY.png">';
			title = '<div class="titleD">'+
					"POTTERY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"18000 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Shall the clay say to him that fashioneth it, What makest thou?"' 
					+ '<br>' + 
					'- The Bible, Isaiah, 45:9'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Pottery is one of the oldest and most useful of all of the arts. In pottery, objects are built out of clay and then placed in an oven and subjected to extremely high temperatures. The resulting product is extremely brittle but is also airtight and virtually impervious to corrosion, oxidation, infestation, and the other destructive forces that would attack items made of metal, wood or cloth. The earliest pottery objects include jugs and containers to hold liquids or grains, as well as cooking pots, serving bowls, plates, and cups."
					 + '<br><br>' +
					"The first kind of pottery discovered was earthenware, dating back some 9,000 years. This pottery is somewhat porous and is usually covered with a more watertight material (called 'slip'), or it can be glazed. Earthenware pottery is extremely durable and remains in wide use today. Stoneware is pottery that has been baked at extremely high temperatures until the clay is 'vitrified' - glasslike and nonporous. "
					+ '</div>';
			break;
		case "MASONRY":
			img = '<img class="techimgD" src="res/img/tech/TECH_MASONRY.png">';
			title = '<div class="titleD">'+
					"MASONRY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"10000 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"How happy are those whose walls already rise!"' 
					+ '<br>' + 
					'- Virgil'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Masonry is the construction of structures from individual blocks bound together by some kind of mortar. The blocks may be made of stone, concrete, cinder, or they may be clay bricks. The mortar is some kind of workable paste that dries into an extremely durable material. It is usually composed of a mixture of sand, cement or lime, and water."
					 + '<br><br>' +
					"The ancient Egyptians mastered the art of masonry as early as the fourth millennium BC, constructing their temples, palaces and pyramids from the large veins of limestone, sandstone, granite and basalt found in the hills of the Nile River. The ancient Assyrians of the Fertile Crescent lacked such easy access to stone but possessed rich deposits of clay, which they sun-dried into bricks. Since sun-dried bricks can be vulnerable to moisture, they often covered their structures with more water-resistant kiln-baked or glazed tiles."
					+ '</div>';
			break;
		case "ARCHERY":
			img = '<img class="techimgD" src="res/img/tech/TECH_ARCHERY.png">';
			title = '<div class="titleD">'+
					"ARCHERY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"10000 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'The haft of the arrow had been feathered with one of the eagle'+"'"+'s own plumes. We often give our enemies the means of our own destruction."' 
					+ '<br>' + 
					'- Aesop'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Archery is the technology by which a person uses the spring power stored in a bent stick (or 'bow') to shoot a slender pointed projectile (an 'arrow') a great distance at rapid speed. Throughout history bows and arrows have been employed in the hunt and in war. Their earliest use is lost in the mists of time, but probably dates from the Paleolithic era (which ended some 14,000 years ago) or even earlier (archaeologists have found stone points in Africa dating 60,000 years ago that may have been arrowheads). Virtually every early culture employed bows and arrows, excepting for the Aboriginal Australians, who appear never to have invented them."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		case "ANIMAL_HUSBANDRY":
			img = '<img class="techimgD" src="res/img/tech/TECH_ANIMAL_HUSBANDRY.png">';
			title = '<div class="titleD">'+
					"ANIMAL HUSBANDRY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"10000 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Thou shalt not muzzle the ox when he treadeth out the corn."' 
					+ '<br>' + 
					'- The Bible, Deuteronomy, 25:4'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Animal husbandry appears to have occurred at about the same time as the invention of agriculture. The dog appears to be the earliest domesticated animal, probably bred to assist in hunting and killing game. Evidence suggests that they were first tamed and bred in China - in fact, geneticists believe that about 95% of the dogs living today are descended from just a few common Chinese animals. Goats and sheep were domesticated in the Middle East perhaps by about 10,000 BC."
					 + '<br><br>' +
					"To be successfully domesticated, an animal must fit certain criteria: it should be able to consume food that is less attractive to humans, say, grass or vermin or leftover table scraps. It should mature rapidly, so that it becomes useful quickly and so that it can be genetically altered through repeated generations of breeding. It should have a pleasant disposition. It shouldn't panic easily, or if it does, it should stay together with others of its kind, making it possible for humans or dogs to herd them in a group. Finally, it's extremely useful if the animal can be trained to think of a human as its pack leader."
					+ '</div>';
			break;
		case "AGRICULTURE":
			img = '<img class="techimgD" src="res/img/tech/TECH_AGRICULTURE.png">';
			title = '<div class="titleD">'+
					"AGRICULTURE" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"10000 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Where tillage begins, other arts follow. The farmers therefore are the founders of human civilization."' 
					+ '<br>' + 
					'- Daniel Webster'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Agriculture is the production of plants and animals, most notably for food, but also for clothing, shelter, medicine, recreation, and other diverse uses. Crop cultivation probably developed independently in numerous places. The earliest evidence of agriculture thus far discovered dates back to the end of the last ice age, approximately 11,000 years ago. Interestingly, it appears that agriculture was not invented by starving hunter-gatherers desperately seeking new sources of sustenance; instead, evidence suggests that the earliest agriculturalists were successful and wealthy hunter-gatherers who probably had plenty of food already on hand. This makes some sense: people with a surplus of food can afford to experiment on new technologies, while those who are hungry are going to expend all of their energy on tried and true methods of gaining sustenance."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		case "TRAPPING":
			img = '<img class="techimgD" src="res/img/tech/TECH_TRAPPING.png">';
			title = '<div class="titleD">'+
					"TRAPPING" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"5500 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Even brute beasts and wandering birds do not fall into the same traps or nets twice."' 
					+ '<br>' + 
					'- Saint Jerome'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Humans have been trapping animals for millennia. It's a form of hunting that is nearly as old as man himself. Throughout history hunters have used a huge variety of traps to ensnare their prey - employing everything from covered pits to hidden nets to spring-jawed metal contraptions. In 17th-18th century North America, French-Canadian trappers would spend years in the wilderness trapping huge quantities of fur-bearing animals before bringing them to an eastern settlement for sale, with many of the valuable pelts ending up as hats and other garments adorning wealthy Europeans. Russian hunters did much the same in Siberia and other remote Eurasian territories."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		case "SAILING":
			img = '<img class="techimgD" src="res/img/tech/TECH_SAILING.png">';
			title = '<div class="titleD">'+
					"SAILING" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"5500 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"He who commands the sea has command of everything."' 
					+ '<br>' + 
					'- Themistocles'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Sailing is the art of harnessing the power of the wind to move a boat over the water. To be successful, sailing required the mastery of a number of diverse skills. First, the culture must be able to construct a seaworthy craft. Second, they must be able to construct some sort of sturdy sheets (sails) which can catch the wind and transmit its energy to the hull. Third they must be able to build the various ropes and cleats and pulleys used to control the ship's sails, and finally they must be able to successfully navigate the vessel from point to point without getting lost or capsizing or suffering some other misfortune."
					 + '<br><br>' +
					"The earliest recorded evidence of watercraft can be found in illustrations in Egypt which date from around 4,000 BC. As a riparian (river-based) civilization, the Egyptians were excellent sailors. Many of their vessels contained both oars and sails, the former being used when the winds weren't strong enough or weren't coming from a favorable direction."
					+ '</div>';
			break;
		case "THE_WHEEL":
			img = '<img class="techimgD" src="res/img/tech/TECH_THE_WHEEL.png">';
			title = '<div class="titleD">'+
					"THE WHEEL" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"4500 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Wisdom and virtue are like the two wheels of a cart."' 
					+ '<br>' + 
					'- Japanese Proverb'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"The wheel is a round object with a hole or an axle through its center. Taken alone it's of little use, but when part of a transportation system including roads and draft animals, it is of extraordinary value to human civilization. The earliest depiction of a vehicle with wheels is found in ancient Sumer, from approximately 3500 BC. The first wheels were of solid wood; spoked wheels first appear around 2000 BC in Asia Minor, where they were used on horse-drawn chariots. Later improvements included iron hubs which turned on greased axles, and the addition of springs or some other sort of shock absorber."
					 + '<br><br>' +
					"Contrary to popular myth, the wheel was known in the New World prior to the arrival of the Spanish. However North, Central and South America lacked draft animals, so pretty much everything was transported by people. Humans are not designed to pull for long distances: they are more efficient carrying weights on their shoulders - in backpacks, for example - so carts were not developed. Once horses and other draft animals arrived, the Native American people happily used wheeled vehicles just like everybody else."
					+ '</div>';
			break;
		
		case "HORSEBACK_RIDING":
			img = '<img class="techimgD" src="res/img/tech/TECH_HORSEBACK_RIDING.png">';
			title = '<div class="titleD">'+
					"HORSEBACK RIDING" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"3500 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"My kingdom for a horse!"' 
					+ '<br>' + 
					'- Shakespeare (Richard III)'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Horseback riding was developed in the second millennium BC (possibly earlier), probably by the nomadic people of Central Asia. The horse had been domesticated for some time by then, but the original animal was too small. It wasn't until a large enough animal had been bred that horseback riding became practical. One early group of nomads, the Scythians, were particularly accomplished riders; they might have invented the first saddle and stirrup (although they may have used the stirrup only for mounting and dismounting the horse). According to the Greek historians the Scythians were the first to 'geld' (castrate) unruly male horses, making them much more docile and controllable."
					 + '<br><br>' +
					"By about 1500 BC many people of the Fertile Crescent - the Hittites, the Assyrians and the Babylonians - were fighting from horseback, and at the same time horses were introduced into Egypt. By the time of Alexander the Great cavalry tactics were quite advanced, and Alexander's 'Companion Cavalry' were perhaps the most effective and powerful military unit in the Mediterranean world."
					+ '</div>';
			break;
		
		case "BRONZE_WORKING":
			img = '<img class="techimgD" src="res/img/tech/TECH_BRONZE_WORKING.png">';
			title = '<div class="titleD">'+
					"BRONZE WORKING" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"3300 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Here Hector entered, with a spear eleven cubits long in his hand; the bronze point gleamed in front of him, and was fastened to the shaft of the spear by a ring of gold."' 
					+ '<br>' + 
					'- Homer'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Bronze is a metal 'alloy' (mixture) of copper and tin. The resulting material is harder and tougher than either of the original metals and it is easier to melt and cast (e.g., pour into molds to make spear tips and other useful items). Copper was probably first used in Egypt before 5,000 BC. The first evidence of bronze appears some 1,300 years later in the form of a bronze rod found in a pyramid dating from 3700 BC. Bronze appeared in Asia much later, around 1,500 BC, and in the Americas later still, between 100-200 AD."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		
		case "WRITING":
			img = '<img class="techimgD" src="res/img/tech/TECH_WRITING.png">';
			title = '<div class="titleD">'+
					"WRITING" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"3200 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"He who destroys a good book kills reason itself."' 
					+ '<br>' + 
					'- John Milton'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Writing is the art of recording information on material (paper, stone, clay, animal skins) so that others who look at the material can discern its meaning. Invented sometime around the fourth millennium BC, the earliest form of writing was 'pictography', in which the writer draws little pictures representing the subject matter. This may work adequately for very simple subjects, but other methods become necessary when more esoteric topics are discussed. (Drawing a picture of a sheep may be easy, but how about a picture of a thousand sheep, or a picture of the sound a sheep makes when it falls off of a pyramid? Not so easy.)"
					 + '<br><br>' +
					"In an alphabetic system, the language provides a set of symbols (the alphabet) which represent the various sounds which may occur in a language. These symbols can be strung together to replicate any spoken word in the language. Theoretically, anybody who can spell should be able to accurately 'sound out' any written word. This is the system used in the English language, and is generally believed (especially by English-speakers) to be the most useful and flexible writing system yet devised."
					+ '</div>';
			break;
		
		case "CALENDAR":
			img = '<img class="techimgD" src="res/img/tech/TECH_CALENDAR.png">';
			title = '<div class="titleD">'+
					"CALENDAR" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"2500 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"So teach us to number our days, so that we may apply our hearts unto wisdom."' 
					+ '<br>' + 
					'- The Bible, Psalms, 90:12'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"A calendar is a method of keeping track of the days. In many ancient cultures calendars served both religious and practical purposes: certain days of the year were dedicated to the worship of certain deities, and it was very bad to offend the gods by failing to give them their due. More prosaically, of course, calendars allowed people to track the weather in an area, telling them when to plant crops, when to harvest, and so forth."
					 + '<br><br>' +
					"The Egyptians appear to have developed the first practical calendar, and this was appropriated and further refined by the Romans into the Julian calendar. The Gregorian calendar that is almost universally used today was based on the Julian calendar. Proclaimed in 1582 by Pope Gregory XIII, the Gregorian calendar more accurately defines a solar year, correcting a slight inaccuracy in the Julian. In the Julian calendar a solar year was 365 days and 6 hours in length, while in the Gregorian calendar the year was 12 minutes shorter, or 365 days, 5 hours and 48 minutes. "
					+ '</div>';
			break;
		
		case "MATHEMATICS":
			img = '<img class="techimgD" src="res/img/tech/TECH_MATHEMATICS.png">';
			title = '<div class="titleD">'+
					"MATHEMATICS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"2000 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Mathematics is the gate and key to the sciences."' 
					+ '<br>' + 
					'- Roger Bacon'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Mathematics may be defined as the science of order, structure and relation that has evolved from counting, measuring and describing objects and their shapes. Mathematics is the most basic building block upon which all physical science is based. The Sumerians had a remarkably robust and complex mathematical system which was 'base-ten' (like the modern system) and 'base-60' as well. Remnants of the 'base-60' system survive today primarily in modern time-keeping - 60 seconds to the minute, 60 minutes to the hour."
					 + '<br><br>' +
					"The Greeks divided mathematics into two spheres, 'arithmetic', the study of quantity, and 'geometry', the study of magnitude, or area. Their primary contribution, however, lay in the application of theory and proof to mathematics. The Islamic world added much to mathematics in the 8th to 15th centuries AD. Perhaps most important was the invention of the decimal system for whole numbers, and the invention of the '0' (the number zero) some time around 600 AD in India. This replaced the extremely clunky and awkward 'Roman' numerical system, which now survives only in horror movie sequel enumeration."
					+ '</div>';
			break;
		
		case "IRON_WORKING":
			img = '<img class="techimgD" src="res/img/tech/TECH_IRON_WORKING.png">';
			title = '<div class="titleD">'+
					"IRON WORKING" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1200 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Do not wait to strike' + "'"+'til the iron is hot; but make it hot by striking."' 
					+ '<br>' + 
					'- William Butler Yeats'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Iron working is older than history itself. The first iron worked probably came from meteorites; when this useful material was not to be found, the ancient people probably looked elsewhere for similar materials. Iron 'smelting' - the extraction of the metal from iron ore - appears to have been discovered in the 12th century BC, in the Caucasus Mountains, Asia Minor, or possibly India. The production of wrought iron dates from approximately 1,000 BC."
					 + '<br><br>' +
					"The oldest examples of objects made from meteor iron are found in Ancient Egypt and Sumer and date back to 4,000 BC. Iron was extremely rare at that time, and historians speculate that it may have been more valued than gold."
					+ ' By the 12th century BC, iron largely replaced bronze as the metal preferred for tools and weapons in the Eastern Mediterranean. The iron of the time was not a better metal than the bronze it replaced, but it was far more abundant and could be found in many places where copper and tin weren'+"'"+'t available, making it a whole lot cheaper.'
					 + '</div>';
			break;
		
		case "ENGINEERING":
			img = '<img class="techimgD" src="res/img/tech/TECH_ENGINEERING.png">';
			title = '<div class="titleD">'+
					"ENGINEERING" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1300 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Instrumental or mechanical science is the noblest and, above all others, the most useful."' 
					+ '<br>' + 
					'- Leonardo da Vinci'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Engineering is the science (or art perhaps) of designing complex materials, structures, devices, and systems. In modern parlance it has a fairly wide reach - bioengineers design cells, software engineers create computer programs, and so forth - but historically the term was applied to the construction of physical stuff, like machines, bridges, railroads, factories, and so forth. (Originally the term 'engineer' referred specifically to those who created military engines.)"
					 + '<br><br>' +
					"Engineering came into its own in the 19th century, as countries around the world embarked on huge construction projects. Completed by the French in 1869, the Suez Canal connected the Mediterranean Sea and the Red Sea, making it possible to sail from Europe to India without the long and arduous journey around Africa. The United States completed the transcontinental railroad in the same year, and the Brooklyn Bridge was constructed in 1883."
					+ '</div>';
			break;
		
		case "OPTICS":
			img = '<img class="techimgD" src="res/img/tech/TECH_OPTICS.png">';
			title = '<div class="titleD">'+
					"OPTICS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"750 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"He made an instrument to know' + '<br>' + 'If the moon shine at full or no."' 
					+ '<br>' + 
					'- Samuel Butler'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Optics is the study of light and vision. The earliest and most important optical challenges were centered upon aiding the perception of the human eye - letting it see greater distances, or allowing it to look at very small objects, or in darkness. The first lenses were developed by the ancient Egyptians and the Mesopotamians. The oldest lenses, made from polished crystal, date back to 700 BC. The Greeks and Romans created crude lenses by filling glass spheres with water. In 'Optics', Euclid described the mathematical rules of perception and examined refraction. In the eighth century AD Islamic scholars studied optics in depth, writing learned treatises on refraction and the construction of lenses and mirrors."
					 + '<br><br>' +
					"The first wearable eyeglasses were invented in Italy in the 12th century, and the first primitive telescopes in the 15th, as was the first microscope. Though not very good by today's standards, these instruments greatly expanded man's ability to perceive the world around him and to navigate the world's uncharted oceans."
					+ '</div>';
			break;
		
		case "METAL_CASTING":
			img = '<img class="techimgD" src="res/img/tech/TECH_METAL_CASTING.png">';
			title = '<div class="titleD">'+
					"METAL CASTING" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"700 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"When pieces of bronze or gold or iron break, the metal-smith welds them together again in the fire, and the bond is established."' 
					+ '<br>' + 
					'- Sri Guru Granth Sahib'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Metal casting is the process by which a craftsman can make one or more metal objects by pouring molten metal into a mold. One of the oldest methods of making a mold is the 'lost wax' procedure, which dates back at least to the third millennium BC. In this process, the craftsman creates a wax duplicate of the object around which is built the mold; the wax is then melted and flows out of the mold and is replaced by molten metal. Once the metal cools the mold is opened and the object is removed."
					 + '<br><br>' +
					"Historically, sand and clay have been popular materials from which to construct molds. In later times molds have been constructed out of plastics and latex-like substances."
					+ '</div>';
			break;
		
		case "THEOLOGY":
			img = '<img class="techimgD" src="res/img/tech/TECH_THEOLOGY.png">';
			title = '<div class="titleD">'+
					"THEOLOGY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"700 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Three things are necessary for the salvation of man: to know what he ought to believe; to know what he ought to desire; and to know what he ought to do."' 
					+ '<br>' + 
					'- St. Thomas Aquinas'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Theology is the study of religion. Theologians study religious traditions and beliefs. The practice goes at least as far back in history as the Classical Greeks, who had an extremely rich mythology and religious tradition to observe. In the first and second century AD, Jewish religious scholarship flourished. The Jerusalem Talmud, a collection of Rabbinic notes about Jewish Oral tradition, was published around 200 AD and added to and expanded upon over the next two centuries."
					 + '<br><br>' +
					"Theology is important. It has had an incredibly powerful effect upon world history. Countless millions have died over religious disputes, and they continue to do so today. If it is ever to end, theology will be of critical importance in solving the current religious war between radical Muslims and the Western World."
					+ '</div>';
			break;
		case "CURRENCY":
			img = '<img class="techimgD" src="res/img/tech/TECH_CURRENCY.png">';
			title = '<div class="titleD">'+
					"CURRENCY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"600 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Better is bread with a happy heart'+ '<br>' + 'Than wealth with vexation."' 

					+ '<br>' + 
					'- Amenemope'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Currency is a remarkable innovation by which pieces of paper or small discs represent a certain amount of wealth and can be traded to others in return for goods and services. The earliest currencies were metal coins; these were worth whatever was the current value of the metal out of which they were carved. Later on, the currency itself might have little or no intrinsic value - on a desert island, a dollar bill is nothing more than a small rectangular piece of paper - but the currency's issuer (usually a government) assigned it a value, and as long as the issuer remained solvent, the currency was as good as gold, so to speak."
					 + '<br><br>' +
					"In the 4th millennium BC, Ancient Egypt used gold bars of a set weight as currency; elsewhere in the Middle East copper ingots were similarly used. In many places in the world metal rings, bracelets and bangles (of gold, silver and jewels) served as both ornamentation and currency."
					+ '</div>';
			break;
		
		case "DRAMA":
			img = '<img class="techimgD" src="res/img/tech/TECH_DRAMA.png">';
			title = '<div class="titleD">'+
					"DRAMA AND POETRY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"600 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"What is drama but life with the dull bits cut out."' 
					+ '<br>' + 
					'- Alfred Hitchcock'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Drama and poetry are both forms of artistic expression, the former expressed through the use of visual performance, the latter through the written word. Drama is most commonly associated with theatrical performances - plays, musicals, and operas - although in modern times these traditional forms have been surpassed by television and movie productions. Poetry focuses on the use of written language to express both a literal meaning, and often a thought-provoking underlying message."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		
		case "PHILOSOPHY":
			img = '<img class="techimgD" src="res/img/tech/TECH_PHILOSOPHY.png">';
			title = '<div class="titleD">'+
					"PHILOSOPHY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"600 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"There is only one good, knowledge, and one evil, ignorance."' 
					+ '<br>' + 
					'- Socrates'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Philosophy is the study of reality and man's place in it. The word comes from the Greek/Latin 'philosophia', or love of wisdom. It is somewhat separate from religion, which seeks to define and understand some supernatural system - philosophy takes a step back and asks if that supernatural system even exists. Philosophy deals with logic, morality, observation, realism, happiness, life, death, and all of the other big questions."
					 + '<br><br>' +
					"The Greeks are generally credited with the invention of philosophy in western civilization. In the 6th century BC Thales of Miletus was the first man known to give a purely natural (non-religious) explanation for the origin of the world. At its best, philosophy provides tools which one can use to observe and make judgments about the world around them, to think about things that haven't been considered before. Like any other tool it can be used for good or for evil, but philosophy at least seeks to provide the intellectual structure to help one decide which is which."
					+ '</div>';
			break;
		
		case "GUILDS":
			img = '<img class="techimgD" src="res/img/tech/TECH_GUILDS.png">';
			title = '<div class="titleD">'+
					"GUILDS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"300 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The merchants and the traders have come; their profits are pre-ordained..."' 
					+ '<br>' + 
					'- Sri Guru Granth Sahib'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"In pre-industrial cities, craftsmen tended to form associations - or trade guilds - based upon their profession; these guilds were intended to both protect craft secrets as well as promote the influence and income of the craftsmen. Predecessors of the trade guilds were found as early as the 3rd Century BC in Rome and Han China. By 300 AD, the practice of craftsmen banding together had spread into Gupta India and Ptolemaic Egypt. In the Middle Ages, guild organizations spread rapidly from Italy throughout Europe; 12th Century records in Paris and London each list over 100 guilds chartered by the cities. In some cases, so powerful were some guilds that they became the governing body of cities, indicated by the guildhalls found in Germany, Switzerland and Holland."
					 + '<br><br>' +
					"Over time, the guilds took on the task of safeguarding quality and of instruction in the craft, with a life-long progression from apprentice to grandmaster. Although largely supplanted by unions in the Industrial Age, there are still examples of guilds in existence, notably in the realms of film, literature and other artistic professions."
					+ '</div>';
			break;
		
		case "CIVIL_SERVICE":
			img = '<img class="techimgD" src="res/img/tech/TECH_CIVIL_SERVICE.png">';
			title = '<div class="titleD">'+
					"CIVIL SERVICE" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"210 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The only thing that saves us from the bureaucracy is its inefficiency."' 
					+ '<br>' + 
					'- Eugene McCarthy'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"The term 'civil service' is generally used to describe the parts of a government in which individuals are employed on the basis of merit rather than because of political patronage or being born into a certain class or because the person is related to the current ruler. In the United States federal government, for instance, the highest posts in the bureaucracy are appointed by the president. They are 'political appointments' and will likely change with each new administration. Ranks below the highest points are filled with permanent 'civil servants', who generally hold their positions from administration to administration, no matter which party wins."
					 + '<br><br>' +
					"One of the earliest examples of a civil service can be found in the Qin Dynasty of China (ca. 210 BC), under which employment in the bureaucracy was merit-based. Over time this system gradually was corrupted and employment in the bureaucracy once again became based upon class rather than merit, and the cycle begins all over again."
					+ '</div>';
			break;
		case "CONSTRUCTION":
			img = '<img class="techimgD" src="res/img/tech/TECH_CONSTRUCTION.png">';
			title = '<div class="titleD">'+
					"CONSTRUCTION" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"200 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Three things are to be looked to in a building: that it stand on the right spot; that it be securely founded; that it be successfully executed."' 
					+ '<br>' + 
					'- Johann Wolfgang von Goethe'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Construction represents the advancement of the study of masonry, primarily by adding iron and other metals to the builder's toolbox. Although remarkably durable, stone and brick are also quite heavy and inflexible. It's impossible to construct very tall structures out of these materials - unless the structure in question is solid stone or brick and is pyramid-shaped - otherwise they will collapse under their own weight or in the face of a strong wind."
					 + '<br><br>' +
					"Metal structures, on the other hand, or masonry reinforced with metal - can be quite tall and beautiful, and structurally sound. Using metal one can create soaring bridges, deep tunnels, great skyscrapers and elevated roadways. Without construction none of the world's great cities could exist, nor could its most beautiful architecture."
					+ '</div>';
			break;

		case "STEEL":
			img = '<img class="techimgD" src="res/img/tech/TECH_STEEL.png">';
			title = '<div class="titleD">'+
					"STEEL" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"100 BC" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"John Henry said to his Captain,'+ '<br>' +  "A man ain't nothin' but a man,"+ '<br>' + "And before I'll let your steam drill beat me down,"+ '<br>' + "I'll die with the hammer in my hand."+'"'
					+ '<br>' + 
					"- Anonymous: The Ballad of John Henry, the Steel-Drivin' Man"
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Steel is an alloy (mixture) of iron and carbon. Depending upon the ratio of iron to carbon, the resulting metal may be far stronger, more flexible, and possess a greater ability to resist corrosion. Iron was first worked as early as 2000 BC, and from the very beginning small quantities of steel were also produced. Generally iron was produced in two forms: wrought iron and cast iron, the former being more flexible, the latter harder and more brittle, but far cheaper to make."
					 + '<br><br>' +
					"In 1751, the English inventor Benjamin Huntsman established a steelworks factory in Sheffield, England. Huntsman's factory employed the 'crucible process' to make steel, and this methodology quickly spread across Europe and the United States and eventually into Asia and the rest of the world. The next big advance came in the United States of America in 1855, when American inventor Henry Bessemer came up with the so-called 'Bessemer process' of making steel. With some refinements this allowed for a dramatic increase in steel production worldwide. "
					+ '</div>';
			break;
		case "PHYSICS":
			img = '<img class="techimgD" src="res/img/tech/TECH_PHYSICS.png">';
			title = '<div class="titleD">'+
					"PHYSICS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"692" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Measure what is measurable, and make measurable what is not so."' 
					+ '<br>' + 
					'- Galileo'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Physics is the study of matter and it is the basic physical science. Originally termed ’natural science‘, it is concerned with everything in the observable universe, from the smallest particle to the largest galaxy. Physics is concerned with gravity, light, heat, and magnetism. Over time, as human knowledge has expanded exponentially, physics has split into numerous sub-disciplines such as astronomy, chemistry, geology, biology and engineering, but all are basically concerned with measuring and explaining natural phenomena."
					 + '<br><br>' +
					"In 1687, Isaac Newton published his masterwork ’Philosophiae Naturalis Principia Mathematica‘, which revolutionized physics. In simple terms, Newton's first law, known as the law of inertia, states that an object at rest will remain at rest while an object in motion will remain in motion unless acted upon by an external force. His second law describes the changes that force can produce on the motions of a body as a formula, force equals mass times acceleration. His third law, known as the law of action and reaction, states that when two objects interact, they apply forces to one another that are equal in magnitude and opposite in direction, or more popularly, ’for every action, there is an equal and opposite reaction.‘"
					+ '</div>';
			break;
		case "MACHINERY":
			img = '<img class="techimgD" src="res/img/tech/TECH_MACHINERY.png">';
			title = '<div class="titleD">'+
					"MACHINERY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"725" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The press is the best instrument for enlightening the mind of man, and improving him as a rational, moral and social being."' 
					+ '<br>' + 
					'- Thomas Jefferson'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"A machine is a device with moving parts (this is true during the pre-Electronics Age, anyway) that uses energy to perform tasks. A printing press is a machine, as is a loom, a clock and a watermill. Mastery of machinery requires design and engineering skill, of course, but also the ability to manufacture machine parts to precise measurements. A steam engine will leak if it's constructed poorly - that is, if it doesn't explode. The early Machine Age was a hugely dangerous time to work around the devices - if the fumes didn't kill you then you stood a fair chance of getting scalded, sucked into the works or blown to pieces."
					 + '<br><br>' +
					"On the other hand, once a civilization began to master complex machinery, it gave them unrivaled wealth and power. England went early into the Industrial Revolution, and by so doing the small island nation dominated world trade for nearly three centuries."
					+ '</div>';
			break;
		case "GUNPOWDER":
			img = '<img class="techimgD" src="res/img/tech/TECH_GUNPOWDER.png">';
			title = '<div class="titleD">'+
					"GUNPOWDER" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"800" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The day when two army corps can annihilate each other in one second, all civilized nations, it is to be hoped, will recoil from war and discharge their troops."' 
					+ '<br>' + 
					'- Alfred Nobel'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Gunpowder, also known as 'black powder', was invented in China, possibly as far back as the 9th century AD, by alchemists looking for an elixir of immortality (which it isn't). A mixture of sulfur, charcoal, and potassium nitrate, gunpowder burns very rapidly when exposed to flame, producing a great quantity of gasses and solids which can be employed as a propellant in firearms and in fireworks. The Chinese used gunpowder in primitive bombs and rockets against the Mongol invaders, and once they conquered China, the Mongols used them against everybody else."
					 + '<br><br>' +
					"By the first half of the 12th century AD the Arabic world acquired knowledge of gunpowder. Some historical texts state that the Mamluks used the first cannon in history against the Mongols during the Battle of Ain Jalut in 1260 AD, but this is open to debate. The first 'hand cannon' appears in an Arabic manuscript from the 14th century."
					+ '</div>';
			break;
		case "EDUCATION":
			img = '<img class="techimgD" src="res/img/tech/TECH_EDUCATION.png">';
			title = '<div class="titleD">'+
					"EDUCATION" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"860" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Education is the best provision for old age."' 
					+ '<br>' + 
					'- Aristotle'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Education is the process by which people learn things. Obviously it has been around as long as man has. Throughout much of history, education has been an informal affair, parents teaching their children what they need to know to survive in between household chores and hunting expeditions and dodging tigers and so forth. As a tribe expanded and grew more prosperous, village elders and cripples might educate the children while the more healthy adults gathered food, built stuff or made war. Eventually a very wealthy tribe or village might have formal classes for the more important children, and once a civilization matured enough it might see the great value in education for everybody."
					 + '<br><br>' +
					"In ancient Egypt, the priestly class served as teachers for the children of nobility. In these Egyptian schools the children were taught reading, writing, religion, history, science, medicine, mathematics and other advanced topics. In competition with Egypt, Mesopotamia had a similar educational setup for its priests and scribes - who might be copyists, librarians, or teachers. "
					+ '</div>';
			break;
		case "COMPASS":
			img = '<img class="techimgD" src="res/img/tech/TECH_COMPASS.png">';
			title = '<div class="titleD">'+
					"COMPASS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1100" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"I find the great thing in this world is not so much where we stand, as in what direction we are moving..."' 
					+ '<br>' + 
					'- Oliver Wendell Holmes'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"A basic compass is a device which uses a lodestone or magnetized needle to point out the direction of 'magnetic' north. Although magnetic north is not identical with 'true' north, the two are close enough to make magnets extremely useful tools when navigating the world. The first compasses were invented in China and Europe (apparently independently) in the 12th century. Compasses allowed sailors to closely monitor and track their ship's 'bearing' (direction) when at sea, something that in the years before compasses was all but impossible in overcast or stormy days and nights. They were equally useful to landsmen traveling in trackless deserts or during snowstorms or deep beneath the canopies of ancient jungles."
					 + '<br><br>' +
					"Modern travelers still carry compasses, but these devices are now seen as somewhat quaint and old-fashioned, especially when compared to global positioning satellites, which can tell not only where you are, but can also provide you with directions to the nearest coffee shop, something that even the best and most accurate compass cannot do."
					+ '</div>';
			break;
		case "CHIVALRY":
			img = '<img class="techimgD" src="res/img/tech/TECH_CHIVALRY.png">';
			title = '<div class="titleD">'+
					"CHIVALRY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1170" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Whoso pulleth out this sword of this stone and anvil, is rightwise king born of all England."' 
					+ '<br>' + 
					'- Malory'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Chivalry describes the honorable behavior expected of 'knights' - the armed nobility of a culture. It is very roughly akin to 'bushido' (way of the warrior) code of conduct of Japanese samurai. The chivalric code was at its height in the 12th century, fueled by the Crusades, in which the knights believed that they were doing God's work by smiting the unbelievers in the Middle East. To earn God's favor one must act in a godly manner; unchivalrous behavior might very well result in failure, death, and damnation. The Muslim knights opposing the Christians had similar and in some ways even more 'civilized' codes."
					 + '<br><br>' +
					"Some form of chivalric code is crucial in a civilization where one privileged class has access to weapons that lower classes are denied. Otherwise the people with the weapons may lean too hard on the lower classes, resulting in oppression, escalating civil unrest and potentially devastating revolution."
					+ '</div>';
			break;
		case "ECONOMICS":
			img = '<img class="techimgD" src="res/img/tech/TECH_ECONOMICS.png">';
			title = '<div class="titleD">'+
					"ECONOMICS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1350" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Compound interest is the most powerful force in the universe."' 
					+ '<br>' + 
					'- Albert Einstein'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Economics is the study of money, or more precisely, the study of 'the production, distribution and consumption of goods and services.' While in older times goods might have been distributed via barter, for most of the last several thousand years money has been the medium of exchange."
					 + '<br><br>' +
					"Modern economics dates back to 1776, when Scottish philosopher Adam Smith published his seminal work, 'The Wealth of Nations'. In 'Wealth', Smith argues that the free market is the most efficient of all means of assigning values to and distributing goods and services. A totally free market, Smith contends, will naturally produce the right amount of goods at the right price, that any government interference or regulation distorts the market, making it less efficient and more wasteful. Further, Smith was a big believer in self-interest, because when a person pursues his own self-interest, he automatically is promoting the good of society in general. In other words, Smith believes that pure capitalism is the best economic form available to a civilization."
					+ '</div>';
			break;
		case "BANKING":
			img = '<img class="techimgD" src="res/img/tech/TECH_BANKING.png">';
			title = '<div class="titleD">'+
					"BANKING" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1407" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Happiness: a good bank account, a good cook and a good digestion."' 
					+ '<br>' + 
					'- Jean Jacques Rousseau'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"The first banks in history were probably religious temples, established around 3,000 BC. Actually, banks may predate money: the first deposits may very well have been in the form of grain. In 18th century BC Babylon, the great leader Hammurabi wrote laws regulating banks in his famous Code. The Greeks further advanced banking, and there are records of temples and other financial institutions making loans, accepting deposits, exchanging currency, and validating coins (to ensure that they're not forgeries). The Romans continued banking in the Greek model with some further improvements, but when the Roman Empire fell, so too did most of the banking institutions in Europe. Banks did not reappear in much of Europe until the Middle Ages, rediscovered by people looking for ways to fund the Crusades."
					 + '<br><br>' +
					"Today, banks generally perform many of the same functions that they did in ancient Greece. They take in deposits of money, which they give back with interest when the depositor wants it. They loan out some of the money to borrowers, who pay them back (again with interest). They also exchange currency, issue checks, and so on."
					+ '</div>';
			break;
		case "PRINTING_PRESS":
			img = '<img class="techimgD" src="res/img/tech/TECH_PRINTING_PRESS.png">';
			title = '<div class="titleD">'+
					"PRINTING PRESS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1440" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"It is a newspaper'+ "'" +'s duty to print the news and raise hell."' 
					+ '<br>' + 
					'- The Chicago Times'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"While movable type was invented in China, as far as can be determined, the first mechanized printing press was invented in the mid-fifteenth century by German printer Johannes Gutenberg. The earliest printing presses were wooden machines, very similar in design to the wine and olive oil presses which had been used around the Mediterranean for centuries."
					 + '<br><br>' +
					"In the original presses, the type was laid out in reverse on a wooden 'platen' which held it tightly in position. Ink was applied to the type on the platen, then the paper was placed atop the platen in the press. The craftsmen turned the screw to put pressure on the paper and bring it into contact with the inked type. The printer then removed the paper and reinked the type, and the process began once again. Gutenberg's press could turn out some 250 sheets per hour (printed on one side). His design remained unchanged for some three hundred years, until it was supplanted by metal machines. By the nineteenth century, presses were powered by steam, and capable of producing some 7500 sheets per hour."
					+ '</div>';
			break;
		case "ARCHITECTURE":
			img = '<img class="techimgD" src="res/img/tech/TECH_ARCHITECTURE.png">';
			title = '<div class="titleD">'+
					"ARCHITECTURE" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1450" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Architecture begins where engineering ends."' 
					+ '<br>' + 
					'- Walter Gropius'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Architecture can be considered both an art and a science. Encompassing everything from the initial planning and design of a structure, to the actual construction process, architecture has been a crucial element of the building process since ancient times. One of the earliest known discussions of architecture and its principles, 'De Architectura', was written by the Roman architect Vitruvius in the first century BC. A ten volume set comprising all of the most intricate details of Roman construction methods, Vitruvius's work is widely recognized today as a crucial development in the evolution of the architectural design process."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		case "NAVIGATION":
			img = '<img class="techimgD" src="res/img/tech/TECH_NAVIGATION.png">';
			title = '<div class="titleD">'+
					"NAVIGATION" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1480" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The winds and the waves are always on the side of the ablest navigators."' 
					+ '<br>' + 
					'- Edward Gibbon'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Navigation is the science of finding one's way across the ocean. Early vessels rarely left sight of the coastline, which made navigation fairly simple but limited the places one could go, and also made the ships vulnerable to being driven ashore or onto dangerous rocks by contrary winds. There are few things more terrifying to a sailing vessel's captain (pre-steam engine) than being on a 'lee shore' - that is, being blown directly towards a nearby shore by strong wind."
					 + '<br><br>' +
					"Eventually, of course, the inventions of radio, radar, and satellites made the entire process much easier and far safer. But even today captains routinely drive their ships aground or crash them into bridge abutments - and these are ships with engines. Imagine the skill needed to keep a sailing vessel on the correct course."
					+ '</div>';
			break;
		case "METALLURGY":
			img = '<img class="techimgD" src="res/img/tech/TECH_METALLURGY.png">';
			title = '<div class="titleD">'+
					"METALLURGY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1556" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"There never was a good knife made of bad steel."' 
					+ '<br>' + 
					'- Benjamin Franklin'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Metallurgy is the science of metals and metallic alloys. In Civilization V the 'metallurgy' technology covers the advancements in this field since the 19th century AD. In the 19th and 20th centuries, great strides have been made in all facets of metallurgy, from extraction, to the creation of new alloys, to the production of cheap, high-quality metals."
					 + '<br><br>' +
					"Metal remains at the heart of modern civilization. Much of the world is built of steel, and what isn't is made of aluminum or titanium. Our communications networks are made of metal, and so are our vehicles, weapons, satellites and spacecraft. Without modern metallurgy 90% of the Earth's population would starve within a year."
					+ '</div>';
			break;
		case "ASTRONOMY":
			img = '<img class="techimgD" src="res/img/tech/TECH_ASTRONOMY.png">';
			title = '<div class="titleD">'+
					"ASTRONOMY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1609" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Joyfully to the breeze royal Odysseus spread his sail, and with his rudder skillfully he steered."' 
					+ '<br>' + 
					'- Homer'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Astronomy is the study of objects in space - from space dust to asteroids to moons, planets, stars, and galaxies - as well as other more esoteric objects like black holes and wormholes. Astronomy is the oldest of the natural sciences, with its roots in the religious and astrological practices of pre-history."
					 + '<br><br>' +
					"Much of early astronomy is related to religion. Stars and other celestial objects were associated with gods, and it was believed that they had direct control over man and his physical universe. During the Renaissance astronomy shed much of its religious, astronomical trappings, becoming a pure science in its own right. In 1543 Nicolaus Copernicus published 'De Revolutionibus Orbium Coelestium', which postulated that the sun was at the center of the universe, not the earth, and that the planets orbited the sun, and the moon orbited the earth. "
					+ '</div>';
			break;
		case "ACOUSTICS":
			img = '<img class="techimgD" src="res/img/tech/TECH_ACOUSTICS.png">';
			title = '<div class="titleD">'+
					"ACOUSTICS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1637" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Their rising all at once was as the sound of thunder heard remote."' 
					+ '<br>' + 
					'- Milton'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Acoustics is the study of sound. Sounds are waves of energy transmitted through gases, liquids and solids. The most important aspect of acoustics of course is that humans can 'hear' sounds, and much of the current research involves improving human reception of sounds, especially for the deaf. Acoustics is used in other applications as well, including sonar. Sonar allows equipment to 'hear' undersea vessels, animals and geological formations."
					 + '<br><br>' +
					"Since acoustics require a medium in which the waves of energy can be transmitted, sound does not travel in the vacuum outside of Earth's atmosphere. It is a creepy but true statement that, 'in space, no one can hear you scream.'"
					+ '</div>';
			break;
		case "SCIENTIFIC_THEORY":
			img = '<img class="techimgD" src="res/img/tech/TECH_SCIENTIFIC_THEORY.png">';
			title = '<div class="titleD">'+
					"SCIENTIFIC THEORY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1687" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Every great advance in science has issued from a new audacity of imagination."' 
					+ '<br>' + 
					'- John Dewey'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Scientific theory is a way to view the world, in which the viewer uses the 'scientific method' to learn about the universe. Through careful observation and experiments a scientist creates a theory to explain some phenomenon. If other scientists can through experimentation confirm the scientist's theory, it is then accepted as 'empirical' (experimental) law (at least until some new observation or experimentation successfully challenges it). If a scientist's experiments cannot be duplicated by others, then his or her theories must be regarded with deep skepticism. "
					 + '<br><br>' +
					"Although prevalent in most advanced countries in the world today, scientific theory is not the only way that people look at the world. Some people look to divine revelation - as written down in a holy book, say - to explain the universe. If observation or experimentation conflicts with the revelation, then the observation or experimentation must have been flawed or corrupted. These two different methods of seeing the world have been in tension for centuries, and will probably continue to be so for years to come."
					+ '</div>';
			break;
		case "STEAM_POWER":
			img = '<img class="techimgD" src="res/img/tech/TECH_STEAM_POWER.png">';
			title = '<div class="titleD">'+
					"STEAM POWER" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1712" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The nations of the West hope that by means of steam communication all the world will become as one family."' 
					+ '<br>' + 
					'- Townsend Harris'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"When heated, water produces steam. Steam expands under pressure, and in a steam engine part of the heat energy is captured and used to raise and lower a piston or turn a rotor. The principles behind steam power were known by the ancient Greeks, but no one had figured out how to put it to practical use until the late 17th century, when Englishman Thomas Savery created a steam-powered pump designed to raise water from mines. In 1765 James Watt greatly improved the steam engine to the point that it could be used in a wide variety of applications. By 1802 steam engines were being installed in boats, and by 1825, steam railroads were in operation."
					 + '<br><br>' +
					"Steam power revolutionized industry and transportation across the world. Within a century the globe was crisscrossed by rail lines and steamship routes. Massive steam-powered factories were turning out tens of millions of tons of commercial goods. Eventually steam engines would be replaced by internal combustion engines, which were far more efficient and emitted less pollution. But before petroleum, steam was king, and the modern world would never have existed without it."
					+ '</div>';
			break;
		case "INDUSTRIALIZATION":
			img = '<img class="techimgD" src="res/img/tech/TECH_INDUSTRIALIZATION.png">';
			title = '<div class="titleD">'+
					"INDUSTRIALIZATION" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1760" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Industrialization based on machinery, already referred to as a characteristic of our age, is but one aspect of the revolution that is being wrought by technology."' 
					+ '<br>' + 
					'- Emily Greene Balch'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Industrialization is viewed as the transition from an agrarian society into an industrial one, which is typically accompanied by widespread social and economic change throughout the community. The Industrial Revolution, beginning in Europe during the 18th century, brought about immense changes in the way people lived their daily lives. With increasingly complex machinery and tools available, many trades that were once left to talented craftsmen became obsolete with the advent of assembly lines operated by droves of unskilled factory laborers."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		case "MILITARY_SCIENCE":
			img = '<img class="techimgD" src="res/img/tech/TECH_MILITARY_SCIENCE.png">';
			title = '<div class="titleD">'+
					"MILITARY SCIENCE" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1760" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Wars may be fought with weapons, but they are won by men. It is the spirit of the men who follow and of the man who leads that gains the victory."' 
					+ '<br>' + 
					'- George S. Patton'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Military Science is the science of using military power to achieve one's political goals. It has many branches and areas of expertise, and is generally taught in a military academy. For instance, how far can an army march in a day and how many calories does each soldier need to remain in top fighting condition? Or, how does one fight against an insurgency in our own country? Suppose we're an occupying army in another country; how does that change the approach to an insurgency? Or what's the expected survival rate from a nuclear war if we launch first?"
					 + '<br><br>' +
					"Sun Tzu's 'The Art of War' is a classic book of military science. Although first published in the 6th century BC, it is still widely studied today (and remains a hugely entertaining and informative read for any amateur historian). Machiavelli's 'The Prince', published posthumously in 1532, examines in detail the interaction between war and politics. In 1832, Prussian general Carl von Clausewitz published 'On War', which also studies the effects of politics and economics on war."
					+ '</div>';
			break;
		case "CHEMISTRY":
			img = '<img class="techimgD" src="res/img/tech/TECH_CHEMISTRY.png">';
			title = '<div class="titleD">'+
					"CHEMISTRY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1789" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Wherever we look, the work of the chemist has raised the level of our civilization and has increased the productive capacity of the nation."' 
					+ '<br>' + 
					'- Calvin Coolidge'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"The offspring of alchemy and mathematics, Chemistry is the science of matter, its structure, behavior, composition, and how it behaves during chemical reactions. Physicists drop balls off of towers and time how long it takes them to fall; chemists study the balls themselves and try to figure out why some shatter and some bounce."
					 + '<br><br>' +
					"While scientists, doctors and philosophers have been interested in chemistry throughout history, it achieved the dignified status of science in 1789, when Antoine Lavoisier published a paper describing the law of conservation of mass. In 'Elements of Chemistry', Lavoisier discovered the composition of air and water, coining the term 'oxygen'. He also debunked the phlogiston theory, which had been hanging around confusing scientists for over 100 years."
					+ '</div>';
			break;
		case "ARCHAEOLOGY":
			img = '<img class="techimgD" src="res/img/tech/TECH_ARCHAEOLOGY.png">';
			title = '<div class="titleD">'+
					"ARCHAEOLOGY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1800" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Those who cannot remember the past are condemned to repeat it."' 
					+ '<br>' + 
					'- George Santayana'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Archaeology is the study of the remnants of ancient people to learn about their culture, art, architecture, and history. Archaeologists study building ruins, burial mounds, trash heaps, ancient carvings hidden in caves, and long drowned ships on the bottom of the ocean."
					 + '<br><br>' +
					"Although people have no doubt been interested in the lives of those who came before them for as long as there have been people, archaeology as a science began in 15th century Renaissance Europe, when people began to study and emulate the art and architecture of Ancient Greece and Rome and the wealthy nobility of Italy - popes, merchants and heads of state - began to collect antiquities. As these became more scarce, they sponsored excavations to find more loot."
					+ '</div>';
			break;
		case "RAILROAD":
			img = '<img class="techimgD" src="res/img/tech/TECH_RAILROAD.png">';
			title = '<div class="titleD">'+
					"RAILROAD" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1811" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The introduction of so powerful an agent as steam to a carriage on wheels will make a great change in the situation of man."' 
					+ '<br>' + 
					'- Thomas Jefferson'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"The earliest railroads were constructed in European mines in the 16th century. These consisted of wheeled carts that rode upon tracks. They were pulled by men or animals (usually horses or donkeys). The first aboveground steam-powered railroad was constructed in England in 1825, and once the technology proved successful, construction took off around the world. Construction of the first general-purpose American railroad, the Baltimore and Ohio, began in 1828. Within a century every continent in the world had a significant rail network."
					 + '<br><br>' +
					"The importance of railroads to world development cannot be overstated. Before the transcontinental railroad crossed the United States a journey from New York to San Francisco took months. The same journey took seven days by rail and cost just $65 dollars. Once the rail was completed, the European population of the American West and Midwest exploded. Towns located on rail lines grew rich, while those without railroad terminals withered and died."
					+ '</div>';
			break;
		case "ELECTRICITY":
			img = '<img class="techimgD" src="res/img/tech/TECH_ELECTRICITY.png">';
			title = '<div class="titleD">'+
					"ELECTRICITY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1821" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Is it a fact - or have I dreamt it - that, by means of electricity, the world of matter has become a great nerve, vibrating thousands of miles in a breathless point of time?"' 
					+ '<br>' + 
					'- Nathaniel Hawthorne'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"The first experience mankind had with electricity was in the form of shocks from electric fish, recorded by Egyptian authors as far back as 2750 BC. In the 15th century AD, the Arabs discovered that lightning was another form of electricity, and this was later confirmed by a British-American scientist named Ben Franklin in 1752. The first semi-reliable battery was made in 1800 by Alessandro Volta, and in 1821 Michael Faraday invented the electric motor."
					 + '<br><br>' +
					"Advances in electricity in the second half of the 19th century by geniuses like Nikola Tesla, Thomas Edison, George Westinghouse, Alexander Graham Bell and Lord Kelvin revolutionized life around the world. The telegraph, followed shortly by the telephone and then the radio, radically increased the speed and accuracy with which information could be transmitted. Driven by electricity, the 'Second Industrial Revolution' saw the greatest improvement in human life since the printing press."
					+ '</div>';
			break;
		case "REPLACEABLE_PARTS":
			img = '<img class="techimgD" src="res/img/tech/TECH_REPLACEABLE_PARTS.png">';
			title = '<div class="titleD">'+
					"REPLACEABLE PARTS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1803" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Nothing is particularly hard if you divide it into small jobs."' 
					+ '<br>' + 
					'- Henry Ford'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Replaceable parts is a kind of manufacturing process by which many duplicate copies of an item are fabricated, each of them identical component parts. This process allows for a tremendous increase in the speed and profitability of manufacturing, which in turn helped fuel the Industrial Revolution of the 19th Century."
					 + '<br><br>' +
					"One of the major impetuses for replaceable parts was the desire to issue firearms to soldiers. Originally, muskets were created by craftsmen, and each might differ slightly from the next - one craftsman might make his rifle slightly longer, while another might give his a larger or smaller trigger. For the individual this was not necessarily a problem - if his musket broke he could return it to the craftsman who first made it for repairs. Of course this was not feasible for an army with a thousand muskets."
					+ '</div>';
			break;
		case "FERTILIZER":
			img = '<img class="techimgD" src="res/img/tech/TECH_FERTILIZER.png">';
			title = '<div class="titleD">'+
					"FERTILIZER" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1842" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The nation that destroys its soil destroys itself."' 
					+ '<br>' + 
					'- Franklin Delano Roosevelt'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Fertilizer is a substance that feeds and speeds the growth of plants. Fertilizer has been around for as long as human civilization, dating back to the time when the first farmer realized that grass grew taller where the oxen had pooped. From that point on farmers have been collecting animal by-products and applying them to the soil, increasing the crop yield, especially from fields that have been farmed continuously for generations and thus have been stripped of most nutrients."
					 + '<br><br>' +
					"Fertilizers generally contain nitrogen, phosphorous, and potassium as their active ingredients. While historically most of the fertilizers have been organic and animal-based, many modern fertilizers are actually mined from beneath the earth's surface or chemically manufactured in vast factories."
					+ '</div>';
			break;
		case "RIFLING":
			img = '<img class="techimgD" src="res/img/tech/TECH_RIFLING.png">';
			title = '<div class="titleD">'+
					"RIFLING" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1850" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"It is well that war is so terrible, or we should grow too fond of it."' 
					+ '<br>' + 
					'- Robert E. Lee'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Rifling is the process of making spiral grooves in the barrel of a cannon or firearm which imparts a spin on the projectile. The spin stabilizes the projectile, greatly increasing its accuracy. Rifling was invented in Vienna in the 15th century. However, the early process was extremely expensive and time-consuming, and it did not see popular use for some three centuries. By the early eighteenth century rifles were used by sharpshooters in armies across Europe and the world."
					 + '<br><br>' +
					"By the end of the American Civil War the Minies were being replaced by breech-loading cartridge-firing rifles, which were far faster to load and fire than the muskets. These rifles, like the Springfield Model 1865 and its heirs, would remain the American infantryman's rifle right up to World War I, when the first automatic rifles were invented. During the modern era most infantrymen carry some version of an assault rifle like the American M16 or the Russian AK-47. These deadly weapons give today's soldiers firepower equal to dozens of Civil War veterans."
					+ '</div>';
			break;
		case "PLASTIC":
			img = '<img class="techimgD" src="res/img/tech/TECH_PLASTIC.png">';
			title = '<div class="titleD">'+
					"PLASTIC" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1856" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Ben, I want to say one word to you, just one word: plastics."' 
					+ '<br>' + 
					'- Buck Henry and Calder Willingham, The Graduate'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Plastic is a lightweight, transparent and tough material that does not conduct electricity well. Plastic comes in many different forms, some tougher, some more flexible, some with a greater or lesser tolerance to heat. Plastic can be molded, pressed or extruded into virtually any shape desired. It's found in every facet of modern life, used in everything from automobile bumpers to prosthetic limbs, from baby food jars to infantry weapons. It's one of the most crucial building-blocks of the 21st century."
					 + '<br><br>' +
					"The first human-made plastic was invented by Englishman Alexander Parkes in 1855. The product, Parkesine, was made from cellulose (plant cell material), and was used as a replacement for ivory, which was becoming ever more difficult to find as the whale population was diminishing world-wide. Although relatively cheap at the moment, most plastic requires a lot of petrochemicals to manufacture. As that fuel becomes more expensive, so too will plastic. It is possible that some new miracle material will eventually supplant the ubiquitous plastic sometime in the future, but for now plastic is irreplaceable."
					+ '</div>';
			break;
		case "BIOLOGY":
			img = '<img class="techimgD" src="res/img/tech/TECH_BIOLOGY.png">';
			title = '<div class="titleD">'+
					"BIOLOGY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1859" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"If the brain were so simple we could understand it, we would be so simple we couldn' +"'" + 't."' 
					+ '<br>' + 
					'- Lyall Watson'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Biology is the study of living organisms. It's a wide field, ranging from the study of the largest whale to the smallest bacterium. Much of pre-nineteenth century biology was concerned with discovering and categorizing all of the plants, insects and animals in existence on the Earth. As the science advanced and the equipment improved, scientists began to dig into the building blocks of biology - cells, and later, genes and DNA. Today, much is known about the biology of all living organisms on the planet. Biologists have become so successful at manipulating life that the science has moved into areas that only a few years ago would have been considered science fiction. Sheep have been cloned, and sooner or later perhaps so will be people. Nanobiology is a real field of study. Specific genes can be activated for selective breeding. If progress continues it's possible to foresee a time in the not too distant future when most diseases have been conquered, bionic body parts are common and human lifespan has increased by decades."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		case "REFRIGERATION":
			img = '<img class="techimgD" src="res/img/tech/TECH_REFRIGERATION.png">';
			title = '<div class="titleD">'+
					"REFRIGERATION" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1860" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"And homeless near a thousand homes I stood, and near a thousand tables pined and wanted food."' 
					+ '<br>' + 
					' William Wordsworth'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Refrigeration is the process of removing heat from an enclosed space or from a substance. The primary purpose for refrigeration has always been to preserve food, with air conditioning a strong second in developed nations in the latter decades of the 20th century."
					 + '<br><br>' +
					"Mechanical refrigeration relies on the cooling effect of the rapid expansion of gas, typically Freon or some other inert substance. The first known artificial refrigeration was demonstrated in 1748 in Scotland by William Cullen, but it would be over a century before an American, Alexander C. Twinning, would create the first practical commercial application of refrigeration in 1856. Several years later refrigerators were introduced in the meatpacking and brewing industries, and by 1914 their use was widespread. By the middle of the 20th century mechanical refrigeration trucks replaced the old ice-carrying vehicles. Home-use refrigerators were introduced in the 1920s, and by 1950 'ice boxes' were all but extinct."
					+ '</div>';
			break;
		case "ECOLOGY":
			img = '<img class="techimgD" src="res/img/tech/TECH_ECOLOGY.png">';
			title = '<div class="titleD">'+
					"ECOLOGY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1866" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Only within the moment of time represented by the present century has one species, man, acquired significant power to alter the nature of his world."' 
					+ '<br>' + 
					'- Rachel Carson'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Not a single technology in itself, Ecology is an interdisciplinary study of all the various forms of interactions and causations between organisms and their environment, or rather, the study of ecosystems. The basic tenant of the field is that everything in a given ecosystem - the rocks, soil, birds, bugs, trees, etc. - have an effect on and connection to all the other things in the ecosystem, either directly or through a series of chain relations. While all these things are connected, ecologists also believe in the concept of holism - that even with all these tiny interactions explained, they cannot account for every possible reaction and the entire system as a whole needs to be evaluated. Ecology studies how all these things are connected, and how changing one can effect, benefit or destroy another."
					 + '<br><br>' +
					"Ecology has grown recently to become concerned with the preservation of biodiversity, and the adverse affects that human development has had on the environments and organisms around them. Long term studies are in effect to record these effects, the current longest running one having started in 1856."
					+ '</div>';
			break;
		case "DYNAMITE":
			img = '<img class="techimgD" src="res/img/tech/TECH_DYNAMITE.png">';
			title = '<div class="titleD">'+
					"DYNAMITE" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1867" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"As soon as men decide that all means are permitted to fight an evil, then their good becomes indistinguishable from the evil that they set out to destroy."' 
					+ '<br>' + 
					'- Christopher Dawson'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Dynamite is an explosive material invented by Swedish chemist and engineer Alfred Nobel in 1867. Dynamite is created by soaking an absorbent material like diatomaceous earth (interestingly, the same material used in many pool filters) in nitroglycerin. Nitroglycerin is an extremely powerful but terrifyingly unstable explosive; dynamite is less powerful but a lot more stable."
					 + '<br><br>' +
					"Dynamite is primarily used in mining and construction. Historically, it has been used in military applications, but the explosive component nitroglycerin remains too unstable for the rather volatile conditions found in a battlefield, so generally militaries prefer a modified product called 'military dynamite' which contains no nitroglycerin but instead uses other chemicals including TNT to create a product which is 60% less powerful but much less apt to explode when it's not supposed to."
					+ '</div>';
			break;
		case "COMBUSTION":
			img = '<img class="techimgD" src="res/img/tech/TECH_COMBUSTION.png">';
			title = '<div class="titleD">'+
					"COMBUSTION" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1886" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Any man who can drive safely while kissing a pretty girl is simply not giving the kiss the attention it deserves."' 
					+ '<br>' + 
					'- Albert Einstein'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"'Combustion' means burning. It's a chemical reaction between substances, one of which is usually oxygen, which often results in the generation of light and heat energy. Here we're speaking specifically about the use of combustion inside of an engine (hence, 'internal combustion') to create energy to turn a crank or move a piston."
					 + '<br><br>' +
					"There are two different types of internal combustion engines: intermittent-combustion engines and steady flow engines. In an intermittent-combustion engine, a certain amount of fuel and oxygen is injected into the combustion chamber where it ignites and moves a piston or some other mechanical device, after which another discrete amount of fuel and oxygen is once again inserted, and the entire process repeats. Automobile engines are examples of intermittent-combustion engines. In a steady-flow engine, a steady stream of fuel and oxygen is injected into the engine, burning continuously. Jet engines are steady-flow."
					+ '</div>';
			break;
		case "RADIO":
			img = '<img class="techimgD" src="res/img/tech/TECH_RADIO.png">';
			title = '<div class="titleD">'+
					"RADIO" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1896" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The whole country was tied together by radio. We all experienced the same heroes and comedians and singers. They were giants."' 
					+ '<br>' + 
					'- Woody Allen'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Radio is the technology of transmitting information to a remote receiver by modifying a 'carrier wave"+"'"+"s' amplitude, frequency, or duration. In less technical terms, somewhere a transmitter translates sounds into waves which it broadcasts into the atmosphere. Distant radio receivers can pick up these waves and translate them back into sound."
					 + '<br><br>' +
					"A radio is a complicated and intricate machine. It required hundreds of years of research and development by scientists and physicists like Michael Faraday, James Maxwell, Heinrich Hertz, and Guglielmo Marconi. The first radio program was broadcast on Christmas Eve, 1906. The first newscast was made on August 31, 1920, in Detroit, Michigan. By the end of the '20s radios were becoming ubiquitous in the United States and Europe. Although diminished by the upstart technologies of TV and the Internet, radio remains a viable and important source of news and entertainment for people around the world. Like rock and roll, it's here to stay."
					+ '</div>';
			break;
		case "FLIGHT":
			img = '<img class="techimgD" src="res/img/tech/TECH_FLIGHT.png">';
			title = '<div class="titleD">'+
					"FLIGHT" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1903" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Aeronautics was neither an industry nor a science. It was a miracle."' 
					+ '<br>' + 
					'- Igor Sikorsky'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Throughout history, man has dreamed of conquering the skies. Leonardo da Vinci's visions of flight are well-known, of course, and there were many other lesser visionaries as well. The early theorists looked at the natural masters of the air, birds, and they proposed machines that emulated their wing shape and flapping motions (ornithopters). But the early designers lacked the materials, engines, and knowledge of aerodynamics to bring their visions to life."
					 + '<br><br>' +
					"In 1902 the Wright brothers constructed their own glider with an advanced wing shape. Unable to find an experienced manufacturer to construct a light gasoline-powered engine to their specifications, they designed and built their own. On December 17, 1903 the Wright flyer flew four times, at distances up to 852 feet. The years following the Wright brothers' breakthrough saw huge and rapid improvements in the technology of flying. By 1908 American Glenn Hammond Curtiss flew over 1 kilometer (approx. six tenths of a mile), and in 1909 Frenchman Louis Bleriot flew across the English Channel."
					+ '</div>';
			break;
		case "COMBINED_ARMS":
			img = '<img class="techimgD" src="res/img/tech/TECH_COMBINED_ARMS.png">';
			title = '<div class="titleD">'+
					"COMBINED ARMS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1914" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The root of the evil is not the construction of new, more dreadful weapons. It is the spirit of conquest."' 
					+ '<br>' + 
					'- Ludwig von Mises'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Combined arms is a military doctrine first adopted more than a thousand years ago, which involves the combination of different-but complimentary-unit types in an effort to improve the overall efficiency of the force as a whole. In ancient times, the combined arms tactic was utilized by many of the major powers, particularly the Greeks and Romans, who carefully coordinated light and heavy infantry, cavalry, and ranged weapons to create cohesive formations that played off each others' strengths and weaknesses. In the present day, the rise of aircraft-based weaponry has led to even more complex variations on the traditional concept of combined arms. Drone aircraft, satellite-guided missiles, and high-altitude bombers are just a few examples of the expanding toolset available to modern military commanders."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		case "BALLISTICS":
			img = '<img class="techimgD" src="res/img/tech/TECH_BALLISTICS.png">';
			title = '<div class="titleD">'+
					"BALLISTICS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1917" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Men, like bullets, go farthest when they are smoothest."' 
					+ '<br>' + 
					'- Jean Paul'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Ballistics is the study of motion involving projectiles - mainly bullets, missiles, and bombs. In most cases, the term ballistics arises in relation to the forensic study of weapons and ammunition, particularly involving crime, where it may be necessary to connect a weapon with a recovered bullet to prove guilt or innocence. The more general study of ballistics has, over the past century, led to vast improvements in the accuracy, power, and overall effectiveness of projectile weapons of varying types."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		case "ROCKETRY":
			img = '<img class="techimgD" src="res/img/tech/TECH_ROCKETRY.png">';
			title = '<div class="titleD">'+
					"ROCKETRY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1926" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"A good rule for rocket experimenters to follow is this: always assume that it will explode."' 
					+ '<br>' + 
					'- Astronautics Magazine, 1937'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"The earliest known rocket flight is a bit contested, although it is generally believed that it occurred sometime around 1230 A.D. in China, during a military operation. The first actual recorded flight did occur in China in 1264 as part of an internal-combustion firework. These early rockets used solid fuel, usually gunpowder, and did not fly very far, perhaps only 2000 feet."
					 + '<br><br>' +
					"The invention of modern rocketry can be attributed directly to Professor Robert Goddard when he postulated that fuel should be burned in a small, separate combustion chamber, the rocket should be built in separable stages, and that the exhaust speed could be increased by using a special hour-glass shaped nozzle called a De Laval nozzle. Up to this point rockets burned all their fuel in one large solid chamber and weren't capable of going exceptionally fast or travelling intercontinental distances."
					+ '</div>';
			break;
		case "ATOMIC_THEORY":
			img = '<img class="techimgD" src="res/img/tech/TECH_ATOMIC_THEORY.png">';
			title = '<div class="titleD">'+
					"ATOMIC THEORY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1927" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The unleashed power of the atom has changed everything save our modes of thinking, and we thus drift toward unparalleled catastrophes."' 
					+ '<br>' + 
					'- Albert Einstein'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Atomic theory of matter was first proposed in ancient Greece. The philosophers Leucippus and Democritus proposed that the physical world was composed of an infinite number of extremely small particles, or 'atoms', which existed in a void, or vacuum. Atoms combine in different quantities and formations to create everything in existence, from air to gold to human flesh to the world beneath our feet. "
					 + '<br><br>' +
					"In 1808 English chemist and physicist John Dalton published 'A New System of Chemical Philosophy', which put the atomic theory on a truly scientific basis. By 1869 Russian Dmitry Mendeleyev created a system to arrange the known elements according to their atomic weight in a 'periodic table', and over the next decades human knowledge of the properties of matter grew exponentially. This research would continue into the 20th century with great success, eventually resulting in various world-shaking practical applications like the x-ray machine and the atom bomb, to name two. "
					+ '</div>';
			break;
		case "ELECTRONICS":
			img = '<img class="techimgD" src="res/img/tech/TECH_ELECTRONICS.png">';
			title = '<div class="titleD">'+
					"ELECTRONICS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1929" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"There is a basic principle about consumer electronics: it gets more powerful all the time and it gets cheaper all the time."' 
					+ '<br>' + 
					'- Trip Hawkins'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Electronics covers the branch of technology which studies the controlled motion of electrons through various forms of media, including vacuums. This is not the same as Electrical Technology, which is concerned with the generation and distribution of power. Electronics wasn't recognized as its own field of study until 1950, when it was split off from radio technology."
					 + '<br><br>' +
					"Electronic circuits can be classified into two distinct groups, analog or digital. Analog circuits are generally simple combinations of basic circuits, utilizing a continuous range of voltage; most modern circuits are rarely ever entirely analog in nature anymore. Digital circuits form the basis of modern computers and programmable logic controllers, as they are the most common physical representation of Boolean algebra (0's and 1's anyone?)."
					+ '</div>';
			break;
		case "PENICILIN":
			img = '<img class="techimgD" src="res/img/tech/TECH_PENICILIN.png">';
			title = '<div class="titleD">'+
					"PENICILIN" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1928" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"In nothing do men more nearly approach the gods than in giving health to men."' 
					+ '<br>' + 
					'- Cicero'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Penicillin is a group of antibiotics derived from a certain fungus. Antibiotics fight and kill bacteria, tiny life-forms, some of which - plague, syphilis, and leprosy, to name but three - are quite detrimental to human health and well-being. It is believed that the use of a primitive form of penicillin dates back to medieval times, when moldy bread was employed to treat suppurating wounds. The scientific discovery of the antibiotic is attributed to Alexander Fleming in 1928, with the first official medical use some two years later by pathologist Cecil George Paine. As its use has grown, some bacteria have developed a tolerance for penicillin and a wide range of other antibiotics have been invented to deal with the new drug-resistant strains. Still, penicillin and its heirs remain important weapons in the physician's unending battle with the deadly menace of bacteria."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		case "RADAR":
			img = '<img class="techimgD" src="res/img/tech/TECH_RADAR.png">';
			title = '<div class="titleD">'+
					"RADAR" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1934" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Vision is the art of seeing things invisible."' 
					+ '<br>' + 
					'- Jonathan Swift'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Radar is an object detection system that uses electromagnetic waves to identify faraway objects like ships or airplanes. Coined in 1941, the term 'RADAR' is an acronym for 'Radio Detection And Ranging.'"
					 + '<br><br>' +
					"In 1904 Christian Hulsmeyer was able to detect the presence of a ship in dense fog. Later that year he made improvements which allowed the set to determine the object's distance. In August of 1917 inventor Nikola Tesla designed the first primitive radar units, allowing the user to 'determine the relative position or course of a moving object, such as a vessel at sea, the distance traversed by the same, or its speed.' As the Second World War approached, all of the industrialized world powers were working feverishly on radar. By war's end all advanced countries had made major strides in radar technology, and by mid-century the technology was spreading across the world for civilian uses, primarily in air traffic control. "
					+ '</div>';
			break;
		case "COMPUTERS":
			img = '<img class="techimgD" src="res/img/tech/TECH_COMPUTERS.png">';
			title = '<div class="titleD">'+
					"COMPUTERS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1946" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Computers are like Old Testament gods: lots of rules and no mercy."' 
					+ '<br>' + 
					'- Joseph Campbell'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"At its most basic, a computer is a machine which manipulates data or controls according to a set of given instructions. While the first 'modern' computer wasn't conceived of until the early 20th century, the earliest computers can be traced back to Al-Jazari's mechanical astronomical clocks in 1206 A.D. and Jacquard's programmable textile loom in 1801. While both of these machines were programmable, they didn't perform the other function of modern computers - storing data. The earliest computers used mechanical and analog parts to function and store their data, eventually switching to digital electronics in the 1940's. There's no exact point at which the modern day computer was decidedly invented; it was rather arrived at by a series of steps and advances, along which came such notable ones as Konrad Zuse's Z Machine and the U.S. Army's ENIAC."
					 + '<br><br>' +
					"Since the switch to electronics, computers have gotten smaller, faster, cheaper, less power hungry, and much more reliable and versatile. While first seen as a fad or only as a silly plaything for the wealthy, the computer has made an undeniable mark upon history and is here to stay."
					+ '</div>';
			break;
		case "NUCLEAR_FISSION":
			img = '<img class="techimgD" src="res/img/tech/TECH_NUCLEAR_FISSION.png">';
			title = '<div class="titleD">'+
					"NUCLEAR FISSION" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1945" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"I am become Death, the destroyer of worlds."' 
					+ '<br>' + 
					'- J. Robert Oppenheimer'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Nuclear fission is a nuclear reaction in which the nuclei of radioactive atoms break down (undergo fission), releasing neutrons which then crash into other atoms, causing them to break down and release even more neutrons. If there is enough radioactive material the fission may become self-sustaining, releasing a lot of energy at a controlled rate - say, in a nuclear reactor - or in a wildly uncontrolled rate - say, in a nuclear weapon."
					 + '<br><br>' +
					"Nuclear fission produces a lot of energy - many millions of times more than say an equal weight of gasoline - but in the process it produces a good deal of very hard to manage waste. Also, it can kill people: fairly slowly, if they're exposed to the radioactive material, or extremely rapidly if the chain reaction gets out of hand and the material explodes."
					+ '</div>';
			break;
		case "STEALTH":
			img = '<img class="techimgD" src="res/img/tech/TECH_STEALTH.png">';
			title = '<div class="titleD">'+
					"STEALTH" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1958" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Be extremely subtle, even to the point of formlessness. Be extremely mysterious, even to the point of soundlessness. Thereby you can be the director of the opponent' +"'"+'s fate."' 
					+ '<br>' + 
					'- Sun Tzu'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"The concept or practice of stealth is not a new one in the progress of human development, but modern stealth technology takes the idea of 'not being seen' to a whole new level. Stealth technology is really a combination of multiple military disciplines and tactics expanding beyond what the human eye can see, trying to both hide and detect objects by radar, acoustics, thermal readings, or other less readily visible methods."
					 + '<br><br>' +
					"Camouflage uniforms are one of the earliest and more simplistic methods by attempting to make an object blend into the background behind it, but many advances in technology have created the need for more dynamic and sophisticated methods of hiding and detecting hidden objects. Now thermal chemicals are injected into cloth, ships are fabricated from special radar-absorbing materials, and planes' infrared signatures are hidden with ingenious new exhaust systems. "
					+ '</div>';
			break;
		case "SATELLITES":
			img = '<img class="techimgD" src="res/img/tech/TECH_SATELLITES.png">';
			title = '<div class="titleD">'+
					"SATELLITES" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1957" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Now, somehow, in some new way, the sky seemed almost alien."' 
					+ '<br>' + 
					'- Lyndon B. Johnson'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"In the context of a technology, Satellites covers the study and development of artificial, orbital bodies - not naturally occurring ones like the Moon. Man-made satellites had been a major source of inspiration for science fiction writers through the early 1900's, with visionaries like Arthur C. Clarke laying out plans for a network of mass communications satellites long before such things were technologically feasible."
					 + '<br><br>' +
					"Satellites remained the stuff of fiction, however, until 1957, when the Soviet Union successfully launched its first satellite, Sputnik 1. Not only proving that it was in fact possible to put a manmade object into a sustained orbital path around the Earth, the launch also triggered the start of the Space Race between the Soviets and the United States. From this race between two rivals, thousands of super specialized satellites have been launched into orbit from over fifty different originating countries. With the obvious militaristic and spy applications aside, satellites are used for mass communication, GPS and navigation, weather research and observation and entertainment broadcasting to name a few. The largest satellite currently in orbit is the International Space Station."
					+ '</div>';
			break;
		case "ADVANCED_BALLISTICS":
			img = '<img class="techimgD" src="res/img/tech/TECH_ADVANCED_BALLISTICS.png">';
			title = '<div class="titleD">'+
					"ADVANCED BALLISTICS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1957" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Our scientific power has outrun our spiritual power. We have guided missiles and misguided men."' 
					+ '<br>' + 
					'- Martin Luther King, Jr.'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Ballistics is the science of shooting or throwing stuff great distances with great precision. Advanced ballistics is more of the same, with the distances increased to continent-spanning scale. Modern artillerists can shoot explosive rounds dozens of miles with great accuracy, and missiles can be fired at precise targets half-way around the planet. When embellishments like GPS and laser guidance are included, there is virtually no target anywhere in the world that can't be hit by some weapon somewhere. Whether this is a good thing is open to debate; it largely depends upon whose finger is on the firing button."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		case "TELECOM":
			img = '<img class="techimgD" src="res/img/tech/TECH_TELECOM.png">';
			title = '<div class="titleD">'+
					"TELECOM" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1958" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The more we elaborate our means of communication, the less we communicate."' 
					+ '<br>' + 
					'- J.B. Priestly'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Telecommunication allows for the transmission of data and information over long distances using various types of signaling devices. Early forms of primitive ranged communication, including the use of smoke and signal flags, eventually gave way to telegraphs, and later, the telephone. Scientific research and engineering, particularly in the last 30 years, has led to breakthroughs in our ability to communicate globally. Orbiting satellites now provide a means for the transmission of data even to the most remote areas on Earth. Television, internet, cellular telephones, and GPS are now fully integrated into the daily lives of millions across the world because of telecommunications research."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		case "LASERS":
			img = '<img class="techimgD" src="res/img/tech/TECH_LASERS.png">';
			title = '<div class="titleD">'+
					"LASERS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1960" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The night is far spent, the day is at hand: let us therefore cast off the works of darkness, and let us put on the armor of light."' 
					+ '<br>' + 
					'- The Holy Bible: Romans, 13:12 '
					 + '</div>';
			detail = '<div class="detailD">' + 
					"The term 'laser' was originally spelled 'LASER', as it is the acronym for 'Light Amplification by Stimulated Emission of Radiation', basically its own definition. The first scientific foundations for lasers were laid down by Albert Einstein in 1917 when he re-derived Planck's law of radiation, about the same time science fiction writers coincidentally began to describe a similar possible technology. The first functional laser wasn't demonstrated until 1960 when the Hughes Research Laboratories introduced laser technology capable of storing data via optical storage devices (like a DVD burner)."
					 + '<br><br>' +
					"Since this early laser research many different kinds of specialized lasers have been developed, ones which have been optimized for different functions like maximum firing range, output power, or utilizing different wavelength bands. While originally dubbed 'a solution looking for a problem', lasers have found their way into thousands of different uses, from consumer electronics and entertainment to law enforcement and military use. Just try not to look directly into the light."
					+ '</div>';
			break;
		case "ROBOTICS":
			img = '<img class="techimgD" src="res/img/tech/TECH_ROBOTICS.png">';
			title = '<div class="titleD">'+
					"ROBOTICS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1961" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"1. A robot may not injure a human being or, through inaction, allow a human being to come to harm. '+ '<br>' + '2. A robot must obey any orders given to it by human beings, except when such orders would conflict with the First Law. '+ '<br>' + '3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law."' 
					+ '<br>' + 
					'- Isaac Asimov'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"The study of robotics covers all aspects of their electronic, mechanical, and software design, and the different ways in which they sense and interact with the world around them."
					 + '<br><br>' +
					"Simple industrial robots have been in use since the early 1960's, but more powerful and sophisticated ones are always in development. While definitely helpful in factories performing repetitive precision-driven tasks, robotics are being pushed to create life-like prosthetic limbs, humanoid-style robots, and robots capable of recognizing and producing humanesque gestures and expressions."
					+ '</div>';
			break;
		case "MOBILE_TACTICS":
			img = '<img class="techimgD" src="res/img/tech/TECH_MOBILE_TACTICS.png">';
			title = '<div class="titleD">'+
					"MOBILE TACTICS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1966" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"All men can see these tactics whereby I conquer, but what none can see is the strategy out of which victory is evolved."' 
					+ '<br>' + 
					'- Sun Tzu'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Mobile tactics are strategies implemented by military forces to allow for quick, highly maneuverable units to get in and out of battle without becoming mired in an ongoing engagement. Mobile tactics are often used by irregular or guerilla units who specialize in hit-and-run attacks aimed at disorienting larger forces."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		case "PARTICLE_PHYSICS":
			img = '<img class="techimgD" src="res/img/tech/TECH_PARTICLE_PHYSICS.png">';
			title = '<div class="titleD">'+
					"PARTICLE PHYSICS" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1974" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"Every particle of matter is attracted by or gravitates to every other particle of matter with a force inversely proportional to the squares of their distances."' 
					+ '<br>' + 
					'- Isaac Newton'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Particle physics takes us one step deeper into the understanding of the nature of matter and energy than its ancestor, 'atomic theory'. While the term 'atom' wasn't coined until 1803 by chemist John Dalton, the idea that all matter can be broken down into smaller and smaller fundamental building blocks can be traced back as far as the 6th century B.C. Modern particle physics, or more properly the study of quantum mechanics, didn't fully begin until 1838 with the discovery of cathode rays by Michael Faraday, which helped prove that atoms - until then the smallest known objects in science - were in fact composed of even smaller particles."
					 + '<br><br>' +
					"In general, the basic foundation of quantum theory can be summed up by the Standard Model, a categorization of the seventeen species of elementary particles: 12 fermions, 4 vector bosons, and 1 scalar boson. Particles associated with matter are categorized as fermions (having a half-integer spin) and particles associated with forces, the bosons, have an integer spin. From these 17 basic particles, hundreds of other species of composite and fundamental particles can be created."
					+ '</div>';
			break;
		case "NANOTECHNOLOGY":
			img = '<img class="techimgD" src="res/img/tech/TECH_NANOTECHNOLOGY.png">';
			title = '<div class="titleD">'+
					"NANOTECHNOLOGY" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1981" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The impact of nanotechnology is expected to exceed the impact that the electronics revolution has had on our lives."' 
					+ '<br>' + 
					'- Richard Schwartz'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Nanotechnology is an all encompassing study involving the control of any matter at the atomic or molecular scale. While often romanticized to the notion of billions of tiny robots directing the flow of individual atoms, nanotech covers any science revolving around the study or use of particles a few nanometers in size, from the creation of tiny carbon nanotubes and nanoparticle solar cells to DNA research. A nanometer (the relative size most nanotechnology is created in) is one billionth of a meter in size, about the same scale as the diameter of a marble is to that of the Earth, and it's only been in recent years that the technology capable of research on such a tiny scale has really been available. Despite its recent emergence, an estimated three to four new nanotech products per week are made publicly available, with applications ranging from clothing and cosmetics to food products and packaging."
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		case "GLOBALIZATION":
			img = '<img class="techimgD" src="res/img/tech/TECH_GLOBALIZATION.png">';
			title = '<div class="titleD">'+
					"GLOBALIZATION" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1983" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The new electronic interdependence recreates the world in the image of a global village."' 
					+ '<br>' + 
					'- Marshall McLuhan'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Not a technology or field of study, globalization describes a process by which different regional economies, cultures, languages, information, and whole societies become integrated into a larger, consolidated network. While often used just to describe economic tendencies in the world market, globalization does take into account everything from migration patterns to the spread of technology and information. While not recognized as a concept until much later, globalization has been around as early as the first trade routes that were created between distant cities."
					 + '<br><br>' +
					"One of the earliest definitions of globalization was given by an American entrepreneur Charles Taze Russell in 1897, but it wasn't until the 1960's that the word really entered common parlance. The concept of globalization has been a driving force to both private and public sectors, with large banks opening branches across the world and separate governments joining together under one banner like the United Nations."
					+ '</div>';
			break;
		case "NUCLEAR_FUSION":
			img = '<img class="techimgD" src="res/img/tech/TECH_NUCLEAR_FUSION.png">';
			title = '<div class="titleD">'+
					"NUCLEAR FUSION" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1991" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The release of atomic energy has not created a new problem. It has merely made more urgent the necessity of solving an existing one."' 
					+ '<br>' + 
					'- Albert Einstein'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"Occurring naturally in stars, nuclear fusion is the act of multiple like-charged atoms joining together to form a heavier, larger one, like two hydrogen atoms fusing to become a helium atom. A byproduct of this joining is a large release or absorption of energy, considerably more than the amount of energy required to fuse the two nuclei in the first place. Harnessing the power of fusion in a controlled manner has been the focus of energy research since the 1950's, after witnessing the power of an uncontrolled chain of reactions in the first hydrogen bomb."
					 + '<br><br>' +
					"It takes a good amount of energy to have two nuclei overcome their positive charges and fuse together, even when dealing with the lightest element - hydrogen. However, some scientists believe that by 2020 it may be possible to build a reactor which is not only capable of controlling and mediating such a reaction, but also producing ten times the amount of energy used to create it. This kind of available energy could revolutionize the entire world's infrastructure and change the way even the smallest technological feats are achieved."
					+ '</div>';
			break;
		case "THE_INTERNET":
			img = '<img class="techimgD" src="res/img/tech/TECH_INTERNET.png">';
			title = '<div class="titleD">'+
					"THE INTERNET" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"1990" + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"The Internet is the first thing that humanity has built that humanity doesn'+"'"+'t understand, the largest experiment in anarchy that we have ever had."' 
					+ '<br>' + 
					'- Eric Schmidt'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"The ancestry of the Internet lies in the development of ARPANET (Advanced Research Projects Agency Network), funded by the U.S. Department of Defense, for use by its university contractors and research labs in the exchange of information. In the early 1980s, the Defense Department adopted the privately-developed transmission control protocol (TCP), which enabled different makes of computers on networks to route and reassemble data packets anywhere in the world. "
					 + '<br><br>' +
					"Within a few years, the network was transferring millions of bits per second, and several commercial networks were flourishing. In 1993 the University of Illinois made freely available 'Mosaic', a new type of program for a new Internet technology dubbed the 'World Wide Web'. Within a few months, a number of corporations such as Netscape and Microsoft had entered the exploding field with browser and server software for use on personal computers. By the late 1990s there were approximately 100,000 Internet service providers around the world. In the first decades of the new century, the Internet was expanding an estimated 100% annually, making it the greatest conduit for information and entertainment in world history."
					+ '</div>';
			break;
		case "FUTURE_TECH":
			img = '<img class="techimgD" src="res/img/tech/TECH_FUTURE_TECH.png">';
			title = '<div class="titleD">'+
					"FUTURE TECH" 
					+ '</div>';
			time = '<div class="timeD">' + 
					"2018 - " + 
					'</div>';
			quote = '<div class="quoteD">' + 
					'"I think we agree, the past is over."' 
					+ '<br>' + 
					'- George W. Bush'
					 + '</div>';
			detail = '<div class="detailD">' + 
					"It's difficult to write a 'history' for technology that hasn't actually been discovered yet. But here are some possible big breakthroughs that might dramatically alter the human condition. Sooner or later, medicine will figure out how to cure cancer and other diseases, dramatically increase human life, and directly interface the human brain with machines. Cheap, clean forms of energy will be discovered. Computers will get faster and smaller. Games will get more immersive and realistic. Nasty new weapons will be invented. And a giant killer death robot will be created to destroy all life on the planet, but we will be saved by an army of mutant kung fu cyborgs. The future will indeed be interesting!"
					 + '<br><br>' +
					""
					+ '</div>';
			break;
		

		default:
			img = '<img class="techimgDD" src="res/img/tech/TECH_MINING.png">';
			title = '<div class="titleD">'+"MINING" + '</div>';
			time = '<div class="timeD">' + "43000 BC" + '</div>';
			quote = '<div class="quoteD">' + '"The meek shall inherit the Earth, but not its mineral rights."' + '<br>' + '- J. Paul Getty' + '</div>';
			detail = '<div class="detailD">' + "Mining is the process of extracting various useful substances from beneath the earth's surface. The earliest mined elements include copper, iron, diamonds, gold, silver, salt and coal. Since one can't eat any of that stuff (except for salt, of course, but you see where we're heading here), miners must be part of a community that grows enough excess food to support them and their families." + '<br><br>' +
					"The oldest mine yet discovered was found in Swaziland, Africa. It was dug some 40,000 years ago to mine ochre, a mineral used in burial ceremonies and for body art. Flint, a brittle and easily-sharpened mineral used by early man for scrapers, knives and arrowheads may have been the first item mined on a large scale in Europe. Flint mine shafts some 100 feet deep and dating back to the Neolithic Period (8000 - 2000 BC) have been discovered in France and England."
					+ '</div>';
	}



	// prepare the variables for later insertion into the page
	$( '.techimgD' ).replaceWith(img);
	$('.titleD').replaceWith(title);
	$('.timeD').replaceWith(time);
	$('.quoteD').replaceWith(quote);
	$('.detailD').replaceWith(detail);

	var allH = $('.titleD').innerHeight() + $('.timeD').innerHeight() + $('.quoteD').innerHeight() + $('.detailD').outerHeight() + 180;
	console.log(allH, $('.detailD').outerHeight());



	$('.techDetail').css({ visibility: 'visible', height: allH + 'px', 'margin-top': (0-allH/2) + 'px'});
	$('.techDetail').animate({ opacity: 1}, 400);
	$('.techs').addClass('dark');
	$('.p5').addClass('dark');
	$('body').addClass("stopScroll");

});


// open and update the popup page 
$(document).on("click", ".xD", function(){
	$('body').removeClass("stopScroll");
	$('.techDetail').animate({ opacity: 0}, 400);
	$('.techs').removeClass('dark');
	$('.p5').removeClass('dark');
	window.setTimeout(function(){$('.techDetail').css({ visibility: 'hidden'});}, 1000);
	
});









