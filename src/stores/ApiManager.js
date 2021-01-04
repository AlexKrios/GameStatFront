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

  loadUsers() {
    return this.instance.get("/admin/users");
  }
}

