import React from 'react';
import { LoginForm } from "./extractedComponents/LoginForm/LoginForm";
import { CommonLogoHeader } from "../../common/CommonLogoHeader/CommonLogoHeader";
import { Footer } from "../../common/CommonFooter/CommonFooter";
import { Progress } from "@chakra-ui/react";
import './LayoutLogin.css';
import { useAppSelector } from "../../../redux-toolkit/redux-hooks";
import { selectLoading } from "../../../redux-toolkit/features/loading/loadingSlice";

export const LayoutLogin = () => {
  const loading = useAppSelector(selectLoading);
  return (
    <div className={"layout_login"}>
      <Progress size="xs" value={loading.progress} width={"100vw"}
                style={{ position: "absolute", top: 0, left: 0, background: "transparent" }} />
      <CommonLogoHeader />
      <LoginForm />
      <Footer />
    </div>
  );
}

// @TODO Dostosuj wielkość elementów na dużych ekranach.
// @TODO Dostosuj RWD.
// @TODO Dodaj pasek postępu. -> Dodaj feature redux loading {isLoading: boolean, progress: Number <0;100>}
