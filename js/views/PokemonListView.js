var $ = require('jquery');
var PokemonView = require('./PokemonView');

class PokemonListView {
  constructor(attrs) {
    this.pokemonList = attrs.pokemons;
    this.$element = $('<div/>');
    this.$element.addClass('pokemon-list');
  }

  loadNextPage() {
    return this.pokemonList.fetchNext().then((newPokemons) => {
      this.appendPokemons(newPokemons);
    });
  }

  appendPokemons(pokemons) {
    pokemons.forEach((pokemon) => {
      var pokemonView = new PokemonView({
        pokemon: pokemon
      });

      pokemonView.render();
      this.$element.append(pokemonView.$element);
    });
  }

  render() {
    this.appendPokemons(this.pokemonList.items);
  }
}

module.exports = PokemonListView;
