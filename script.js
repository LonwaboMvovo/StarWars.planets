const myPlanet = document.querySelector(".myPlanet");
const numbertext = document.querySelector("#numbertext");
const planet_name = document.querySelector('#planet-name');
const rotation_period = document.querySelector('#rotation_period');
const orbital_period = document.querySelector('#orbital_period');
const diameter = document.querySelector('#diameter');
const climate = document.querySelector('#climate');
const gravity = document.querySelector('#gravity');
const terrain = document.querySelector('#terrain');
const surface_water = document.querySelector('#surface_water');
const population = document.querySelector('#population');
const loading = document.querySelector('#loading');
const searchPlanet = document.querySelector('#searchPlanet');
const planetList = document.querySelector('#planetList');
const shufflePlanets = document.querySelectorAll('.shufflePlanets');

let planetIndex = 1;
let planetInfo = [];

const addPlanetNames = () => {
  for (int = 0; int < 61; int++) {
    planetNameAdded = planetInfo[int].name;
    li = document.createElement('li');
    li.appendChild(document.createTextNode(planetNameAdded));
    planetList.appendChild(li);
  }
}

async function fetchPlanets() {
  for (j = 1; j <= 61; j++) {
    let url = 'https://swapi.co/api/planets/' + j + '/';
    try {
      let respPlanet = await fetch(url);
      let data = await respPlanet.json();
      planetInfo.push(data);
    } catch (err) {
      alert('Oops!: ' + err);
    }
  }

  sessionStorage.planetInfo = JSON.stringify(planetInfo);
  loading.style.display = 'none';
  searchPlanet.style.display = 'block';
  shufflePlanets[0].style.display = 'inline';
  shufflePlanets[1].style.display = 'inline';
  addPlanetNames();
  showPlanets(planetIndex);
}

if (sessionStorage.planetInfo === undefined) {
  fetchPlanets();
} else {
  planetInfo = JSON.parse(sessionStorage.planetInfo);
  loading.style.display = 'none';
  searchPlanet.style.display = 'block';
  shufflePlanets[0].style.display = 'inline';
  shufflePlanets[1].style.display = 'inline';
  addPlanetNames();
  showPlanets(planetIndex);
}

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
})

searchPlanet.addEventListener('keyup', () => {
  showPlanetList();
})

searchPlanet.addEventListener('focusout', () => {
  planetList.style.display = 'none';
})

const prev = document.querySelector('#prev');
prev.addEventListener('click', () => {
  showPlanets(planetIndex += -1);
})

const next = document.querySelector('#next');
next.addEventListener('click', () => {
  showPlanets(planetIndex += 1);
})

const currentSlide = (n) => {
  showPlanets(planetIndex = n);
}

function showPlanets(n) {
  if (n > 61) {planetIndex = 1};   
  if (n < 1) {planetIndex = 61};
  numbertext.textContent  = `${planetIndex} / ${61}`;
  planet_name.textContent = planetInfo[planetIndex - 1].name;
  rotation_period.textContent = `Rotation Period: ${planetInfo[planetIndex - 1].rotation_period} hrs`;
  orbital_period.textContent = `Obital Period: ${planetInfo[planetIndex - 1].orbital_period} days`;
  diameter.textContent = `Diameter: ${planetInfo[planetIndex - 1].diameter} km`;
  climate.textContent = `Climate: ${planetInfo[planetIndex - 1].climate}`;
  gravity.textContent = `Gravity: ${planetInfo[planetIndex - 1].gravity} G`;
  terrain.textContent = `Terrain: ${planetInfo[planetIndex - 1].terrain}`; 
  surface_water.textContent = `Surface Water: ${planetInfo[planetIndex - 1].surface_water} %`;
  population.textContent = `Population: ${planetInfo[planetIndex - 1].population}`;
}


// change fonts 
// add space background
// Light saber loading: https://codemyui.com/lightsaber-progress-bar/ or https://www.mockplus.com/blog/post/progress-bar-design, or I'm thinking hyerdrive background with normal loading bar when loading. hyperdrive-background: https://codepen.io/noahblon/pen/GKflw
// maybe remove number index
// add typing css for when planet info appears: https://codepen.io/Bojoer/pen/EZYgeO
// make responsive
// maybe usefull things here: https://swfanon.fandom.com/wiki/Battle_of_Alderaan_(Galactic_Civil_War)
