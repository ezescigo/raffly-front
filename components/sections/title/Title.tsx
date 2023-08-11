"use client"

import { Flex, Heading, VStack, chakra } from "@chakra-ui/react"

interface TitleProps {
    title: string
    subtitle: string
}

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
    return (
        <chakra.header id="title">
            <Flex w="100%" px="6" py="2" marginY="8" align="center" justify="space-between">
                {/* <Image src={Logo.src} h="50px" /> */}
                <VStack justifyContent={"center"} margin={"0 auto"}>
                    <Heading as="h1" size="4xl" color="primaryDark">
                        {title.toUpperCase()}
                    </Heading>
                    <Heading as="h2" size="lg" color="primaryDark">
                        {subtitle}
                    </Heading>
                </VStack>
            </Flex>
        </chakra.header>
    )
}
