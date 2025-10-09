import { useEffect, useState } from "react"
import "./Search.css"
import { useNavigate } from "react-router-dom";
export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    
        useEffect(()=>{
           const timeout =  setTimeout(()=>{
               if(searchTerm.trim().length === 0) {
                   navigate('/')
               }
               else if(searchTerm.trim().length > 0){
                   navigate(`/pokemon/${searchTerm.toLowerCase()}`)
               }
                
            },1000)
            return ()=>clearInterval(timeout);

        }
     ,[searchTerm, navigate])
        
    
    return(
        <div>
        <input type="text" name="search" placeholder="Search Pokedex..." className="search-bar" value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}/>
        </div>
    )
}