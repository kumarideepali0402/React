import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css"

 export default function Grid({numberOfCards}){
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState("");


    return (
        <div className="grid">
            {board.map((el, idx)=><Card key={idx} player={turn} onclick=()=>{setTurn()}/>)}

        </div>
    )


}