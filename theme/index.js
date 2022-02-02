import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'


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

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "624px",
    lg: "960px",
    xl: "1200px",
    '2xl': '1536px',
})


const fonts = {
    heading: "'M PLUS Rounded 1c'",
    // body: "'Poppins'"
}

const theme = extendTheme({
    config, fonts, styles, breakpoints
})


export default theme;