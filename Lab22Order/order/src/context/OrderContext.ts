import { createContext } from "react";
import { OrderContextModel } from "./OrderContextModel";

const defaultValue:OrderContextModel = {
    order: [],
    addItem: () => {},
    removeItem: () => {}
}

const OrderContext = createContext(defaultValue);

export default OrderContext;