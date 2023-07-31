import Image from "next/image"
import styles from "./page.module.css"
import { Header } from "@/components/Header"

import { Box, Center, Container } from "@chakra-ui/react"
import { Title } from "@/components/Title"
import { RaffleList } from "@/components/rafflesList/RafflesList"

export default function Home() {
    return (
        <main className={styles.main} style={{ backgroundColor: "#FFE197" }}>
            <Header />
            <div className={styles.center}>
                <Title title="start having fun!" subtitle="Join your favourite Raffle!" />
                <RaffleList />
                <div>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quae maiores et
                    doloribus pariatur tempore aut aliquid similique eveniet sint, recusandae
                    delectus perferendis veritatis suscipit. Voluptas inventore et laboriosam quas!
                </div>
            </div>

            {/* <div className={styles.grid}>
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p>Explore the Next.js 13 playground.</p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
                </a>
            </div> */}
        </main>
    )
}
