"use client"

import {
    Flex,
    Heading,
    Spacer,
    ButtonGroup,
    Button,
    Box,
    chakra,
    HStack,
    useTheme,
    Img,
    Image,
} from "@chakra-ui/react"
import Link from "next/link"
import logo from "../public/assets/images/logo.jpeg"
import { ConnectButton } from "./connectButton/ConnectButton"

export const Header = () => {
    const theme = useTheme()

    return (
        <chakra.header id="header">
            <Flex bgColor="primary" w="100%" px="6" py="5" align="center" justify="space-between">
                {/* <Image src={Logo.src} h="50px" /> */}
                <HStack>
                    {/* <Box w="px" h="78px" boxShadow={"2xl"}> */}
                    <Flex flexDirection={"row"} w="200px" h="78px">
                        <Image src="/logo.jpeg" alt="raffle-logo" />
                        <Image
                            src="/logo2.png"
                            alt="raffle-logo2"
                            style={{
                                position: "absolute",
                                top: "11px",
                                left: "180px",
                                width: "80px",
                                filter: "drop-shadow(0 0 0.75rem rgb(67, 20, 90))",
                            }}
                        />
                    </Flex>
                    {/* </Box> */}
                </HStack>
                <HStack spacing={12}>
                    <Box>
                        <Link href="/#participate">
                            <Heading size="lg">PARTICIPATE</Heading>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/#create">
                            <Heading size="lg">CREATE</Heading>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/#about-us">
                            <Heading size="lg">ABOUT US</Heading>
                        </Link>
                    </Box>
                    <Box>
                        <Link href="/#faqs">
                            <Heading size="lg">FAQs</Heading>
                        </Link>
                    </Box>
                </HStack>

                <HStack>
                    <ConnectButton />
                </HStack>
            </Flex>
        </chakra.header>
    )
}

//  <HStack as="nav" spacing="5">
//                     {/* {data.map((item, i) => (
//                         <Link key={i}>
//                             <Button variant="nav"> {item.label} </Button>
//                         </Link>
//                     ))} */}
//                     <Link href={"/"}>
//                         <Button variant="nav">About</Button>
//                         <Button variant="nav">How it works</Button>
//                         <Button variant="nav">Contact us</Button>
//                     </Link>
//                 </HStack>
