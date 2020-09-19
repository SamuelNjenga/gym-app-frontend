import React, {  useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useLogin } from '../../contexts/LoginContext';
const Logout = () => {
	let history = useHistory();
	const { setAuthentication  } = useLogin()

	useEffect(() => {
		setAuthentication(false);
		localStorage.removeItem('token');
		history.push('/login');
	});

	return <div />;
};

export default Logout;
