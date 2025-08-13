import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("defaut user");

  const updateUserName = (user) => {
    setUserName(user);
  };

  return (
    <UserContext.Provider value={{ userName, updateUserName }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook
export const useUserName = () => useContext(UserContext);
