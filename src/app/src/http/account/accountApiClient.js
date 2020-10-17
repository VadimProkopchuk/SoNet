import apiClient from "../apiClient";
import { URLS } from "../../config";

export default {
    auth: (email, password) => apiClient().post(URLS.ACCOUNT.AUTH, { login: email, password })
}
