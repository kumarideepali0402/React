
import "./pokemon.css"
export default function Pokemon({name, image}){
    return(
        <div className="pokebox">
            <div>{name}</div>
            <img src={image} alt="" />
        </div>
    )

}