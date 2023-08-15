"use client"

import { Box, Container, Img, Flex, Text, VStack, Button } from "@chakra-ui/react"
import "./RafflePreview.css"

import { Raffle } from "../../../../../raffly-back/typechain-types/Raffle"
import { useEffect, useState } from "react"
import { timestampFormatter } from "@/utils/timeStampFormatter"

export enum RaffleState {
    OPEN,
    CALCULATING,
}

export interface RaffleInfo {
    players: string | null
    entranceFee: string | null
    state: RaffleState | null
    balance: string | null
    userParticipations: number | null
    endTimestamp: number
}

interface RafflePreviewProps {
    raffle: RaffleInfo
    raffleIdx: number
    title: string
    subtitle: string
    isLoading: boolean
    textColor?: "light" | "dark"
    onClick: () => void
}

const nowTimeStamp = new Date().getTime() / 1000

export const RafflePreview: React.FC<RafflePreviewProps> = ({
    raffle,
    raffleIdx,
    onClick,
    title,
    subtitle,
    isLoading = false,
    textColor = "dark",
}) => {
    const imgUrl = `/raffle-${raffleIdx}.jpeg`

    const [timeLeft, setTimeLeft] = useState<number>(0)

    const updateTime = () => {
        setTimeLeft((prevState) => prevState - 1)
    }

    useEffect(() => {
        console.log(`initializing interval`)
        const interval = setInterval(() => {
            updateTime()
        }, 1000)

        const initialTime = nowTimeStamp - raffle.endTimestamp
        setTimeLeft(initialTime)

        return () => {
            console.log(`clearing interval`)
            clearInterval(interval)
        }
    }, [])

    const formattedTimeLeft = timestampFormatter(timeLeft)

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
                    {isLoading ? (
                        <div>loading</div>
                    ) : (
                        <>
                            <Flex width={"100%"} flexDirection="row">
                                <Flex width="30%">
                                    <Text
                                        as="b"
                                        color={"whiteAlpha.900"}
                                        fontSize={"large"}
                                        // style={{ position: "absolute", top: "20%", left: "20%" }}
                                    >
                                        Players: {raffle.players}
                                    </Text>
                                </Flex>
                                <Flex width="70%" justifyContent="flex-end">
                                    <Text
                                        as="b"
                                        color={"whiteAlpha.900"}
                                        fontSize={"large"}
                                        // style={{ position: "absolute", top: "20%", left: "20%" }}
                                    >
                                        {raffle.userParticipations && raffle.userParticipations > 0
                                            ? `You have x${raffle.userParticipations} tickets.`
                                            : "Get your first ticket!"}
                                    </Text>
                                </Flex>
                            </Flex>
                            <Flex width={"100%"}>
                                <Text
                                    as="b"
                                    color={"whiteAlpha.900"}
                                    fontSize={"large"}
                                    // style={{ position: "absolute", top: "20%", left: "20%" }}
                                >
                                    Entrance fee: {raffle.entranceFee} ETH
                                </Text>
                            </Flex>
                            <Flex width={"100%"}>
                                <Text
                                    as="b"
                                    color={"whiteAlpha.900"}
                                    fontSize={"large"}
                                    // style={{ position: "absolute", top: "20%", left: "20%" }}
                                >
                                    Jackpot: {raffle.balance} ETH
                                </Text>
                            </Flex>
                            <Flex width={"100%"}>
                                <Text
                                    as="b"
                                    color={"whiteAlpha.900"}
                                    fontSize={"large"}
                                    // style={{ position: "absolute", top: "20%", left: "20%" }}
                                >
                                    Time left: {formattedTimeLeft}
                                </Text>
                            </Flex>
                            <Flex width={"100%"} justifyContent={"flex-end"}>
                                <Button
                                    disabled={raffle.state !== RaffleState.OPEN}
                                    onClick={onClick}
                                >
                                    {raffle.state === RaffleState.OPEN ? "Buy Ticket" : "Closed"}
                                </Button>
                            </Flex>
                        </>
                    )}
                </VStack>
            </Box>
        </Flex>
    )
}
