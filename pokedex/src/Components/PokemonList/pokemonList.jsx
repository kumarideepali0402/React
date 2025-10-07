import { useEffect } from "react"
import axios from 'axios';
import { useState } from "react";
import Pokemon from "../Pokemon/pokemon";
import"./pokemonList.css"
export default function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    async function DownloadPokemons(){
        const response= await axios.get("https://pokeapi.co/api/v2/pokemon/");
        const pokemonDataResults = response.data.results;
        const pokemonResultsPromise =  pokemonDataResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonData =await axios.all(pokemonResultsPromise);
        const res = pokemonData.map((pokeData)=>{
            const pokemon = pokeData.data;
            return({
                id:pokemon.id,
                name:pokemon.name,
                image: (pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_default,
                types:pokemon.types.map((t)=> t.type.name),
            }

            )
        })
        setPokemonList(res);
        setIsLoading(false);
       

    }

    useEffect(()=>{DownloadPokemons()},[])

    return(
        <div className="pokemonList-container">
            <div>PokemonList</div>
            <div className="pokeframe">
                {(isLoading) ? "Is Loading..." : 
                pokemonList.map((p)=><Pokemon name={p.name}  image={p.image} key={p.id} />)
                }
            </div>

        </div>
    )

}