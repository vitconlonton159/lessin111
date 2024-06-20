import axios from 'axios';

const api = axios.create({
    baseURL: "https://66739aa86ca902ae11b4ba43.mockapi.io/bstapi/bst1/"
});

export default api;
