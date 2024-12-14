import { createContext, useContext, useState } from "react";

const CardsContext = createContext()

export const CardProvider  = ({chidren}) => {
    const [type, setType] = useState("annually")
    
}