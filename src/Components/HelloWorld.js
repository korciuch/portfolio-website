import React from 'react';
import { Heading, Stack, Text, Image, Grid, GridItem, Center, UnorderedList, ListItem, useBreakpointValue, Link, ExternalLinkIcon} from '@chakra-ui/react';
import MySpacer from './MySpacer.js'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const HelloWorld = () => {

    const resizeLargeHeader = useBreakpointValue({
        base: "3xl", 
        lg: "3xl",
        md:"2xl",
        sm: "lg"
    })
    const resizeSubHeader = useBreakpointValue({
        base: "2xl",
        lg: "xl",
        md: "lg",
        sm: "md"
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
                    <Text
                        paddingBottom="10px"
                    >
                        Hello! I'm Kyle Orciuch, a highly motivated and dedicated varsity student-athlete at 
                        Stanford University who is seeking a software engineering internship 
                        for summer 2021. My experience as an elite athlete has taught me that 
                        the greatest challenges cannot be solved without teamwork. 
                        Thus, I know what it is like to be a team-player, and a leader when necessary. 
                        My undergraduate CS career at Stanford so far has given me a strong command of C, 
                        C++, and Python, and my major track is Artificial Intelligence. 
                    </Text>
                    <Text
                        paddingBottom="10px"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                        like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    <Text
                        paddingBottom="10px"
                    >
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
                        in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
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