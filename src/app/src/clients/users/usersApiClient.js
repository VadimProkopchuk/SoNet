import createAuthApiClient from "../createAuthApiClient";
import { URLS } from "../../config";

export default {
    getAll: () => createAuthApiClient().get(URLS.USERS.ALL),
    getById: id => createAuthApiClient().get(URLS.USERS.GET_BY_ID(id)),
}
