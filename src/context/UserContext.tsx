import { FC, PropsWithChildren, createContext, useState } from 'react';

const UserContext = createContext([{}, () => {}]);
const initialState = {};

const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(initialState);

  return <UserContext.Provider value={[state, setState]}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
