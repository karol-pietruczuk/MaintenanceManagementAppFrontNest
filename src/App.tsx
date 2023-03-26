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
  //@TODO POPRAWKA -> po zalogowniu/refreshu zapisuj dane w Cache i po odświerzeniu odczytuj z cache. Po wylogowaniu/niepoprawnym refreshu kasuj cache. https://medium.com/javascript-dots/cache-api-in-javascript-644380391681 https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage
  return (
  <>
    <Routes>
      <Route path="/login" element={auth.jwt && auth.user.name && auth.user.surname && auth.user.id ? <Navigate to="/task" /> : <LayoutLogin />} />
      {/*<Route path="/task" element={auth.jwt && auth.user.name && auth.user.surname && auth.user.id ? <LayoutTask /> : <Navigate to="/login" />} />*/}
      <Route path="/task" element={ <LayoutTask /> } /> //@TODO Delete this line and uncomment upper line
      <Route path="/" element={auth.jwt && auth.user.name && auth.user.surname && auth.user.id ? <Navigate to="/task" /> :
        <Navigate to="/login" />} />
    </Routes>
  </>
  )
}
