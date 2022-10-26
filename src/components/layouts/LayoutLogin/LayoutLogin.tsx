import './LayoutLogin.css';
import { CommonLogoHeader } from "../../common/CommonLogoHeader/CommonLogoHeader";
import { LoginForm } from "./extractedComponents/LoginForm/LoginForm";
import { Footer } from "../../common/CommonFooter/CommonFooter";
import './LayoutLogin.css';

export const LayoutLogin = () => (
  <div className={'layout_login'}>
    <CommonLogoHeader/>
    <LoginForm/>
    <Footer/>
  </div>
);