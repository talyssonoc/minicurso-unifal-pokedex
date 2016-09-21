var $ = require('jquery');
var Pokemon = require('./Pokemon');

class PokemonList {
  constructor(options) {
    this.items = [];
    this.nextUrl = options.nextUrl;
  }

  fetchNext() {
    return $.get(this.nextUrl).then((data) => {
      var newPokemons = [];

      for(var i = 0; i < data.results.length; i++) {
        var pokemon = new Pokemon(data.results[i]);

        newPokemons.push(pokemon);
      }

      this.items = this.items.concat(newPokemons);
      this.nextUrl = data.next;
      
      return newPokemons;
    });
  }
}

module.exports = PokemonList;