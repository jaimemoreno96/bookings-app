import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

const LoginProvider = (props) => {
    const [login, setLogin] = useState(null);

    return (
        <LoginContext.Provider
            value={{
                login,
                setLogin
            }}
        >
            {props.children}
        </LoginContext.Provider>
    );
}

export default LoginProvider;