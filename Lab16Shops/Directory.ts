import express, { Router, Request , Response } from 'express';
import { Shop } from "./shop";

let shopArray:Shop[] = [
    { id: 111, name: "Pepper's Pizza", rating: 4.5 },
    { id: 222, name: "Clive's Chives", rating: 3.4 },
    { id: 333, name: "Betty's Brews", rating: 4.3 },
    { id: 444, name: "Sylvester's Shoes", rating: 3.8 },
    { id: 555, name: "Teddy's Tunes", rating: 4.7 }
];

export const shopRouter = Router();

shopRouter.get("/test", async (req:Request, res:Response) : Promise<Response> => {
    
    if(req.query.minRating !== undefined){
        return res.status(200).json(shopArray.filter((x) => x.rating >= Number(req.query.minRating)))
    } else {
    return res.status(200).json(shopArray);
    }
})

shopRouter.get("/test/:id", async (req:Request, res:Response) : Promise<Response> => {
    
    const id = req.params.id

    return res.status(200).json(shopArray.find((x) => x.id === Number(id)));
})

