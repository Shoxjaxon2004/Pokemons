var venPic = document.querySelector('.ven__img');
var venName = document.querySelector('.ven__name');
var venPit = document.querySelector('.ven__pit');
var venSpawn= document.querySelector('.ven__spawn');
var venEgg = document.querySelector('.ven__egg');
var venWeight = document.querySelector('.ven__weight');

// img

venPic.src = pokemons[1].img;
venPic.alt = pokemons[1].name;

// name

venName.textContent =  pokemons[1].name;

//Pitaniya

venPit.textContent = "Pitaniya: " + pokemons[1].type;

//Spawn

venSpawn.textContent = "Spawn-time: " + pokemons[1].spawn_time;


//Egg

venEgg.textContent = "Egg: " + pokemons[1].egg;

//Weight

venWeight.textContent = "Weight: " + pokemons[1].weight;