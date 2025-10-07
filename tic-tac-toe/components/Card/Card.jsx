import Icons from "../icon/icon";
import './Card.css';

export default function Card( {player, onPlay, index} ) {
    let icon;
    if(player == 'O') {
        icon = <Icons name = 'O'/>
    }
    else if(player == 'X') {
        icon = <Icons name='X'/>
    }
    else{
        icon = <Icons/>
    }
    return (<div className="card" onClick={() => (player=="" && onPlay(index))}>
                {icon}
            </div>
        );
}