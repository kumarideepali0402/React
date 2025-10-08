import Search from "../Search/search";
import PokemonList from "../PokemonList/pokemonList";
import "./pokedex.css"
export default function Pokedex() {
    return (
        <div className="pokedex-container">
            
            <Search/>
            <PokemonList/>
        </div>
    )
}