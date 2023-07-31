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
                    <Box w="180px" h="78px" boxShadow={"2xl"}>
                        <Image src="/logo.jpeg" fit={"contain"} alt="raffle-logo" />
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
