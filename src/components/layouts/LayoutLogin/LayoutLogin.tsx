import React from 'react';
import { Flex, Progress, useColorModeValue } from "@chakra-ui/react";
import { LoginForm } from "./loginComponents/LoginForm/LoginForm";
import { CommonLogoHeader } from "../../common/CommonLogoHeader/CommonLogoHeader";
import { useAppSelector } from "../../../redux-toolkit/redux-hooks";
import { selectLoading } from "../../../redux-toolkit/features/loading/loadingSlice";
import { CommonLoadingBox } from "../../common/CommonLoadingBox/CommonLoadingBox";
import { LoginFooter } from "./loginComponents/LoginFooter/LoginFooter";
import './LayoutLogin.css';

export const LayoutLogin = () => {
  const { progress } = useAppSelector(selectLoading);
  return (
    <Flex className={"layout_login"}
          minHeight={'100vh'}
          bg={useColorModeValue('white', 'gray.800')}
    >
      <Progress size="xs" value={progress} width={"100vw"}
                color={useColorModeValue('white', 'gray.800')} //@TODO Check if right colors
                style={{ position: "absolute", top: 0, left: 0, background: "transparent" }} />
      <CommonLogoHeader descriptionVisibility={true}/>
      <LoginForm />
      <CommonLoadingBox />
      <LoginFooter/>
    </Flex>
  );
}