import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-a12/us-central1/api' //The API (Clound Function) URl
});

export default instance;