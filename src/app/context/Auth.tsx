import React, { FC, ReactNode, ReactElement, createContext, useState, useEffect } from 'react';

type propTypes = {
    children: ReactNode;
}

const AuthContext = createContext({});

const AuthProvider: FC<propTypes> = (props: propTypes): ReactElement => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        //Pull saved state here
    }, []);

    const login = () => Promise.resolve().then(() => setLoggedIn(true));

    const logout = () => Promise.resolve().then(() => setLoggedIn(false));

    const AuthContextValue = {
        login,
        logout,
        loggedIn,
    };

    return <AuthContext.Provider value={AuthContextValue} {...props} />
};

export { AuthProvider, AuthContext };