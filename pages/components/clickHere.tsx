import {
Button, Box, Link
  } from "@chakra-ui/react";

type Props = {
    totalCounter?: number
}

export const ClickHereButton = ({totalCounter}: Props) => {
    let buttons = []
    const buttonCounter = totalCounter || 20
    for(let i=0; i < buttonCounter; i++){
        buttons.push(<Button>Klikk her for å lese mer</Button>)
    }
    return <Box>{buttons}</Box>
}

export const ClickHereLinks = ({totalCounter}: Props) => {
    let links = []
    const linkCounter = totalCounter || 20
    for(let i=0; i < linkCounter; i++){
        links.push(<Link href="#">Klikk her for å lese mer</Link>)
    }
    return <Box>{links}</Box>
}