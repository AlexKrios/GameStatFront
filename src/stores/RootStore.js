import ApiManager from "./ApiManager";

import AuthStore from "./AuthStore";
import AdminStore from "./AdminStore";

export default class RootStore {
    constructor() {
        this.api = new ApiManager(this);

        this.authStore = new AuthStore(this);

        this.adminStore = new AdminStore(this);
    }
}
