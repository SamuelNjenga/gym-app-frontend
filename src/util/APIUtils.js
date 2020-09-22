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
export const postSessionRegistration = async (values) => {
	return axios.post(`${API_BASE_URL}/sessions`, values);
};
export const postDptRegistration = async (values) => {
	return axios.post(`${API_BASE_URL}/departments`, values);
};
export const postTrainersRegistration = async (values) => {
	return axios.post(`${API_BASE_URL}/trainers`, values);
};
export const postRoomRegistration = async (values) => {
	return axios.post(`${API_BASE_URL}/rooms`, values);
};
export const postProgramRegistration = async (values) => {
	return axios.post(`${API_BASE_URL}/programs`, values);
};
export const postUserSessionRegistration = async (values) => {
	return axios.post(`${API_BASE_URL}/userssessions`, values);
}
export const getEquipments = async () => {
	return axios.get(`${API_BASE_URL}/equipments`);
};
export const getPrograms = async () => {
	return axios.get(`${API_BASE_URL}/programs`);
};
export const getTrainers = async () => {
	return axios.get(`${API_BASE_URL}/trainers`);
};
export const getDepartments = async () => {
	return axios.get(`${API_BASE_URL}/departments`);
};
export const getRooms = async () => {
	return axios.get(`${API_BASE_URL}/rooms`);
};
export const getSessions = async () => {
	return axios.get(`${API_BASE_URL}/sessions`);
};
export const getUsersSessions = async () => {
	return axios.get(`${API_BASE_URL}/userssessions`);
};