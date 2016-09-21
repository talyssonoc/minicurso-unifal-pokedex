var chai = require('chai');
var expect = chai.expect;

var Pokemon = require('../js/models/Pokemon');

describe('Pokemon', function() {
  it('should save the pokemon name', function() {
    var pokemon = new Pokemon({
      name: 'growlithe'
    });

    expect(pokemon.name).to.equal('growlithe');
  });
});