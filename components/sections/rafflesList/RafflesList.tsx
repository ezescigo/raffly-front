"use client"

import { Box, Container, Flex, Img, useTheme } from "@chakra-ui/react"
import { RafflePreview } from "./rafflePreview/RafflePreview"
import ChakraCarousel from "./carousel/Carousel"
import { data } from "./data"
import { useState } from "react"

export const RaffleList: React.FC<{}> = () => {
    const [selectedRaffle, setSelectedRaffle] = useState<number>(1)

    const title = data.find((item) => item.id === selectedRaffle)?.title ?? ""
    const subtitle = data.find((item) => item.id === selectedRaffle)?.subtitle ?? ""
    const textColor = data.find((item) => item.id === selectedRaffle)?.textColor ?? undefined

    const handleOnClick = (idx) => {
        setSelectedRaffle(idx)
    }

    const images = [
        {
            id: 1,
            url: "/raffle-1.jpeg",
        },
        {
            id: 2,
            url: "/raffle-2.jpeg",
        },
        {
            id: 3,
            url: "/raffle-3.jpeg",
        },
        {
            id: 1,
            url: "/raffle-1.jpeg",
        },
        {
            id: 2,
            url: "/raffle-2.jpeg",
        },
        {
            id: 3,
            url: "/raffle-3.jpeg",
        },
    ]

    // const theme = useTheme()

    return (
        <Box w="100%">
            <RafflePreview
                onClick={() => {}}
                raffleIdx={selectedRaffle}
                title={title}
                subtitle={subtitle}
                textColor={textColor}
            />
            <Container
                py={8}
                px={0}
                maxW={{
                    base: "100%",
                    sm: "35rem",
                    md: "43.75rem",
                    lg: "57.5rem",
                    xl: "75rem",
                    xxl: "87.5rem",
                }}
            >
                <ChakraCarousel gap={32}>
                    {images.map((image, index) => (
                        <Flex
                            key={index}
                            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                            justifyContent="space-between"
                            flexDirection="column"
                            overflow="hidden"
                            color="gray.300"
                            bg="base.d100"
                            rounded={5}
                            flex={1}
                            // p={5}
                        >
                            <Img
                                key={index}
                                src={image.url}
                                // h="100px"
                                // width="100px"
                                onClick={() => handleOnClick(image.id)}
                            />
                        </Flex>
                    ))}
                </ChakraCarousel>
            </Container>
        </Box>
    )
}
