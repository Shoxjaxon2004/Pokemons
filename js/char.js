var charPic = document.querySelector('.char__img');
var charName = document.querySelector('.char__name');
var charPit = document.querySelector('.char__pit');
var charSpawn= document.querySelector('.char__spawn');
var charEgg = document.querySelector('.char__egg');
var charWeight = document.querySelector('.char__weight');

// img

charPic.src = pokemons[3].img;
charPic.alt = pokemons[3].name;

// name

charName.textContent =  pokemons[3].name;

//Pitaniya

charPit.textContent = "Pitaniya: " + pokemons[3].type;

//Spawn

charSpawn.textContent = "Spawn-time: " + pokemons[3].spawn_time;


//Egg

charEgg.textContent = "Egg: " + pokemons[3].egg;

//Weight

charWeight.textContent = "Weight: " + pokemons[3].weight;