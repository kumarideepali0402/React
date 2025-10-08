import { useEffect } from "react"
import axios from 'axios';
import { useState } from "react";
import Pokemon from "../Pokemon/pokemon";
import"./pokemonList.css"
export default function PokemonList() {
    // const [pokemonList, setPokemonList] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [nextUrl, setNextUrl] = useState('');
    // const [prevUrl, setPrevUrl] = useState('');
    // const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList : [],
        isLoading : false,
        nextUrl : '',
        prevUrl : '',
        url : "https://pokeapi.co/api/v2/pokemon/"
    }); 


    async function DownloadPokemons(){
        setPokemonListState({...pokemonListState, isLoading:true});
        const response= await axios.get(pokemonListState.url);
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
        console.log(response);
        setPokemonListState({...pokemonListState,nextUrl:response.data.next,prevUrl:response.data.previous,pokemonList:res, isLoading:false});
        

    }

    useEffect(()=>{DownloadPokemons()},[pokemonListState.url])

    return(
        <div className="pokemonList-container">
            <div>PokemonList</div>
            <div className="pokeframe">
                {(pokemonListState.isLoading) ? "Is Loading..." : 
                pokemonListState.pokemonList.map((p)=><Pokemon name={p.name}  image={p.image} key={p.id} id={p.id}/>)
                }
            </div>
            <div className="controls">
                <button className="previous" disabled={pokemonListState.prevUrl == null} onClick={() =>setPokemonListState({...pokemonListState, url: pokemonListState.prevUrl}) }>Prev</button>
                <button className="next" disabled={pokemonListState.nextUrl == null} onClick={() =>setPokemonListState({...pokemonListState, url: pokemonListState.nextUrl}) }>Next</button>
                
            </div>

        </div>
    )

}