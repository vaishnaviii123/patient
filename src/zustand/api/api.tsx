import axios from 'axios';

const BASE_URL="http://151.106.34.115:8004/api/v1"
const api = axios.create({
  baseURL: BASE_URL, // Your base URL
  timeout: 10000, // Request timeout (10 seconds)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
