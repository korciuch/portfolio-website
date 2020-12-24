import React from 'react';
import { Heading, Stack, Text, Image, Grid, GridItem, Center, UnorderedList, ListItem, useBreakpointValue, Link, ExternalLinkIcon} from '@chakra-ui/react';
import MySpacer from './MySpacer.js'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const HelloWorld = () => {

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

    const socials = [{
        name: 'Github',
        icon: faGithub,
        link: 'https://github.com/korciuch'
    },
    {
        name: 'LinkedIn',
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/kyleorciuch/'
    },
    {
        name: 'Instagram',
        icon: faInstagram,
        link: 'https://www.instagram.com/kyle.orciuch/?hl=en'
    },
    {
        name: 'Twitter',
        icon: faTwitter,
        link: 'https://twitter.com/kyle9883?lang=en'
    }
]

    return (
        <Stack p="5px">

            {/* <Heading fontSize="1em"> 
                Hello, {this.props.name} - Welcome to your website!
            </Heading> */}
            <MySpacer height={[10, 25, 50]}/>
            <Grid
                h="200px"
                templateRows="repeat(3, 1fr)"
                templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
                gap={50}
                px={["5%", "10%", "15%", "20%"]}
                >
                <GridItem 
                    //bg="gray.400"
                    rowSpan={1}
                    colSpan={[1, 2]}
                    p="5px"
                >
                    <Heading size={resizeLargeHeader}>
                        Student-Athlete attending Stanford University (CS '22)
                    </Heading>
                    <Heading 
                        size={resizeSubHeader}
                        paddingTop="10px"    
                    >
                        San Francisco Bay Area
                    </Heading>
                    
                </GridItem>
                <GridItem 
                    //bg="gray.400"
                    rowSpan={1}
                    colSpan={1}
                    p="5px"
                >  
                    <Center>
                        <Image
                            objectFit="cover"
                            //objectPosition="0 -35%"
                            src="./Images/outdoor-headshot.JPG"
                            boxSize="225px"
                            style={{
                                clipPath: "polygon(100% 0%, 30% 0%, 0% 30%, 0% 100%, 70% 100%, 100% 70%)"
                            }}
                            //boxShadow="dark-lg"
                        />
                    </Center>
                </GridItem>
                <GridItem 
                    //bg="gray.400"
                    rowSpan={1}
                    colSpan={[1, 2]}
                    p="5px"
                >
                    <Heading
                        size="sm"
                        paddingBottom="10px"
                    >
                        Background
                    </Heading>
                    <Text
                        paddingBottom="10px"
                    >
                        Hello! I'm Kyle Orciuch, a dedicated varsity student-athlete at 
                        Stanford University who is seeking a software engineering internship 
                        for summer 2021. My experience as an elite athlete has taught me that 
                        the greatest challenges cannot be solved without teamwork, as we know that the ball
                        always moves faster than the individual. Thus, I know what it is like to be a 
                        team-player, and a leader when necessary. My undergraduate CS career at Stanford 
                        so far has given me a strong command of systems programming in C/C++ and data
                        science in Python. My major track is Artificial Intelligence.
                    </Text>
                    <Heading
                        size="sm"
                        paddingBottom="10px"
                    >
                        Career Objectives
                    </Heading>
                    <Text
                        paddingBottom="10px"
                    >
                        Because I am a member of the varsity men's soccer team at Stanford, I have
                        a unique opportunity to experiment with the worlds of professional sports
                        and Silicon Valley. Therefore, if my playing career allows it, my intention
                        is to become a professional soccer player. However, I will be putting equal
                        attention to my career readiness as a aspriring ML/data science researcher. My
                        ultimate goal is to gain a foothold into tech leadership as a senior project
                        manager.
                    </Text>
                    <Heading
                        size="sm"
                        paddingBottom="10px"
                    >
                        What am I doing now?
                    </Heading>
                    <Text
                        paddingBottom="10px"
                    >
                        I have used my winter break to apply for summer 2021 internships and also
                        to build my own portfolio website from scratch using React.js and ChakraUI.
                        Moreover, I am entering the winter quarter signed up for ENGR 108 (Introduction 
                        to Matrix Methods) and CS 161 (Design and Analysis of Algorithms), which I see
                        as important (and exciting!) stepping stones for my upcoming AI/ML classes. Finally,
                        I'm ramping up my training as our team prepares for the 2021 spring season (stay
                        tuned for the PAC-12 TV schedule)! 
                    </Text>
                </GridItem>
                <GridItem 
                    //bg="gray.400"
                    rowSpan={1}
                    colSpan={1}
                    p="5px"
                >
                    <Stack>
                        <Heading size="md">
                            Featured Projects
                        </Heading>
                        <UnorderedList
                            paddingLeft="20px"
                        >
                            <ListItem>
                                CS 109 - Conditional Expectation of Boggle Simulation (Python)
                            </ListItem>
                            <ListItem>
                                This website! https://kyle.orciuch.org (React.js, ChakraUI)
                            </ListItem>
                        </UnorderedList>
                        <Heading size="md">
                            Class Projects
                        </Heading>
                        <UnorderedList
                            paddingLeft="20px"
                        >
                            <ListItem>
                                CS 106B - Huffman Encoding [File Compression] (C++) 
                            </ListItem>
                            <ListItem>
                                CS 107 - Implicit & Explicit Heap Allocators (C)
                            </ListItem>
                            <ListItem>
                                CS 110 - Custom Threadpool & Multithreaded RSS Aggregator (C++)
                            </ListItem>
                        </UnorderedList>
                        <Heading size="md">
                            Social
                        </Heading>
                        {
                            socials.map((s) => {
                                return (
                                    <a href={s.link} target="_blank">
                                        <FontAwesomeIcon icon={s.icon} /> {s.name} <FontAwesomeIcon size="xs" color="gray" icon={faExternalLinkAlt} />
                                    </a>
                                );
                            })
                        }
                    </Stack>
                </GridItem>
                <MySpacer height={50}/>
            </Grid>
        </Stack>  
    )
}

export default HelloWorld