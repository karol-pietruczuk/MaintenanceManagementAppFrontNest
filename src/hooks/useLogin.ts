import { FormEvent, useRef, useState } from "react";
import { ToastId, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { asyncTimeout } from "../utils/accessoryFunctions";
import { clearAuthData, setAuthData } from "../redux-toolkit/features/auth/authSlice";
import { useAppDispatch } from "../redux-toolkit/redux-hooks";
import { QueryApi } from "../utils/queryApi";


export const useLogin = (email = '', pwd = '') => {
  const [loginData, setLoginData] = useState({email, pwd});
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const [res] = await Promise.all([QueryApi.login(loginData, dispatch), asyncTimeout(500)])
    setLoginData({email: '', pwd: ''});
    setLoading(false);
    await asyncTimeout(500);
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