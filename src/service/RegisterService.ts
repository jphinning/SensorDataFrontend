import axiosHttp from "../config/axiosHttp";

export interface userPayload {
  email: string;
  password: string;
}

export class RegisterService {
  public async create(data: userPayload) {
    return await axiosHttp.post("register", data);
  }
}
