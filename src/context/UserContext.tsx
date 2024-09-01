import React, { createContext, useState, useContext, ReactNode } from "react";

//Define a type for the user state
type User = {
  id: string;
  userName: string;
  email: string;
  isAuthenticated: boolean;
};

//Define another interface for the context itself, which will include the user data and functions to modify it.
interface UserContextType {
  user: User | null; // The current user data or null if not logged in
  login: (userData: User) => void; // A function to log the user in by setting the user data
  logout: () => void; // A function to log the user out by clearing the user data
}

//Create the context
// Initially, the context is undefined because it will be provided later in the component tree.
const UserContext = createContext<UserContextType | undefined>(undefined);

// UserProvider component that wraps the app
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initialize the state to hold the user data. It starts as nu,, meaning no user is logged in.
  const [user, setUser] = useState<User | null>(null);

  // Define a login function which will be used to update the state with user data when user logs in.
  const login = (userData: User) => {
    setUser(userData);
  };

  // Define a logout function which will clear the user data from the state when user logs out.
  const logout = () => {
    setUser(null);
  };

  // Return the context provider component, passing down the user data and the login/logout functions.
  // All children components inside UserProvider will have access to this context.
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook that other components can use to access the user context easily.
export const useUser = () => {
  const context = useContext(UserContext); // Access the context

  // If the context is not within a provider (i.e, not wrapped by UserProvider), throw an error.
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  //  Return the context, which includes the user data and the login/logout functions.
  return context;
};
