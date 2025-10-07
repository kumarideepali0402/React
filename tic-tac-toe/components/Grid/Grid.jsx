import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css"
import isWinner from "../../src/helpers/checkWinner";
export default function Grid({numberOfCards}) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(false);
    const [winner, setWinner] = useState(null);
    function play(index) {
        if(winner ) return;
        if(turn){
            board[index] = 'O';
        }
        else {
            board[index]='X';
        }
        const win = isWinner(board, turn?"O":"X");
        if(win){
            setWinner(win);

        }

        setTurn(!turn);
        setBoard([...board]);
    }
    function reset() {
        setTurn(false);
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
    }
    return(

        <div className="grid-wrapper">
            {winner && (
                <>
                    <h1 className="turn-highlight">Winner is {winner} 🎉 </h1>
                    <button onClick={reset}>Reset</button>
                </>
            )}
            {!winner && (
                <h1 className="turn-highlight">Turn: {(turn) ? 'O' : 'X'}</h1>
            )}
            
            <div className="grid">
                {board.map((el, idx) => <Card key={idx} onPlay = {play} player={el} index={idx} />)}
            </div>
        </div>

    )

}