import React from 'react';
import { LoginForm } from "./extractedComponents/LoginForm/LoginForm";
import { CommonLogoHeader } from "../../common/CommonLogoHeader/CommonLogoHeader";
import { Footer } from "../../common/CommonFooter/CommonFooter";
import './LayoutLogin.css';

export const LayoutLogin = () => (
  <div className={'layout_login'}>
    <CommonLogoHeader/>
    <LoginForm/>
    <Footer/>
  </div>
);