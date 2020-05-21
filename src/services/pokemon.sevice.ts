import api from "./api";

class PokemonService {
  getPokemons() {
    return api.get("pokemon");
  }
}

export default new PokemonService();
