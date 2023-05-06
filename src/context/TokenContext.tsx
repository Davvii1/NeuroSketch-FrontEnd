import { Dispatch, SetStateAction, createContext } from "react";

interface TokenContextType {
    token: string,
    setToken: Dispatch<SetStateAction<string>>,
}

export const TokenContext = createContext<TokenContextType>({} as TokenContextType);