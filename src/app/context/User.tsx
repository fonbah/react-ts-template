import React, { FC, ReactNode, ReactElement, createContext, useState, useEffect } from 'react';

type propTypes = {
    children: ReactNode;
}

const UserContext = createContext({});

const UserProvider: FC<propTypes> = (props: propTypes): ReactElement => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        //Pull saved state here
        () => setUser(() => null);
    }, []);

    const UserContextValue = { user };

    return <UserContext.Provider value={UserContextValue} {...props} />
};

export { UserProvider, UserContext };