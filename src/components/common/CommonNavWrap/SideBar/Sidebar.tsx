import React from "react";
import { Box, BoxProps, CloseButton, Flex, useColorModeValue } from "@chakra-ui/react";
import { CommonLogoHeader } from "../../CommonLogoHeader/CommonLogoHeader";
import { SideBarNavItem } from "./SideBarNavItem";
import { FiTrendingUp } from "react-icons/fi";
import { FaTasks } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BsBuildingFillGear } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { IconType } from "react-icons";


interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: FiTrendingUp },
  { name: 'Tasks', icon: FaTasks },
  { name: 'Parts', icon: GiGears },
  { name: 'Orders', icon: HiOutlineShoppingCart },
  { name: 'Calendar', icon: AiTwotoneCalendar },
  { name: 'Locations & machines', icon: BsBuildingFillGear },
  { name: 'Teams', icon: RiTeamFill },
  //{ name: 'Account', icon: MdOutlineManageAccounts },
];

export const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      overflowY="auto"
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <CommonLogoHeader imageSize={32} logoFontSize={18} descriptionVisibility={true} descriptionFontSize={14} menuMarginTop={"15px"}/>
      <Flex h="4" alignItems="center" mx="8" justifyContent="space-between">
        {/*<Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">*/}
        {/*  Logo*/}
        {/*</Text>*/}

        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} marginBottom={10}/>
      </Flex>
      {LinkItems.map((link) => (
        <SideBarNavItem key={link.name} icon={link.icon}>
          {link.name}
        </SideBarNavItem>
      ))}
      {/*<LoginFooter fontSize={10}/>*/}
    </Box>
  );
};
