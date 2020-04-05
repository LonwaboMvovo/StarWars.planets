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

let planetIndex = 1;

let planetInfo = [];
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
  showPlanets(planetIndex);
}

if (sessionStorage.planetInfo === undefined) {
  fetchPlanets();
} else {
  planetInfo = JSON.parse(sessionStorage.planetInfo);
  loading.style.display = 'none';
  showPlanets(planetIndex);
}


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

// add space background
// Light saber loading: https://codemyui.com/lightsaber-progress-bar/ or https://www.mockplus.com/blog/post/progress-bar-design
// maybe remove number index
// add typing css for when planet info appears: https://codepen.io/Bojoer/pen/EZYgeO
// add fade to planet images
// make responsive
// maybe usefull things here: https://swfanon.fandom.com/wiki/Battle_of_Alderaan_(Galactic_Civil_War)
