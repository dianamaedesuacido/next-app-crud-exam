import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" m={5}>
      <Box p="2">
        <Heading size="md">CRUD App</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2" alignItems="center">
        <Button colorScheme="teal">Sign Up</Button>
        <Button colorScheme="teal">Log in</Button>

        <Avatar />
      </ButtonGroup>
    </Flex>
  );
};

export default NavBar;
