import { BigNumber } from "moralis/common-core"
import { useEffect, useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { useNotification } from "web3uikit"

import { abi, contractAddresses } from "../../../constants"
import { RaffleState } from "./rafflePreview/RafflePreview"
import { ethers } from "ethers"
import { timestampFormatter } from "@/utils/timeStampFormatter"

export interface UseRaffle {
    numberPlayers: string | null
    entranceFee: string | null
    recentWinner: string | null
    players: string[] | null
    pot: string | null
    userParticipations: number | null
    onEnterRaffle: () => void
    isLoading: boolean
    state: RaffleState | null
    endTimestamp: number
}

export const useRaffle = (): UseRaffle => {
    const { chainId: chainIdHex, isWeb3Enabled, account } = useMoralis()

    const [entranceFee, setEntranceFee] = useState<BigNumber | null>(null)
    const [entranceFeeNumber, setEntranceFeeNumber] = useState<string | null>(null)
    const [numberPlayers, setNumberPlayers] = useState<string | null>(null)
    const [players, setPlayers] = useState<string[] | null>(null)
    const [pot, setPot] = useState<string | null>(null)
    const [recentWinner, setRecentWinner] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [state, setState] = useState<RaffleState | null>(null)
    const [userParticipations, setUserParticipations] = useState<number | null>(null)
    const [endTimestamp, setEndtimestamp] = useState<number>(0)

    const chainId = chainIdHex ? parseInt(chainIdHex) : 0
    const raffleAddress = ((chainId in contractAddresses) as any)
        ? contractAddresses[chainId.toString()][0]
        : null

    const dispatch = useNotification()

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

    const { runContractFunction: getPlayers } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "getPlayers",
        params: {},
    })

    const { runContractFunction: getBalance } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "getBalance",
        params: {},
    })

    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "getRecentWinner",
        params: {},
    })

    const { runContractFunction: getRaffleState } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "getRaffleState",
        params: {},
    })

    const { runContractFunction: getLastTimeStamp } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "getLastTimeStamp",
        params: {},
    })

    const { runContractFunction: getInterval } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "getInterval",
        params: {},
    })

    const updateUI = async () => {
        const contractEntranceFee = (await getEntranceFee()) as BigNumber
        const numberOfPlayers = ((await getNumberOfPlayers()) as number)?.toString()
        const recentWinner = ((await getRecentWinner()) as number)?.toString()
        const playersList = (await getPlayers()) as string[]
        const balance = ((await getBalance()) as BigNumber)?.toString()
        const state = (await getRaffleState()) as RaffleState
        const interval = await getInterval()
        const lastTimeStamp = await getLastTimeStamp()

        // console.log("interval", interval)
        // console.log("lastTimeStamp", lastTimeStamp)

        const intervalTime = Number(interval)
        const lastTimeStampTime = Number(lastTimeStamp)
        console.log("interval", intervalTime)
        console.log("lastTimeStamp", lastTimeStampTime)

        const endTimeStamp = lastTimeStampTime + intervalTime

        const endDate = new Date(endTimeStamp * 1000)
        const nowTimeStamp = new Date().getTime() / 1000
        // console.log(nowTimeStamp)
        const countdownStamp = nowTimeStamp - endTimeStamp
        // console.log(countdownStamp)

        // console.log(endDate)
        // const countdown = timestampFormatter(countdownStamp)
        // console.log(countdown)

        // console.log("players", players)

        // console.log(contractEntranceFee)
        // console.log(numberOfPlayers)
        // console.log(recentWinner)

        const entranceFeeNumber = ethers.formatEther(contractEntranceFee.toString())
        // const

        setNumberPlayers(numberOfPlayers)
        setPlayers(playersList)
        setPot(ethers.formatEther(balance))
        setEntranceFee(contractEntranceFee)
        setEntranceFeeNumber(entranceFeeNumber)
        setRecentWinner(recentWinner)
        setState(state)
        setEndtimestamp(endTimeStamp)

        players && checkUserInRaffle(players)
    }

    const checkUserInRaffle = (playersList: string[]) => {
        let participations: number | null = null
        if (account) {
            participations = isUserInRaffle(account, playersList)
            console.log(participations)
        }

        setUserParticipations(participations)
    }
    const isUserInRaffle = (address: string, playersList: string[]): number | null => {
        let usersTickets: number | null = null

        console.log(playersList)
        console.log(address)
        if (players) {
            usersTickets = playersList.length - playersList.filter((p) => p === address)?.length
        }

        return usersTickets
    }

    const onEnterRaffle = async () => {
        setIsLoading(true)
        await enterRaffle({
            onSuccess: handleSuccess,
            onError: (e) => {
                setIsLoading(false)
                console.log(e)
            },
        })
    }

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

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    return {
        onEnterRaffle,
        numberPlayers,
        entranceFee: entranceFeeNumber,
        recentWinner,
        players,
        pot,
        userParticipations,
        isLoading,
        state,
        endTimestamp,
    }
}
