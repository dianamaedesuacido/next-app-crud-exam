"use client";
import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  Link,
  Spacer,
  UnorderedList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsFillPersonBadgeFill } from "react-icons/bs";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Planholders", href: "/planholders" },
  ];
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" m={5}>
      <Link href="/">
        <BsFillPersonBadgeFill size="30px" />
      </Link>
      <UnorderedList>
        {links.map((link) => (
          <Link
            as={NextLink}
            key={link.href}
            href={link.href}
            fontSize="large"
            px={1}
          >
            {link.label}
          </Link>
        ))}
      </UnorderedList>
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
