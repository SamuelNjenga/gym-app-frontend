import React, { createContext, useState ,useContext} from 'react';
export const UserContext = createContext();
export function useUser () {
	return useContext(UserContext)
  }
export const UserProvider = (props) => {
    const [ userId, setUserId ] = useState(0);
    const [ userRole, setUserRole ] = useState('');
    const [ userEmail, setUserEmail ] = useState('');

	return (
		<UserContext.Provider value={{ userId, setUserId,userRole, setUserRole,userEmail, setUserEmail }}>
			{props.children}
		</UserContext.Provider>
	);
};
