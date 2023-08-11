"use client"

import {
    Box,
    Card,
    CardFooter,
    CardHeader,
    Flex,
    HStack,
    Heading,
    Image,
    Img,
    Text,
    VStack,
} from "@chakra-ui/react"
import { IconQuote } from "@tabler/icons-react"

const TeamMemberCard = ({ description, imgUrl }) => {
    return (
        <Card>
            <CardHeader>
                <Image borderRadius="full" boxSize="150px" src={imgUrl} alt="Dan Abramov" />
            </CardHeader>
            <CardFooter>{description}</CardFooter>
        </Card>
    )
}

export const AboutSection: React.FC<{}> = () => {
    return (
        <section id="about">
            <VStack marginTop="24">
                <Flex>
                    <Heading as="h1" size="4xl" color="primaryDark">
                        Our Team
                    </Heading>
                </Flex>
                <HStack justifyContent={"center"} width={"100%"} backgroundColor={"whiteAlpha.600"}>
                    <TeamMemberCard description="Rene - Gato1" imgUrl="/rene.jpg"></TeamMemberCard>
                </HStack>
            </VStack>
        </section>
    )
}
