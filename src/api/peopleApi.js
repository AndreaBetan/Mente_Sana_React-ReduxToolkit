import axios from 'axios';

export const peopleApi = axios.create({
    baseURL : 'https://randomuser.me/api'
});
