import { Dispatch, SetStateAction, createContext } from "react";

interface Search {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>,
}

export const DalleContext = createContext<Search>({} as Search);