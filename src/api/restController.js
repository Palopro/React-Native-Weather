import axios from 'axios';
import { baseUrl, appId } from './baseURL';

export const getWeather = (city) => axios.get(`${baseUrl}?q=${city}&units=metric&${appId}`)