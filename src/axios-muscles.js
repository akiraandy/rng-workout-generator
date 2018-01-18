import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://wger.de/api/v2/exercise/?&status=2&language=2&muscles=12&limit=5'
});

export default instance;