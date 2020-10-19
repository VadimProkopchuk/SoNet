import axios from 'axios';
import { URLS } from '../config';
import storage from "../storage";

export default () => axios.create({
    baseURL: URLS.BASE_API_URL,
    headers: {
        common: {
            Authorization: `Bearer ${storage.token.get()}`
        }
    }
});
