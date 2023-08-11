import Image from "next/image"
import styles from "./page.module.css"
import { Header } from "@/components/Header"

import { Box, Center, Container } from "@chakra-ui/react"

import { RaffleList } from "@/components/sections/rafflesList/RafflesList"
import { ParticipateSection } from "@/components/sections/participate/ParticipateSection"

import { Title } from "@/components/sections/title/Title"
import { CreateSection } from "@/components/sections/create/createSection"
import { AboutSection } from "@/components/sections/about/aboutSection"

export default function Home() {
    return (
        <main className={styles.main} style={{ backgroundColor: "#FFE197" }}>
            <Header />
            <div className={styles.center}>
                <Title title="start having fun!" subtitle="Join your favourite Raffle!" />
                <RaffleList />
                <ParticipateSection />
                <CreateSection />
            </div>
            <AboutSection />
        </main>
    )
}
