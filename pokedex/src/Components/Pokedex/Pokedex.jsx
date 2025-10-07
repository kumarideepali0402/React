import Search from "../Search/search";
import PokemonList from "../PokemonList/pokemonList";
import "./pokedex.css"
export default function Pokedex() {
    return (
        <div className="pokedex-container">
            <h1 className="heading">Pokedex</h1>
            <Search/>
            <PokemonList/>
        </div>
    )
}