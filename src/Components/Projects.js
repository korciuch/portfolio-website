import React, { useState }from 'react';
import { Document, Page } from 'react-pdf';
import { Heading, Stack, Text, Image, Grid, GridItem, Center, UnorderedList, ListItem, useBreakpointValue, Link, ExternalLinkIcon, Container} from '@chakra-ui/react';
import MySpacer from './MySpacer.js'
import '../index.css'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Projects = () => {

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

    const rescaleDoc = useBreakpointValue({
        base: "0.5",
        lg: "1.5",
        md: "1.0",
        sm: "0.75",
        xs: "0.33"
    })

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);  
    }

    return (
        <>
            <Stack
                p="5px"
                px={["5%", "10%", "15%", "20%"]}
            >
                <MySpacer height={[10, 25, 50]}/>
                <Heading size={resizeLargeHeader}>
                    Featured Project
                </Heading>
                <Heading 
                    size={resizeSubHeader}
                    paddingTop="10px"    
                >
                    CS 109 - Expected Value of Boggle Simulation
                </Heading>
            </Stack>
            <Stack 
                p="5px"
                px={["5%", "10%", "15%", "20%"]}
                bg="gray.100"
            >
                <Center>
                    <Document
                        file="./Articles/cs_109_final_project_orciuch_lau.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {Array.from(Array(numPages + 1).keys()).map((i) => {
                            return( 
                                <>
                                    <Page scale={rescaleDoc} 
                                        noData="" 
                                        pageNumber={i}/>
                                    <MySpacer />
                                </>
                            )
                        })}
                    </Document>
                </Center>
                <MySpacer height={50}/>
            </Stack>
        </>
    )
}

export default Projects