import { useState } from "react"
import { Ad } from "./Ad";


export function AdDesign(){
    
    const [flavor, setFlavor] = useState<string>('Vanilla');
    const [isLight, setisLight] = useState<boolean>(true);
    const [fontSize, setFontSize] = useState<number>(12); 
    
    return(
        <div id="AdDesign">
            <h2>Ad Designer </h2>
            
            <h3>What to support:</h3>
                <Ad flavor={flavor} isLight={isLight} fontSize={fontSize}/>
            {/* <p>{flavor}</p>
            <p>{isLight.toString()}</p>
            <p>{fontSize}</p> */}

            <div className="button-bar">
                <button onClick={() => setFlavor('Chocolate')}>Chocolate</button>
                <button onClick={() => setFlavor('Vanilla')}>Vanilla</button>
                <button onClick={() => setFlavor('Strawberry')}>Strawberry</button>
            </div>

            <h3>Color Theme</h3>
            <div className="button-bar">
                <button onClick={() => setisLight(true)}>Light</button>
                <button onClick={() => setisLight(false)}>Dark</button>
            </div>

            <h3>Font Size</h3>
            <div className="button-bar">
                <button onClick={() => setFontSize(fontSize - 1)}>Down</button> 
                <input type="number" value ={fontSize}></input>
                <button onClick={() => setFontSize(fontSize + 1)}>Up</button>
            </div>
        </div>
    )
}