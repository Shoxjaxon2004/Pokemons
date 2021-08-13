var iviPic = document.querySelector('.ivi__img');
var iviName = document.querySelector('.ivi__name');
var iviPit = document.querySelector('.ivi__pit');
var iviSpawn= document.querySelector('.ivi__spawn');
var iviEgg = document.querySelector('.ivi__egg');
var iviWeight = document.querySelector('.ivi__weight');

// img

iviPic.src = pokemons[0].img;
iviPic.alt = pokemons[0].name;

// name

iviName.textContent =  pokemons[0].name;

//Pitaniya

iviPit.textContent = "Pitaniya: " + pokemons[0].type;

//Spawn

iviSpawn.textContent = "Spawn-time: " + pokemons[0].spawn_time;


//Egg

iviEgg.textContent = "Egg: " + pokemons[0].egg;

//Weight

iviWeight.textContent = "Weight: " + pokemons[0].weight;