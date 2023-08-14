"use client"

import { Box, Flex, HStack, Heading, Img, ScaleFade, Text, VStack } from "@chakra-ui/react"
import { IconQuote } from "@tabler/icons-react"
import { useRef } from "react"
import { useInViewport } from "react-in-viewport"

export const FaqSection: React.FC<{}> = () => {
    const ref = useRef(null)
    const { inViewport } = useInViewport(
        ref,
        { rootMargin: "-100px" },
        { disconnectOnLeave: false },
        {},
    )

    return (
        <section id="faqs">
            <ScaleFade initialScale={0.9} in={inViewport} unmountOnExit={false}>
                <Flex
                    ref={ref}
                    w="100%"
                    px="6"
                    py="5"
                    align="center"
                    flexDirection="column"
                    justify="space-between"
                >
                    <Heading as="h1" size="4xl" color="primaryDark">
                        Frequently Asked Questions
                    </Heading>
                    <HStack>
                        <Box padding="16" maxWidth={"lg"}>
                            <Text color="primaryDark" letterSpacing="wide" lineHeight="10">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                                modi dignissimos aliquam consequatur? Excepturi, facere quod unde
                                beatae libero, esse illum nihil sapiente nesciunt officiis
                                necessitatibus, aspernatur neque voluptatibus incidunt.
                            </Text>
                            <br />
                            <Text color="primaryDark" letterSpacing="wide" lineHeight="10">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                                modi dignissimos aliquam consequatur? Excepturi, facere quod unde
                                beatae libero, esse illum nihil sapiente nesciunt officiis
                                necessitatibus, aspernatur neque voluptatibus incidunt.
                            </Text>
                        </Box>
                        <Box padding="16" maxWidth={"lg"}>
                            <Text color="primaryDark" letterSpacing="wide" lineHeight="10">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                                modi dignissimos aliquam consequatur? Excepturi, facere quod unde
                                beatae libero, esse illum nihil sapiente nesciunt officiis
                                necessitatibus, aspernatur neque voluptatibus incidunt.
                            </Text>
                            <br />
                            <Text color="primaryDark" letterSpacing="wide" lineHeight="10">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                                modi dignissimos aliquam consequatur? Excepturi, facere quod unde
                                beatae libero, esse illum nihil sapiente nesciunt officiis
                                necessitatibus, aspernatur neque voluptatibus incidunt.
                            </Text>
                        </Box>
                    </HStack>
                </Flex>
            </ScaleFade>
        </section>
    )
}
