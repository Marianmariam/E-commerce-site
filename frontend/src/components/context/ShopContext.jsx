import { products } from '../../assets/assets';

import { createContext } from "react";
export const ShopContext = createContext();

 const ShopContextProvider = (props) => {

    const currency= 'RON';
    const delivery_fee = 9.99;


    const value = {
        products, currency, delivery_fee
    }

    return(
        <ShopContext.Provider value={value}>
        {props.children}
        </ShopContext.Provider>
    )
 }
 export default ShopContextProvider