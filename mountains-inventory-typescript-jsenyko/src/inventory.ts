import { Product } from "./products";

interface InventroyItem{
    product: Product,
    quantity: number;
}

let inventory:InventroyItem[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10}, 
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}
                                ];

function calcInventoryValue(inventory:InventroyItem[]): number{
    let sum = 0;
    for(let i = 0; i < inventory.length; i ++){
        
        if(inventory.length === undefined || inventory.length ===0){
        return sum
        }
        else{
            sum += inventory[i].product.price * inventory[i].quantity
        }
    }
    return sum

}