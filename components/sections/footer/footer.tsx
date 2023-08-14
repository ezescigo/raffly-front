"use client"

import { Link } from "@chakra-ui/next-js"
import { Box, Flex, HStack, Heading, Img, ScaleFade, Text, VStack } from "@chakra-ui/react"
import { IconQuote } from "@tabler/icons-react"
import { useRef } from "react"
import { useInViewport } from "react-in-viewport"

export const FooterSection: React.FC<{}> = () => {
    const ref = useRef(null)
    const { inViewport } = useInViewport(
        ref,
        { rootMargin: "-100px" },
        { disconnectOnLeave: false },
        {},
    )

    return (
        <Box w="100%">
            <Box backgroundColor="gray.300" minHeight={"50px"}></Box>
            <HStack
                width="100%"
                minHeight="150px"
                justifyContent={"space-between"}
                backgroundColor={"gray.100"}
                p="8"
            >
                <Box>
                    <Text color="gray.700">Raffly © 2023</Text>
                </Box>
                <Box>
                    <Link href="/">
                        <Text textDecoration={"underline"} color="gray.700">
                            Back to top
                        </Text>
                    </Link>
                </Box>
            </HStack>
        </Box>
    )
}
