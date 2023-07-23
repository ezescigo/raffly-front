"use client"

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider } from "@chakra-ui/react"
import { MoralisProvider } from "react-moralis"
import { NotificationProvider } from "web3uikit"
import { customTheme } from "./theme"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={customTheme}>
                <MoralisProvider initializeOnMount={false}>
                    <NotificationProvider>{children}</NotificationProvider>
                </MoralisProvider>
            </ChakraProvider>
        </CacheProvider>
    )
}
