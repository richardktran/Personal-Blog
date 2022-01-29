import { extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'dark',
    useSystemColor: false,
}

const fonts = {
    heading: "'M PLUS Rounded 1c'",
}

const theme = extendTheme({
    config, fonts
})

export default theme;