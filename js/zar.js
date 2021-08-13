var zarPic = document.querySelector('.zar__img');
var zarName = document.querySelector('.zar__name');
var zarPit = document.querySelector('.zar__pit');
var zarSpawn= document.querySelector('.zar__spawn');
var zarEgg = document.querySelector('.zar__egg');
var zarWeight = document.querySelector('.zar__weight');

// img

zarPic.src = pokemons[2].img;
zarPic.alt = pokemons[2].name;

// name

zarName.textContent =  pokemons[2].name;

//Pitaniya

zarPit.textContent = "Pitaniya: " + pokemons[2].type;

//Spawn

zarSpawn.textContent = "Spawn-time: " + pokemons[2].spawn_time;


//Egg

zarEgg.textContent = "Egg: " + pokemons[2].egg;

//Weight

zarWeight.textContent = "Weight: " + pokemons[2].weight;