class Pokemon {
  constructor(info) {
    this.name = info.name;
  }

  getImage() {
    return `https://img.pokemondb.net/sprites/black-white/normal/${this.name}.png`;
  }
}

module.exports = Pokemon;