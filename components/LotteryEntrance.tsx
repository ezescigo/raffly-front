"use client"

import { Button } from "@chakra-ui/react"
import { useWeb3Contract, useMoralis } from "react-moralis"
import { abi, contractAddresses } from "../constants"
import { useEffect, useState } from "react"
import { ethers, BigNumberish } from "ethers"
import { BigNumber } from "moralis/common-core"
import { useNotification } from "web3uikit"
// import { BigNumberish } from "moralis/common-core"

export const LotteryEntrance = () => {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const dispatch = useNotification()
    const [entranceFee, setEntranceFee] = useState<BigNumber | null>(null)
    const [numberPlayers, setNumberPlayers] = useState<string | null>(null)

    const chainId = chainIdHex ? parseInt(chainIdHex) : 0
    const raffleAddress = ((chainId in contractAddresses) as any)
        ? contractAddresses[chainId.toString()][0]
        : null

    console.log(chainId)
    console.log(raffleAddress)
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

    const handleSuccess = async (tx: any) => {
        await tx.wait(1)
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
        await enterRaffle({
            onSuccess: handleSuccess,
            onError: (e) => console.log(e),
        })
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            const fetchEntranceFee = async () => {
                const contractEntranceFee = (await getEntranceFee()) as BigNumber
                const numberOfPlayers = ((await getNumberOfPlayers()) as number)?.toString()
                console.log(contractEntranceFee)
                console.log(numberOfPlayers)
                setNumberPlayers(numberOfPlayers)
                setEntranceFee(contractEntranceFee)
            }

            fetchEntranceFee()
        }
    }, [isWeb3Enabled])

    return (
        <div>
            {numberPlayers ? (
                <div>there are already {numberPlayers} participants playing!!</div>
            ) : null}
            {entranceFee ? (
                <div>Entrance Fee: {ethers.formatUnits(entranceFee.toString(), "ether")} ETH</div>
            ) : null}
            {raffleAddress ? <Button onClick={handleClick}>Entry Raffle!</Button> : null}
        </div>
    )
}
