import React, { useEffect, useState }from 'react';
import { Document, Page } from 'react-pdf';
import { Heading, Stack, Text, Image, Grid, GridItem, Center, UnorderedList, ListItem, useBreakpointValue, Link, ExternalLinkIcon, Flex} from '@chakra-ui/react';
import MySpacer from './MySpacer.js'
import '../index.css'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {cb} from 'react-syntax-highlighter/dist/esm/styles/prism'

const About = () => {
    const [md, setMd] = useState("");

    useEffect(()=> {
        fetch("/Articles/about_me.md")
            .then((r)=>{
                r.text().then((t)=>{
                    setMd(t);
                })
            })
    }, []) 

    const renderers = {
        code: ({language, value}) => {
            return <Flex
                    direction="column"
                    paddingTop="20px"
                    paddingBottom="20px"
                    >
                        <SyntaxHighlighter 
                            style={cb} 
                            language={language} 
                            children={value} 
                        />
                    </Flex>
        },
        heading: ({level, children}) => {
            return <Heading 
                    marginTop="5px"
                    marginBottom="5px"
                    as={"h" + level} 
                    fontSize={35 - 4*level}
                    children={children}
                    />
        },
        // add breakpoints for images - make article dynamic 
        image: ({alt, src, title}) => {
            return <Center>
                        <Image 
                            paddingTop="5px"
                            paddingBottom="5x"
                            alt={alt}
                            src={src} 
                            title={title}
                            boxSize={["100%", "100%", "100%", "100%", "60%"]}
                        />
                    </Center>
        },
        paragraph: ({children}) => {
            return <Text 
                    marginTop="5px"
                    marginBottom="5px"
                    children={children}
                    />
        },
        blockquote: ({children}) => {
            return  <Center
                        paddingRight="5%"
                        paddingLeft="5%"
                        marginTop="15px"
                        marginBottom="15px"
                    >
                        <Text
                            children={children}
                        >
                        </Text>
                    </Center>
        },
        link: p => {
            console.log(p)
            return (p.node.children[0].value == "iframe" ? 
            <Center><iframe iframe width="1000px" height="700px"  src={p.href}/></Center>
            : 
            <a children={p.children} href={p.node.url}/>)
        }
    }

    return (
        <Flex
            direction="column"
            px={["5%", "10%", "15%", "20%"]}
        >
            <MySpacer height={10}/>
            <ReactMarkdown renderers={renderers} source={md} />
            <MySpacer height={75}/>
        </Flex>
    )
}

export default About