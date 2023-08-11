"use client"

import { Box, Flex, HStack, Heading, Img, Text, VStack } from "@chakra-ui/react"
import { IconQuote } from "@tabler/icons-react"

export const ParticipateSection: React.FC<{}> = () => {
    return (
        <section id="participate">
            <HStack marginTop="48" marginX="32" justifyContent={"center"} position="relative">
                <Flex
                    w="60%"
                    px="6"
                    py="5"
                    align="center"
                    flexDirection="column"
                    justify="space-between"
                >
                    <Heading as="h1" size="4xl" color="primaryDark">
                        How to participate!
                    </Heading>
                    <Box padding="16">
                        <Text color="primaryDark" letterSpacing="wide" lineHeight="10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis modi
                            dignissimos aliquam consequatur? Excepturi, facere quod unde beatae
                            libero, esse illum nihil sapiente nesciunt officiis necessitatibus,
                            aspernatur neque voluptatibus incidunt.
                        </Text>
                    </Box>
                </Flex>
                <Box
                    rounded={8}
                    overflow="hidden"
                    boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                    // position="absolute"
                >
                    <Img
                        // objectFit={"cover"}
                        width="700px"
                        src={"participate.png"}
                        // h="100px"
                        // width="100px"
                    />
                </Box>
                <Box
                    position="absolute"
                    backgroundColor="primaryLight"
                    opacity="0.9"
                    w="30%"
                    h="100px"
                    top="70%"
                >
                    <VStack p="4">
                        <Box m="0 auto">
                            <IconQuote color="#43145a" />
                        </Box>
                        <Box m="0 auto">
                            <Text
                                color="primaryDark"
                                letterSpacing="wide"
                                lineHeight="10"
                                fontFamily="sans-serif"
                            >
                                "As easy as farting!"
                            </Text>
                        </Box>
                    </VStack>
                </Box>
            </HStack>
        </section>
    )
}
