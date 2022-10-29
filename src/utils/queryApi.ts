import axios from "axios";
import { AuthLoginRequest, AuthLoginResponse } from "types";
import { apiURL } from "../config/api";

export class QueryApi {
  static async login(loginData: AuthLoginRequest): Promise<AuthLoginResponse | Error> {
    try {
      return (await axios.post(`${apiURL}/auth`, loginData, {
        withCredentials: true,
      })).data;
    } catch (error: any) {
      //@TODO Check error messages. If frontend server is disabled there is wrong message
      if (error?.response) {
        error.message = 'invalid login data';
      } else if (error.code === 'ERR_NETWORK') {
        error.message = 'check your internet connection'
      } else if (error?.request) {
        error.message = 'internal server error';
      } else {
        error.message = 'application error';
      }
      return error;
    }
  }
}