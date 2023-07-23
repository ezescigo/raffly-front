import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Raffly",
    description: "A Smart Contract powered lottery",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {/* <body className={inter.className}> */}
                <Providers>{children}</Providers>
                {/* </body> */}
            </body>
        </html>
    )
}
