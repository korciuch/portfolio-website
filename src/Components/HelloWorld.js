import React from 'react';
import { Heading, Stack, Text, Image, Grid, GridItem, Center, UnorderedList, ListItem, useBreakpointValue} from '@chakra-ui/react';
import MySpacer from './MySpacer.js'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


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

    const socials = [
        {
            name: 'Github',
            icon: faGithub,
            link: 'https://github.com/korciuch'
        },
        {
            name: 'LinkedIn',
            icon: faLinkedin,
            link: 'https://www.linkedin.com/in/kyleorciuch/'
        },
        /* {
            name: 'Instagram',
            icon: faInstagram,
            link: 'https://www.instagram.com/kyle.orciuch/?hl=en'
        }, */
        {
            name: 'Twitter',
            icon: faTwitter,
            link: 'https://twitter.com/kyle9883?lang=en'
        },
        {
            name: 'Email',
            icon: faEnvelope,
            link: 'mailto:korciuch@stanford.edu'
        }
    ];

    return (
        <Stack p="5px">

            {/* <Heading fontSize="1em"> 
                Hello, {this.props.name} - Welcome to your website!
            </Heading> */}
            <MySpacer height={[10, 25, 50]}/>
            <Grid
                h="200px"
                templateRows="repeat(3, 1fr)"
                templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
                gap={50}
                px={["5%", "10%", "15%", "20%"]}
                >
                <GridItem 
                    //bg="gray.400"
                    rowSpan={1}
                    colSpan={[1, 1, 2]}
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
                            boxSize="250px"
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
                    colSpan={[1, 1, 2]}
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
                        Hello! I'm Kyle Orciuch, an undergrad CS student at 
                        Stanford University who is seeking a machine learning / data engineering internship 
                        for the summer of 2022. My experience as a former elite athlete has taught me that 
                        the greatest challenges cannot be solved without teamwork, as we know that the ball
                        always moves faster than an individual. Thus, I know what it is like to be a 
                        team-player, and a leader when necessary. My undergraduate CS career at Stanford 
                        so far has given me a strong command of systems programming in C/C++ and data
                        science in Python. My major track is Artificial Intelligence. You can read my CV here:
                        <a
                            href="./Articles/orciuch_resume_09-18-21.pdf"
                            >
                            <Text 
                                color="blue.500"
                            >
                                Resume
                            </Text>
                        </a>
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
                        In other news, I decided to move on from the varsity soccer team to focus on my studies and
                        career readiness. It was a tough decsion, though I thought it was a necessary step forward.
                        This past summer, I had the pleasure of interning at Second Front 
                        Systems under Chief Data Scientist Michael Neumann, who worked previously at the CIA.
                        I learned a great deal about DevSecOps, CI/CD pipelines, ETL processes. The core concept
                        behind the company is pretty cool, namely that conducting successful acquisition warfare
                        is crucial to the national security and competitiveness of the United States. I will be working
                        for them for the rest of the year part-time. Feel free to check them out: 
                        <a
                            href="https://secondfront.com"
                            >
                            <Text 
                                color="blue.500"
                            >
                                2F Website
                            </Text>
                        </a>
                    </Text>
                    <Heading
                        size="sm"
                        paddingBottom="10px"
                    >
                        What have I done this year? 
                    </Heading>
                    <Text
                        paddingBottom="10px"
                    >
                        Earlier this year, I had the opportunity to work on a Stanford publication for CS 230, 
                        taught by Andrew Ng. Two friends of mine, Ryan Ludwick and Philip Lambert, decided to
                        work on a deep learning project for classifying commmon chest xray abnormalities. We were
                        inspired to choose this topic because of the stress being put on hospitals and intensive
                        care units all across the country at the time. You can read the paper here:
                        <a
                            href="http://cs230.stanford.edu/projects_winter_2021/reports/70763780.pdf"
                            >
                            <Text 
                                color="blue.500"
                            >
                                CS 230 Website
                            </Text>
                        </a>
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
                                Repos available upon request:
                            </ListItem>
                            <ListItem>
                                CS 107 - Implicit & Explicit Heap Allocators (C)
                            </ListItem>
                            <ListItem>
                                CS 110 - Custom Threadpool & Multithreaded RSS Aggregator (C++)
                            </ListItem>
                            <ListItem>
                                CS 124 - Chatbot: Interactive Movie Recommender System (Python)
                            </ListItem>
                            <ListItem>
                                CS 230 - Diagnosing Chest Abnormalities with Deep Learning (Keras)
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
