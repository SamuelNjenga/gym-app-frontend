import {
	API_BASE_URL
} from '../constants';

import axios from 'axios';
export const postLogin = async (values) => {
	return axios.post(`${API_BASE_URL}/login`, values);
};
export const postUserRegistration = async (values) => {
	return axios.post(`${API_BASE_URL}/users`, values);
};