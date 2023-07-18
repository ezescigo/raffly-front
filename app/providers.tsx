"use client"

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider>
                <MoralisProvider initializeOnMount={false}>
                    <NotificationProvider>{children}</NotificationProvider>
                </MoralisProvider>
            </ChakraProvider>
        </CacheProvider>
    )
}
