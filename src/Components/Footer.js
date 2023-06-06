import React from "react";
import { Flex, Text, Stack, Center } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      alignItems="center"
      direction="column"
      pos="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex="50"
      bg="#52555a"
      p="2px"
    >
      <Text> &copy; Copyright 2023 Kyle Orciuch</Text>
    </Flex>
  );
}

export default Footer;
