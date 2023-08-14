"use client"

import { Box, Flex, HStack, Heading, Img, ScaleFade, Text, VStack } from "@chakra-ui/react"
import { IconQuote } from "@tabler/icons-react"
import { useRef } from "react"
import { useInViewport } from "react-in-viewport"

export const CreateSection: React.FC<{}> = () => {
    const ref = useRef(null)
    const { inViewport } = useInViewport(
        ref,
        { rootMargin: "-300px" },
        { disconnectOnLeave: false },
        {},
    )

    return (
        <section id="create">
            <ScaleFade initialScale={0.9} in={inViewport} unmountOnExit={false}>
                <HStack
                    ref={ref}
                    marginTop="48"
                    marginX="32"
                    justifyContent={"center"}
                    position="relative"
                >
                    <Box
                        rounded={8}
                        overflow="hidden"
                        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                        // position="absolute"
                    >
                        <Img
                            // objectFit={"cover"}
                            width="700px"
                            src={"lazycat.png"}
                            // h="100px"
                            // width="100px"
                        />
                    </Box>
                    <Flex
                        w="60%"
                        px="6"
                        py="5"
                        align="center"
                        flexDirection="column"
                        justify="space-between"
                    >
                        <Heading as="h1" size="4xl" color="primaryDark">
                            Create your own
                        </Heading>
                        <Box padding="16">
                            <Text color="primaryDark" letterSpacing="wide" lineHeight="10">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                                modi dignissimos aliquam consequatur? Excepturi, facere quod unde
                                beatae libero, esse illum nihil sapiente nesciunt officiis
                                necessitatibus, aspernatur neque voluptatibus incidunt.
                            </Text>
                        </Box>
                    </Flex>

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
                                    "Totally agree, nice work!"
                                </Text>
                            </Box>
                        </VStack>
                    </Box>
                </HStack>
            </ScaleFade>
        </section>
    )
}
