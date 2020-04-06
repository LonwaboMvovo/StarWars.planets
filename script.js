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
const residents = document.querySelector('#residents');
const films = document.querySelector('#films');
const loading = document.querySelector('#loading');
const searchPlanet = document.querySelector('#searchPlanet');
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
      alert('Oops!: ' + err + 'Try refreshing');
    }
    updateProgress(j/61);
  }

  sessionStorage.planetInfo = JSON.stringify(planetInfo);
  loading.style.display = 'none';
  progress.style.display = 'none';
  title.style.display = 'block';
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
  title.style.display = 'block';
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
  rotation_period.textContent = `Rotation Period: ${planetInfo[planetIndex - 1].rotation_period} hrs`;
  orbital_period.textContent = `Obital Period: ${planetInfo[planetIndex - 1].orbital_period} days`;
  diameter.textContent = `Diameter: ${planetInfo[planetIndex - 1].diameter} km`;
  climate.textContent = `Climate: ${planetInfo[planetIndex - 1].climate}`;
  gravity.textContent = `Gravity: ${planetInfo[planetIndex - 1].gravity} G`;
  terrain.textContent = `Terrain: ${planetInfo[planetIndex - 1].terrain}`; 
  surface_water.textContent = `Surface Water: ${planetInfo[planetIndex - 1].surface_water} %`;
  population.textContent = `Population: ${planetInfo[planetIndex - 1].population}`;
  residents.textContent = `Residents: ${planetInfo[planetIndex - 1].residents}`;
  films.textContent = `Films: ${planetInfo[planetIndex - 1].films}`;
  films
}


// move things that need to be vertically centered back to true 50%
// throw error to test what to do if something wrong happens. When reload happens and the sessionStorage is not full then call fetchPlanets and if error reload.
// bb8 or r2d2 on the loading and he must rotate
// hyperdrive background when switching planets: hyperdrive-background: https://codepen.io/noahblon/pen/GKflw
// add typing css for when planet info appears: https://codepen.io/Bojoer/pen/EZYgeO
// make responsive

// let planetInfo = [];

// async function fetchPlanets() {
//   for (j = 1; j <= 61; j++) {
//     let url = 'https://swapi.co/api/planets/' + j + '/';
//     try {
//       let respPlanet = await fetch(url);
//       let data = await respPlanet.json();
//       planetInfo.push(data);
//     } catch (err) {
//       alert('Oops!: ' + err + ' Try refreshing');
//     }
//   }

//   sessionStorage.planetInfo = JSON.stringify(planetInfo);
//   console.log(planetInfo);
// }

// fetchPlanets();