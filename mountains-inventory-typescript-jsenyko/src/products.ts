interface Product{
    name:string
    price:number
}

let products:Product[] = [{name:"milk", price:6}, 
                        {name:"eggs", price:8},
                        {name:"bread", price:5},
                        {name:"chips", price:2}];

function calcAverageProductPrice(products:Product[]):number {
    let newPrice:number = 0;
    let priceHolder:number = 0;
    if(products.length > 0){
        for(let i = 0; i < products.length; i ++){
            priceHolder += products[i].price
        }
    }
    else{
        return 0;
    }
    newPrice = priceHolder / products.length
    return newPrice
}

console.log(calcAverageProductPrice(products));

export {calcAverageProductPrice, Product}