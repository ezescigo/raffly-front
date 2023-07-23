import { mode } from "@chakra-ui/theme-tools"

export const ButtonStyles = {
    baseStyle: {
        borderRadius: "16px",
    },
    sizes: {},
    variants: {
        primary: (props: any) => ({
            bg: "primary",
            color: "white",
            _hover: {
                bg: mode("primaryLight", "primaryDark")(props),
                boxShadow: "md",
            },
        }),
        secondary: (props: any) => ({
            bg: "secondary",
            color: "white",
            _hover: {
                bg: mode("secondaryLight", "secondaryDark")(props),
                boxShadow: "md",
            },
        }),
        terciary: (props: any) => ({
            bg: "terciary",
            color: "white",
            _hover: {
                bg: mode("terciaryLight", "terciaryDark")(props),
                boxShadow: "md",
            },
        }),
    },
    defaultProps: {},
}
