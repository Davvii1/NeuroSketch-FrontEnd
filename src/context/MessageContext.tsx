import { Dispatch, SetStateAction, createContext } from "react";

interface MessageContextType {
    message: string,
    setMessage: Dispatch<SetStateAction<string>>,
}

export const MessageContext = createContext<MessageContextType>({} as MessageContextType);