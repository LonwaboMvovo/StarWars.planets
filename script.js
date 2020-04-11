const body = document.getElementsByTagName('body')[0];
const myPlanet = document.querySelector(".myPlanet");
const numbertext = document.querySelector("#numbertext");
const planet_name = document.querySelector('#planet-name');
const all_planets_info = document.querySelector('#all_planets_info');
const rotation_period = document.querySelector('#rotation_period');
const orbital_period = document.querySelector('#orbital_period');
const diameter = document.querySelector('#diameter');
const climate = document.querySelector('#climate');
const gravity = document.querySelector('#gravity');
const terrain = document.querySelector('#terrain');
const surface_water = document.querySelector('#surface_water');
const population = document.querySelector('#population');
// const loading = document.querySelector('#loading');
// const bb8 = document.querySelector('.bb8');
const planets_container = document.querySelector('.planets-container');
const search = document.querySelector('#search');
const searchPlanet = document.querySelector('#searchPlanet');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const planetList = document.querySelector('#planetList');
const shufflePlanets = document.querySelectorAll('.shufflePlanets');
const title = document.querySelector('#title');
// const progress = document.querySelector('#progress');
// const progressBar = document.querySelector('#progressBar');

const fakeSWAPI = [
  {
    climate: "arid",
    surface_water: "1",
    name: "Tatooine",
    diameter: "10465",
    rotation_period: "23",
    terrain: "desert",
    gravity: "1 standard",
    orbital_period: "304",
    population: "200000"
  },
  {
    climate: "temperate",
    surface_water: "40",
    name: "Alderaan",
    diameter: "12500",
    rotation_period: "24",
    terrain: "grasslands, mountains",
    gravity: "1 standard",
    orbital_period: "364",
    population: "2000000000"
  },
  {
    climate: "temperate, tropical",
    surface_water: "8",
    name: "Yavin IV",
    diameter: "10200",
    rotation_period: "24",
    terrain: "jungle, rainforests",
    gravity: "1 standard",
    orbital_period: "4818",
    population: "1000"
  },
  {
    climate: "frozen",
    surface_water: "100",
    name: "Hoth",
    diameter: "7200",
    rotation_period: "23",
    terrain: "tundra, ice caves, mountain ranges",
    gravity: "1.1 standard",
    orbital_period: "549",
    population: "unknown"
  },
  {
    climate: "murky",
    surface_water: "8",
    name: "Dagobah",
    diameter: "8900",
    rotation_period: "23",
    terrain: "swamp, jungles",
    gravity: "N/A",
    orbital_period: "341",
    population: "unknown"
  },
  {
    climate: "temperate",
    surface_water: "0",
    name: "Bespin",
    diameter: "118000",
    rotation_period: "12",
    terrain: "gas giant",
    gravity: "1.5 (surface), 1 standard (Cloud City)",
    orbital_period: "5110",
    population: "6000000"
  },
  {
    climate: "temperate",
    surface_water: "8",
    name: "Endor",
    diameter: "4900",
    rotation_period: "18",
    terrain: "forests, mountains, lakes",
    gravity: "0.85 standard",
    orbital_period: "402",
    population: "30000000"
  },
  {
    climate: "temperate",
    surface_water: "12",
    name: "Naboo",
    diameter: "12120",
    rotation_period: "26",
    terrain: "grassy hills, swamps, forests, mountains",
    gravity: "1 standard",
    orbital_period: "312",
    population: "4500000000"
  },
  {
    climate: "temperate",
    surface_water: "unknown",
    name: "Coruscant",
    diameter: "12240",
    rotation_period: "24",
    terrain: "cityscape, mountains",
    gravity: "1 standard",
    orbital_period: "368",
    population: "1000000000000"
  },
  {
    climate: "temperate",
    surface_water: "100",
    name: "Kamino",
    diameter: "19720",
    rotation_period: "27",
    terrain: "ocean",
    gravity: "1 standard",
    orbital_period: "463",
    population: "1000000000"
  },
  {
    climate: "temperate, arid",
    surface_water: "5",
    name: "Geonosis",
    diameter: "11370",
    rotation_period: "30",
    terrain: "rock, desert, mountain, barren",
    gravity: "0.9 standard",
    orbital_period: "256",
    population: "100000000000"
  },
  {
    climate: "temperate, arid, windy",
    surface_water: "0.9",
    name: "Utapau",
    diameter: "12900",
    rotation_period: "27",
    terrain: "scrublands, savanna, canyons, sinkholes",
    gravity: "1 standard",
    orbital_period: "351",
    population: "95000000"
  },
  {
    climate: "hot",
    surface_water: "0",
    name: "Mustafar",
    diameter: "4200",
    rotation_period: "36",
    terrain: "volcanoes, lava rivers, mountains, caves",
    gravity: "1 standard",
    orbital_period: "412",
    population: "20000"
  },
  {
    climate: "tropical",
    surface_water: "60",
    name: "Kashyyyk",
    diameter: "12765",
    rotation_period: "26",
    terrain: "jungle, forests, lakes, rivers",
    gravity: "1 standard",
    orbital_period: "381",
    population: "45000000"
  },
  {
    climate: "artificial temperate ",
    surface_water: "0",
    name: "Polis Massa",
    diameter: "0",
    rotation_period: "24",
    terrain: "airless asteroid",
    gravity: "0.56 standard",
    orbital_period: "590",
    population: "1000000"
  },
  {
    climate: "frigid",
    surface_water: "unknown",
    name: "Mygeeto",
    diameter: "10088",
    rotation_period: "12",
    terrain: "glaciers, mountains, ice canyons",
    gravity: "1 standard",
    orbital_period: "167",
    population: "19000000"
  },
  {
      
          climate: "hot, humid",
          surface_water: "unknown",
          name: "Felucia",
          diameter: "9100",
          rotation_period: "34",
          terrain: "fungus forests",
          gravity: "0.75 standard",
          orbital_period: "231",
          population: "8500000"
  },
  {
      
          climate: "temperate, moist",
          surface_water: "unknown",
          name: "Cato Neimoidia",
          diameter: "0",
          rotation_period: "25",
          terrain: "mountains, fields, forests, rock arches",
          gravity: "1 standard",
          orbital_period: "278",
          population: "10000000"
  },
  {
      
          climate: "hot",
          surface_water: "unknown",
          name: "Saleucami",
          diameter: "14920",
          rotation_period: "26",
          terrain: "caves, desert, mountains, volcanoes",
          gravity: "unknown",
          orbital_period: "392",
          population: "1400000000"
  },
  {
      
          climate: "temperate",
          surface_water: "unknown",
          name: "Stewjon",
          diameter: "0",
          rotation_period: "unknown",
          terrain: "grass",
          gravity: "1 standard",
          orbital_period: "unknown",
          population: "unknown"
  },
  {
      
          climate: "polluted",
          surface_water: "unknown",
          name: "Eriadu",
          diameter: "13490",
          rotation_period: "24",
          terrain: "cityscape",
          gravity: "1 standard",
          orbital_period: "360",
          population: "22000000000",
  },
  {
      
          climate: "temperate",
          surface_water: "70",
          name: "Corellia",
          diameter: "11000",
          rotation_period: "25",
          terrain: "plains, urban, hills, forests",
          gravity: "1 standard",
          orbital_period: "329",
          population: "3000000000"
  },
  {
      
          climate: "hot",
          surface_water: "60",
          name: "Rodia",
          diameter: "7549",
          rotation_period: "29",
          terrain: "jungles, oceans, urban, swamps",
          gravity: "1 standard",
          orbital_period: "305",
          population: "1300000000"
  },
  {
      
          climate: "temperate",
          surface_water: "unknown",
          name: "Nal Hutta",
          diameter: "12150",
          rotation_period: "87",
          terrain: "urban, oceans, swamps, bogs",
          gravity: "1 standard",
          orbital_period: "413",
          population: "7000000000"
  },
  {
      
          climate: "temperate",
          surface_water: "unknown",
          name: "Dantooine",
          diameter: "9830",
          rotation_period: "25",
          terrain: "oceans, savannas, mountains, grasslands",
          gravity: "1 standard",
          orbital_period: "378",
          population: "1000"
  },
  {
      
          climate: "temperate",
          surface_water: "98",
          name: "Bestine IV",
          diameter: "6400",
          rotation_period: "26",
          terrain: "rocky islands, oceans",
          gravity: "unknown",
          orbital_period: "680",
          population: "62000000"
  },
  {
      
          climate: "temperate",
          surface_water: "10",
          name: "Ord Mantell",
          diameter: "14050",
          rotation_period: "26",
          terrain: "plains, seas, mesas",
          gravity: "1 standard",
          orbital_period: "334",
          population: "4000000000"
  },
  {
      
          climate: "unknown",
          surface_water: "unknown",
          name: "unknown",
          diameter: "0",
          rotation_period: "0",
          terrain: "unknown",
          gravity: "unknown",
          orbital_period: "0",
          population: "unknown"
  },
  {
      
          climate: "arid",
          surface_water: "unknown",
          name: "Trandosha",
          diameter: "0",
          rotation_period: "25",
          terrain: "mountains, seas, grasslands, deserts",
          gravity: "0.62 standard",
          orbital_period: "371",
          population: "42000000"
  },
  {
      
          climate: "arid",
          surface_water: "unknown",
          name: "Socorro",
          diameter: "0",
          rotation_period: "20",
          terrain: "deserts, mountains",
          gravity: "1 standard",
          orbital_period: "326",
          population: "300000000"
  },
  {
      
          climate: "temperate",
          surface_water: "100",
          name: "Mon Cala",
          diameter: "11030",
          rotation_period: "21",
          terrain: "oceans, reefs, islands",
          gravity: "1",
          orbital_period: "398",
          population: "27000000000"
  },
  {
      
          climate: "temperate",
          surface_water: "40",
          name: "Chandrila",
          diameter: "13500",
          rotation_period: "20",
          terrain: "plains, forests",
          gravity: "1",
          orbital_period: "368",
          population: "1200000000"
  },
  {
      
          climate: "superheated",
          surface_water: "5",
          name: "Sullust",
          diameter: "12780",
          rotation_period: "20",
          terrain: "mountains, volcanoes, rocky deserts",
          gravity: "1",
          orbital_period: "263",
          population: "18500000000"
  },
  {
      
          climate: "temperate",
          surface_water: "unknown",
          name: "Toydaria",
          diameter: "7900",
          rotation_period: "21",
          terrain: "swamps, lakes",
          gravity: "1",
          orbital_period: "184",
          population: "11000000"
  },
  {
      
          climate: "arid, temperate, tropical",
          surface_water: "unknown",
          name: "Malastare",
          diameter: "18880",
          rotation_period: "26",
          terrain: "swamps, deserts, jungles, mountains",
          gravity: "1.56",
          orbital_period: "201",
          population: "2000000000"
  },
  {
      
          climate: "temperate",
          surface_water: "unknown",
          name: "Dathomir",
          diameter: "10480",
          rotation_period: "24",
          terrain: "forests, deserts, savannas",
          gravity: "0.9",
          orbital_period: "491",
          population: "5200"
  },
  {
      
          climate: "temperate, arid, subartic",
          surface_water: "5",
          name: "Ryloth",
          diameter: "10600",
          rotation_period: "30",
          terrain: "mountains, valleys, deserts, tundra",
          gravity: "1",
          orbital_period: "305",
          population: "1500000000"
  },
  {
      
          climate: "unknown",
          surface_water: "unknown",
          name: "Aleen Minor",
          diameter: "unknown",
          rotation_period: "unknown",
          terrain: "unknown",
          gravity: "unknown",
          orbital_period: "unknown",
          population: "unknown"
  },
  {
      
          climate: "temperate, artic",
          surface_water: "unknown",
          name: "Vulpter",
          diameter: "14900",
          rotation_period: "22",
          terrain: "urban, barren",
          gravity: "1",
          orbital_period: "391",
          population: "421000000"
  },
  {
      
          climate: "unknown",
          surface_water: "unknown",
          name: "Troiken",
          diameter: "unknown",
          rotation_period: "unknown",
          terrain: "desert, tundra, rainforests, mountains",
          gravity: "unknown",
          orbital_period: "unknown",
          population: "unknown"
  },
  {
      
          climate: "unknown",
          surface_water: "unknown",
          name: "Tund",
          diameter: "12190",
          rotation_period: "48",
          terrain: "barren, ash",
          gravity: "unknown",
          orbital_period: "1770",
          population: "0"
  },
  {
      
          climate: "temperate",
          surface_water: "unknown",
          name: "Haruun Kal",
          diameter: "10120",
          rotation_period: "25",
          terrain: "toxic cloudsea, plateaus, volcanoes",
          gravity: "0.98",
          orbital_period: "383",
          population: "705300"
  },
  {
      
          climate: "temperate",
          surface_water: "20",
          name: "Cerea",
          diameter: "unknown",
          rotation_period: "27",
          terrain: "verdant",
          gravity: "1",
          orbital_period: "386",
          population: "450000000"
  },
  {
      
          climate: "tropical, temperate",
          surface_water: "80",
          name: "Glee Anselm",
          diameter: "15600",
          rotation_period: "33",
          terrain: "lakes, islands, swamps, seas",
          gravity: "1",
          orbital_period: "206",
          population: "500000000"
  },
  {
      
          climate: "unknown",
          surface_water: "unknown",
          name: "Iridonia",
          diameter: "unknown",
          rotation_period: "29",
          terrain: "rocky canyons, acid pools",
          gravity: "unknown",
          orbital_period: "413",
          population: "unknown"
  },
  {
      
          climate: "unknown",
          surface_water: "unknown",
          name: "Tholoth",
          diameter: "unknown",
          rotation_period: "unknown",
          terrain: "unknown",
          gravity: "unknown",
          orbital_period: "unknown",
          population: "unknown"
  },
  {
      
          climate: "arid, rocky, windy",
          surface_water: "unknown",
          name: "Iktotch",
          diameter: "unknown",
          rotation_period: "22",
          terrain: "rocky",
          gravity: "1",
          orbital_period: "481",
          population: "unknown"
  },
  {
      
          climate: "unknown",
          surface_water: "unknown",
          name: "Quermia",
          diameter: "unknown",
          rotation_period: "unknown",
          terrain: "unknown",
          gravity: "unknown",
          orbital_period: "unknown",
          population: "unknown"
  },
  {
      
          climate: "temperate",
          surface_water: "unknown",
          name: "Dorin",
          diameter: "13400",
          rotation_period: "22",
          terrain: "unknown",
          gravity: "1",
          orbital_period: "409",
          population: "unknown"
  },
  {
      
          climate: "temperate",
          surface_water: "unknown",
          name: "Champala",
          diameter: "unknown",
          rotation_period: "27",
          terrain: "oceans, rainforests, plateaus",
          gravity: "1",
          orbital_period: "318",
          population: "3500000000"
  },
  {
      
          climate: "unknown",
          surface_water: "unknown",
          name: "Mirial",
          diameter: "unknown",
          rotation_period: "unknown",
          terrain: "deserts",
          gravity: "unknown",
          orbital_period: "unknown",
          population: "unknown"
  },
  {
      
          climate: "unknown",
          surface_water: "unknown",
          name: "Serenno",
          diameter: "unknown",
          rotation_period: "unknown",
          terrain: "rainforests, rivers, mountains",
          gravity: "unknown",
          orbital_period: "unknown",
          population: "unknown"
  },
  {
      
          climate: "unknown",
          surface_water: "unknown",
          name: "Concord Dawn",
          diameter: "unknown",
          rotation_period: "unknown",
          terrain: "jungles, forests, deserts",
          gravity: "unknown",
          orbital_period: "unknown",
          population: "unknown"
  },
  {
      
          climate: "unknown",
          surface_water: "unknown",
          name: "Zolan",
          diameter: "unknown",
          rotation_period: "unknown",
          terrain: "unknown",
          gravity: "unknown",
          orbital_period: "unknown",
          population: "unknown"
  },
  {
      
          climate: "frigid",
          surface_water: "100",
          name: "Ojom",
          diameter: "unknown",
          rotation_period: "unknown",
          terrain: "oceans, glaciers",
          gravity: "unknown",
          orbital_period: "unknown",
          population: "500000000"
  },
  {
      
          climate: "temperate",
          surface_water: "unknown",
          name: "Skako",
          diameter: "unknown",
          rotation_period: "27",
          terrain: "urban, vines",
          gravity: "1",
          orbital_period: "384",
          population: "500000000000"
  },
  {
      
          climate: "temperate",
          surface_water: "25",
          name: "Muunilinst",
          diameter: "13800",
          rotation_period: "28",
          terrain: "plains, forests, hills, mountains",
          gravity: "1",
          orbital_period: "412",
          population: "5000000000"
  },
  {
      
          climate: "temperate",
          surface_water: "unknown",
          name: "Shili",
          diameter: "unknown",
          rotation_period: "unknown",
          terrain: "cities, savannahs, seas, plains",
          gravity: "1",
          orbital_period: "unknown",
          population: "unknown"
  },
  {
      
          climate: "arid, temperate, tropical",
          surface_water: "unknown",
          name: "Kalee",
          diameter: "13850",
          rotation_period: "23",
          terrain: "rainforests, cliffs, canyons, seas",
          gravity: "1",
          orbital_period: "378",
          population: "4000000000"
  },
  {
      
          climate: "unknown",
          surface_water: "unknown",
          name: "Umbara",
          diameter: "unknown",
          rotation_period: "unknown",
          terrain: "unknown",
          gravity: "unknown",
          orbital_period: "unknown",
          population: "unknown"
  }
  ]
  
let planetIndex = 1;
let planetInfo = fakeSWAPI;

function showThisPlanet() {
  let myPlanetId = this.id;
  showPlanets(myPlanetId);
  planetList.style.display = 'none';
  search.style.right = '';
}

const addPlanetNames = () => {
  for (int = 0; int < 60; int++) {
    planetNameAdded = planetInfo[int].name;
    li = document.createElement('li');
    li.appendChild(document.createTextNode(planetNameAdded));
    planetList.appendChild(li);
    li.id = int + 1;
    li.addEventListener('click', showThisPlanet);
  }
}

// const delay = setInterval(() => {
//         let PP = j / 60;
//         for (j = 1; j <= 60; j++) {
//                 progressBar.style.width = (PP*100) + "%";
//                 bb8.style.left = (progress.clientWidth * PP - 50) + 'px';
//         }
// }, 1000);

const fetchPlanets = () => {
//   clearInterval(delay);
//   loading.style.display = 'none';
//   progress.style.display = 'none';
  title.style.display = 'block';
  all_planets_info.style.display = 'block';
  searchPlanet.style.display = 'block';
  shufflePlanets[0].style.display = 'inline';
  shufflePlanets[1].style.display = 'inline';
  addPlanetNames();
  showPlanets(planetIndex);
}

fetchPlanets();

const showPlanetList = () => {
  let filter = searchPlanet.value.toUpperCase();
  let planets = planetList.getElementsByTagName('li');
  let searchValue;
  for (k = 0; k < planets.length; k++) {
    searchValue = planets[k].textContent;
    if (searchValue.toUpperCase().indexOf(filter) > -1) {
      planets[k].style.display = 'block';
    } else {
      planets[k].style.display = 'none';
    }
  }
}

searchPlanet.addEventListener('focus', () => {
  planetList.style.display = 'block';
  if (body.clientWidth === 500) {
    search.style.right = '15%';
  }
})

planets_container.addEventListener('click', () => {
  planetList.style.display = 'none';
  search.style.right = '';
})

searchPlanet.addEventListener('keyup', () => {
  showPlanetList();
})

prev.addEventListener('click', () => {
  showPlanets(planetIndex - 1);
})

next.addEventListener('click', () => {
  showPlanets(planetIndex + 1);
})

const currentSlide = (n) => {
  showPlanets(planetIndex = n);
}

function showPlanets(n) {
  if (n > planetInfo.length) {
    planetIndex = 1;
  }   
  else if (n < 1) {
    planetIndex = planetInfo.length;
  }
  else {
    planetIndex = n;
  }
  numbertext.textContent  = `${planetIndex} / ${planetInfo.length}`;
  planet_name.textContent = planetInfo[planetIndex - 1].name;
  rotation_period.innerHTML  = `<span class="info_title">Rotation Period: </span>${planetInfo[planetIndex - 1].rotation_period} hrs`;
  orbital_period.innerHTML  = `<span class="info_title">Obital Period: </span>${planetInfo[planetIndex - 1].orbital_period} days`;
  diameter.innerHTML  = `<span class="info_title">Diameter: </span>${planetInfo[planetIndex - 1].diameter} km`;
  climate.innerHTML  = `<span class="info_title">Climate: </span>${planetInfo[planetIndex - 1].climate}`;
  gravity.innerHTML  = `<span class="info_title">Gravity: </span>${planetInfo[planetIndex - 1].gravity} G`;
  terrain.innerHTML  = `<span class="info_title">Terrain: </span>${planetInfo[planetIndex - 1].terrain}`; 
  surface_water.innerHTML  = `<span class="info_title">Surface Water: </span>${planetInfo[planetIndex - 1].surface_water} %`;
  population.innerHTML  = `<span class="info_title">Population: </span>${planetInfo[planetIndex - 1].population}`;
}