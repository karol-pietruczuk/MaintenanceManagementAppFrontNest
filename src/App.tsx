import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import { LayoutLogin } from "./components/layouts/LayoutLogin/LayoutLogin";
import { LayoutTask } from "./components/layouts/LayoutTask/LayoutTask";
import { useAppSelector } from "./redux-toolkit/redux-hooks";
import { selectAuth } from "./redux-toolkit/features/auth/authSlice";
import './App.css';

export const App = () => {
  const auth = useAppSelector(selectAuth);
  //@TODO Dodaj tutaj zapytanie o authData. Gdy stronę odświerzymy, aby automatycznie dane wczytało z backendu. W sumie może być takie samo zapytanie jak refreshTokena.
  return (
  <>
    <Routes>
      <Route path="/login" element={auth.jwt && auth.user.name && auth.user.surname && auth.user.id ? <Navigate to="/task" /> : <LayoutLogin />} />
      <Route path="/task" element={auth.jwt && auth.user.name && auth.user.surname && auth.user.id ? <LayoutTask /> : <Navigate to="/login" />} />
      <Route path="/" element={auth.jwt && auth.user.name && auth.user.surname && auth.user.id ? <Navigate to="/task" /> :
        <Navigate to="/login" />} />
    </Routes>
  </>
  )
}
