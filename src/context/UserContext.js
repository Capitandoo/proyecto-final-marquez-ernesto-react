import React, {useState} from 'react'

export const UserContext = React.createContext ();

export const UserProvider = ({children}) =>  {

    const [id, setId] = useState();
    const [un, setUn] = useState ();

    return (
        <UserContext.Provider value={{
            id,
            un,
            setId,
            setUn,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
