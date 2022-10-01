import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3010' });

export const signIn = (email, password) => API.post('/signin', { email: email, password: password});
