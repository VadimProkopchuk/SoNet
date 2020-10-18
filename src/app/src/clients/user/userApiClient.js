import createAuthApiClient from "../createAuthApiClient";
import { URLS } from "../../config";

export default {
    getCurrent: () => createAuthApiClient().get(URLS.USER.CURRENT)
}
