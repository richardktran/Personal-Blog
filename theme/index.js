import { extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'dark',
    useSystemColor: false,
}

const styles = {
    global: {
        "html, body": {
            height: '100%'
        },
    },
};


const fonts = {
    heading: "'M PLUS Rounded 1c'",
    body: "'Poppins'"
}

const theme = extendTheme({
    config, fonts, styles
})

export default theme;