import {createTheme, CssBaseline, ThemeProvider} from "@mui/material"
import React from "react";

const primaryColors = '#0077c2'
const secondaryColors = '#ff9800'
const neutralColor = '#f5f5f5'

const typography = {
    fontFamily: 'Roboto, sans-serif',
    h1: {
        fontSize: '3rem',
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: '-0.01562em',
    },
    h2: {
        fontSize: '2.5rem',
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: '-0.00833em',
    },
    h3: {
        fontSize: '2rem',
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: '0em',
    },
    h4: {
        fontSize: '1.5rem',
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: '0.00735em',
    },
    h5: {
        fontSize: '1.25rem',
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: '0em',
    },
    h6: {
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.2,
        letterSpacing: '0.0075em',
    },
    body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: '0.00938em',
    },
    body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.43,
        letterSpacing: '0.01071em',
    },
};

const theme = createTheme({
    typography,
    palette: {
        primary: {
            main: primaryColors
        },
        secondary: {
            main: secondaryColors
        },
        background: {
            default: neutralColor
        }
    }
})

type ThemeProviderProps = {
    children: React.ReactNode
}
const ThemeWrapper = ({ children }: ThemeProviderProps) => {
    return <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
}
export default ThemeWrapper
