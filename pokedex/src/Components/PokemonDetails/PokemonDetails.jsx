import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export default function PokemonDetails() {
    const {id} = useParams()
    const [pokFeature, setPokFeature] = useState({})
    
    useEffect(()=>{
        async function fetchData() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            console.log(response);
            setPokFeature({
                name : response.data.name,
                image : response.data.sprites.other.dream_world.front_default,
                height : response.data.height,
                weight : response.data.weight,
                types : response.data.types
            })
        
            
            
        }
        fetchData()


    }, [id])
    
    return(
                <div className = "pokFeatureContainer">
                    <h1>{pokFeature.name}</h1>
                    <img src={pokFeature.image} alt="" />
                    <div>Height:{pokFeature.height}</div>
                    <div>Weight:{pokFeature.weight}</div>
                    <div>
                        {pokFeature.types && pokFeature.types.map((t)=>
                            <div key={t.type.name}>{t.type.name}</div>
                    
                        )}
                    </div>
                </div>

            )
}