var PokemonList = require('./models/PokemonList');

var pokemons = new PokemonList({
  nextUrl: 'https://pokeapi.co/api/v2/pokemon/'
});

module.exports = pokemons;