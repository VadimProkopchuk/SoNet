import axios from 'axios';
import { URLS } from '../config';

export default () => axios.create({
    baseURL: URLS.BASE_API_URL
});
