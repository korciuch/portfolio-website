import React from 'react'
import Navigation from './Navigation'
import { Flex, Spacer, Heading, Text} from '@chakra-ui/react'

function Header(){
    return (
        <Flex
            align="center"
            p={[5, 10, 25, 50]}
            //bg="gray.200"
        >
            <Heading size="md">
                <Text>Port of Folio</Text>
            </Heading>
            <Spacer />
            <Navigation />
        </Flex>
    )
}

export default Header