export const data = [
    {
        id: 1,
        description: "outerspace",
        title: "Aim to the stars",
        subtitle: "Take off, the infinity awaits!",
        textColor: "light",
    },
    {
        id: 2,
        description: "safari",
        title: "Welcome to the Safari",
        subtitle: "Prepare for an amazing trip!",
        textColor: "dark",
    },
    {
        id: 3,
        description: "deep_sea",
        title: "Under the sea",
        subtitle: "Ready to hold your breath?",
        textColor: "dark",
    },
] as const

export type Item = {
    id: number
    description: string
    title: string
    subtitle: string
    textColor: "light" | "dark"
}

// export type Item = (typeof data)[keyof typeof data]
