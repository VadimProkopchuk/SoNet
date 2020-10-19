import createApiClient from "../createApiClient";
import { URLS } from "../../config";

export default {
    auth: (email, password) => createApiClient().post(URLS.ACCOUNT.AUTH, { login: email, password })
}
