var $ = require('jquery');

class PokemonView {
  constructor(attrs) {
    this.pokemon = attrs.pokemon;
    this.$element = $('<div/>');
    this.$element.addClass('pokemon');
  }

  render() {
    var url = this.pokemon.getImage();

    var $pokemonImage = $('<img/>');
    $pokemonImage.addClass('pokemon-image');
    $pokemonImage.attr('src', url);

    var $pokemonName = $('<div/>');
    $pokemonName.addClass('pokemon-name');
    $pokemonName.append(this.pokemon.name);

    this.$element.append($pokemonImage);
    this.$element.append($pokemonName);
  }
}

module.exports = PokemonView;