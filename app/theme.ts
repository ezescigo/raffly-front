import { extendTheme } from "@chakra-ui/react"
import { ButtonStyles as Button } from "../styles/components/buttonStyles"
import { CardStyles as Card } from "../styles/components/cardStyles"

export const customTheme = extendTheme({
    colors: {
        primary: "#c3195d",
        primaryLight: "#f70776",
        primaryDark: "#680747",
        secondary: "#60BAAF",
        secondaryLight: "#E2F3FF",
        secondaryDark: "#4B8AB6",
        terciary: "#9F12EB",
        terciaryLight: "#C140FF",
        terciaryDark: "",
    },
    fonts: {
        body: "Roboto Mono",
        heading: "Roboto Mono",
    },

    components: {
        Button,
        Card,
        Text: {
            baseStyle: {
                fontFamily: "Roboto Mono",
                fontWeight: "normal",
                lineHeight: "tall",
                color: "inherit",
            },
        },
    },
})
