import React from 'react';
import { Heading, Stack, Text, Image, Grid, GridItem, Center, UnorderedList, ListItem, useBreakpointValue, Link, ExternalLinkIcon, HStack} from '@chakra-ui/react';
import MySpacer from './MySpacer.js'
import '../index.css'
import { useSpring, animated as a } from 'react-spring'

const About = () => {

    const resizeLargeHeader = useBreakpointValue({
        base: "lg", 
        lg: "3xl",
        md:"2xl",
        sm: "lg",
        xs: "lg"
    })
    const resizeSubHeader = useBreakpointValue({
        base: "md",
        lg: "xl",
        md: "lg",
        sm: "md",
        xs: "md"
    })

    return (

        <Stack p="5px">
            <MySpacer height={[10, 25, 50]}/>
            <Grid
                h="200px"
                templateRows="repeat(3, 1fr)"
                templateColumns="repeat(1, 1fr)"
                //gap={50}
                px={["5%", "10%", "15%", "20%"]}
                >
                <GridItem 
                    rowSpan={1}
                    p="5px"
                >
                    <HStack>
                        <Image
                            objectFit="cover"
                            src="./Images/signing-day_1_1086x724.jpg"
                            boxSize="50%"
                            style={{
                                clipPath: "polygon(100% 0%, 30% 0%, 0% 30%, 0% 100%, 70% 100%, 100% 70%)"
                            }}
                        />
                        <Image
                            objectFit="cover"
                            src="./Images/final-four-shot.JPG"
                            boxSize="50%"
                            style={{
                                clipPath: "polygon(0% 0%, 70% 0%, 100% 30%, 100% 100%, 30% 100%, 0% 70%)"
                            }}
                        />
                    </HStack>
                </GridItem>
                <GridItem 
                    rowSpan={1}
                    p="5px"
                >
                    <HStack>
                        <Image
                            objectFit="cover"
                            src="./Images/honorary-captain_1086x724.jpg"
                            boxSize="50%"
                            style={{
                                clipPath: "polygon(0% 0%, 70% 0%, 100% 30%, 100% 100%, 30% 100%, 0% 70%)"
                            }}
                        />
                        <Image
                            objectFit="cover"
                            src="./Images/team-huddle_1086x724.jpg"
                            boxSize="50%"
                            style={{
                                clipPath: "polygon(0% 30%, 30% 0%, 100% 0%, 100% 70%, 70% 100%, 0% 100%)"
                            }}
                        />
                    </HStack>
                </GridItem>
                <GridItem 
                    //bg="gray.400"
                    rowSpan={1}
                    p="5px"
                >
                    <Heading
                        size="sm"
                        paddingBottom="10px"
                    >
                        
                    </Heading>
                    <Text
                        paddingBottom="10px"
                    >
                        
                    </Text>
                    <Heading
                        size="sm"
                        paddingBottom="10px"
                    >
                        
                    </Heading>
                    <Text
                        paddingBottom="10px"
                    >
                        
                    </Text>
                    <Heading
                        size="sm"
                        paddingBottom="10px"
                    >
                        
                    </Heading>
                    <Text
                        paddingBottom="10px"
                    >
                        
                    </Text>
                </GridItem>
                <MySpacer height={50}/>
            </Grid>
        </Stack>  
    )
}

export default About