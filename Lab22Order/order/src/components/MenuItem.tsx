import { useContext } from "react";
import OrderContext from "../context/OrderContext";
import { Item } from "../models/Item";

interface IMenuItemProps{
    item: Item;
    
}


export function MenuItem(props:IMenuItemProps){
    
    let {item} = props;

    const { addItem, removeItem } = useContext(OrderContext);


    function displayBoolean(value:boolean) :string {
        return value ? "Yes" : "No"
    }

    return(
        <div className="MenuItem">
            <h3>{item.name}</h3>
            <ul>
                <li>Price: {props.item.price}</li>
                <li>Description: {item.description}</li>
                <li>Calories: {item.calories}</li>
                <li>Vegetarian?: {displayBoolean(item.vegetarian)}</li>
            </ul>
            <button onClick={() => addItem(item)}>Add</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
    )
}