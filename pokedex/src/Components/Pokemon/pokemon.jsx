
import { Link } from "react-router-dom"
import "./pokemon.css"
export default function Pokemon({name, image, id}){
    return(
        <div className="pokebox">
            <Link to={`/pokemon/${id}`}>
                <div>{name}</div>
                <img src={image} alt="" />
            </Link>
        </div>
    )

}