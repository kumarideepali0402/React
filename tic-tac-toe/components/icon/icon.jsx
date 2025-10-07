import { FaRegCircle,FaTimes, FaPen} from 'react-icons/fa';

export default function Icons( {name}) {
    if(name == 'O') return <FaRegCircle/>;
    else if(name == 'X') return <FaTimes/>;
    else return <FaPen/>
}