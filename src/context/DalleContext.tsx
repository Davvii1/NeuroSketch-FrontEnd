import { Dispatch, SetStateAction, createContext } from "react";

interface SearchContextType {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>,
}

export const DalleContext = createContext<SearchContextType>({} as SearchContextType);