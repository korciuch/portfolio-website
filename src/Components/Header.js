import React from 'react'
import Navigation from './Navigation'
import { Flex, Spacer, Heading, Text, HStack} from '@chakra-ui/react'
import {
    Link
  } from 'react-router-dom';

function Header(){
    return (
        <Flex
            align="center"
            p={[5, 10, 25, 50]}
            //bg="gray.200"
        >
            <Heading size="lg">
                Port of Folio
            </Heading>
            <Spacer />
            <HStack
                spacing={["5px", "10px", "50px"]}
                letterSpacing="2px"
                display={['none', 'flex']}
            >
                <Link
                    to="/"
                >
                    <Heading size="md">
                        <Text>Home</Text>
                    </Heading>
                </Link>
                <Link
                    to="/about"
                >
                    <Heading size="md">
                        <Text>About</Text>
                    </Heading>
                </Link>
                <Link
                    to="/projects"
                >
                    <Heading size="md">
                        <Text>Projects</Text>
                    </Heading>
                </Link>
            </HStack>
            <Navigation />
        </Flex>
    )
}

export default Header

