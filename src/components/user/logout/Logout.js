import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../login/LoginContext';
const Logout = () => {
	let history = useHistory();
	const { isAuthenticate } = useContext(LoginContext);
    const [ isAuthenticated, setAuthentication ] = isAuthenticate;
    
	useEffect(() => {
		setAuthentication(false);
		localStorage.removeItem('token');
		history.push('/login');
	});

	return <div />;
};

export default Logout;
