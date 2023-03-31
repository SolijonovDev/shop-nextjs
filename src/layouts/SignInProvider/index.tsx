import React, { FC, ReactNode, createContext, useContext, useState } from 'react';

import { SignInPopup } from './SignInPopup';

const SignInContext = createContext<any>(null);

interface ISignInProviderProps {
  children: ReactNode;
}

export const SignInProvider: FC<ISignInProviderProps> = ({ children }) => {
  const [isOpen, setOpen] = useState(true);

  const showSignInPopup = () => {
    setOpen(true);
  };

  const hideSignInPopup = () => {
    setOpen(false);
  };

  return (
    <SignInContext.Provider value={{ showSignInPopup, hideSignInPopup }}>
      {children}
      <SignInPopup close={hideSignInPopup} isOpen={isOpen} />
    </SignInContext.Provider>
  );
};

export const useSignIn = () => useContext(SignInContext);
