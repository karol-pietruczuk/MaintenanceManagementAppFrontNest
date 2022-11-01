import React from 'react';
import { Progress } from "@chakra-ui/react";
import { LoginForm } from "./extractedComponents/LoginForm/LoginForm";
import { CommonLogoHeader } from "../../common/CommonLogoHeader/CommonLogoHeader";
import { CommonFooter } from "../../common/CommonFooter/CommonFooter";
import { useAppSelector } from "../../../redux-toolkit/redux-hooks";
import { selectLoading } from "../../../redux-toolkit/features/loading/loadingSlice";
import { CommonLoadingBox } from "../../common/CommonLoadingBox/CommonLoadingBox";
import './LayoutLogin.css';

export const LayoutLogin = () => {
  const { progress } = useAppSelector(selectLoading);
  return (
    <div className={"layout_login"}>
      <Progress size="xs" value={progress} width={"100vw"}
                style={{ position: "absolute", top: 0, left: 0, background: "transparent" }} />
      <CommonLogoHeader descriptionVisibility={true}/>
      <LoginForm />
      <CommonLoadingBox />
      <CommonFooter />
    </div>
  );
}