import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'


const config = {
    initialColorMode: 'dark',
    useSystemColor: false,
}

const styles = {
    global: {
        "html, body": {
            height: '100%',
        },
        "p": {
            fontWeight: 'normal',
        },
        "strong": {
            fontWeight: 'semibold',
        }
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
    heading: 'Nunito Sans',
    body: 'Nunito Sans'
}

const fontWeights = {
    normal: 400,
    medium: 600,
    semibold: 700,
    bold: 700,
}


const theme = extendTheme({
    config, fonts, styles, breakpoints, fontWeights
})


export default theme;