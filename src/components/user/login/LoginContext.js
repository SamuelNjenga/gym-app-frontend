import React, { createContext, useState } from 'react';
export const LoginContext = createContext();
export const LoginProvider = (props) => {
	const [ isAuthenticated, setAuthentication ] = useState(localStorage.getItem('token') ? true : false);

	return (
		<LoginContext.Provider value={{ isAuthenticated: [ isAuthenticated, setAuthentication ] }}>
			{props.children}
		</LoginContext.Provider>
	);
};
