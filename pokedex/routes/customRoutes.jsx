import PokemonDetails from "../src/Components/PokemonDetails/PokemonDetails";
import Pokedex from "../src/Components/Pokedex/Pokedex";
import {Routes, Route} from 'react-router-dom'

export default function CustomRoutes() {
    return(
        
        <Routes>
            <Route path="/" element ={<Pokedex/>}></Route>
            <Route path="/pokemon/:id" element ={<PokemonDetails/>}></Route>
        </Routes>
    )

}