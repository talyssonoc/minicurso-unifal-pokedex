var $ = require('jquery');

var pokemons = require('./pokemons');
var PokemonListView = require('./views/PokemonListView');

var $pokedex = $('.pokedex');

var pokemonListView = new PokemonListView({
  pokemons: pokemons
});

var $loadMore = $('<button/>');
$loadMore.text('Load more');
$loadMore.addClass('load-more');

$loadMore.on('click', () => {
  $loadMore.attr('disabled', true);
  pokemonListView.loadNextPage().then(() => {
    $loadMore.attr('disabled', false);
  });
});

pokemons.fetchNext().then(() => {
  pokemonListView.render();
  $pokedex.append(pokemonListView.$element);
  $pokedex.append($loadMore);
});
