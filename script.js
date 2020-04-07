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
const residents = document.querySelector('#residents');
const films = document.querySelector('#films');
const html = document.getElementsByTagName('html')[0];
const body = document.getElementsByTagName('body')[0];
const scene = document.querySelector('.scene');
const loading = document.querySelector('#loading');
const bb8 = document.querySelector('.bb8');
const searchPlanet = document.querySelector('#searchPlanet');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const planetList = document.querySelector('#planetList');
const shufflePlanets = document.querySelectorAll('.shufflePlanets');
const title = document.querySelector('#title');
const progress = document.querySelector('#progress');
const progressBar = document.querySelector('#progressBar');

let planetIndex = 1;
let planetInfo = [];
let load = 1;

function showThisPlanet() {
  let myPlanetId = this.id;
  showPlanets(myPlanetId);
  planetList.style.display = 'none';
}

const addPlanetNames = () => {
  for (int = 0; int < 61; int++) {
    planetNameAdded = planetInfo[int].name;
    li = document.createElement('li');
    li.appendChild(document.createTextNode(planetNameAdded));
    planetList.appendChild(li);
    li.id = int + 1;
    li.addEventListener('click', showThisPlanet);
  }
}

const updateProgress = (PP) => {
  load = (PP*100);
  progressBar.style.width = load + "%";
  bb8.style.left = progressBar.style.width.slice(0, -1) * 6.83 - 50 + 'px';
}

const hyperdrive = () => {
  prev.style.display = 'none';
  next.style.display = 'none';
  searchPlanet.style.display = 'none';
  numbertext.style.display = 'none';

  scene.style.display = 'inline-block'
  scene.innerHTML = '<div class="wrap"><div class="wall wall-right"></div><div class="wall wall-left"></div><div class="wall wall-top"></div><div class="wall wall-bottom"></div><div class="wall wall-back"></div></div><div class="wrap"><div class="wall wall-right"></div><div class="wall wall-left"></div><div class="wall wall-top"></div><div class="wall wall-bottom"></div><div class="wall wall-back"></div></div>';

  html.style.height = '100%';
  body.style.height = '100%';
  html.style.width = '100%';
  body.style.width = '100%';
  html.style.overflow = 'hidden';
  body.style.overflow = 'hidden';

  body.classList.add('before_ish');
  
  setTimeout(() => {
    prev.style.display = 'inline';
    next.style.display = 'inline';
    searchPlanet.style.display = 'block';
    numbertext.style.display = 'block';
    
    scene.style.display = 'none';
    scene.innerHTML = '';

    html.style.height = '';
    body.style.height = '';
    html.style.width = '';
    body.style.width = '';
    html.style.overflow = '';
    body.style.overflow = '';

    body.classList.remove('before_ish');
  }, 500)
}

async function fetchPlanets() {
  for (j = 1; j <= 61; j++) {
    let url = 'https://swapi.co/api/planets/' + j + '/';
    try {
      let respPlanet = await fetch(url);
      let data = await respPlanet.json();
      if (data.residents !== []) {
        let respResidents = await Promise.all(data.residents.map(async function(resUrl) {
          const givenResident = await fetch(resUrl);
          return givenResident.json();
        }));
        respResidents = respResidents.map(names => {
          return names.name;
        });
        data.residents = respResidents;
      }
      if (data.films !== []) {
        let respFilms = await Promise.all(data.films.map(async function(filmUrl) {
          const givenFilm = await fetch(filmUrl);
          return givenFilm.json();
        }));
        respFilms = respFilms.map(films => {
          return films.title;
        });
        data.films = respFilms;
      }
      planetInfo.push(data);
    } catch (err) {
      console.log('Oops! Error:' + err + ' Try reloading the page');
    }
    updateProgress(j/61);
  }

  sessionStorage.planetInfo = JSON.stringify(planetInfo);
  loading.style.display = 'none';
  progress.style.display = 'none';
  hyperdrive();
  title.style.display = 'block';
  all_planets_info.style.display = 'block';
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
  progress.style.display = 'none';
  hyperdrive();
  title.style.display = 'block';
  all_planets_info.style.display = 'block';
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

prev.addEventListener('click', () => {
  hyperdrive();
  showPlanets(planetIndex += -1);
})

next.addEventListener('click', () => {
  hyperdrive();
  showPlanets(planetIndex += 1);
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
  residents.innerHTML  = `<span class="info_title">Residents: </span>${planetInfo[planetIndex - 1].residents}`;
  films.innerHTML  = `<span class="info_title">Films: </span>${planetInfo[planetIndex - 1].films}`;
  films
}


// hyperdrive background when switching planets: hyperdrive-background: https://codepen.io/noahblon/pen/GKflw
// throw error to test what to do if something wrong happens. When reload happens and the sessionStorage is not full then call fetchPlanets and if error reload.
// make responsive