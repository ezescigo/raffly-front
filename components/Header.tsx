"use client"

import { Flex, Heading, Spacer, ButtonGroup, Button, Box, chakra, HStack } from "@chakra-ui/react"
import Link from "next/link"
import { ConnectButton } from "web3uikit"

export const Header = () => {
    return (
        <chakra.header id="header">
            <Flex w="100%" px="6" py="5" align="center" justify="space-between">
                {/* <Image src={Logo.src} h="50px" /> */}
                <HStack>
                    <Box>Raffly</Box>
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
