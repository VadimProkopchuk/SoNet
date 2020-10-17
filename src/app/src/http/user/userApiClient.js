import authApiClient from "../authApiClient";
import { URLS } from "../../config";

export default {
    getCurrent: () => authApiClient().get(URLS.USER.CURRENT)
}
