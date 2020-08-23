import { API_BASE_URL } from '../constants';

import axios from 'axios';
export const getVehicles = async (values) => {
	return axios.post(`${API_BASE_URL}/login`,values);
};


