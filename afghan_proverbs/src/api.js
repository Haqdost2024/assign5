import axios from 'axios';

const API_BASE = 'http://localhost:3000/proverbs';

export const getAllProverbs = () => axios.get(API_BASE);
export const getProverb = (id) => axios.get(`${API_BASE}/${id}`);
export const addProverb = (data) => axios.post(API_BASE, data);
export const updateProverb = (id, data) => axios.put(`${API_BASE}/${id}`, data);
export const deleteProverb = (id) => axios.delete(`${API_BASE}/${id}`);