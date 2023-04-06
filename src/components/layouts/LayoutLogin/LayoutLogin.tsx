import React from 'react';
import { Flex, Progress, useColorModeValue } from "@chakra-ui/react";
import { LoginForm } from "./loginComponents/LoginForm/LoginForm";
import { CommonLogoHeader } from "../../common/CommonLogoHeader/CommonLogoHeader";
import { useAppSelector } from "../../../redux-toolkit/redux-hooks";
import { selectLoading } from "../../../redux-toolkit/features/loading/loadingSlice";
import { CommonLoadingBox } from "../../common/CommonLoadingBox/CommonLoadingBox";
import { LoginFooter } from "./loginComponents/LoginFooter/LoginFooter";

export const LayoutLogin = () => {
  const { progress } = useAppSelector(selectLoading);
  const bgColor = useColorModeValue('white', 'gray.800');
  const fontColor = useColorModeValue('gray.800', 'white');
  const progressBarOpacity = progress > 0 ? 1 : 0;
  return (
    <Flex className={"layout_login"}
      position='relative'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight={'90vh'}
      bg={bgColor}
      color={fontColor}
    >
      <Progress
        size="xs"
        value={progress}
        width={"100vw"}
        bg={bgColor}
        position='absolute'
        top={0}
        left={0}
        opacity={progressBarOpacity}
        transition={'opacity 0.8s'}
      />
      <CommonLogoHeader
        descriptionVisibility={true}
      />
      <LoginForm />
      <CommonLoadingBox />
      <LoginFooter/>
    </Flex>
  );
}