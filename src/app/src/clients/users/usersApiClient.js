import createAuthApiClient from "../createAuthApiClient";
import { URLS } from "../../config";

export default {
    getAll: () => createAuthApiClient().get(URLS.USERS.ALL)
}
