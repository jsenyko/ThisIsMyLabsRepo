import { useState } from "react";
import { Pet } from "../interfaces/Pet";
import '../css/table.css'

export function ArraysEx () {
    const [colors, setColors] = useState<string[]>(["red", "orange", "purple", "blue"])

    function addColor(color:string) : void {
        setColors([...colors, color]);
        
    }

    const [ pets, setPets] = useState<Pet[]>(
        [{name: "toby", type: "dog", id: 1}, 
        {name: "Roxanne", type: "cat", id: 2},
        {name: "Ted", type: "turtle", id: 3},
        {name: "Penelope", type: "cat", id: 4},
        ]);

    return (
        <div>
            
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>id</th>
                    </tr>
                        { pets.map((pets) => <tr><td key={pets.name}>{pets.name}</td> <td key={pets.type}>{pets.type}</td> <td key={pets.id}>{pets.id}</td></tr>)} 
                </table>
            
            
            <ol>
                { colors.map((color, index) => <li key={index}>{color}</li>)}
            </ol>
            <button onClick={() => addColor('Violet')}>Violet</button>
            <button onClick={() => addColor('Green')}>Green</button>
            <button onClick={() => addColor('Gold')}>Gold</button>
            <button onClick={() => addColor('Aqua')}>Aqua</button>
        </div>
    )
}