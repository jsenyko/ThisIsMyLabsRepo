import { useParams } from "react-router-dom";
import menu from "../data/menu";

export function DetailsRoute(){

    let { id } = useParams();

    let item = menu.find((item) => item.id ===id);


    return(
    <div>
        { item !== undefined && 
            <ul>
                <li>{item.name}</li>
                <li>{item.description}</li>
            </ul>
        
        
        }

    </div>
    )
}