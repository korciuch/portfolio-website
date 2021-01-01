import React from 'react'
import { Box,
    Center,
    Text, Stack,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Heading,
    DrawerFooter,
    Button,
    useDisclosure
    
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Link
  } from 'react-router-dom';

function Navigation(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    // const maskTransitions = useTransition(showMenu, null, {
    //     from: { position: 'absolute', opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 },
    // })

    // const menuTransitions = useTransition(showMenu, null, {
    //     from: { opacity: 0, transform: 'translateX(-100%)' },
    //     enter: { opacity: 1, transform: 'translateX(0%)'},
    //     leave: { opacity: 0, transform: 'translateX(-100%)' },
    // })

    return (
        <Box
            as="button"
            color="black"
            fontSize="2em"
            display={['flex', 'none']}
        >
            <Center>
                <HamburgerIcon
                    onClick={onOpen}
                />
            </Center>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
            >
                <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                    <Stack
                        letterSpacing="2px"
                    >
                        <Link
                            to="/"
                            onClick={onClose}
                        >
                            <Heading size="md">
                                <Text>Home</Text>
                            </Heading>
                        </Link>
                        <Link
                            to="/about"
                            onClick={onClose}
                        >
                            <Heading size="md">
                                <Text>About</Text>
                            </Heading>
                        </Link>
                        <Link
                            to="/projects"
                            onClick={onClose}
                        >
                            <Heading size="md">
                                <Text>Projects</Text>
                            </Heading>
                        </Link>
                    </Stack>
                    </DrawerBody>

                    <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    </DrawerFooter>
                </DrawerContent>
                </DrawerOverlay>
            </Drawer>

            {/* {
                maskTransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={props}
                >
                    <Stack 
                        bg="rgba(0,0,0,0.2)"
                        zIndex="50"
                        pos="fixed"
                        top="0"
                        left="0"
                        w="full"
                        h="full"
                        onClick={() => setShowMenu(false)}
                    />
                </animated.div>
                )
            }

            {
                menuTransitions.map(({ item, key, props }) =>
                item && 
                <animated.div 
                    key={key} 
                    style={{
                        ...props,
                        backgroundColor: "white",
                        opacity: 0.95,
                        top: 0,
                        left: 0,
                        width: "75%",
                        height: "100%",
                        padding: 5,
                        zIndex: 51,
                        position: "fixed",
                        boxShadow: "5px 10px 20px 1px rgba(0, 0, 0, 0.4)",
                    }}
                >
                    <Stack
                        textColor="black"
                        textAlign="left"
                    >
                        <Text>
                            The Menu
                        </Text>
                        <UnorderedList>
                            <ListItem p="5">
                            <Link 
                                to="/"
                                onClick={() => setShowMenu(false)}
                            >
                                <Text color="blue.600">Home</Text>
                            </Link>
                            </ListItem>
                            <ListItem p="5">
                            <Link 
                                to="/about"
                                onClick={() => setShowMenu(false)}
                            >
                                <Text color="blue.600">About</Text>
                            </Link>
                            </ListItem>
                            <ListItem p="5">
                            <Link 
                                to="/projects"
                                onClick={() => setShowMenu(false)}
                            >
                                <Text color="blue.600">Projects</Text>
                            </Link>
                            </ListItem>
                        </UnorderedList>
                    </Stack>
                </animated.div>
                )
            } */}
        </Box>
    )
}

export default Navigation;