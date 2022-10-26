import { FormEvent, useState } from "react";
import { QueryApi } from "../utils/queryApi";
import { asyncTimeout } from "../utils/accessoryFunctions";

export const useLogin = (email = '', pwd = '') => {
  const [loginData, setLoginData] = useState({email, pwd});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const setEmail = (email: string) => {
    setLoginData({...loginData, email});
  }

  const setPwd = (pwd: string) => {
    setLoginData({...loginData, pwd})
  }

  const submitLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const [data] = await Promise.all([QueryApi.login(loginData), asyncTimeout(500)])
    setLoginData({email: '', pwd: ''});
    setLoading(false);
    await asyncTimeout(500);
    if (data instanceof Error) {
      setError(data.message);
      return;
    }
    //@TODO Zrób obsługę, dodania danych usera do zmiennych globalnych
    //@TODO Dodaj obsługę dodania informacji zwrotnej, że operacja logowania udana - useEffect na zmienne globalne w LoginForm
    //@TODO Dodaj obsługę navigacji na stronę z taskami/dashboard
  }

  return {loginData, setEmail, setPwd, submitLogin, loading, error, setError};
}