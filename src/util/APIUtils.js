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
export const postEquipmentRegistration = async (values) => {
	return axios.post(`${API_BASE_URL}/equipments`, values);
};
export const getEquipments = async () => {
	return axios.get(`${API_BASE_URL}/equipments`);
};