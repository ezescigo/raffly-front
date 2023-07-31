"use client"

import { Box, Container, Img, Flex } from "@chakra-ui/react"

interface RafflePreviewProps {
    raffleIdx: number
}

export const RafflePreview: React.FC<RafflePreviewProps> = ({ raffleIdx }) => {
    const imgUrl = `/raffle-${raffleIdx}.jpeg`

    return (
        <Flex
            w={"max"}
            margin="0 auto"
            h="500px"
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            overflow="hidden"
            // color="gray.300"
            bg="base.d100"
            rounded={5}
            flex={1}
        >
            <Img src={imgUrl} objectFit={"cover"} width={"100%"} objectPosition={"50% 50%"} />
        </Flex>
    )
}
