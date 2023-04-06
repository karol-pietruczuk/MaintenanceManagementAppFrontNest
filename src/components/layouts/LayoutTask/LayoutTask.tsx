import React from 'react';
import { Box } from "@chakra-ui/react";
import { CommonNavWrap } from "../../common/CommonNavWrap/CommonNavWrap";
import { CommonFooter } from "../../common/CommonFooter/CommonFooter";

export const LayoutTask = () => {
  return <>
    <CommonNavWrap />
    <Box
      ml={{ base: 0, md: 60 }}
      p="4"
      minHeight="81vh"
    >
    </Box>
    <CommonFooter/>
  </>
}