import { Dispatch, SetStateAction, createContext } from "react";

interface LoadingContextType {
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
}

export const LoadingContext = createContext<LoadingContextType>({} as LoadingContextType);