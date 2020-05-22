import axios from "axios";

class PokemonDetailsService {
  getDetails = (idPokemon: string) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
  };
}

export default new PokemonDetailsService();
