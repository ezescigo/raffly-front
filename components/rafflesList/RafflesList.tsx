"use client"

import { Box, Container, Flex, Img, useTheme } from "@chakra-ui/react"
import { RafflePreview } from "./rafflePreview/RafflePreview"
import ChakraCarousel from "./carousel/Carousel"
import { LotteryCard } from "./lotteryCard/LotteryCard"
import { useState } from "react"

export const RaffleList: React.FC<{}> = () => {
    const [selectedRaffle, setSelectedRaffle] = useState<number>(1)

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
            <RafflePreview raffleIdx={selectedRaffle} />
            <Box margin="0 auto">
                <ChakraCarousel gap="36">
                    {/* <Box w="200px"> */}
                    {images.map((image, idx) => {
                        return (
                            <Flex
                                key={idx}
                                boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                                justifyContent="space-between"
                                // flexDirection="column"
                                overflow="hidden"
                                // color="gray.300"
                                bg="base.d100"
                                rounded={5}
                                flex={1}
                                // p={5}
                            >
                                <Img
                                    key={idx}
                                    src={image.url}
                                    // h="100px"
                                    // width="100px"
                                    onClick={() => handleOnClick(image.id)}
                                />
                            </Flex>
                        )
                    })}
                </ChakraCarousel>
            </Box>
        </Box>
    )
}
