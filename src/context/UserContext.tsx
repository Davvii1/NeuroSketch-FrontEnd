import { Dispatch, SetStateAction, createContext } from "react";

interface imagesTypes {
    id: string;
    url: string;
}

interface userObjectTypes {
    nickname: string,
    email: string,
    images: imagesTypes[],
}

interface UserContextType {
    user: userObjectTypes,
    setUser: Dispatch<SetStateAction<userObjectTypes>>,
}

export const UserContext = createContext<UserContextType>({} as UserContextType);