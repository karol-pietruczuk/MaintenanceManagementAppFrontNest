import { FormEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastId, useToast } from "@chakra-ui/react";
import { asyncTimeout } from "../utils/accessoryFunctions";
import { clearAuthData, setAuthData } from "../redux-toolkit/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/redux-hooks";
import { QueryApi } from "../utils/queryApi";
import {
  clearLoading,
  clearVisible,
  selectLoading,
  setLoading,
  setVisible
} from "../redux-toolkit/features/loading/loadingSlice";


export const useLogin = (email = '', pwd = '') => {
  const [loginData, setLoginData] = useState({email, pwd});
  const {loading} = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();
  const toast = useToast();
  const toastIdRef = useRef<ToastId>();
  const navigate = useNavigate();

  const setEmail = (email: string) => {
    setLoginData({...loginData, email});
  }

  const setPwd = (pwd: string) => {
    setLoginData({...loginData, pwd})
  }

  const submitLogin = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(setLoading());
    dispatch(setVisible());
    const [res] = await Promise.all([QueryApi.login(loginData, dispatch), asyncTimeout(500)])
    setLoginData({email: '', pwd: ''});
    dispatch(clearLoading());
    await asyncTimeout(500);
    dispatch(clearVisible());
    if (res instanceof Error) {
      dispatch(clearAuthData());
      toastIdRef.current = toast({ description: res.message, isClosable: true, status: "error" });
      return;
    }
    dispatch(setAuthData(res));
    toastIdRef.current = toast({ description: 'successfully logged in', isClosable: true, status: "success"});
    await asyncTimeout(1000);
    navigate('/task');
  }

  return {loginData, setEmail, setPwd, submitLogin, loading};
}