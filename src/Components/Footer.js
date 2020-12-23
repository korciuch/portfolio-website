import React from 'react'
import { Flex, Text, Stack, Center } from '@chakra-ui/react'

function Footer(){
    return(
        <Flex
            alignItems="center"
            direction="column"
            fontFamily="'Fira Code' !important"
            pos="fixed" 
            bottom="0"
            left="0"
            right="0"
            zIndex="50"
            bg="gray.200"
            p="5px"
        >
            <Text> &copy; Copyright 2020 Kyle Orciuch</Text>
        </Flex>
    )
}

export default Footer