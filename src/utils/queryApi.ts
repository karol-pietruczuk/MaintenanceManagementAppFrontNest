import axios from "axios";
import { AuthLoginRequest, AuthLoginResponse } from "types";
import { apiURL } from "../config/api";
import { clearInProgress, setInProgress, setProgress } from "../redux-toolkit/features/loading/loadingSlice";
import { Dispatch } from "@reduxjs/toolkit";

export class QueryApi {
  static async login(loginData: AuthLoginRequest, dispatch: Dispatch): Promise<AuthLoginResponse | Error> {

    dispatch(setProgress(0));
    dispatch(setInProgress());
    const timeout = 20000;
    const timeSlice = 10;
    let progress = 0;

    const reqInterval = setInterval(() => {
      progress = progress + 100 * timeSlice / timeout;
      dispatch(setProgress(progress));
    }, timeSlice);

    try {
      const req = (await axios.post(`${apiURL}/auth`, loginData, {
        withCredentials: true,
        onDownloadProgress: async () => {
        },
        timeout
      })).data;

      clearInterval(reqInterval);
      if (progress < 100) {
        const timeToEnd = 500;
        const timeEndInterval = 4;
        const progressBeforeEnd = progress;

        const endLoadingInterval = setInterval(() => {
          if (progress < 100) {
            progress = progress + (100 - progressBeforeEnd) / (timeToEnd / timeEndInterval);
            dispatch(setProgress(progress));
          }
        }, timeEndInterval);

        await new Promise((resolve) => {
          const checkProgressInterval = setInterval(() => {
            if (progress >= 100) {
              clearInterval(checkProgressInterval);
              resolve('ok');
            }
          },10);
        })
        clearInterval(endLoadingInterval);
      }
      return req;
    } catch (error: any) {
      clearInterval(reqInterval);
      //@TODO Check error messages. If frontend server is disabled there is wrong message
      if (error?.response) {
        error.message = "invalid login data";
      } else if (error.code === "ERR_NETWORK") {
        error.message = "check your internet connection";
      } else if (error?.request) {
        error.message = "internal server error";
      } else {
        error.message = "application error";
      }
      return error;
    } finally {
      dispatch(clearInProgress());
      dispatch(setProgress(0));
    }
  }
}