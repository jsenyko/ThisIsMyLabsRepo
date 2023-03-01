import { useEffect, useState } from "react";
import { Quotes } from "../models/Quotes";
import { GetQuoteData } from "../services/QuoteService";

export function TheQuotes(){
    
    const [quote, setQuote] = useState<Quotes[]>();
    
    useEffect(() => {
        GetQuoteData().then(data => setQuote(data));
    }, []);

    useEffect(() => {
        console.log(quote);
    }, [quote])

    let saying = quote?.map((quotes) =>(
        <ul>
            <li>{quotes.author}</li>
            <li>{quotes.text}</li>
        </ul>
    ));

 

    return(
        <div>
            {quote !== undefined && <>{saying}</> }
        </div>
    )



}