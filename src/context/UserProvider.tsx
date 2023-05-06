import { ReactNode, useState } from 'react';
import { UserContext } from './UserContext';

interface UserProviderProps {
  children: JSX.Element | JSX.Element[] | ReactNode
}

interface imagesTypes {
  id: string;
  url: string;
}

interface userObjectTypes {
  nickname: string,
  email: string,
  images: imagesTypes[],
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<userObjectTypes>({} as userObjectTypes);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}