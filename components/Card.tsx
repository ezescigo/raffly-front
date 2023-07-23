import {
    Card as ChakraCard,
    CardHeader,
    Heading,
    CardBody,
    Text,
    Button,
    CardFooter,
    Box,
    Flex,
    HStack,
} from "@chakra-ui/react"
import "./Card.styles.scss"
import { Row } from "web3uikit"

interface CardProps {
    children: any
    disableAction: boolean
    image: any
    numPlayers?: string
    entranceFee?: string
    onClickEntry: () => void
}

export const Card: React.FC<CardProps> = ({
    children,
    onClickEntry,
    disableAction,
    image,
    numPlayers = "0",
    entranceFee = "0.1 ETH",
}) => {
    return (
        <ChakraCard
            align="center"
            borderWidth={"8px"}
            borderColor="gray.600"
            backgroundColor="secondaryLight"
            borderRadius={"3xl"}
            minWidth={"200px"}
            maxW="md"
            padding={"40px"}
            // variant="with-shadow"
            sx={{
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            }}
        >
            {/* <CardBody>{children}</CardBody> */}
            {image}
            <CardHeader>
                <Text color={"terciary"} fontWeight={"bold"}>
                    All in Raffle
                </Text>
            </CardHeader>
            <CardBody justifyContent="flex-start" width="100%">
                {/* <Flex flex={1}> */}
                <Flex>
                    <Text color={"gray.500"} style={{ marginRight: ".5rem" }}>
                        Players:
                    </Text>
                    <Text as="b">{numPlayers}</Text>
                </Flex>
                <Flex>
                    <Text color={"gray.500"} style={{ marginRight: ".5rem" }}>
                        Entrance:
                    </Text>
                    <Text as="b">{entranceFee}</Text>
                </Flex>
                {/* </Flex> */}
            </CardBody>
            <CardFooter width={"100%"} justifyContent={"center"}>
                <Button
                    width={"100%"}
                    variant="terciary"
                    onClick={onClickEntry}
                    disabled={disableAction}
                    className="button-hover-effect"
                >
                    Entry Raffle
                </Button>
            </CardFooter>
        </ChakraCard>
    )
}
