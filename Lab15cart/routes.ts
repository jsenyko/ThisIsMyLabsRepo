import express, { Router,  Request, Response } from 'express';
import { Item } from "./item"

//hard coded data
let itemArray:Item[] = [
    { id: 1, quantity:20, price:6.33, product:"Eggs", isActive: true},
    { id: 2, quantity:4, price:3.50, product:"spicy ranch", isActive: true},
    { id: 3, quantity:77, price:70, product:"icecream", isActive: true},
    { id: 4, quantity:2, price:10.99, product:"dude bro spaghetti Os", isActive: true}
];

export const itemRouter = Router();

itemRouter.get("/", async (req:Request, res:Response) : Promise<Response> => {
    if(req.query.maxPrice !== undefined){
        let underArray = itemArray.filter((x) => x.price <= Number(req.query.maxPrice) && x.isActive);
        return res.status(200).json(underArray);
    }
    //prefix is the parameter
    else if(req.query.prefix !== undefined){
        let startsWithArray = itemArray.filter((x) => x.product.startsWith(String(req.query.prefix)) && x.isActive);
        return res.status(200).json(startsWithArray);
    }
    else if(req.query.pageSize !== undefined){
        return res.status(200).json(itemArray.filter((x) => x.isActive).slice(0, Number(req.query.pageSize)));
    }
    else{
        return res.status(200).json(itemArray.filter((x) => x.isActive));
    }
});

//CRUD create read update delete


//uri parameter
itemRouter.get("/:id", async (req:Request, res:Response) : Promise<Response> => {
    let itemIWantToFind = itemArray.find((x) => x.id === Number(req.params.id));

    if(itemIWantToFind === undefined){
        return res.status(404).send("ID not found");
    }
    else{
        return res.status(200).json(itemIWantToFind);
    }
});


itemRouter.post("/", async (req:Request, res:Response) : Promise<Response> => {
    let newItem:Item = {
        id: GetNextId(),
        product: String(req.body.product),
        price: Number(req.body.price),
        quantity: Number(req.body.quantity),
        isActive: true
    };

    itemArray.push(newItem);

    return res.status(201).json(newItem);
});

itemRouter.put("/:id", async (req:Request, res:Response) : Promise<Response> => {
    //find the item by id
    let hiddenItem = itemArray.find((x) => x.id === Number(req.params.id));

    if(hiddenItem !== undefined){
    hiddenItem.price = Number(req.body.product);
    hiddenItem.product = String(req.body.product);
    hiddenItem.quantity = Number(req.body.product);
    //update the properties of the item based on what is sent in the body of the request

    //return a status of 200, with the updated item in json format
    return res.status(200).json(hiddenItem);
    }
    else{
        return res.status(404).send("didn't find that")
    }

})


itemRouter.delete("/:id", async (req:Request, res:Response) :Promise<Response> => {
    let itemFound = itemArray.find((x) => x.id === Number(req.params.id));

    if(itemFound === undefined){
        return res.status(404).send("Who dat?")
    }
    else{
        //itemArray = itemArray.filter((x) => x.id !== Number(req.params.id))

        itemFound.isActive = false;
        return res.status(204).send("Deleted");
    }

})

///helper function to that gets the next ID number when we Post a new item 
function GetNextId(){
    return Math.max(...itemArray.map((x) => x.id)) + 1;
 }








