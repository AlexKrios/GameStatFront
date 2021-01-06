import ApiManager from "./ApiManager";

import AuthStore from "./AuthStore";
import AdminStore from "./AdminStore";

import GetUsersStore from "./admin/users/GetUsersStore";
import CreateUserStore from "./admin/users/CreateUserStore";
import UpdateUserStore from "./admin/users/UpdateUserStore";
import DeleteUserStore from "./admin/users/DeleteUserStore";

export default class RootStore {
  constructor() {
    this.api = new ApiManager(this);

    this.authStore = new AuthStore(this);

    this.adminStore = new AdminStore(this);

    /* Users */
    this.getUsersStore = new GetUsersStore(this);
    this.createUserStore = new CreateUserStore(this);
    this.updateUserStore = new UpdateUserStore(this);
    this.deleteUserStore = new DeleteUserStore(this);
  }
}
