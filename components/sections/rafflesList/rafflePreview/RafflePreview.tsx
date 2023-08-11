"use client"

import { Box, Container, Img, Flex, Text, VStack, Button } from "@chakra-ui/react"
import "./RafflePreview.css"
interface RafflePreviewProps {
    raffleIdx: number
    title: string
    subtitle: string
    textColor?: "light" | "dark"
    onClick: () => void
}

export const RafflePreview: React.FC<RafflePreviewProps> = ({
    raffleIdx,
    onClick,
    title,
    subtitle,
    textColor = "dark",
}) => {
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
            position="relative"
            className="raffle-preview-bgimage"
        >
            <Img src={imgUrl} objectFit={"cover"} width={"100%"} objectPosition={"50% 50%"} />
            <Text
                as="b"
                color={textColor === "light" ? "whiteAlpha.800" : "gray.800"}
                fontSize={"5xl"}
                fontWeight={"extrabold"}
                style={{ position: "absolute", top: "10%", left: "20%" }}
            >
                {title}
            </Text>
            <Text
                as="b"
                color={textColor === "light" ? "whiteAlpha.600" : "gray.600"}
                fontSize={"5xl"}
                style={{ position: "absolute", top: "20%", left: "20%" }}
            >
                {subtitle}
            </Text>
            <Box className="raffle-preview-overlay">
                <VStack
                    alignContent={"flex-start"}
                    justifyContent={"flex-start"}
                    flex={1}
                    padding={"6"}
                >
                    <Flex width={"100%"}>
                        <Text
                            as="b"
                            color={"whiteAlpha.900"}
                            fontSize={"large"}
                            // style={{ position: "absolute", top: "20%", left: "20%" }}
                        >
                            Players:
                        </Text>
                    </Flex>
                    <Flex width={"100%"}>
                        <Text
                            as="b"
                            color={"whiteAlpha.900"}
                            fontSize={"large"}
                            // style={{ position: "absolute", top: "20%", left: "20%" }}
                        >
                            Entrance fee:
                        </Text>
                    </Flex>
                    <Flex width={"100%"}>
                        <Text
                            as="b"
                            color={"whiteAlpha.900"}
                            fontSize={"large"}
                            // style={{ position: "absolute", top: "20%", left: "20%" }}
                        >
                            Jackpot:
                        </Text>
                    </Flex>
                    <Flex width={"100%"} justifyContent={"flex-end"}>
                        <Button onClick={onClick}>Join Raffle!</Button>
                    </Flex>
                </VStack>
            </Box>
        </Flex>
    )
}
