import { Inter } from "next/font/google"
import { extendTheme } from "@chakra-ui/react"

export const font = Inter({ subsets: ["latin-ext"] })

export const fontCss = `
{
    --font-custom: ${font.style.fontFamily};
}`

const fonts = {
    heading: "var(--font-custom)",
    body: "var(--font-custom)",
}

const config = {
    initialColorMode: "system",
    useSystemColorMode: true,
}

export const theme = extendTheme({ fonts, config })
