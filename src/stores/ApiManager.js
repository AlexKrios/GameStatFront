import axios from "axios";

export default class ApiManager {
  instance;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_PATH_BACK
    });
  }

  async adminLogin(values) {
    const {data} = await this.instance.post("/admin/login", values);

    return data;
  }

  loadUser(id) {
    return this.instance.get(`/admin/user/${id}`);
  }

  loadUsers() {
    return this.instance.get("/admin/users");
  }

  createUser(values) {
    return this.instance.post("/admin/user/create", values);
  }

  updateUser(id, values) {
    return this.instance.put(`/admin/user/update/${id}`, values);
  }

  deleteUser(id) {
    return this.instance.delete(`/admin/user/delete/${id}`);
  }
}

