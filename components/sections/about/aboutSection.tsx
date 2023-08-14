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

const TeamMemberCard = ({ memberName, description, imgUrl }) => {
    return (
        <Card w="200px" variant="filled" backgroundColor={"transparent"}>
            <CardHeader p="2">
                <Box width="200px" height="200px" m="0px" overflow="hidden">
                    <Image objectFit={"cover"} src={imgUrl} alt={description} />
                </Box>
            </CardHeader>
            <CardFooter p="2">
                <Box textAlign={"left"} m="0px">
                    <Text fontSize="small">{description}</Text>
                    <Text fontSize={"larger"}>{memberName}</Text>
                </Box>
            </CardFooter>
        </Card>
    )
}

const teamMembersData = [
    {
        id: 1,
        name: "Rene",
        description: "CoFounder, Hunter",
        imgUrl: "./rene2.jpeg",
    },
    {
        id: 2,
        name: "Tulio",
        description: "CoFounder, Nap Expert",
        imgUrl: "./tulio2.jpeg",
    },
    {
        id: 3,
        name: "Ezequiel Scigolini",
        description: "Developer, Engineer",
        imgUrl: "./me.jpeg",
    },
    // {
    //     id: 4,
    //     name: "",
    //     description: "",
    // },
]

export const AboutSection: React.FC<{}> = () => {
    return (
        <section id="team">
            <VStack marginTop="24">
                <Flex>
                    <Heading as="h1" size="4xl" color="primaryDark">
                        Our Team
                    </Heading>
                </Flex>
                <Flex
                    flexDirection={"row"}
                    justifyContent={"flex-start"}
                    // width={"100%"}
                    backgroundColor={"whiteAlpha.600"}
                    gap="4"
                    marginY="16"
                >
                    {teamMembersData.map((member) => (
                        <TeamMemberCard
                            key={`${member.id}-${member.description}`}
                            memberName={member.name}
                            description={member.description}
                            imgUrl={member.imgUrl}
                        ></TeamMemberCard>
                    ))}
                </Flex>
            </VStack>
        </section>
    )
}
