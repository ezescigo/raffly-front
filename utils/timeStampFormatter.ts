// timestamp in seconds

export const timestampFormatter = (timestamp: number): string => {
    console.log(timestamp)
    const hoursLeft = Math.floor(timestamp / 3600)
    // console.log(hoursLeft)
    const min = Math.floor((timestamp - hoursLeft * 3600) / 60)
    const secondsLeft = timestamp - hoursLeft * 3600 - min * 60
    const roundedSecondsLeft = Math.round(secondsLeft)

    return `${hoursLeft}:${min}:${roundedSecondsLeft}`
}
