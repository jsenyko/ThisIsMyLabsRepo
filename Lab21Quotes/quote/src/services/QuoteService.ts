import axios from "axios";
import { Quotes } from "../models/Quotes";


export function GetQuoteData() : Promise<Quotes[]> {
    return axios.get<Quotes[]>('https://grandcircusco.github.io/demo-apis/quotes.json')
        .then(response => response.data)
}