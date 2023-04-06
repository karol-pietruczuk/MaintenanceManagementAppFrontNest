import React from 'react';
import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { UpperBar } from "./UpperBar";
import { Sidebar } from "./SideBar/Sidebar";

export const CommonNavWrap = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Sidebar
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <UpperBar onOpen={onOpen} />
    </Box>
  );
}