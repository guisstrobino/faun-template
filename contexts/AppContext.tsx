import React, { createContext, useState, ReactNode } from "react";

type AppContextProps = {
    isOnPlaceHolder: boolean;
    setIsOnPlaceHolder: (value: boolean) => void;
};

type AppProviderProps = {
    children: ReactNode;
};

export const AppContext = createContext<AppContextProps>({
    isOnPlaceHolder: false,
    setIsOnPlaceHolder: () => {},
});

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [isOnPlaceHolder, setIsOnPlaceHolder] = useState(true);

    return (
        <AppContext.Provider value={{ isOnPlaceHolder, setIsOnPlaceHolder }}>
            {children}
        </AppContext.Provider>
    );
};
