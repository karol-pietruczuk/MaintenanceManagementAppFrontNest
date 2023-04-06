import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

interface Props {
  fontSize?: number;
  marginTop?: number;
  marginLeft? :string;
}

export const CommonFooter = (props: Props) => {
  return (
    <Flex
      cursor="default"
      marginTop={props.marginTop !== undefined ? props.marginTop : 0}
      marginLeft={{base: 0, md: props.marginLeft !== undefined ? props.marginLeft : '15rem'}}
      fontSize={props.fontSize ? props.fontSize : "1em"}
      position='sticky'
      bg={useColorModeValue('white', 'gray.900')}
      // height="14"
      height="8vh"
      borderTop="1px"
      borderTopColor={useColorModeValue('gray.200', 'gray.700')}
      alignItems="center"
      justifyContent={'center'}
    >
      &copy;Copyright plx 2023 | by CaolDev
    </Flex>
  )
};