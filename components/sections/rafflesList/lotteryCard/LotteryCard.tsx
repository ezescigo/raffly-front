"use client"

import { Box, Button, Container, Image, Img } from "@chakra-ui/react"
import { useWeb3Contract, useMoralis } from "react-moralis"
import { abi, contractAddresses } from "../../../../constants"
import { useEffect, useState } from "react"
import { ethers, BigNumberish } from "ethers"
import { BigNumber } from "moralis/common-core"
import { useNotification } from "web3uikit"

import source from "../public/assets/images/raffle-ticket.jpeg"
import { Card } from "@/components/Card"
// import { BigNumberish } from "moralis/common-core"

export const LotteryCard = () => {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const dispatch = useNotification()
    const [entranceFee, setEntranceFee] = useState<BigNumber | null>(null)
    const [numberPlayers, setNumberPlayers] = useState<string | null>(null)
    const [recentWinner, setRecentWinner] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const chainId = chainIdHex ? parseInt(chainIdHex) : 0
    const raffleAddress = ((chainId in contractAddresses) as any)
        ? contractAddresses[chainId.toString()][0]
        : null

    // console.log(chainId)
    // console.log(raffleAddress)
    const { runContractFunction: enterRaffle } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "enterRaffle",
        params: {},
        msgValue: entranceFee?.toString(),
    })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "getEntranceFee",
        params: {},
    })

    const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "getNumberOfPlayers",
        params: {},
    })

    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "getRecentWinner",
        params: {},
    })

    const handleSuccess = async (tx: any) => {
        await tx.wait(1)
        setIsLoading(false)
        updateUI()
        handleNewNotification(tx)
    }

    const handleNewNotification = (tx: any) => {
        dispatch({
            type: "success",
            message: "You have entered the Raffle!",
            position: "bottomL",
            title: "Transaction complete",
        })
    }

    const handleClick = async () => {
        setIsLoading(true)
        await enterRaffle({
            onSuccess: handleSuccess,
            onError: (e) => {
                setIsLoading(false)
                console.log(e)
            },
        })
    }

    const updateUI = async () => {
        const contractEntranceFee = (await getEntranceFee()) as BigNumber
        const numberOfPlayers = ((await getNumberOfPlayers()) as number)?.toString()
        const recentWinner = ((await getRecentWinner()) as number)?.toString()
        console.log(contractEntranceFee)
        console.log(numberOfPlayers)
        console.log(recentWinner)
        setNumberPlayers(numberOfPlayers)
        setEntranceFee(contractEntranceFee)
        setRecentWinner(recentWinner)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    return (
        <Container minH={"550px"}>
            <Card
                isLoading={isLoading}
                onClickEntry={handleClick}
                disableAction={!raffleAddress}
                image={
                    <Img
                        src="/assets/images/raffle-icon-green.png"
                        alt="Raffle ticket image"
                        borderRadius="lg"
                        width="50%"
                    />
                }
            >
                <>
                    <Box></Box>
                    {numberPlayers ? (
                        <div>there are already {numberPlayers} participants playing!!</div>
                    ) : null}
                    {entranceFee ? (
                        <div>
                            Entrance Fee: {ethers.formatUnits(entranceFee.toString(), "ether")} ETH
                        </div>
                    ) : null}
                    {recentWinner ? <div>Last winner was: {recentWinner}</div> : null}
                    {/* {raffleAddress ? <Button onClick={handleClick}>Entry Raffle!</Button> : null} */}
                </>
            </Card>
        </Container>
    )
}
